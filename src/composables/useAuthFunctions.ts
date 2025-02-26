import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User
} from 'firebase/auth'
import { firebaseApp } from 'src/utlils/firestore/db'
import { useFirebaseAuth } from 'vuefire';

export function useAuthFunctions() {
  const auth = useFirebaseAuth();

  const signinPopup = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          throw new Error('Failed to get credential from result');
        }
        console.log('signinPopup result', result.user, credential.accessToken);
        return result;
      })
      .catch(error => {
        console.error('Failed signinPopup error:', error.code, error.message, error.customData?.email);
        throw error;
      });
  };

  const signinWithEmail = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const signupWithEmail = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signout = () =>
    signOut(auth);

  const authStateChanged = (callback: (user: User | null) => void) =>
    onAuthStateChanged(auth, callback);

  return { signinPopup, signinWithEmail, signupWithEmail, signout, authStateChanged };
}
