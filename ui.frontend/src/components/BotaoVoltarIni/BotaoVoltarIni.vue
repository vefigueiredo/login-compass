<template>
      <div class="button">
        <Button type="button" id="btn-login" >{{ btnValue }}</Button>
      </div>
  </template>

<script>

export default {
  name: 'BotaoVoltarIni',
  props: {
    btnValue: {
      type: String,
      default: 'Voltar para página inicial'
    }
  }
}
</script>

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');

button {
  box-sizing: border-box;

  position: absolute;
  width: 379px;
  height: 67px;
  left: 770px;
  top: 659px;

  /* Outros - grad */

  background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;

  color: #FFFFFF;

}

@media only screen and (max-width: 600px) {
  .button {
    box-sizing: border-box;

    position: absolute;
    width: 379px;
    height: 67px;
    left: 770px;
    top: 659px;

    /* Outros - grad */

    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;

    color: #FFFFFF;
  }
}

  </style>
