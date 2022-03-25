<!--
    Author: Barrientos, Abigail S.
    File Name: App.vue 
    Description: Displays all the Components
-->

<template>
  <div id="app">
    <div class="alert alert-success" role="alert">
      <img src="./assets/grad.jpg" height="200px" width="175px">
    
      <h1>{{ msg }}</h1>
      
      <!-- Demo 1. Insert the component name, as shown below -->
      <profile></profile>
      <education></education>
      <skills></skills>
    </div>
  </div>
</template>

<script>
//Import the newly created component
import Profile from './components/Profile.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'


export default {
  name: 'app',
  components: {
    Profile,
    Education,
    Skills
    },
  data () {
    return {
      msg: 'The Main Component'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-weight: normal;
}

h5, h6 {
  text-align: left;
  padding-left: 40%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>