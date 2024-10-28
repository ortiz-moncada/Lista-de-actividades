<template>
  <div>
    <q-tabs
      v-model="tab"
      dense
      class="bg-indigo text-white"
    >
      <q-tab name="tabla" icon="mail" to="/" label="Tabla"/>
      <q-tab name="nuevo" icon="alarm" to="/Nuevo" label="Nuevo"/>
      <q-tab name="editar" icon="movie" to="/Editar" label="Editar"/>
    </q-tabs>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const tab = ref('tabla');
const route = useRoute();
const router = useRouter();


watch(
  () => route.path,
  (newPath) => {
    if (newPath === '/') {
      tab.value = 'tabla';
    } else if (newPath === '/Nuevo') {
      tab.value = 'nuevo';
    } else if (newPath === '/Editar') {
      tab.value = 'editar';
    }
  }
);

watch(tab, (newTab) => {
  if (newTab === 'tabla') {
    router.push('/');
  } else if (newTab === 'nuevo') {
    router.push('/Nuevo');
  } else if (newTab === 'editar') {
    router.push('/Editar');
  }
});
</script>



