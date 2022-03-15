import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'




// Globally Filter Created
/*Vue.filter('snippet', val=>{
  if (!val || typeof(val) != 'string') return ''
})*/

/*new Vue({
    render: h=>h(App),
}).$mout('#app')*/
createApp(App).mount('#app')
