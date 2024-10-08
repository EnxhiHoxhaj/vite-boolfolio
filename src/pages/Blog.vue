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
                this.posts= result.data
                console.log(this.posts);
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

    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus laboriosam <br> 
        reiciendis cum totam.Porro, modi. Maxime mollitia blanditiis dolore praesentium <br>
        ad illum! Dolore provident ducimus doloribus? Maiores fugit et adipisci.
    </p>

</template>

<style lang="scss" scoped>

</style>