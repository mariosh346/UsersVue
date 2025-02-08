<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    />
    <div>
      <login-button />
      <div>
        {{ user }}
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import type { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import LoginButton from 'src/components/atoms/login/LoginButton.vue';
import { useUserStore } from 'src/stores/userStore';
import { watch } from 'fs';
import { storeToRefs } from 'pinia';
// import { getCurrentUserData } from 'src/utlils/firestore/composables';

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1'
  },
  {
    id: 2,
    content: 'ct2'
  },
  {
    id: 3,
    content: 'ct3'
  },
  {
    id: 4,
    content: 'ct4'
  },
  {
    id: 5,
    content: 'ct5'
  }
]);

const meta = ref<Meta>({
  totalCount: 1200
});

const { user } = storeToRefs(useUserStore());
// getCurrentUserData(user.value?.uid);

</script>
