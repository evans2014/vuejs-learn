<template> 
  <div id="app">
    <h2>{{title}}</h2>
    <NavbarTop ></NavbarTop>
    <AllFriends :friends="friends"></AllFriends>
    <OnlineFriends :friends="friends"></OnlineFriends>
    <FooterMain />
  </div>   
</template>

<script>

import FooterMain from './components/FooterMain.vue'
import NavbarTop from './components/NavbarTop'
import AllFriends from './components/AllFriends'
import OnlineFriends from './components/OnlineFriends'
export default {
  name: 'App',
  data(){
    return{
      title:'Vue js APP',
      friends:[
            {name:'A', online:true},
            {name:'B', online:false},
            {name:'C', online:true},
            {name:'D', online:true},
            {name:'E', online:false},
            {name:'f', online:false}
        ] 
    }
  },
  components: {
    NavbarTop,
    FooterMain,
    OnlineFriends,
    AllFriends
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
