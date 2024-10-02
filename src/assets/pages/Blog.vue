<script>
import axios from 'axios';

export default {
    name: 'Blog',
    methods:{
        getApi(){
            axios.get('http://127.0.0.1:8000/api/posts')
            .then(result => {
                console.log(result.data);
            })
        }
    },
    mounted(){
        this.getApi();
    }
}

</script>

<template>

    <h1>Blog</h1>


</template>

<style lang="scss" scoped>

</style>