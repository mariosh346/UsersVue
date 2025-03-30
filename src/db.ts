import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

function getEnvVar(key: string): string {
	const value = process.env[key];
	if (typeof value !== 'string') {
		throw new Error(`Environment variable ${key} must be a string`);
	}
	return value;
}

const firebaseConfig = {
	apiKey: getEnvVar('FIREBASE_API_KEY'),
	authDomain: getEnvVar('FIREBASE_AUTH_DOMAIN'),
	projectId: getEnvVar('FIREBASE_PROJECT_ID'),
	storageBucket: getEnvVar('FIREBASE_STORAGE_BUCKET'),
	messagingSenderId: getEnvVar('FIREBASE_MESSAGING_SENDER_ID'),
	appId: getEnvVar('FIREBASE_APP_ID'),
	measurementId: getEnvVar('FIREBASE_MEASUREMENT_ID')
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
