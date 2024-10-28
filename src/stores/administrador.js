import { defineStore } from "pinia";
import { ref } from "vue";

export const useTheInformationStore = defineStore("theInformation", () => {

  const description = ref("");
  const date = ref("");
  const status = ref("");


  const setActivity = (activity) => {
    description.value = activity.description;
    date.value = activity.date;
    status.value = activity.status;
  };

  return { description, date, status, setActivity };
});
