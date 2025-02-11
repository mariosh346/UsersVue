import { collection, doc, query, where } from "firebase/firestore"
import { useCollection, useDocument } from "vuefire"
import { db } from "./db"
import type { User } from "firebase/auth"

export const getUserDoc = (id: string) => doc(db, 'users', id)
export const getUserData = (id: string) => useDocument<User>(getUserDoc(id))

export const getItemDoc = (id: string) => doc(db, 'collections', id)
export const getItem = (id: string) => useDocument(getItemDoc(id))

export const getUserItems = (uid: User["uid"]) => {
const colRef = collection(db, "collections");
const filteredQuery = query(colRef, where("userId", "==", uid));
return useCollection(filteredQuery);
}
