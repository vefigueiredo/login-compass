<template lang="">
        <div class="reposdata">
            <!--
            <div class="reposdata-btnvoltar">
              <Button type="button" id="btn-voltar" >{{ btnVoltar }}</Button>
            </div>

            <div class="reposdata-img">
                  <img :src="user.avatar_url">
            </div>
            <div class="reposdata-name">{{ user.name }}</div>
            <div class="reposdata-bio">{{ user.bio }}</div>
            -->
            <div class="reposdata-repos">
              <div v-for="repo in repos" :key="repo.id">
                <h1 class="reposdata-repos__h1">Repositório</h1>
                <p class="reposdata-repos__p">{{repo.name}}</p>
                <Button type="button" class="reposdata-repos__btn" id="btn-compartilhar" >COMPARTILHAR</Button>
              </div>
            </div>
        </div>
  </template>

<script>

import axios from 'axios'

export default {
  name: 'ReposData',
  props: {
    btnVoltar: {
      type: String,
      default: 'VOLTAR'
    }
  },
  data () {
    return {
      user: {
        img: '',
        name: '',
        bio: ''
      },
      repos: null
    }
  },
  mounted () {
    this.getUserData()
  },
  methods: {
    async getUserData () {
      // const response = await axios.get('https://api.github.com/users/vefigueiredo')
      // this.user = response.data

      const response1 = await axios.get('https://api.github.com/users/vefigueiredo/repos')
      this.repos = response1.data
    }
  }

}
</script>

<style lang="scss">
@import "./ReposData.scss";
</style>
