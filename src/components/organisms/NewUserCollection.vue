<template>
  <q-input
    v-model="newCollection"
    label="data"
  />
  <q-btn
    icon="add"
    :loading="loading"
    round
    @click="addCollection"
  />
</template>
<script setup lang="ts">
import { addDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useUserStore } from 'src/stores/userStore';
import { getUserDoc } from 'src/utlils/firestore/composables';
import { itemsCollection } from 'src/utlils/firestore/db';
import { ref } from 'vue';

const loading = ref(false);
const newCollection = ref('');
const userStore = useUserStore();
const addCollection = async () => {
  try {
    loading.value = true;
    const refCollection = await addDoc(itemsCollection, {
      title: newCollection.value,
          userId: userStore?.uid,
          dateCreated: serverTimestamp(),
          dateUpdated: serverTimestamp(),
          movies: [] })

    if (!userStore?.user?.value || !userStore.uid) return;
    await updateDoc(getUserDoc(userStore?.uid), {
      dateUpdated: serverTimestamp(),
      collections: [...userStore.user.value.collections, refCollection.id]
    })
  } catch (error) {
    console.error('Error adding document: ', error);
  } finally {
    loading.value = false;
    newCollection.value = '';
  }
}
</script>
