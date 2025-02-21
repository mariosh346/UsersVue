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
    >
      <!-- <template #body-cell-pickupFromStore="props">
        <ServiceStatus
          :props="props"
          :active="props.row.pickupFromStore"
        />
      </template>

      <template #body-cell-urgentDelivery="props">
        <ServiceStatus
          :props="props"
          :active="props.row.urgentDelivery"
        />
      </template>

      <template #body-cell-deliveryPickup="props">
        <ServiceStatus
          :props="props"
          :active="props.row.deliveryPickup"
        />
      </template>

      <template #body-cell-sameDay="props">
        <ServiceStatus
          :props="props"
          :active="props.row.sameDay"
        />
      </template>

      <template #body-cell-protocolNumberCheckbox="props">
        <ServiceStatus
          :props="props"
          :active="props.row.protocolNumberCheckbox"
        />
      </template> -->

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
            @click="setSelectedItem(props.row)"
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
import { getUserItems } from 'src/utlils/firestore/composables';
import { ref } from 'vue';
import type { QTableProps } from 'quasar';
import NewUserItem from './items/NewUserItem.vue';
import UpdateUserItem from './items/UpdateUserItem.vue';
import BaseBtn from 'src/components/atoms/BaseBtn.vue';

const userStore = useUserStore();
if (!userStore.uid) {
  throw new Error("User is not logged in");
}
const userData = getUserItems(userStore.uid);

const selectedItem = ref(undefined);
const setSelectedItem = (item: typeof selectedItem['value']) => {
  selectedItem.value = item;
};

const columns: QTableProps["columns"] = [
  { name: "id", label: "ID", field: "id", align: "left", sortable: true },
  { name: "fullName", label: "Ονοματεπώνυμο", field: "fullName", align: "left", sortable: true },
  { name: "address", label: "Διεύθυνση", field: "address", align: "left", sortable: true },
  { name: "city", label: "Πόλη / Περιοχή", field: "city", align: "left", sortable: true },
  { name: "postalCode", label: "Τ.Κ.", field: "postalCode", align: "left", sortable: true },
  { name: "phone", label: "Τηλέφωνο", field: "phone", align: "left", sortable: true },
  { name: "orderNumber", label: "Αρ. Παραγγελίας", field: "orderNumber", align: "left", sortable: true },
  { name: "cashOnDelivery", label: "Αντικαταβολή", field: "cashOnDelivery", align: "left", sortable: true },
  { name: "weight", label: "Βάρος", field: "weight", align: "left", sortable: true },
  { name: "dimensions", label: "Διαστάσεις", field: "dimensions", align: "left" },
  { name: "pickupFromStore", label: "Παραλαβή από κατάστημα", field: "pickupFromStore", align: "center" },
  { name: "urgentDelivery", label: "Επείγουσα Παράδοση", field: "urgentDelivery", align: "center" },
  { name: "deliveryPickup", label: "Παράδοση - Παραλαβή", field: "deliveryPickup", align: "center" },
  { name: "sameDay", label: "Αυθημερόν", field: "sameDay", align: "center" },
  { name: "protocolNumberCheckbox", label: "Αρ. Πρωτοκόλλου", field: "protocolNumberCheckbox", align: "center" },
  { name: "dateCreated", label: "Ημερομηνία", field: "dateCreated", align: "left", sortable: true },
  { name: "actions", label: "Ενέργειες", field: "actions", align: "center" },
];

const pagination = ref({
  rowsPerPage: 10,
});
</script>
