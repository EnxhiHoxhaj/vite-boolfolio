<script>
export default {
    name: 'Navbar'
}

</script>

<template>
    <ul class="ul-navbar">
        <li><router-link :to="{name:'home'}">Home</router-link></li>
        <li><router-link :to="{name:'about'}">Chi siamo</router-link></li>
        <li><router-link :to="{name:'blog'}">Blog</router-link></li>
        <li><router-link :to="{name:'contacts'}">Contatti</router-link></li>
    </ul>
</template>

<style lang="sass" scoped>

</style>