
<template lang="">
    <Section class="search-user">
        <div class="search-user__article">
            <h1 class="search-user__h1">{{ headerTitle }}</h1>
            <p class="search-user__p">{{ text }}</p>
        </div>
        <div class="search-user__field">
          <!--<input v-model.trim="userData.user"-->
          <input
             type="text" id="txt-user"
             :placeholder="userText">
        </div>
        <div class="search-user__button">
          <Button type="button" id="btn-login" @click="doGet">{{ btnValue }}</Button>
        </div>
        <div v-for="repo in repos" :key="repo.id">
          {{repo.name}}
        </div>

    </Section>
</template>

<script>

// import { githubService } from '../../service/githubService'
import axios from 'axios'

export default {
  name: 'SearchUser',
  props: {
    headerTitle: {
      type: String,
      default: 'Busca'
    },
    text: {
      type: String,
      default: 'Para encontrar o usuário desejado digite seu nome abaixo.'
    },
    userText: {
      type: String,
      default: 'Ex: Thauany'
    },
    btnValue: {
      type: String,
      default: 'Buscar'
    }
  },
  /*
  data () {
    return {
      userData: {
        user: ''
      }
    }
  },
  */
  data () {
    return {
      repos: null
    }
  },

  methods: {

    doGet () {
      axios.get('https://api.github.com/users/rodriguesfelipeti/repos').then((response) => {
        this.repos = response.data
      })
      /*
      this.loading = true
      fetch('https://api.github.com/users/rodriguesfelipeti', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })
        .then((response) => {
          response.json().then((x) => (this.userData = x))
          this.loading = false
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
          this.loading = false
        })
        */
      /*
      githubService.getUser(this.userData).then(res => {
       this.userData = `${this.castUser(res.login)}`
      }
      */
    }

  }

}
</script>

<style lang="scss">
  @import "./SearchUser.scss";
</style>
