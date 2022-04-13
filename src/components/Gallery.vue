<template>
  <div class="gallery">
    <div class="alert alert-danger" role="alert">
        <h1><strong>{{title}}</strong></h1>
        </div>
      <div class="alert alert-primary" role="alert">
        <div class="img-gallery">
          <div class="column">
          <img src="../assets/image1.jpg" alt="img1" style="width:600px;height:400px;"><router-view/>
          <img src="../assets/image2.jpg" alt="img2" style="width:600px;height:400px;"><router-view/>
          <img src="../assets/image3.jpg" alt="img3" style="width:600px;height:400px;"><router-view/>
          <img src="../assets/image4.jpg" alt="img4" style="width:600px;height:400px;"><router-view/>
          <img src="../assets/image5.jpg" alt="img5" style="width:600px;height:400px;"><router-view/>
          <img src="../assets/image6.jpg" alt="img6" style="width:600px;height:400px;"><router-view/>
          <img src="../assets/image7.jpg" alt="img7" style="width:600px;height:400px;"><router-view/>
          <img src="../assets/image8.jpg" alt="img8" style="width:600px;height:400px;"><router-view/>
          <img src="../assets/image9.jpg" alt="img9" style="width:600px;height:400px;"><router-view/>
          <img src="../assets/image10.jpg" alt="img10" style="width:600px;height:400px;"><router-view/>
          <img src="../assets/image11.jpg" alt="img11" style="width:600px;height:400px;"><router-view/>
          <img src="../assets/image12.jpg" alt="img12" style="width:600px;height:400px;"><router-view/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data: function() {
    return {
      title:'Gallery',
      Image1: require('../assets/image1.jpg'),
      Image2: require('../assets/image2.jpg'),
      Image3: require('../assets/image3.jpg'),
      Image4: require('../assets/image4.jpg'),
      Image5: require('../assets/image5.jpg'),
      Image6: require('../assets/image6.jpg'),
      Image7: require('../assets/image7.jpg'),
      Image8: require('../assets/image8.jpg'),
      Image9: require('../assets/image9.jpg'),
      Image10: require('../assets/image10.jpg'),
      Image11: require('../assets/image11.jpg'),
      Image12: require('../assets/image12.jpg')
    }
  }
}
</script>

<style scoped>
.gallery {
  margin: 100px 100px 100px 100px;
  font-family:'Courier New', Courier, monospace;
  font-size: 40px;
  text-align: center;
}
h1 {
  text-align: center;
  font-size: 50px;
}
.img-gallery {
  display: flex;
  text-align: center;
}
.column {
  flex: 40%;
  padding: 5px;
}
</style>