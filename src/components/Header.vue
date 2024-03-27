<script>
import axios from 'axios'
import {store} from '../data/store'
import SearchBar from './partials/SearchBar.vue'
import status from './partials/status.vue';
  export default {  
    data(){
      return{
        store,
        title: "-Rick & Morty-",
      }

    },

    methods:{
      allSpecies(){
        
      }
    },

    components:{
      SearchBar,
      status
    }
    
  }
</script>


<template>
  <div class="container">
    <div class="d-flex justify-content-center m-3">
      <h1>{{ title }}</h1>
    </div>

    <div class="menu d-flex justify-content-center">
      <SearchBar 
        
      />
      <status />
      <button class="btn btn-info ">Search</button>
      <button class="btn btn-danger"> Reset</button>
    </div>
  </div>
</template>



<style lang="scss" scoped>
  
</style>