<template>
  <img :src="src" class="img"/>
</template>

<script>
export default {
  name: 'ImageSearch',
  props: {
    src: {
      type: String,
      default: '/content/dam/vue/imageSearch.png'
    }
  }
}
</script>

<style scoped>

.img {
  position: absolute;
  width: 590px;
  height: 960px;
  left: 1330px;
  top: 0px;

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
