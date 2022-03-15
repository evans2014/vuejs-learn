<template>
  <div class="profile">
    
    <h2>Profile ({{UserId}})</h2>

  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
     UserId:this.$route.params.user_id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: normal;
}

</style>
