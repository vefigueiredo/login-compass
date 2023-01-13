<template>
  <div class="error">
    <div class="error__h1">
        <p>{{ text }}</p>
    </div>
    <div class="error__p">
        <p>{{ message }}</p>
    </div>

    <div class="error__button">
      <Button type="button" id="btn-error" @click="toLogin">{{ btnValue }}</Button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'ErrorNumber',
  props: {
    text: {
      type: String,
      default: '404'
    },
    message: {
      type: String,
      default: 'Esta página não existe.Vamos encontrar um lugar melhor para você ir.'
    },
    btnValue: {
      type: String,
      default: 'Voltar para página inicial'
    }
  },
  methods: {

    toLogin () {
      window.location.pathname = '/content/vue/login/login.html'
    }
  }
}
</script>

<style lang="scss">
  @import "./ErroNumber.scss";
</style>
