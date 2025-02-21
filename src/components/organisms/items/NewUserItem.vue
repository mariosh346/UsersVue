<template>
  <h2>
    {{ $t('Νέα Καταχωρηση') }}
  </h2>
  <UserItem :item="item" @submit="onSubmit" :error="error"
  :loading="loading" :button-label="$t('Νέα Καταχώρηση')" />
</template>

<script setup lang="ts">
import { required } from 'src/constants/validationRules';
import { addDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useUserStore } from 'src/stores/userStore';
import { getUserDoc } from 'src/utlils/firestore/composables';
import { itemsCollection } from 'src/utlils/firestore/db';
import type { PropType } from 'vue';
import { ref, computed } from 'vue';
import { userCollectionFormDefault, type UserCollectionForm } from 'src/types/forms';
import { useI18n } from 'vue-i18n';
import UserItem from './UserItem.vue';

const props = defineProps({
  item: {
    type: Object as PropType<UserCollectionForm>,
    default: () => ({...userCollectionFormDefault})
  }
})

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
    })

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
}
</script>
