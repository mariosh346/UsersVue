import { collection, doc } from "firebase/firestore"
import { useCollection, useDocument } from "vuefire"
import { db } from "./db"
import { getAuth } from "firebase/auth"

export const getCurrentUserData = (id) => useDocument(doc(db, 'users', id))

export const getItems = () => useCollection(collection(db, 'collections'))
