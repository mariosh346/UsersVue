<template>
  <h2>
    {{ $t('Επεξεργασία Καταχώρησης') }}
  </h2>
  <UserItem :item="form" @submit="onSubmit"
  :error="error" :loading="loading" :button-label="$t('Επεξεργασία Καταχώρησης')" />
</template>

<script setup lang="ts">
import { serverTimestamp, updateDoc } from 'firebase/firestore';
import { useUserStore } from 'src/stores/userStore';
import { getItemDoc } from 'src/utlils/firestore/composables';
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

const form = ref<UserCollectionForm>({...props.item});

const loading = ref(false);
const error = ref('');
const userStore = useUserStore();
const { t } = useI18n();
const addCollection = async () => {
  error.value = '';
  try {
    loading.value = true;
    if (!form.value?.id) return;
    await updateDoc(getItemDoc(form.value.id), {
      ...form.value,
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
    form.value = {...userCollectionFormDefault};
  }
}
const onSubmit = async () => {
  await addCollection();
}
</script>
