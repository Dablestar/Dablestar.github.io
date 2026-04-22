 import { initializeApp } from "firebase/app";
 import type { UserComment } from "./structure/UserComment";
 import type { InternalComment } from "./structure/InternalComment";
 import { getFirestore, collection, getDocs, getDoc, doc, setDoc, deleteDoc, addDoc } from "firebase/firestore";

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
const db = getFirestore(app);

export async function getIpAddress(): Promise<string> {
    const response = await fetch("https://api.ipify.org?format=json");
    console.log("Fetching IP address, response status:", response.status);
    if (!response.ok) {
        console.error("Failed to fetch IP address:", response.statusText);
        return "Unknown";
    }
    const data = await response.json();
    return data.ip;
}

export async function getCommentList(): Promise<UserComment[]> {
    const querySnapshot = await getDocs(collection(db, "threadList"));
    console.log("Fetched comments, number of documents:", querySnapshot.size);
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
    console.log("Uploading comment:", comment);
    const result = addDoc(collection(db, "threadList"), comment).then((docRef) => {
        console.log("Comment uploaded with ID:", docRef.id)
        if(!docRef.id) {
            console.error("Failed to upload comment: No document ID returned");
        }else{
            alert("Comment successfully uploaded with ID:" + docRef.id);    
        }
        }).catch((error) => {
            console.error("Error uploading comment:", error)
        });
    return result;
}

export async function deleteComment(comment: InternalComment) {
    const docRef = doc(db, "threadList");
    console.log("Deleting comment:", comment);
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
 