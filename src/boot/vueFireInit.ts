import { defineBoot } from '#q-app/wrappers'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from 'src/utlils/firestore/db'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(({ app }) => {
  app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth()
    ],
  })
})

