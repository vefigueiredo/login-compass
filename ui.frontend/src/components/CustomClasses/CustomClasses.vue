<template>
  <div this-component-is-responsible-to-allow-custom-classes-on-aem></div>
</template>

<script>
export default {
  name: 'CustomClasses',
  mounted () {
    // login
    const elementlogin = document.querySelector('[cqpath="/content/vue/login/login/jcr:content/root"] div')
    if (elementlogin) {
      const body = document.getElementsByTagName('body')[0]
      body.classList.add('bg-gray')
    }

    // home
    const elementhome = document.querySelector('[cqpath="/content/vue/login/home/jcr:content/root"] div')
    if (elementhome) {
      const logado = localStorage.storedData

      if (logado === 'Logado') {
        console.log('Logado com sucesso')
      } else {
        window.location.pathname = '/content/vue/login/401.html'
      }

      // const body = document.getElementsByTagName('body')[0]
      // body.classList.add('bg-white')
    }

    // busca
    const elementbusca = document.querySelector('[cqpath="/content/vue/login/busca/jcr:content/root"] div')
    if (elementbusca) {
      const logado = localStorage.storedData

      if (logado === 'Logado') {
        console.log('Logado com sucesso')
      } else {
        window.location.pathname = '/content/vue/login/401.html'
      }

      const body = document.getElementsByTagName('body')[0]
      body.classList.add('bg-gray')
    }

    // usuario
    const elementusuario = document.querySelector('[cqpath="/content/vue/login/usuario/jcr:content/root"] div')
    if (elementusuario) {
      const body = document.getElementsByTagName('body')[0]
      body.classList.add('bg-gray')
    }

    // 404
    const element404 = document.querySelector('[cqpath="/content/vue/login/404/jcr:content/root"] div')
    if (element404) {
      const body = document.getElementsByTagName('body')[0]
      body.classList.add('bg-gray')
    }

    // 401
    const element401 = document.querySelector('[cqpath="/content/vue/login/401/jcr:content/root"] div')
    if (element401) {
      const body = document.getElementsByTagName('body')[0]
      body.classList.add('bg-gray')
    }

    /*
    const elementhome = document.querySelector('[cqpath="/content/vue/login/home/jcr:content/root"] div')
    if (elementhome) {
      elementhome.classList.add('bg-white')
    }
    */
    // const element404 = document.querySelector('[cqpath="/content/vue/login/404/jcr:content/root"] div')
    // if (element404) {
    // element404.classList.add('bg-gray')
    // }

    // const containerRight = document.querySelector('[cqpath="/content/vue/login/home/jcr:content/root/responsivegrid/container"] div')
    // containerRight.classList.add('bg-green')
  }
}
</script>

<style lang="scss">
.bg-gray {
  //background-color: gray;
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  height: 100vh;
  //padding: 50px;
  //height: auto;
}
.bg-white {
  //background-color: white;
  background: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  //padding: 100%;
}
</style>
