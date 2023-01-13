<template lang="">
  <div id="container">
    <header class="header">
      <div class="home-figure">
          <img class="home-figure__img" :src="src" alt="logo Compass UOL">
          <img class="home-figure__img--mobile" :src="srcMobile" alt="logo Compass UOL">
      </div>

      <div class="home-day-info">
          <h1 class="home-day-info__title"> {{ actualTime }} </h1>
          <p class="home-day-info__info">{{ completeDate }}</p>
      </div>

      <div class="home-weather">
        <h1 v-show="cityState" class="home-weather__title"> {{ cityState }} </h1>
        <div v-show="iconWeather" class="home-weather__wrapper">
            <figure class="home-weather__wrapper--img">
                <img :src="iconWeather" alt="">
            </figure>
            <p v-show="temperature" class="home-weather__wrapper--p">
                {{ temperature }}
            </p>
        </div>
      </div>

    </header>
  </div>
</template>

<script>

import dateTimeHelper from '../../utils/dateTimeHelper'
import { mapGetters } from 'vuex'
import { weatherService } from '../../service/weatherService'
import getStateAbb from '../../enum/statesBr'

export default {
  name: 'HomeHeader',
  props: {
    src: {
      type: String,
      default: '/content/dam/compassuol-logo-black.png'
    },
    srcMobile: {
      type: String,
      default: '/content/dam/compassuol-logo-black.png'
    },
    className: {
      type: String
    }
  },
  data () {
    return {
      actualTime: '',
      completeDate: '',
      cityState: '',
      iconWeather: '',
      temperature: ''
    }
  },
  mounted () {
    this.getLocalStorage()

    setInterval(() => {
      const dateTime = dateTimeHelper.getCompleteDate()
      this.actualTime = dateTime.actualTime
      this.completeDate = dateTime.completeDate
    }, '1000')

    navigator.geolocation.getCurrentPosition(
      position => {
        weatherService.getStreetAddressFrom(position.coords.latitude, position.coords.longitude)
          .then(res => {
            this.cityState = this.doCityStateStr(res[0].name, res[0].state)

            weatherService.getWeather(res[0].name).then(res => {
              this.iconWeather = `http://openweathermap.org/img/w/${res.weather[0].icon}.png`
              this.temperature = `${this.castTemperature(res.main.temp)}°`
            })
          })
      },
      error => {
        console.log(error.message)
      }
    )
  },
  methods: {
    async getLocalStorage () {
      // console.log(localStorage.storedData)
    },

    doCityStateStr (city, state) {
      return `${city} - ${getStateAbb(state).sigla}`
    },

    castTemperature (temperature) {
      return temperature.toString().substr(0, 2)
    }
  }
}
</script>
<style lang="scss">
 @import "./HomeHeader.scss";
</style>
