<script>
import axios from 'axios'
import {store} from '../store/store';
import Loders from './Loders.vue';

export default {
    components:{
    Loders
  },
    name: 'Blog',
    data(){
        return{
            posts:[],
            isLoading:true,
        }
    },

    methods:{
        getApi(){
            axios.get(store.apiUrl + 'posts')
            .then(result => {

                this.posts= result.data.results.data;
                this.isLoading= false;
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
    <h3>I miei post</h3>
    <div v-if="isLoading" class="lod">
        <Loders/>
    </div>
    <ul v-else>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
</template>

<style lang="scss" scoped>
    h3{
        color: #f7a842;
    }
    ul{
        padding: 0;
    }
    li {
        list-style-type:square;
        list-style-position: inside;
        padding: 10px 0;
    }
    .lod {
        display: flex;
        justify-content: center;
    }
</style>