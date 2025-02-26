import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  type User,
  type Auth
} from 'firebase/auth'
import { firebaseApp } from 'src/utlils/firestore/db'
import { useFirebaseAuth } from 'vuefire';
import { reloadPage } from 'src/utils/reload';

export function useAuthFunctions() {
  const auth = useFirebaseAuth();

  const checkAuth = (): Auth => {
    if (!auth) {
      throw new Error("Firebase auth is not initialized");
    }
    return auth;
  };

  const signinPopup = () => {
    const authChecked = checkAuth();
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(authChecked, googleAuthProvider)
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

  const signinWithEmail = (email: string, password: string) => {
    const authChecked = checkAuth();
    return signInWithEmailAndPassword(authChecked, email, password);
  };

  const signupWithEmail = (email: string, password: string) => {
    const authChecked = checkAuth();
    return createUserWithEmailAndPassword(authChecked, email, password);
  };

  const signout = () => {
    const authChecked = checkAuth();
    return signOut(authChecked).then(()=> {
      reloadPage();
    });
  };

  const authStateChanged = (callback: (user: User | null) => void) => {
    const authChecked = checkAuth();
    return onAuthStateChanged(authChecked, callback);
  };

  const forgotPassword = (email: string) => {
    const authChecked = checkAuth();
    return sendPasswordResetEmail(authChecked, email)
      .then(() => {
        console.log('Password reset email sent');
        return true;
      })
      .catch((error) => {
        console.error('Failed to send reset email:', error);
        throw error;
      });
  };

  return {
    signinPopup,
    signinWithEmail,
    signupWithEmail,
    signout,
    authStateChanged,
    forgotPassword
  };
}
