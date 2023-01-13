<template>
    <h1 class="error">{{ text }}</h1>
</template>

<script>

export default {
  name: 'ErrorMessage',
  props: {
    text: {
      type: String,
      default: 'Esta página não existe.'
    },
    message: {
      type: String,
      default: 'Vamos encontrar um lugar melhor para você ir'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');

.error {

  width: 310px;
  height: 31px;
  margin-top: 551px;
  margin-left: 805px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #E0E0E0;
  flex: none;
  order: 1;
  flex-grow: 0;
}

</style>
