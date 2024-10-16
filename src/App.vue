<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue';
export default {
  data() {
    return {
      projects: [],
      last_page: null,
      current_page: null,
    }
  },
  components: {
    ProjectCard,
    AppHeader,
  },
  methods:{
    getAllProjects() {
      axios.get('http://127.0.0.1:8000/api/projects')
      .then((response) => {
          this.projects = response.data.results.data;
          this.last_page = response.data.results.last_page;
          this.current_page = response.data.results.current_page;
      });
    },

    goToPage(page) {
      axios.get('http://127.0.0.1:8000/api/projects', { params: {page: page}})
      .then((response)=> {
        this.projects = response.data.results.data;
        this.current_page = response.data.results.current_page;
      })
    }
  },
  created() {
    this.getAllProjects();
  }
}
</script>

<template>

  <AppHeader/>

  <main>
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
        <div class="col-12 d-flex justify-content-center p-4">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item" :class="current_page == 1 ? 'disabled' : ''"><a class="page-link" href="#" @click="goToPage(current_page - 1)">Previous</a></li>
                <li class="page-item" v-for="i in last_page"><a class="page-link" href="#" @click="goToPage(i)">{{ i }}</a></li>
                <li class="page-item" :class="current_page == last_page ? 'disabled' : ''"><a class="page-link" href="#" @click="goToPage(current_page + 1)">Next</a></li>
              </ul>
            </nav>
          </div>
      </div>
    </div>
  </main>

</template>

<style lang="scss">
@import './styles/generals.scss';

  main {
    height: calc(100vh - 80px);
    margin-top: 80px;

    .min-h {
      min-height: 290px;
    }
  }
</style>