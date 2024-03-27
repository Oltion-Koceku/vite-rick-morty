	
import { reactive } from 'vue'

export const store = reactive({
  apiURl: "https://rickandmortyapi.com/api/character",
  apiArray: [],
  statusArray: [],
  status: "",
  nameToSearch: "",
  params:{
    name: "",
    status: "",
    species: ""
  }
})