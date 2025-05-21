<template>
  <UserItem
    :item="item"
    :error="error"
    :loading="loading"
    :button-label="$t('New Entry')"
    @submit="onSubmit"
  />
</template>

<script setup lang="ts">
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { useUserStore } from 'src/stores/userStore';
import { itemsCollection } from 'src/utlils/firestore/db';
import type { PropType } from 'vue';
import { ref } from 'vue';
import { userCollectionFormDefault, type UserCollectionForm } from 'src/types/forms';
import { useI18n } from 'vue-i18n';
import UserItem from './UserItem.vue';

defineProps({
  item: {
    type: Object as PropType<UserCollectionForm>,
    default: () => ({...userCollectionFormDefault})
  }
});

const loading = ref(false);
const error = ref('');
const userStore = useUserStore();
const { t } = useI18n();
const onSubmit = async (form: UserCollectionForm) => {

  error.value = '';
  try {

    loading.value = true;
    await addDoc(itemsCollection, {
      ...form,
      userId: userStore?.uid,
      dateCreated: serverTimestamp(),
      dateUpdated: serverTimestamp(),
    });

    // if (!userStore?.user?.value || !userStore.uid) return;
    // await updateDoc(getUserDoc(userStore?.uid), {
    //   dateUpdated: serverTimestamp(),
    //   collections: [...userStore.user.value.collections, refCollection.id]
    // })

  } catch (e) {

    console.error('Error adding document: ', e);
    error.value = t('Προέκυψε σφάλμα κατά την προσθήκη της συλλογή');

  } finally {

    loading.value = false;

  }

};
</script>
