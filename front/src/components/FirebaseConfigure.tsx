 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
 import type { UserComment } from "./structure/UserComment";
 import type { InternalComment } from "./structure/InternalComment";
 import { getFirestore, collection, getDocs, getDoc, doc, setDoc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function getCommentList(): Promise<UserComment[]> {
    const querySnapshot = await getDocs(collection(db, "threadList"));
    return querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            name: data.name,
            date: data.date,
            comment: data.comment
        };
    });
}

export async function uploadComment(comment: InternalComment) {
    const docRef = doc(db, "threadList");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data();
        await deleteDoc(docRef);
        if (Array.isArray(data.comments)) {
            data.comments.push(comment);
            await setDoc(docRef, { comments: data.comments });
        } else {
            await setDoc(docRef, { comments: [comment] });
        }
    } else {
        console.log("No such document!");
    }
}

export async function deleteComment(comment: InternalComment) {
    const docRef = doc(db, "threadList");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data();
        if (Array.isArray(data.comments)) {
            const updatedComments = data.comments.filter((c: InternalComment) => c.name !== comment.name || c.date !== comment.date || c.comment !== comment.comment);
            await setDoc(docRef, { comments: updatedComments });
        } else {
            console.log("No comments to delete!");
        }
    } else {
        console.log("No such document!");
    }
}
 