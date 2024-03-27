<script>
import { store } from '../../data/store';
import axios from 'axios'
  export default {
    data(){
      return{
        store,
        axios
      }
    },

    methods:{
      searchApi(){
        this.axios.get(this.store.apiURl, {
          params:{
            name: this.store.nameToSearch,
            status: this.store.status
          }
        })
          .then(res  =>{
            this.store.apiArray = res.data.results
            console.log(this.store.apiArray);

          })

          .catch(error =>{
            console.log("error");
          })
      }
    },

    mounted(){
      this.searchApi()
    }
  }
</script>

<template>
    <input class="form-control" @keyup.enter="searchApi()" list="datalistOptions" id="exampleDataList" v-model.trim="this.store.nameToSearch"    placeholder="Type to search...">
    <datalist id="datalistOptions">
      <option v-for="(api, index) in store.apiArray" :key="index" :value="api.name"></option>
    </datalist>
</template>


<style lang="scss" scoped>

</style>