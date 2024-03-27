<script>
import { store } from '../../data/store';
import axios from 'axios';
  export default {
    data(){
      return {
        store,
        axios
      }
    },
    
    methods:{
      pushStatus(){
        this.axios.get(this.store.apiURl, {
          params:{
            name: this.store.nameToSearch,
            status: this.store.status
          }
            
        })

        .then(res =>{
          if (this.store.statusArray.length === 0) {
            res.data.results.forEach(result => {
              if (!this.store.statusArray.includes(result.status)) {
                this.store.statusArray.push(result.status)
              }
            });
          }
        })
      },

      statuSelect(status){
        this.store.status = status
        console.log(this.store.status);
      }

    },

    mounted(){
      this.pushStatus()
    }
  }
</script>

<template>
  <select name="" id="">
        <option @click="statuSelect(status)" v-for="(status, index) in this.store.statusArray" :key="index"  value="">{{status}}</option>
  </select>
</template>

<style lang="scss" scoped>

</style>