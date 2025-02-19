import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyByqnFhzkTWWLjWczPN41c-5IbfJn3hRuI",
  authDomain: "my-project-users-300618.firebaseapp.com",
  projectId: "my-project-users-300618",
  storageBucket: "my-project-users-300618.firebasestorage.app",
  messagingSenderId: "304981610003",
  appId: "1:304981610003:web:1dd8d65d828e65664d39e6",
  measurementId: "G-ZYYQCWBFZG"
}
export const firebaseApp = initializeApp(
  firebaseConfig
)

// used for the firestore refs
export const db = getFirestore(firebaseApp)
export const authFire = getAuth(firebaseApp);

const googleAuthProvider = new GoogleAuthProvider();


export function signinPopup() {
  if (!authFire) return
    // signInWithRedirect(auth, googleAuthProvider).catch((reason) => {
    //   debugger
    //   console.error('Failed signinRedirect', reason)
    // })
    // signInWithPopup(auth, googleAuthProvider).catch((reason) => {
    //   debugger
    //   console.error('Failed signinRedirect', reason)
    // })
    signInWithPopup(authFire, googleAuthProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          throw new Error('Failed to get credential from result')
        }
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        // IdP data available using getAdditionalUserInfo(result)
        console.log('signinRedirect result', user, token)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error('Failed signinRedirect error: ', errorCode, errorMessage, email, credential)
        throw error;
      });
}

export function signinWithEmail(email: string, password: string) {
  return signInWithEmailAndPassword(authFire, email, password)
}

export function signupWithEmail(email: string, password: string) {
  return createUserWithEmailAndPassword(authFire, email, password)
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // })
}


export const itemsCollection = collection(db, 'collections')
export const usersCollection = collection(db, 'users')
