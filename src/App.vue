<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
export default {
  data() {
    return {
      projects: []
    }
  },
  components: {
    ProjectCard
  },
  methods:{
    getAllProjects() {
      axios.get('http://127.0.0.1:8000/api/projects')
      .then((response) => {
          this.projects = response.data.results;
          console.log(response.data.results);
      });
    }
  },
  created() {
    this.getAllProjects();
  }
}
</script>

<template>
    <div class="container">
      <div class="row">
        <div class="col-12 p-5">
          <h1 class="text-center">Elenco progetti</h1>
        </div>
        <div class="col-12">
          <div class="row gy-4">
            <ProjectCard v-for="proj in projects"
            :key="proj.id"
            :project="proj"/>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
@import './styles/generals.scss';

  .min-h {
    min-height: 290px;
  }
</style>