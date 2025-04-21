import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getFirestore, collection, doc } from 'firebase/firestore';

export function getEnvVar(key: string): string {
  const value = process.env[key] || import.meta.env[key];
  if (typeof value !== 'string') {
    throw new Error(`Environment variable ${key} must be a string`);
  }
  return value;
}

const firebaseConfig = {
  apiKey: getEnvVar('VITE_FIREBASE_API_KEY'),
  authDomain: getEnvVar('VITE_FIREBASE_AUTH_DOMAIN'),
  projectId: getEnvVar('VITE_FIREBASE_PROJECT_ID'),
  storageBucket: getEnvVar('VITE_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnvVar('VITE_FIREBASE_APP_ID'),
  measurementId: getEnvVar('VITE_FIREBASE_MEASUREMENT_ID')
};


if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId ||
   !firebaseConfig.storageBucket || !firebaseConfig.messagingSenderId ||
    !firebaseConfig.appId || !firebaseConfig.measurementId) {
  throw new Error('Firebase configuration is missing some required fields.');
}

export const firebaseApp = initializeApp(firebaseConfig);
(self as Window & typeof globalThis & { FIREBASE_APPCHECK_DEBUG_TOKEN: string | boolean })
  .FIREBASE_APPCHECK_DEBUG_TOKEN = !getEnvVar('PROD') && getEnvVar('VITE_APP_CHECK_DEBUG_TOKEN');
initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider(getEnvVar('VITE_CAPTCHA_SITE_KEY')),
  isTokenAutoRefreshEnabled: true,
});

// used for the firestore refs
export const db = getFirestore(firebaseApp);
export const itemsCollection = collection(db, 'collections');
export const usersCollection = collection(db, 'users');
export const getUserDoc = (id: string) => doc(usersCollection, id);
export const getItemDoc = (id: string) => doc(itemsCollection, id);
