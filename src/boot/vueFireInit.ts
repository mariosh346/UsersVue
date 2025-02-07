import { defineBoot } from '#q-app/wrappers'
import { VueFire, VueFireAuthWithDependencies } from 'vuefire'
import {
  browserLocalPersistence,
  debugErrorMap,
  indexedDBLocalPersistence,
  prodErrorMap,
} from 'firebase/auth'
import { firebaseApp, signinRedirect } from 'src/utlils/firestore/db'
// import { getItems } from 'src/utlils/firestore/composables'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(({ app }) => {
  // signinRedirect();
  // app.use(VueFire, {
  //   // imported above but could also just be created here
  //   firebaseApp,
  //   modules: [
  //     VueFireAuthWithDependencies({
  //       dependencies: {
  //         errorMap:
  //           process.env.NODE_ENV !== 'production'
  //             ? debugErrorMap
  //             : prodErrorMap,
  //         persistence: [
  //           indexedDBLocalPersistence,
  //           browserLocalPersistence,
  //         ]
  //       }
  //     }),
  //   ],
  // })
})

