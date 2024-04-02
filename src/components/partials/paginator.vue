<script>
import { store } from '../../data/store';
import axios from 'axios';
  export default {
    data(){
      return{
        store,
        axios
      }
    },

    methods:{
      pageRequest(){
        this.axios.get(this.store.apiURl, {
           params:{
            name: this.store.nameToSearch,
            status: this.store.status,
            page : this.store.page
          }
        })
         
          .then(res =>{
            this.store.pages = res.data.info.pages
            this.store.apiArray = res.data.results
            console.log(this.store.pages)
          })
          .catch(error =>{
            console.log('error');
          })
      },

      pageNext(){
        if (this.store.page < this.store.pages) {
          this.store.page ++
          
        }
        console.log(this.store.page);
        this.pageRequest()
      },
      pagePrev(){
        this.store.page --
        this.pageRequest()
        console.log(this.store.page);
      }
    },
    mounted(){
      
    }
  }
</script>

<template>
  <button v-show="this.store.page > 1" @click="pagePrev()" class="btn btn-info mx-3  "> < </button>
  <button @click="pageNext()" class="btn btn-info mx-3 ">></button>
</template>


<style lang="scss" scoped>

</style>