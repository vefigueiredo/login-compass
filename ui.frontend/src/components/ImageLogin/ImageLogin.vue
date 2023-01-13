<template>
  <div class="img">
    <img :src="src"/>
  </div>
</template>

<script>
export default {
  name: 'ImageLogin',
  props: {
    src: {
      type: String,
      default: '/content/dam/vue/imageNoteLogin.png'
    }
  }
}
</script>

<style lang="scss">
 @import "./ImageLogin.scss";
</style>
