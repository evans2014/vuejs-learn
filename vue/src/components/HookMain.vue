<template>
<div class="Hook">
  <h1>{{title}}</h1>
  <button @click="ChangeTitle">Click Me</button>
</div>    
</template>
<script>
export default {
  name: 'HookMain',
  data() {
    return {
      title:'Hook Main Data'     
    }
  },
  methods: {
    ChangeTitle(){
      this.title='New Title'
    }
  },
  beforeCreate() {
    alert('Before Create Hook')
  },
  created() {
    alert('Created Hook')
  },
  beforeUpdate() {
    alert('Before update message')
  },
}
</script>
<style>


</style>
