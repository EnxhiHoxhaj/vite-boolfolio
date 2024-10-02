<script>
import Navbar from './components/partials/Navbar.vue';
export default {
  components:{
    Navbar
  }
}
</script>

<template>
    <div class="container">
      <div>
        <Navbar/>
      </div>

      <router-view></router-view>
    </div>
</template>

<style lang="sass" scoped>

</style>
