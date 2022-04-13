<template>
  <div class="about">
    <div class="alert alert-danger" role="alert">
        <h1><strong>{{title}}</strong></h1>
    </div>
    <div class="alert alert-primary" role="alert">
        <p>I am Abby Barrientos by name, April 09 is my birth date so basically I am 22 years old now. 
          I am currently in Second year college and i am taking a Bachelor's Science in Information Technology major in Web Development at Holy Angel University.
          I find this course difficult, but I am trying my best to pass it because I know in my heart I can do it. I come from a family of six, and I occupy the last position. I have three siblings, and we are all girls.
          My father is a former President of the Jeepney Association in Angeles City and has been for the past nine years, while my mother has been a housewife since.
          We are very close in my family, and I can tell my parents just about anything. I've grown to appreciate plants since the pandemic began.They are my stress relievers.
          I have more than 20 different plants in our small garden. I like to travel, but I am scared of heights.</p>
    </div>
  </div>
</template>
<script> 
export default {
  name: 'about',
  data (){
    return{
      title:'About'
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 60px;
}
.about {
  margin: 100px 100px 100px 100px;
  font-family:'Courier New', Courier, monospace;
  font-size: 40px;
  text-align: center;
}
</style>