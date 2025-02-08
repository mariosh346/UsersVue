import { collection, doc } from "firebase/firestore"
import { useCollection, useDocument } from "vuefire"
import { db } from "./db"

export const getCurrentUserData = (id: string) => useDocument(doc(db, 'users', id))

export const getItems = () => useCollection(collection(db, 'collections'))
