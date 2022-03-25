<!--
    Author: Barrientos, Abigail S.
    File Name: Profile.vue 
    Description: Displays the Personal Background
-->

<!-- Code for the Profile Component -->
<template>
  <div id="profile">

    <div class="alert alert-primary" role="alert">
      <h1>{{ msg6 }}</h1>
        <h5><strong>Name:</strong> Abigail Salalila Barrientos</h5>
        <h5><strong>Address:</strong> Bacolor, Pampanga Philippines</h5>
        <h5><strong>Contact No.</strong> 09497959720</h5>
        <h5><strong>Email:</strong> barrientosabigail094@gmail.com</h5>
        <br>
        <h6><strong>Date of Birth:</strong>&nbsp; April 09, 2000</h6>
        <h6><strong>Birthplace:</strong>&nbsp; Angeles City</h6>
        <h6><strong>Age:</strong>&nbsp; 21 years old</h6>
        <h6><strong>Gender:</strong>&nbsp; Female</h6>
        <h6><strong>Civil Status:</strong>&nbsp; Single</h6>
        <h6><strong>Citizenship:</strong>&nbsp; Filipino</h6>
        <h6><strong>Height:</strong>&nbsp; 5"2</h6>
    </div>
  </div>

</template>

<!-- Script for the Profile Component -->
<script>
export default {
  name: 'profile',
  data () {
    return{
      msg6: 'Personal Background'
    }
  }
}
</script>