
<template lang="">
  <Section>
    <Section class="search-user">
        <div class="search-user__article">
            <h1 class="search-user__h1">{{ headerTitle }}</h1>
            <p class="search-user__p">{{ text }}</p>
        </div>
        <div class="search-user__field">
          <input v-model.trim="userData"
            type="text" id="txt-user"
            :placeholder="userText">
        </div>
        <div class="search-user__button">
          <Button type="button" class="search-user__button" id="btn-search" @click="doGet">

              <div class="search-user__button-text">
                  {{btnValue}}
              </div>
              <div class="search-user__button-img">
                  <img src="/content/dam/Lupa.png" alt="">
              </div>

          </Button>
        </div>
    </Section>
    <Section class="user">
        <div v-show="userList" v-for="user in userList" v-bind:key="user.id"  class="user-data">
            <div class="user-data-img">
                <img :src="user.avatar_url" :alt="user.name">
            </div>
            <div>
                <div class="user-data-name">{{ user.name }}</div>
                <div class="user-data-bio">{{ user.bio }}</div>
            </div>
            <Button class="user-data-btn"
              type="button"
              id="btn-ver"
              @click="doGetGitHub(user.login)">
              <div class="user-data-btn-text">{{ btnVer }}</div>
            </Button>
        </div>
    </Section>
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
    },
    btnVer: {
      type: String,
      default: 'VER MAIS'
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
      user: {
        img: '',
        name: '',
        bio: ''
      },
      userList: '',
      userData: ''
    }
  },
  methods: {

    doGet () {
      axios.get(`https://api.github.com/search/users?q=${this.userData}`).then((response) => {
        console.log(response.data.items)

        const gitUsers = response.data.items

        const listUser = []

        gitUsers.map((user, index) => {
          if (index < 3) {
            this.doGetUser(user.login).then((res) => {
              listUser.push(res)
            })
          }
        })

        this.userList = listUser
      })
    },
    async doGetUser (elmnt) {
      const response = await axios.get(`https://api.github.com/users/${elmnt}`)

      return response.data
    },
    doGetGitHub (elmnt) {
      const userSearch = localStorage.storedParam = elmnt

      window.location.pathname = '/content/vue/login/usuario.html'
    }

  }

}
</script>

<style lang="scss" scoped>
@import "./SearchUser.scss";
</style>
