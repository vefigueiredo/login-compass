<template>
  <div class="text">{{ text }}</div>
</template>

<script>

export default {
  name: 'Ola',
  props: {
    text: {
      type: String,
      default: 'Olá,'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');

.text {
  position: absolute;
  width: 115px;
  height: 90px;
  left: 287px;
  top: 197px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 90px;

  color: #E0E0E0;

}

@media only screen and (max-width: 600px) {
  .text {
    position: absolute;
    width: 115px;
    height: 90px;
    left: 108px;
    top: 203px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 90px;

    color: #E0E0E0;
  }
}

</style>
