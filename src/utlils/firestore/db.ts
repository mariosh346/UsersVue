import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getFirestore, collection, doc } from 'firebase/firestore';

export function getEnvVar(key: string): NonNullable<unknown> {
  const value = process.env[key] || import.meta.env[key];
  if (typeof value === 'undefined') {
    throw new Error(`Environment variable ${key} must exist`);
  }
  return value;
}
export function getEnvVarString(key: string): string {
  const value = getEnvVar(key);
  if (typeof value !== 'string') {
    throw new Error(`Environment variable ${key} must be a string`);
  }
  return value;
}

const firebaseConfig = {
  apiKey: getEnvVarString('VITE_FIREBASE_API_KEY'),
  authDomain: getEnvVarString('VITE_FIREBASE_AUTH_DOMAIN'),
  projectId: getEnvVarString('VITE_FIREBASE_PROJECT_ID'),
  storageBucket: getEnvVarString('VITE_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnvVarString('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnvVarString('VITE_FIREBASE_APP_ID'),
  measurementId: getEnvVarString('VITE_FIREBASE_MEASUREMENT_ID')
};

export const firebaseApp = initializeApp(firebaseConfig);
(self as Window & typeof globalThis & { FIREBASE_APPCHECK_DEBUG_TOKEN: string | boolean })
  .FIREBASE_APPCHECK_DEBUG_TOKEN = !getEnvVar('PROD') && getEnvVarString('VITE_APP_CHECK_DEBUG_TOKEN');
initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider(getEnvVarString('VITE_CAPTCHA_SITE_KEY')),
  isTokenAutoRefreshEnabled: true,
});

// used for the firestore refs
export const db = getFirestore(firebaseApp);
export const itemsCollection = collection(db, 'collections');
export const usersCollection = collection(db, 'users');
export const getUserDoc = (id: string) => doc(usersCollection, id);
export const getItemDoc = (id: string) => doc(itemsCollection, id);
