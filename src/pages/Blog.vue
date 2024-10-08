<script>
import axios from 'axios'
import {store} from '../store/store';

export default {
    name: 'Blog',
    data(){
        return{
            posts:[],
        }
    },

    methods:{
        getApi(){
            axios.get(store.apiUrl + 'posts')
            .then(result => {
                this.posts= result.data.results.data
                console.log(result.data.results.data);
            })
            .catch (error =>{
                console.log(error);
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
    <h2>I miei post</h2>
    <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
</template>

<style lang="scss" scoped>

</style>