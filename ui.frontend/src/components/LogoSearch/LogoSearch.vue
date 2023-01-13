<template>
  <img :src="src" class="img"/>
</template>

<script>
export default {
  name: 'LogoSearch',
  props: {
    src: {
      type: String,
      default: '/content/dam/vue/compassuol_logo.png'
    }
  }
}
</script>

<style scoped>

.img {
  position: absolute;
  width: 349px;
  height: 94px;
  left: 1440px;
  top: 52px;

}

@media only screen and (max-width: 600px) {
  .img {
    position: absolute;
    width: 349px;
    height: 94px;
    left: 84px;
    top: 33px;
  }
}

</style>
