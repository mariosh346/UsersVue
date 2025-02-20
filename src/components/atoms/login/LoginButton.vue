<script setup lang="ts">
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { ref, onMounted } from 'vue';
import { signinPopup } from 'src/utlils/firestore/db';
import { getUserData, getItems } from 'src/utlils/firestore/composables';


// const googleAuthProvider = new GoogleAuthProvider()

// const auth = getAuth() // only exists on client side
// const auth = getAuth(firebaseApp);

// const error = ref(null)

function signinRedirect() {
  signinPopup()
  // if (!auth) return
    // signInWithRedirect(auth, googleAuthProvider).catch((reason) => {
    //   debugger
    //   console.error('Failed signinRedirect', reason)
    // })
    // signInWithPopup(auth, googleAuthProvider).catch((reason) => {
    //   debugger
    //   console.error('Failed signinRedirect', reason)
    // })
    // signInWithPopup(auth, googleAuthProvider)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     if (!credential) {
    //       throw new Error('Failed to get credential from result')
    //     }
    //     const token = credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     // IdP data available using getAdditionalUserInfo(result)
    //     console.log('signinRedirect result', user, token)
    //   }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     console.error('Failed signinRedirect error: ', errorCode, errorMessage, email, credential)
    //     throw error;
    //   });
}


onMounted(() => {
  // if (!auth) return
  // console.log('mounted auth', auth)

  // getRedirectResult(auth).catch((reason) => {
  //   console.error('Failed redirect result', reason)
  //   error.value = reason
  // })
})
</script>

<template>
  <main>
    <!-- <ErrorBox
      v-if="error"
      :error="error"
    /> -->
    <q-btn
      icon="login"
      @click="signinRedirect()"
    >
      SignIn with Google
    </q-btn>
  </main>
</template>
