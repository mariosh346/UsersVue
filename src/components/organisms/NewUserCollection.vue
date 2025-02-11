<template>
  <q-form
    class="q-gutter-md"
    @submit="onSubmit"
  >
    <q-input
      v-model="form.fullName"
      filled
      label="Ονοματεπώνυμο"
      placeholder="Εισάγετε ονοματεπώνυμο..."
      :rules="[val => !!val || 'Το πεδίο είναι υποχρεωτικό']"
    />

    <q-input
      v-model="form.address"
      filled
      label="Διεύθυνση"
      placeholder="Εισάγετε διεύθυνση..."
      :rules="[val => !!val || 'Το πεδίο είναι υποχρεωτικό']"
    />

    <q-input
      v-model="form.city"
      filled
      label="Πόλη / Περιοχή"
      placeholder="Εισάγετε πόλη / περιοχή..."
      :rules="[val => !!val || 'Το πεδίο είναι υποχρεωτικό']"
    />

    <q-input
      v-model="form.postalCode"
      filled
      label="Τ.Κ."
      placeholder="Εισάγετε τ.κ..."
      :rules="[val => !!val || 'Το πεδίο είναι υποχρεωτικό']"
    />

    <q-input
      v-model="form.phone"
      filled
      label="Τηλέφωνο"
      placeholder="Εισάγετε τηλέφωνο..."
      :rules="[val => !!val || 'Το πεδίο είναι υποχρεωτικό']"
    />

    <q-input
      v-model="form.orderNumber"
      filled
      label="Αρ. Παραγγελίας / Κλειδί"
      placeholder="Εισάγετε αριθμό παραγγελίας / κλειδί..."
    />

    <q-input
      v-model="form.cashOnDelivery"
      filled
      label="Αντικαταβολή / Είσπραξη"
      placeholder="Εισάγετε αντικαταβολή / είσπραξη..."
    />

    <q-input
      v-model="form.notes"
      filled
      label="Παρατηρήσεις"
      type="textarea"
    />

    <q-input
      v-model="form.weight"
      filled
      label="Βάρος"
      placeholder="Εισάγετε βάρος..."
    />

    <div class="row q-gutter-md">
      <q-input
        v-model="form.height"
        filled
        label="Ύψος"
        placeholder="Εισάγετε ύψος..."
        class="col"
      />
      <q-input
        v-model="form.length"
        filled
        label="Μήκος"
        placeholder="Εισάγετε μήκος..."
        class="col"
      />
      <q-input
        v-model="form.width"
        filled
        label="Πλάτος"
        placeholder="Εισάγετε πλάτος..."
        class="col"
      />
    </div>


    <q-checkbox
      v-model="form.pickupFromStore"
      label="Παραλαβή από το κατάστημα"
    />
    <q-checkbox
      v-model="form.urgentDelivery"
      label="Επείγουσα Παράδοση"
    />
    <q-checkbox
      v-model="form.deliveryPickup"
      label="Παράδοση - Παραλαβή"
    />
    <q-checkbox
      v-model="form.sameDay"
      label="Αυθημερόν"
    />
    <q-checkbox
      v-model="form.protocolNumberCheckbox"
      label="Αριθμός Πρωτοκόλλου"
    />

    <q-btn
      icon="add"
      :loading="loading"
      round
      type="submit"
    />
  </q-form>
</template>
<script setup lang="ts">
import { addDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useUserStore } from 'src/stores/userStore';
import { getUserDoc } from 'src/utlils/firestore/composables';
import { itemsCollection } from 'src/utlils/firestore/db';
import { ref } from 'vue';
const emptyForm = {
  fullName: '',
  address: '',
  city: '',
  postalCode: '',
  protocolNumber: '',
  phone: '',
  orderNumber: '',
  cashOnDelivery: '',
  notes: '',
  weight: '',
  height: '',
  length: '',
  width: '',
  voucher: '',
  pickupFromStore: false,
  urgentDelivery: false,
  deliveryPickup: false,
  sameDay: false,
  protocolNumberCheckbox: false,
}
const form = ref(emptyForm);

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
