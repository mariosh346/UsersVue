import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyByqnFhzkTWWLjWczPN41c-5IbfJn3hRuI",
  authDomain: "my-project-users-300618.firebaseapp.com",
  projectId: "my-project-users-300618",
  storageBucket: "my-project-users-300618.firebasestorage.app",
  messagingSenderId: "304981610003",
  appId: "1:304981610003:web:1dd8d65d828e65664d39e6",
  measurementId: "G-ZYYQCWBFZG"
}

export const firebaseApp = initializeApp(firebaseConfig)

// used for the firestore refs
export const db = getFirestore(firebaseApp)
export const itemsCollection = collection(db, 'collections')
export const usersCollection = collection(db, 'users')
export const getUserDoc = (id: string) => doc(usersCollection, id)
export const getItemDoc = (id: string) => doc(itemsCollection, id)
