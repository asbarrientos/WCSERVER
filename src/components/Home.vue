<template>
  <div class="home">
    <div class="alert alert-danger" role="alert">
        <h1><strong>{{title}}</strong></h1>
    </div>
  </div>
</template>
<script> 
export default {
  name: 'home',
  data (){
    return{
      title:'Welcome to Home Page'
    }
  }
}
</script>

<style scoped>
.home {
  margin: 100px 100px 100px 100px;
  font-family:'Courier New', Courier, monospace;
  font-size: 40px;
  text-align: center;
}
</style>