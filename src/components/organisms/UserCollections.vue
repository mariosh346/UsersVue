<template>
  <main>
    <q-table
      :rows="userData"
      :columns="columns"
      row-key="id"
      flat
      bordered
      :pagination="pagination"
      no-data-label="No orders found for this user."
      class="max-w-screen mb-8"
    >
      <template #body-cell-dimensions="props">
        <q-td
          :props="props"
        >
          <template v-if="props.row.height && props.row.length && props.row.width">
            {{ props.row.height }} x {{ props.row.length }} x {{ props.row.width }}
          </template>
        </q-td>
      </template>
      <template #body-cell-dateCreated="props">
        <q-td :props="props">
          {{ new Date(props.row.dateCreated.seconds * 1000).toISOString() }}
        </q-td>
      </template>
      <template #body-cell-actions="props">
        <q-td :props="props">
          <base-btn
            color="primary"
            label="Edit"
            @click="setSelectedItem(props.key)"
          />
        </q-td>
      </template>
    </q-table>
    <NewUserItem />
    <UpdateUserItem
      v-if="selectedItem"
      :item="selectedItem"
    />
  </main>
</template>
<script setup lang="ts">
import { useUserStore } from 'src/stores/userStore';
import { useAllItemsCollection, getUserItems } from 'src/utlils/firestore/composables';
import { computed, ref } from 'vue';
import type { QTableProps } from 'quasar';
import NewUserItem from './items/NewUserItem.vue';
import UpdateUserItem from './items/UpdateUserItem.vue';
import BaseBtn from 'src/components/atoms/BaseBtn.vue';
import { useI18n } from 'vue-i18n';

const userStore = useUserStore();
if (!userStore.uid) {

  throw new Error("User is not logged in");

}
const userSpecificData = getUserItems(userStore.uid);
const allData = useAllItemsCollection();
const userData = computed(() => {

  return allData.value.length ? allData.value : userSpecificData.value;

});

const selectedItem = ref<typeof userData["value"][0] | undefined>(undefined);
const setSelectedItem = (key: string) => {

  const item = userData.value.find((item) => item.id === key);
  if (!item) {

    throw new Error("Item not found");

  }
  selectedItem.value = item;

};

const { t } = useI18n();
const columns: QTableProps["columns"] = [
  { name: "id", label: t('labels.id'), field: "id", align: "left", sortable: true },
  { name: "fullName", label: t('labels.fullName'), field: "fullName", align: "left", sortable: true },
  { name: "address", label: t('labels.address'), field: "address", align: "left", sortable: true },
  { name: "city", label: t('labels.city'), field: "city", align: "left", sortable: true },
  { name: "postalCode", label: t('labels.postalCode'), field: "postalCode", align: "left", sortable: true },
  { name: "phone", label: t('labels.phone'), field: "phone", align: "left", sortable: true },
  { name: "orderNumber", label: t('labels.orderNumber'), field: "orderNumber", align: "left", sortable: true },
  { name: "cashOnDelivery", label: t('labels.cashOnDelivery'), field: "cashOnDelivery", align: "left", sortable: true },
  { name: "weight", label: t('labels.weight'), field: "weight", align: "left", sortable: true },
  { name: "dimensions", label:  t('labels.dimensions'), field: "dimensions", align: "left" },
  { name: "pickupFromStore", label: t('labels.pickupLocation'), field: "pickupFromStore", align: "center" },
  { name: "urgentDelivery", label: t('labels.urgentDelivery'), field: "urgentDelivery", align: "center" },
  { name: "deliveryPickup", label: t('labels.deliveryPickup'), field: "deliveryPickup", align: "center" },
  { name: "sameDay", label: t('labels.sameDay'), field: "sameDay", align: "center" },
  { name: "protocolNumberCheckbox", label: t('labels.protocolNumber'),
    field: "protocolNumberCheckbox", align: "center" },
  { name: "dateCreated", label: t('labels.dateCreated'), field: "dateCreated", align: "left", sortable: true },
  { name: "actions", label: t('labels.actions'), field: "actions", align: "center" },
];

const pagination = ref({
  rowsPerPage: 10,
});
</script>
