<!--
    Author: Barrientos, Abigail S.
    File Name: Skills.vue 
    Description: Displays the Skills in Programming Language
-->

<!-- Code for the Skills Component -->
<template>
 <div id="skills">
    <div class="alert alert-danger" role="alert">
      <h1>{{ msg6 }}</h1>
      <h5><strong>COLOR MARKING</strong></h5>
        <p>Java: Green | Python: Blue | HTML: Yellow | PHP: Red</p>
          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <div class="progress">
            <div class="progress-bar bg-info" role="progressbar" style="width: 70%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 85%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <div class="progress">
              <div class="progress-bar bg-danger" role="progressbar" style="width: 80%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
    </div>
  </div>
</template>

<!-- Script for the Skills Component -->
<script>

export default {
  name: 'skills',
  data () {
    return{
      msg6: 'Skills'
    }
  }
}

</script>
