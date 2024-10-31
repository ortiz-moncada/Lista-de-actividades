// stores/activityStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useActivityStore = defineStore('activityStore', () => {
  const activities = ref([])
  const activitySelected = ref({
    name: '',
    Descripcion: '',
    Fecha: '',
    Estado: ''
  })

  const addActivity = (activity) => {
    activities.value.push(activity)
  }

  function selectActivity(activity) {
    activitySelected.value =activity
  }

  function editActivity(updatedActivity) {
    const index = activities.value.findIndex(activity => activity.name === updatedActivity.name)
    if (index !== -1) {
      activities.value[index] = { ...activities.value[index], ...updatedActivity }
    }
  }

  return {
    activities,
    addActivity,
    selectActivity,
    activitySelected,
    editActivity
  }
})
