<template>
  <UserItem
    :item="item"
    :error="error"
    :loading="loading"
    :button-label="$t('Edit Entry')"
    @submit="onSubmit"
  >
    <!-- <BaseInput
      :model-value="item.stateCollection"
      :label="FORM_LABELS.orderNumber"
      :placeholder="PLACEHOLDERS.orderNumber"
    /> -->
  </UserItem>
</template>

<script setup lang="ts">
import { serverTimestamp, updateDoc } from 'firebase/firestore';
import type { PropType } from 'vue';
import { ref } from 'vue';
import { userCollectionFormDefault, type UserCollectionForm } from 'src/types/forms';
import { useI18n } from 'vue-i18n';
import UserItem from './UserItem.vue';
import { getItemDoc } from 'src/utlils/firestore/db';

defineProps({
  item: {
    type: Object as PropType<UserCollectionForm>,
    default: () => ({...userCollectionFormDefault})
  }
});

const loading = ref(false);
const error = ref('');
const { t } = useI18n();
const onSubmit = async (form: UserCollectionForm) => {

  error.value = '';
  try {

    loading.value = true;
    if (!form?.id) {

      throw new Error('No id provided');

    }
    await updateDoc(getItemDoc(form.id), {
      ...form,
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
