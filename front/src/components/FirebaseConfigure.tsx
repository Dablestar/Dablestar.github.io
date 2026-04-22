import { initializeApp } from "firebase/app";
import type { UserComment } from "./structure/UserComment";
import type { InternalComment } from "./structure/InternalComment";
import { getFirestore, collection, getDocs, deleteDoc, addDoc, query, where } from "firebase/firestore";

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
        console.log("Comment uploaded with ID:", docRef.id);
        if (!docRef.id) {
            throw new Error("No document ID returned");
        }
    });
    return result;
}

export async function deleteComment(comment: InternalComment) {
    console.log("Deleting comment:", comment);
    const q = query(
        collection(db, "threadList"),
        where("name", "==", comment.name),
        where("date", "==", comment.date),
        where("comment", "==", comment.comment)
    );
    const querySnapshot = await getDocs(q);
    for (const docSnap of querySnapshot.docs) {
        await deleteDoc(docSnap.ref);
        console.log("Deleted comment with ID:", docSnap.id);
    }
}
 