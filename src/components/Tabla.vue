<template>
  <div class="q-pa-md">
    <q-table
      title="Lista de Tareas"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Actividad',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'Descripcion', align: 'center', label: 'Descripcion',field:'Descripcion' },
  { name: 'Fecha', label: 'Fecha ', field: 'Fecha'},
  { name: 'Estado', label: 'Estado', field: 'Estado'},
  { name: 'Editar', label: 'Editar', field: 'Editar'},
]

const rows = [
  {
    name: '',
    Descripcion: 'holafasdsafa',
    Fecha: 'dsfsdfs',
    Estado: 'fdsfdsf',
    Editar:'fdsfsfs',

  },
]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}
</script>
