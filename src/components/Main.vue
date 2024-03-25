<script>
import {store} from '../data/store'
import mainCards from './partials/mainCards.vue';
import  axios  from 'axios';

  export default{
    data(){
      return{
        store,
        axios
      }
    },

    methods:{
      apiCall(){
        this.axios.get(this.store.apiURl)
          .then(res  =>{
            this.store.apiArray = res.data.results
          })

          .catch(error =>{
            console.log("ERRORRREEEEEEE");
          })
      }
    },

    mounted(){
      this.apiCall()
    },

    components:{
      mainCards
    }
  }
</script>


<template>
  <div class="container">
    <mainCards 
      :arrayApi = "this.store.apiArray"
    />

    <div class="results text-center">
      <h2>risultati trovati {{ this.store.apiArray.length }}</h2>
    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>