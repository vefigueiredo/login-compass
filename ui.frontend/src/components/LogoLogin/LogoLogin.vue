<template>
  <div class="image">
    <img :src="src" class="image-img"/>
  </div>
</template>

<script>
export default {
  name: 'LogoLogin',
  props: {
    src: {
      type: String,
      default: '/content/dam/vue/compassuol_logo.png'
    }
  }
}
</script>

<style lang="scss">

.image {

    img {
      position: absolute;
      width: 349px;
      height: 94px;
      left: 1265px;
      top: 25px;

    }

    @media only screen and (max-width: 600px) {

      img {
        width: 349px;
        height: 94px;
        margin-top: 00px;
        margin-left: -1230px;
      }
    }
}
</style>
