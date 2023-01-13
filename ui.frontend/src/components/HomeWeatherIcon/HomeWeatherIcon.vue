<template lang="">
  <div class="home-weather">
      <img class="home-weather__img" :src="iconWeather">
  </div>
</template>

<template lang="">
    <div class="home-weather">
            <figure class="home-weather__wrapper--img">
                <img :src="iconWeather" alt="">
            </figure>
    </div>
</template>
<script>

import { mapGetters } from 'vuex'
import { weatherService } from '../../service/weatherService'
import getStateAbb from '../../enum/statesBr'

export default {
  name: 'HomeWeatherIcon',
  props: {},
  data () {
    return {
      cityState: '',
      iconWeather: '',
      temperature: ''
    }
  },
  methods: {
    ...mapGetters('auth', {
      errorData: 'getErrorData',
      logged: 'getLogged'
    }),

    doCityStateStr (city, state) {
      return `${city} - ${getStateAbb(state).sigla}`
    },

    castTemperature (temperature) {
      return temperature.toString().substr(0, 2)
    }

  },
  mounted () {
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
  }
}
</script>
<style lang="scss">
     @import "./homeWeatherIcon.scss";
</style>
