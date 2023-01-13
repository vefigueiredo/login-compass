<template>
  <div class="text">{{ text }}</div>
</template>

<script>

export default {
  name: 'LoginWord',
  props: {
    text: {
      type: String,
      default: 'Login'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');

.text {
  position: absolute;
  width: 79px;
  height: 45px;
  left: 287px;
  top: 477px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;

  color: #E0E0E0;

}

@media only screen and (max-width: 600px) {
  .text {
    position: absolute;
    width: 79px;
    height: 45px;
    left: 287px;
    top: 477px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    /* identical to box height */

    /* Secundária */

    color: #E0E0E0;
  }
}

</style>
