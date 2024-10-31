<template>
  <div class="q-pa-md">
    <q-table
      title="Lista de Tareas"
      :rows="activityStore.activities"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-Estado="props">
        <span :class="getStatusClass(props.row.Estado)">
          {{ props.row.Estado }}
        </span>
      </template>
      
      <template v-slot:body-cell-Editar="props">
        <q-btn 
          to="/Editar"
          color="primary" 
          icon="edit" 
          @click="activityStore.selectActivity(props.row)" 
          flat 
          dense 
          class="q-mr-sm"
        />  
        <q-btn 
          color="negative" 
          icon="delete" 
          @click="deleteRow(props.row)" 
          flat 
          dense 
        />
      </template>
    </q-table>
  </div>
</template>

<script>
import { useActivityStore } from '../stores/administrador.js'

export default {
  setup() {
    const activityStore = useActivityStore()

    const columns = [
      { name: 'Name', align: 'center', label: 'Name', field: 'name' },
      { name: 'Descripcion', align: 'center', label: 'Descripcion', field: 'Descripcion' },
      { name: 'Fecha', label: 'Fecha', field: 'Fecha' },
      { name: 'Estado', label: 'Estado', field: 'Estado' },
      { name: 'Editar', align: 'center', label: 'Acciones', field: 'acciones' } 
    ]

    const deleteRow = (row) => {
      const index = activityStore.activities.findIndex(activity => activity.name === row.name)
      if (index !== -1) {
        activityStore.activities.splice(index, 1) 
      }
    }

    const getStatusClass = (estado) => {
      if (estado.toLowerCase() === 'activo') {
        return 'text-green';
      } else if (estado.toLowerCase() === 'inactivo') {
        return 'text-red';
      }
      return '';
    }

    return {
      columns,
      activityStore,
      deleteRow,
      getStatusClass
    }
  }
}
</script>

<style scoped>
.text-green {
  color: green;
}
.text-red {
  color: red;
}
</style>
