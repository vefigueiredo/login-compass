<template lang="">
    <figure class="home-figure-ball">
        <img class="home-figure-ball__img" :src="src" alt="logo compass.uol">
        <img class="home-figure-ball__img--mobile" :src="srcMobile" alt="logo compass.uol">
    </figure>
</template>
<script>
export default {
  name: 'HomeBall',
  props: {
    src: {
      type: String,
      default: '/content/dam/vue/uol-ball-transparent.png'
    },
    srcMobile: {
      type: String,
      default: '/content/dam/uol-ball-transparent.png'
    },
    className: {
      type: String
    }
  }
}
</script>
<style lang="scss">
 @import "./HomeBall.scss";
</style>
