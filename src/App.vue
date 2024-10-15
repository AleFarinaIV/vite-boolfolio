<script>
import axios from 'axios';
export default {
  data() {
    return {
      projects: []
    }
  },
  methods:{
    getAllProjects() {
      axios.get('http://127.0.0.1:8000/api/projects')
      .then((response) => {
          // this.projects = response.data;
          console.log(response.data);
      });
    }
  },
  created() {
    this.getAllProjects();
  }
}
</script>

<template lang="">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center">Elenco progetti</h1>
        </div>
        <div class="col-12">

        </div>
      </div>
    </div>
</template>

<style lang="scss">
@import './styles/generals.scss'
</style>