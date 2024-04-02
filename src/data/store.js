	
import { reactive } from 'vue'

export const store = reactive({
  apiURl: "https://rickandmortyapi.com/api/character",
  apiArray: [],
  statusArray: [],
  page: 1,
  pages: Number,
  status: "",
  nameToSearch: "",
  params:{
    name: "",
    status: "",
    species: "",
  }
})