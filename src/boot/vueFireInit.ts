import { defineBoot } from '#q-app/wrappers';
import { VueFire, VueFireAppCheck, VueFireAuth } from 'vuefire';
import { firebaseApp, getEnvVar } from 'src/utlils/firestore/db';
import { ReCaptchaV3Provider } from 'firebase/app-check';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(({ app }) => {

  app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
      VueFireAppCheck({
        provider: new ReCaptchaV3Provider(getEnvVar('VITE_CAPTCHA_SITE_KEY')),
        debug: process.env.NODE_ENV !== 'production',
        isTokenAutoRefreshEnabled: true,
      })
    ],
  });

});

