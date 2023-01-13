<template>
  <div class="text">{{ text }}</div>
</template>

<script>

export default {
  name: 'ParaContinuar',
  props: {
    text: {
      type: String,
      default: 'Para continuar navegando de forma segura, efetue o login na rede.,'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');

.text {
  position: absolute;
  width: 301px;
  height: 52px;
  left: 287px;
  top: 290px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  /* Secundária */

  color: #E0E0E0;

}

@media only screen and (max-width: 600px) {
  .text {
    position: absolute;
    width: 301px;
    height: 52px;
    left: 108px;
    top: 296px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    /* Secundária */

    color: #E0E0E0;
  }
}

</style>
