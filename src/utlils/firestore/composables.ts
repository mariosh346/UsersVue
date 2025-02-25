import { collection, doc, query, where } from "firebase/firestore"
import { useCollection, useDocument } from "vuefire"
import { itemsCollection, usersCollection } from "./db"
import type { User } from "firebase/auth"

export const getUserDoc = (id: string) => doc(usersCollection, id)
export const getUserData = (id: string) => useDocument<User>(getUserDoc(id))

export const getItemDoc = (id: string) => doc(itemsCollection, id)
export const getItem = (id: string) => useDocument(getItemDoc(id))

export const getUserItems = (uid: User["uid"]) => {
  const filteredQuery = query(itemsCollection, where("userId", "==", uid));
  return useCollection(filteredQuery);
}

export const getAllItems = () => {
  return useCollection(itemsCollection);
}
