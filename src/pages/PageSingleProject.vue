<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
            project: null
        }
    },
    methods: {
        getSingleProject() {
            console.log(this.$route)
            axios.get(`${ apiUrl }/projects/${ this.$route.params.slug }`)
            .then((response) => {
                console.log(response);
            })
        }
    },
    created() {
        this.getSingleProject();
    }
}
</script>

<template>
    <div>
        
    </div>
</template>

<style lang="">
    
</style>