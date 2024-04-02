<script>
import {store} from '../data/store'
import mainCards from './partials/mainCards.vue';
import loader from './partials/loader.vue';
import  axios  from 'axios';
import paginator from './partials/paginator.vue';


  export default{
    data(){
      return{
        store,
        axios,
      }
    },

    methods:{
      apiCall(){
        this.axios.get(this.store.apiURl, {
          params:{
            name: this.store.nameApi,
            page: this.store.page
          }
        })
          .then(res  =>{
            this.store.apiArray = res.data.results

          })

          .catch(error =>{
            console.log("error");
          })
      }
    },

    mounted(){
      this.apiCall();
    },

    components:{
      mainCards,
      loader,
      paginator
    }
  }
</script>


<template>
  <div class="container ">
    <div v-if="this.store.apiArray.length === 0" class="load">
      <loader />
    </div>
    <mainCards 
      v-else
      :arrayApi = "this.store.apiArray"
    />

    <div class="results d-flex justify-content-center">
      <h2>risultati trovati {{ this.store.apiArray.length }}</h2>
      <paginator />
    </div>
  </div>
</template>



<style lang="scss" scoped>
  .load{
    display: flex;
    justify-content: center;
    margin-top: 150px;
  }
</style>