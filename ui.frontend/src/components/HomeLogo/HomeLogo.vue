<template lang="">
    <div class="home-figure">
        <img class="home-figure__img" :src="src" alt="logo Compass UOL">
        <img class="home-figure__img--mobile" :src="srcMobile" alt="logo Compass UOL">
    </div>
</template>
<script>
export default {
  name: 'HomeLogo',
  props: {
    src: {
      type: String,
      default: '/content/dam/compassuol-logo-black.png'
    },
    srcMobile: {
      type: String,
      default: '/content/dam/compassuol-logo-black.png'
    },
    className: {
      type: String
    }
  },
  mounted () {
    this.getLocalStorage()
  },
  methods: {
    async getLocalStorage () {
      // console.log(localStorage.storedData)
    }
  }
}
</script>
<style lang="scss">
 @import "./HomeLogo.scss";
</style>
