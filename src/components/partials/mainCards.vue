<script>
  export default {
    props:{
      arrayApi: Array
    },

    mounted(){
    }
  }
</script>

<template>
  
    <div class="row row-cols-4 mt-5">
      <div v-for="api in arrayApi" :key="api.id" class="card text-center" style="width: 18rem;">
        <img :src="api.image" class="card-img-top" :alt="api.name">
        <div class="card-body">
          <h5 class="card-title">{{api.name}}</h5>
          <p class="card-text">{{api.status}}</p>
          <p>{{api.species}}</p>
        </div>
      </div>
    </div>
  
</template>

<style lang="scss" scoped>
  .card{
    background-color: rgba(0,0,0,0);
    border: none;
    margin: 1.3rem;

    &:hover{
      scale: 150%;
      transition: linear, 1s;
      z-index: 999;
    }
    
    img{
      border-radius: 50%;
      box-shadow: inset;
    }
  }


</style>