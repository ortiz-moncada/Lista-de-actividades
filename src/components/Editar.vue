<template>
    <div class="Container">


        <br><br>

        <h1>Editar Actividad</h1><br><br>


        <div class="Form">
            <q-input square outlined v-model="text"  label="Nombre de la Actividad" class="NameTheActivity" />
            <q-input filled v-model="text" label="Descripcion"  class="Description"/>
            <q-input color="blue" v-model="date" label="Fecha" class="Date"><template v-slot:prepend><q-icon name="event" /></template></q-input>
            <q-select square filled v-model="model" :options="options" label="Estado" class="State"/>
        </div>

      <br><br>

        <q-btn color="blue" icon="mail" icon-right="send" label="On Left and Right" />
        

    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref(null),
      options: [
        'Activo','Inactivo',
      ]
    }
  }
}




</script>

<style>
*{
    padding: 0;
    margin: 0;
    text-align: center;
    font-family: cursive;
}

.Form{
    width: 40%;
    margin-left: 30%; 
    box-shadow: 0px 0px 5px 5px grey;   
    background-color: aliceblue;
    border-radius: 10px;
}
.Container{
    background-color: #cbd9eb;
    height: 91.5vh;
}




</style>