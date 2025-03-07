import admin from 'firebase-admin';
import dotenv from 'dotenv';
import serviceAccount from '../secrets/my-project-users.json';
dotenv.config();

// const serviceAccountData = process.env.FIREBASE_SERVICE_ACCOUNT;
// if (!serviceAccountData) {
//   console.error('FIREBASE_SERVICE_ACCOUNT is not set in environment');
//   process.exit(1);
// }
// const serviceAccount = JSON.parse(serviceAccountData);

const projectId = process.env.FIREBASE_PROJECT_ID;
if (!projectId) {
  console.error('FIREBASE_PROJECT_ID is not set in environment');
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: projectId
});

const auth = admin.auth();
const email = process.argv[2];

if (!email) {
  console.error('Please provide an email as a command-line argument');
  process.exit(1);
}

const customClaims = {
  admin: false,
  editor: false,
  premium: false
};

auth.getUserByEmail(email)
  .then(userRecord => {
    return auth.setCustomUserClaims(userRecord.uid, customClaims);
  })
  .then(() => {
    console.log('Custom claims set for email:', email);
  })
  .catch((error) => {
    console.error('Error setting custom claims:', error);
  });
