<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    />
    <div>
      <login-button v-if="!uid" />
      <div v-else>
        <logout-button />
        <user-collections />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import LoginButton from 'src/components/atoms/login/LoginButton.vue';
import LogoutButton from 'src/components/atoms/login/LogoutButton.vue';
import UserCollections from 'src/components/organisms/UserCollections.vue';
import { useUserStore } from 'src/stores/userStore';
import { storeToRefs } from 'pinia';

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

const { uid } = storeToRefs(useUserStore());

</script>
