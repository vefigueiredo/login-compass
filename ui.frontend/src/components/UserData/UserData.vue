<template lang="">
        <div class="userdata">

            <div>
                <div class="userdata-img">
                      <img :src="user.avatar_url">
                </div>
                <div class="userdata-name">{{ user.name }}</div>
                <div class="userdata-bio">{{ user.bio }}</div>
            </div>
          <div v-if="view == 1">
            <div class="userdata-repos">
              <div class="userdata-repos-loop" v-for="(repo, i) in repos" :key="repo.id">
                <div v-if="i < viewmore">
                  <div v-if="i == 0" class="userdata-repos-loop__traco">
                      <div></div>
                  </div>
                  <div v-else class="userdata-repos-loop__traco">
                      <hr>
                  </div>
                  <div class="userdata-repos-loop-flex">
                    <div class="userdata-repos-loop-flex-container">
                      <h1 class="userdata-repos-loop-flex-container__h1">{{repo.name}}</h1>
                      <p class="userdata-repos-loop-flex-container__p">{{repo.description}}</p>
                    </div>

                    <div v-if="repo.stargazers_count == 1" class="userdata-repos-loop-flex__star">
                        <img :src="srcStarYellon" alt="Favorito">
                    </div>
                    <div v-else class="userdata-repos-loop-flex__star">
                      <img :src="srcStarGray" alt="">
                    </div>
                    <Button type="button" class="userdata-repos-loop-flex__btn" id="btn-compartilhar" >COMPARTILHAR</Button>
                    <Button type="button" class="userdata-repos-loop-flex__btn-mobile" id="btn-compartilhar" ><img :src="share" alt=""></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="userdata-starred">
              <div class="userdata-starred-loop" v-for="(starr, i)  in starred" :key="starr.id">
                <!-- <div v-if="i < viewmore"> -->
                  <div v-if="i == 0" class="userdata-starred-loop__traco">
                        <div></div>
                    </div>
                    <div v-else class="userdata-starred-loop__traco">
                        <hr>
                    </div>
                    <div class="userdata-repos-loop-flex">
                      <div class="userdata-starred-loop-flex-container">
                        <h1 class="userdata-starred-loop-flex-container__h1">{{starr.name}} ({{starr.owner.login}})</h1>
                        <p class="userdata-starred-loop-flex-container__p">{{starr.description}}</p>
                      </div>

                      <div v-if="starr.stargazers_count == 1" class="userdata-starred-loop-flex__star">
                          <img :src="srcStarYellon" alt="Favorito">
                      </div>
                      <Button type="button" class="userdata-starred-loop-flex__btn" id="btn-compartilhar" >COMPARTILHAR</Button>
                      <Button type="button" class="userdata-starred-loop-flex__btn-mobile" id="btn-compartilhar" >C</Button>
                    </div>
                  </div>
                <!-- </div> -->
            </div>
          </div>
            <Button type="button" class="userdata-btnback" @click="doSearch">{{ txtVoltar }}</Button>

            <div class="userdata-repositorios" @click="ReposView">
              <div class="userdata-repositorios-text">
                Repositórios:
              </div>
              <div class="userdata-repositorios-total">
                {{ totalrepos }}
              </div>
            </div>
            <div class="userdata-favoritos" @click="StarredView">
              <div class="userdata-favoritos-text">
                Favoritos:
              </div>
              <div class="userdata-repositorios-total">
                {{ totalfavo }}
              </div>
            </div>
            <div class="userdata-viewmore" @click="ViewMore">
              Ver mais repositórios
              <img :src="down" alt="">
             </div>
             
            <!--
            <div class="userdata-starred">
              <div v-for="star in starred" :key="star.id">
                <h1 class="userdata-starred__h1">{{star.name}}</h1>
                <p class="userdata-starred__p">{{star.description}}</p>
                <Button type="button" class="userdata-starred__btn" id="btn-compartilhar" >COMPARTILHAR</Button>
              </div>
            </div>
            -->
        </div>
  </template>

<script>

import axios from 'axios'

export default {
  name: 'UserData',
  props: {
    txtVoltar: {
      type: String,
      default: 'VOLTAR'
    },
    srcStarYellon: {
      type: String,
      default: '/content/dam/Star.png'
    },
    srcStarGray: {
      type: String,
      default: '/content/dam/StarGray.png'
    },
    share: {
      type: String,
      default: '/content/dam/vue/compartilhar.png'
    },
    down: {
      type: String,
      default: '/content/dam/vue/down.png'
    }
  },
  data () {
    return {
      user: {
        img: '',
        name: '',
        bio: ''
      },
      totalrepos: 0,
      totalfavo: 0,
      repos: null,
      starred: null,
      view: 1,
      viewmore: 4
    }
  },
  mounted () {
    this.getUserData()
  },
  methods: {
    async getUserData () {
      const logado = localStorage.storedData

      const userSearch = localStorage.storedParam

      const response = await axios.get(`https://api.github.com/users/${userSearch}`)
      this.user = response.data

      const response1 = await axios.get(`https://api.github.com/users/${userSearch}/repos`)
      this.repos = response1.data
      this.totalrepos = response1.data.length

      const response2 = await axios.get(`https://api.github.com/users/${userSearch}/starred`)
      this.starred = response2.data
      this.totalfavo = response2.data.length
    },

    doSearch () {
      window.location.pathname = '/content/vue/login/busca.html'
    },

    ReposView () {
      // console.log('Exibe os repositorios')
      this.view = 1
    },
    StarredView () {
      // console.log('Exibe os favoritos')
      this.view = 2
    },

    ViewMore () {
      // console.log('Exibir Mais')
      this.viewmore = this.viewmore + 4
      // console.log(this.viewmore)
    }
  }

}
</script>

<style lang="scss" scoped>
@import "./UserData.scss";
</style>
