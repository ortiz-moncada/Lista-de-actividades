<template>
  <div class="Container">
    <br><br>
    <h1>Editar Actividad</h1><br><br>

    <div class="Form">
      <q-input square outlined v-model="activityName" label="Nombre de la Actividad" class="NameTheActivity" />
      <q-input filled v-model="description" label="Descripcion" class="Description" />
      <q-input color="blue" v-model="date" label="Fecha" class="Date">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>
      <q-select square filled v-model="status" :options="options" label="Estado" class="State" />
    </div>

    <br><br>

    <q-btn color="blue" icon="mail" icon-right="send" label="Guardar Cambios" @click="saveChanges" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useActivityStore } from '../stores/administrador.js'

export default {
  setup() {
    const main = useActivityStore()
    const activityName = ref('')
    const description = ref('')
    const date = ref('')
    const status = ref('')
    const options = ['Activo', 'Inactivo']

    onMounted(() => {
      if (main.activitySelected) {
        activityName.value = main.activitySelected.name
        description.value = main.activitySelected.Descripcion
        date.value = main.activitySelected.Fecha
        status.value = main.activitySelected.Estado
      }
    })

    const saveChanges = () => {
  const updatedActivity = {
    name: activityName.value,
    Descripcion: description.value,
    Fecha: date.value,
    Estado: status.value
  };

  main.editActivity(updatedActivity);
  router.push('/'); 
};


    return {
      activityName,
      description,
      date,
      status,
      options,
      saveChanges
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  text-align: center;
  font-family: cursive;
}

.Form {
  width: 40%;
  margin-left: 30%;
  box-shadow: 0px 0px 5px 5px grey;
  background-color: aliceblue;
  border-radius: 10px;
}
.Container {
  background-color: #cbd9eb;
  height: 91.5vh;
}
</style>
