<template> 
  <div id="app">
    <h2>{{title}}</h2>
    <NavbarTop ></NavbarTop>
    <FooterMain />
  </div>   
</template>

<script>

import FooterMain from './components/FooterMain.vue'
import NavbarTop from './components/NavbarTop'
export default {
  name: 'App',
  data(){
    return{
      title:'Vue js APP'
    }
  },
  components: {
    NavbarTop,
    FooterMain
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
