import admin from 'firebase-admin';
import serviceAccount from '../secret/my-project-users-300618-firebase-adminsdk-aehkh-ea9455aa21.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'my-project-users-300618' // Replace with your Firebase project ID
});

const auth = admin.auth();
const uid = process.argv[2];

if (!uid) {

  console.error('Please provide a UID as a command-line argument');
  process.exit(1);

}

const customClaims = {
  admin: true,
  editor: true,
  premium: false
};

auth.setCustomUserClaims(uid, customClaims)
  .then(() => {

    console.log('Custom claims set for UID:', uid);
  
  })
  .catch((error) => {

    console.error('Error setting custom claims:', error);
  
  });
