<template lang="">
  <form class="form-login">
    <legend class="form-login__legend">{{ formTitle }}</legend>
    <div class="form-login__p">
      <input v-model.trim="userData.user"
             type="text" id="txt-user"
             :placeholder="userText">
    </div>
    <div class="form-login__p">
      <input v-model.number="userData.userPass"
             type="password" id="txt-pass"
             :placeholder="userPass">
    </div>
    <div class="form-login__p">
      <p >{{errorMessage}}</p>
    </div>
    <div class="form-login__button">
      <Button type="button" id="btn-login" @click="doLogin">{{ btnValue }}</Button>
    </div>
  </form>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import { authService } from '../../service/authService'
// import { weatherService } from '../../service/weatherService'

export default {
  name: 'FormLogin',
  props: {
    formTitle: {
      type: String,
      default: 'Login'
    },
    userText: {
      type: String,
      default: 'Usuário'
    },
    userPass: {
      type: String,
      default: 'Senha'
    },
    btnValue: {
      type: String,
      default: 'Continuar'
    },
    srcUser: {
      type: String,
      default: '/content/dam/vue/icon_user.png'
    },
    srcLogo: {
      type: String,
      default: '/content/dam/vue/icon_pass.png'
    },
    urlRouter: {
      type: String,
      default: 'Login'
    }
  },
  data () {
    return {
      userData: {
        user: '',
        userPass: ''
      },
      errorMessage: ''
    }
  },
  computed: {
    ...mapGetters('auth', {
      errorData: 'getErrorData',
      logged: 'getLogged'
    })
  },
  methods: {
    ...mapActions('auth', ['setErrorDataAction', 'setLogged']),

    errorDataObj (errorUser, errorPass, errorMsg) {
      return {
        errorUser: errorUser,
        errorPass: errorPass,
        errorMsg: errorMsg
      }
    },

    doLogin () {
      const isValid = this.validateInputs()

      if (isValid) {
        // this.setErrorDataAction(false, false, '')

        const authUser = authService.doLogin(this.userData)

        if (authUser.type === 'Error') {
          this.errorMessage = 'Ops, usuário ou senha inválidos. Tente novamente!'
          localStorage.storedData = 'Error'
          console.log(localStorage.storedData)
        } else {
          localStorage.storedData = 'Logado'
          // window.location.pathname = `${this.urlRouter}.html`
          window.location.pathname = '/content/vue/login/home.html'
        }
      } else {
        localStorage.storedData = ''
      }
    },
    validateInputs () {
      const checkRulesUser = /^[a-z.]+$/.test(this.userData.user)
      const checkRulesPass = /^[6-8]+$/.test(this.userData.userPass)

      if (!(this.userData.user) && !(this.userData.userPass)) {
        this.errorMessage = 'Usuário e Senha não pode ser vazio. Tente Novamente!'
        return false
      } else if (!this.userData.user) {
        this.errorMessage = 'Usuário não pode ser vazio. Tente Novamente!'
        return false
      } else if (!this.userData.userPass) {
        this.errorMessage = 'Senha não pode ser vazio. Tente Novamente!'
        return false
      }

      return true
    }
  }
}
</script>

<style lang="scss">
  @import "./FormLogin.scss";
</style>
