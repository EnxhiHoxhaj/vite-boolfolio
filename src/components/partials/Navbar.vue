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

<style lang="scss" scoped>
.ul-navbar 
{
    width: 300px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    position: absolute;
    right: 20px;
}

.ul-navbar a 
{
    text-decoration: none;
    color: #f6eee1;
    &:hover{
        border-bottom: solid #f7a842;
    }
}
</style>


