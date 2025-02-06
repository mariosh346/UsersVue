import { defineBoot } from '#q-app/wrappers'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { VueFire, VueFireAuth } from 'vuefire'
// ... other firebase imports

export const firebaseApp = initializeApp({
  // your application settings
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(({ app}) => {
  app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })
})
