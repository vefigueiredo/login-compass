<template>
        <div >
            <input type="text" id="txt-user" class="input"
            :placeholder="userText" >
        </div>
  </template>

<script>

export default {
  name: 'CampoLogin',
  props: {
    userText: {
      type: String,
      default: 'Usuário'
    },
    srcUser: {
      type: String,
      default: '/content/dam/vue/icon_user.png'
    }
  }
}
</script>

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');

input {
  box-sizing: border-box;

  position: absolute;
  width: 379px;
  height: 60px;
  left: 285px;
  top: 547px;

  background: #26292C;
  border: 1px solid #FFFFFF;
  border-radius: 50px;

}

@media only screen and (max-width: 600px) {
  .input {
    box-sizing: border-box;

    position: absolute;
    width: 379px;
    height: 60px;
    left: 108px;
    top: 494px;

    background: #26292C;
    border: 1px solid #FFFFFF;
    border-radius: 50px;
  }
}

  </style>
