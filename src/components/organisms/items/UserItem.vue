<template>
  <h2 class="pb-8">
    {{ buttonLabel }}
  </h2>
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

    <slot />

    <BaseBtn
      :loading="loading"
      type="submit"
      :label="buttonLabel"
    />
    <ErrorBanner
      v-if="error"
      :message="error"
    />
  </q-form>
</template>

<script setup lang="ts">
import { required } from 'src/constants/validationRules';
import type { PropType } from 'vue';
import { ref, computed, watch, toRefs } from 'vue';
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
import { userCollectionFormDefault, type UserCollectionForm } from 'src/types/forms';
import BaseInput from 'src/components/atoms/BaseInput.vue';
import BaseSelect from 'src/components/atoms/BaseSelect.vue';
import BaseBtn from 'src/components/atoms/BaseBtn.vue';
import ErrorBanner from 'src/components/atoms/ErrorBanner.vue';

const props = defineProps({
  item: {
    type: Object as PropType<UserCollectionForm>,
    default: () => ({...userCollectionFormDefault})
  },
  loading: {type: Boolean, required: true },
  error: {type: String, required: true },
  buttonLabel: {type: String, required: true }
});
const emit = defineEmits<{
  (e: 'submit', value: typeof props["item"]): void;
}>();
const {item} = toRefs(props);

const copyForm = (newVal: UserCollectionForm) => {

  const copied = { ...newVal };
  if (newVal.id) {

    copied.id = newVal.id;

  }
  return copied;

};
watch(item, (newVal) => {

  form.value = copyForm(newVal);

}, { deep: true });

const urgentDeliveryOptions = computed(() => objectToOptions(URGENT_DELIVERY));
const deliveryPickupOptions = computed(() => objectToOptions(DELIVERY_PICKUP));
const sameDayOptions = computed(() => objectToOptions(SAME_DAY));
const pickupLocationOptions = computed(() => objectToOptions(PICKUP_LOCATION));
const protocolNumberOptions = computed(() => objectToOptions(PROTOCOL_NUMBER));

const form = ref<UserCollectionForm>(copyForm(item.value));

const onSubmit = () => {

  emit('submit', form.value);

};

</script>
