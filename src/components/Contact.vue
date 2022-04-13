<template>
  <div class="contact">
      <div class="alert alert-danger" role="alert">
        <h1><strong>{{title}}</strong></h1>
        </div>
        <div class="alert alert-primary" role="alert">
          <h3>Email</h3>
            <h5>barrientosabigail094@gmail.com</h5>
          <br>
          <h3>Phone Number</h3>
            <h5>09497959720</h5>
          <br>
          <h3>Websites</h3>
            <h5>FB: Abby Barrientos</h5>
            <h5>IG: aaabibarrientoss</h5>
          <br>
          <h3>Address</h3>
            <h5>Lot 21 Block 14 Avocado Street Trinidad Village Calibutbut Bacolor, Pampanga</h5>
        </div>
    </div>
</template>
<script> 
export default {
  name: 'contact',
  data (){
    return{
      title:'Contact'
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 50px;
}
h3 {
  text-align: center;
  font-size: 50px;
}
h5 {
  text-align: center;
  font-size: 30px;
}
.contact {
  margin: 100px 100px 100px 100px;
  font-family:'Courier New', Courier, monospace;
  font-size: 40px;
  text-align: center;
}
</style>