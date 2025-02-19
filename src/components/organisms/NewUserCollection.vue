<template>
  <q-form
    class="q-gutter-md"
    @submit="onSubmit"
  >
    <BaseInput
      v-model="form.fullName"
      :label="FORM_LABELS.fullName"
      :placeholder="PLACEHOLDERS.fullName"
      autocomplete="name"
      :rules="[required]"
    />

    <BaseInput
      v-model="form.address"
      :label="FORM_LABELS.address"
      :placeholder="PLACEHOLDERS.address"
      autocomplete="address"
      :rules="[required]"
    />

    <BaseInput
      v-model="form.city"
      :label="FORM_LABELS.city"
      :placeholder="PLACEHOLDERS.city"
      autocomplete="address-level2"
      :rules="[required]"
    />

    <BaseInput
      v-model="form.postalCode"
      :label="FORM_LABELS.postalCode"
      :placeholder="PLACEHOLDERS.postalCode"
      autocomplete="postal-code"
      :rules="[required]"
    />

    <BaseInput
      v-model="form.phone"
      :label="FORM_LABELS.phone"
      :placeholder="PLACEHOLDERS.phone"
      type="tel"
      autocomplete="tel"
      :rules="[required]"
    />

    <BaseInput
      v-model="form.orderNumber"
      :label="FORM_LABELS.orderNumber"
      :placeholder="PLACEHOLDERS.orderNumber"
    />

    <BaseInput
      v-model="form.cashOnDelivery"
      :label="FORM_LABELS.cashOnDelivery"
      :placeholder="PLACEHOLDERS.cashOnDelivery"
    />

    <BaseInput
      v-model="form.notes"
      :label="FORM_LABELS.notes"
      type="textarea"
    />

    <BaseInput
      v-model="form.weight"
      :label="FORM_LABELS.weight"
      :placeholder="PLACEHOLDERS.weight"
    />

    <div class="row q-col-gutter-md q-py-md q-pl-md">
      <BaseInput
        v-model="form.height"
        :label="FORM_LABELS.height"
        :placeholder="PLACEHOLDERS.height"
        class="col"
      />
      <BaseInput
        v-model="form.length"
        :label="FORM_LABELS.length"
        :placeholder="PLACEHOLDERS.length"
        class="col"
      />
      <BaseInput
        v-model="form.width"
        :label="FORM_LABELS.width"
        :placeholder="PLACEHOLDERS.width"
        class="col"
      />
    </div>

    <BaseSelect
      v-model="form.protocolNumber"
      :options="protocolNumberOptions"
      :label="SELECT_LABELS.protocolNumber"
    />

    <BaseSelect
      v-model="form.urgentDelivery"
      :options="urgentDeliveryOptions"
      :label="SELECT_LABELS.urgentDelivery"
    />

    <BaseSelect
      v-model="form.deliveryPickup"
      :options="deliveryPickupOptions"
      :label="SELECT_LABELS.deliveryPickup"
    />

    <BaseSelect
      v-model="form.sameDay"
      :options="sameDayOptions"
      :label="SELECT_LABELS.sameDay"
    />

    <BaseSelect
      v-model="form.pickupLocation"
      :options="pickupLocationOptions"
      :label="SELECT_LABELS.pickupLocation"
    />

    <BaseBtn
      icon="add"
      :loading="loading"
      type="submit"
      label="Προσθήκη"
    />
  </q-form>
</template>

<script setup lang="ts">
import { required } from 'src/constants/validationRules';
import { addDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useUserStore } from 'src/stores/userStore';
import { getUserDoc } from 'src/utlils/firestore/composables';
import { itemsCollection } from 'src/utlils/firestore/db';
import { ref, computed } from 'vue';
import BaseInput from '../atoms/BaseInput.vue';
import BaseSelect from '../atoms/BaseSelect.vue';
import BaseBtn from '../atoms/BaseBtn.vue';
import {
  FORM_LABELS,
  PLACEHOLDERS,
  SELECT_LABELS,
  PICKUP_LOCATION,
  URGENT_DELIVERY,
  DELIVERY_PICKUP,
  SAME_DAY,
  PROTOCOL_NUMBER,
  objectToOptions
} from 'src/constants/strings';
import type { UserCollectionForm } from 'src/types/forms';

const urgentDeliveryOptions = computed(() => objectToOptions(URGENT_DELIVERY));
const deliveryPickupOptions = computed(() => objectToOptions(DELIVERY_PICKUP));
const sameDayOptions = computed(() => objectToOptions(SAME_DAY));
const pickupLocationOptions = computed(() => objectToOptions(PICKUP_LOCATION));
const protocolNumberOptions = computed(() => objectToOptions(PROTOCOL_NUMBER));

const emptyForm: UserCollectionForm = {
  fullName: '',
  address: '',
  city: '',
  postalCode: '',
  protocolNumber: PROTOCOL_NUMBER.none.value,
  phone: '',
  orderNumber: '',
  cashOnDelivery: '',
  notes: '',
  weight: '',
  height: '',
  length: '',
  width: '',
  voucher: '',
  urgentDelivery: URGENT_DELIVERY.normal.value,
  deliveryPickup: DELIVERY_PICKUP.simple.value,
  sameDay: SAME_DAY.normal.value,
  pickupLocation: PICKUP_LOCATION.delivery.value,
}
const form = ref<UserCollectionForm>(emptyForm);

const loading = ref(false);
const userStore = useUserStore();
const addCollection = async () => {
  try {
    loading.value = true;
    const refCollection = await addDoc(itemsCollection, {
          ...form.value,
          userId: userStore?.uid,
          dateCreated: serverTimestamp(),
          dateUpdated: serverTimestamp(),
          })

    if (!userStore?.user?.value || !userStore.uid) return;
    await updateDoc(getUserDoc(userStore?.uid), {
      dateUpdated: serverTimestamp(),
      collections: [...userStore.user.value.collections, refCollection.id]
    })
  } catch (error) {
    console.error('Error adding document: ', error);
  } finally {
    loading.value = false;
    form.value = emptyForm;
  }
}
const onSubmit = async () => {
  await addCollection();
}
</script>
