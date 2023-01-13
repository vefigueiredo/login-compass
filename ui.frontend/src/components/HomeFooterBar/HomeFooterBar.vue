<template lang="">
    <div class="home-footer-bar">
        <div class="home-footer-bar__info">
            <p>{{ info }}</p>
            <div></div>
        </div>
        <div class="home-footer-bar__refreshText">
            <p>{{ refreshText }}</p>
        </div>
        <div class="home-footer-bar__refreshCount">
            <p class="home-footer-bar__refreshCount--number">{{ timerCount }}</p>
            <p class="home-footer-bar__refreshCount--text">{{ refreshCountText }}</p>
        </div>
        <div class="home-footer-bar__acessarBusca">
            <p><a @click="doSearch"> {{ acessarBusca }} </a></p>
        </div>
        <div class="home-footer-bar__logout">
            <p> <a @click="doLogout"> {{ logoutText }} </a></p>
        </div>
    </div>
</template>
<script>

import dateTimeHelper from '../../utils/dateTimeHelper'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomeFooterBar',
  props: {
    urlRouter: {
      type: String,
      default: 'Login'
    },
    info: {
      type: String,
      default: 'Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.'
    },
    txtSearch: {
      type: String,
      default: 'Buscar Usuários'
    },
    refreshText: {
      type: String,
      default: 'Application refresh in'
    },
    refreshCountNumber: {
      type: String,
      default: '180'
    },
    refreshCountText: {
      type: String,
      default: 'seconds'
    },
    acessarBusca: {
      type: String,
      default: 'Acessar Busca'
    },
    logoutText: {
      type: String,
      default: 'Logout'
    }

  },
  data () {
    return {
      timerCount: 600
    }
  },
  methods: {
    ...mapActions('auth', ['destroyLogged']),

    doLogout () {
      // this.destroyLogged()
      localStorage.storedData = null
      this.redirect()
    },

    redirect () {
      // window.location.pathname = `${this.urlRouter}.html`
      window.location.pathname = '/content/vue/login/login.html'
    },

    doSearch () {
      window.location.pathname = '/content/vue/login/busca.html'
    }

  },
  computed: {
    ...mapGetters('auth', {
      logged: 'getLogged'
    })
  },
  mounted () {

  },
  watch: {

    timerCount: {
      handler (value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--
          }, 1000)
        }
      },
      immediate: true
    }
  }
}

</script>
<style lang="scss">
    @import "./homeFooterBar.scss";
</style>
