import { defineBoot } from '#q-app/wrappers'
import { VueFire, VueFireAuthWithDependencies } from 'vuefire'
import {
  browserLocalPersistence,
  debugErrorMap,
  indexedDBLocalPersistence,
  prodErrorMap,
} from 'firebase/auth'
import { firebaseApp } from 'src/utlils/firestore/db'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(({ app }) => {
  app.use(VueFire, {
    firebaseApp,
    // modules: [
    //   VueFireAuthWithDependencies({
    //     dependencies: {
    //       errorMap:
    //         process.env.NODE_ENV !== 'production'
    //           ? debugErrorMap
    //           : prodErrorMap,
    //       persistence: [
    //         indexedDBLocalPersistence,
    //         browserLocalPersistence,
    //       ]
    //     }
    //   }),
    // ],
  })
})

