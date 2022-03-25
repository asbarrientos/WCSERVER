<!--
    Author: Barrientos, Abigail S.
    File Name: Education.vue 
    Description: Displays the Educational Background
-->

<!-- Code for the Education Component -->
<template>
  <div id="education">
    <div class="alert alert-warning" role="alert">
      <h1>{{ msg6 }}</h1>
      <h5><strong>College</strong></h5>
        <h6>Holy Angel University</h6>
        <h6>Sto. Rosario St. Angeles City, Pampanga</h6>
        <h6>(S.Y. 2020 – Present)</h6>

      <h5><strong>Senior High School</strong></h5>
        <h6>Holy Angel University </h6>
        <h6>Sto. Rosario St. Angeles City, Pampanga </h6>
        <h6>(S.Y. 2018 – 2020 )</h6>

      <h5><strong>Secondary</strong></h5>
        <h6>Holy Angel University </h6>
        <h6>Sto. Rosario St. Angeles City, Pampanga </h6>
        <h6>(S.Y. 2014 – 2018)</h6>

      <h5><strong>Primary</strong></h5>
        <h6>Telabastagan Integrated School </h6>
        <h6>Telabastagan, City of San Fernando, Pampanga </h6>
        <h6>(Year Graduated 2014)</h6>
    </div>
  </div>
</template>

<!-- Script for the Education Component -->
<script>
export default {
  name: 'education',
  data () {
    return{
      msg6: 'Educational Background'
    }
  }
}
</script>