import CustomClasses from './components/CustomClasses/CustomClasses'
import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/Checkbox/Checkbox'
import Select from './components/Select/Select'
import Header from './components/Header/Header'
import Header404 from './components/Header404/Header404'
import Ihavebad from './components/Ihavebad/Ihavebad'
import Thepage from './components/Thepage/Thepage'
import Espantalho from './components/Espantalho/Espantalho'
import Botaoback from './components/Botaoback/Botaoback'
import Createdby from './components/Createdby/Createdby'

import LoginTexts from './components/LoginTexts/LoginTexts'
import FormLogin from './components/FormLogin/FormLogin'
import CampoLogin from './components/CampoLogin/CampoLogin'
import CampoSenha from './components/CampoSenha/CampoSenha'
import BotaoLogin from './components/BotaoLogin/BotaoLogin'

import ImageLogin from './components/ImageLogin/ImageLogin'
import LogoLogin from './components/LogoLogin/LogoLogin'
import Ola from './components/Ola/Ola'
import LoginWord from './components/LoginWord/LoginWord'
import ParaContinuar from './components/ParaContinuar/ParaContinuar'

import HomeHeader from './components/HomeHeader/HomeHeader'

import HomeLogo from './components/HomeLogo/HomeLogo'
import HomeBall from './components/HomeBall/HomeBall'
import HomeDescription from './components/HomeDescription/HomeDescription'
import HomeDayInfo from './components/HomeDayInfo/HomeDayInfo'
import HomeWeather from './components/HomeWeather/HomeWeather'
import HomeWeatherIcon from './components/HomeWeatherIcon/HomeWeatherIcon'
import HomeFooterBar from './components/HomeFooterBar/HomeFooterBar'

import SearchUser from './components/SearchUser/SearchUser'
import LogoSearch from './components/LogoSearch/LogoSearch'
import ImageSearch from './components/ImageSearch/ImageSearch'

import UserData from './components/UserData/UserData'
import ReposData from './components/ReposData/ReposData'

import ErrorNumber from './components/ErrorNumber/ErrorNumber'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'

import Footer from './components/Footer/Footer'
import Image from './components/Image/Image'
import Main from './components/Main/Main'
import Multifield from './components/Multifield/Multifield'

import BotaoVoltarIni from './components/BotaoVoltarIni/BotaoVoltarIni'

import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

MapTo('vue/components/customclasses')(CustomClasses, EditConfig)

// Select Component Mapping
MapTo('vue/components/select')(Select, EditConfig)

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

// Header Component Mapping
MapTo('vue/components/header')(Header, EditConfig)

MapTo('vue/components/header404')(Header404)

MapTo('vue/components/ihavebad')(Ihavebad)

MapTo('vue/components/thepage')(Thepage)

MapTo('vue/components/espantalho')(Espantalho)

MapTo('vue/components/botaoback')(Botaoback)

MapTo('vue/components/createdby')(Createdby)

MapTo('vue/components/formlogin')(FormLogin)

MapTo('vue/components/campologin')(CampoLogin)

MapTo('vue/components/camposenha')(CampoSenha)

MapTo('vue/components/loginword')(LoginWord)

MapTo('vue/components/botaologin')(BotaoLogin)

MapTo('vue/components/imagelogin')(ImageLogin)

MapTo('vue/components/logologin')(LogoLogin)

MapTo('vue/components/ola')(Ola)

MapTo('vue/components/paracontinuar')(ParaContinuar)

MapTo('vue/components/botaovoltarini')(BotaoVoltarIni)

// Error
MapTo('vue/components/error-number')(ErrorNumber)
MapTo('vue/components/error-message')(ErrorMessage)

// Header Component Mapping
MapTo('vue/components/main')(Main, EditConfig)

// Footer Component Mapping
MapTo('vue/components/footer')(Footer, EditConfig)

// Multifield Component Mapping
MapTo('vue/components/multifield')(Multifield, EditConfig)

// Image Component Mapping
MapTo('vue/components/image')(Image, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/image'
})

// Text Component Mapping
MapTo('vue/components/text')(Text, {
  emptyLabel: 'Text',
  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1
  }
})

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)

// Login
MapTo('vue/components/login-texts')(LoginTexts, EditConfig)

// Home
MapTo('vue/components/home-header')(HomeHeader, EditConfig)
MapTo('vue/components/home-logo')(HomeLogo, EditConfig)
MapTo('vue/components/home-ball')(HomeBall, EditConfig)
MapTo('vue/components/home-description')(HomeDescription, EditConfig)
MapTo('vue/components/home-day-info')(HomeDayInfo, EditConfig)
MapTo('vue/components/home-day-weather')(HomeWeather, EditConfig)
MapTo('vue/components/home-day-weather-icon')(HomeWeatherIcon, EditConfig)
MapTo('vue/components/home-footer-bar')(HomeFooterBar, EditConfig)

// Search
MapTo('vue/components/search-user')(SearchUser, EditConfig)
MapTo('vue/components/logo-search')(LogoSearch, EditConfig)
MapTo('vue/components/image-search')(ImageSearch, EditConfig)

// User
MapTo('vue/components/user-data')(UserData, EditConfig)
MapTo('vue/components/repos-data')(ReposData, EditConfig)
