<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue'
import { store } from '../store.js';
export default {
    data() {
        return {
            projects: [],
            current_page: null,
            last_page: null,
            store
        }
    },
    components: {
        ProjectCard,
    },
    methods:{
      getAllProjects() {
        axios.get(`${ store.apiUrl }/projects`)
        .then((response) => {
            this.projects = response.data.results.data;
            this.last_page = response.data.results.last_page;
            this.current_page = response.data.results.current_page;
        });
      },

      goToPage(page) {
        axios.get(`${ store.apiUrl }/projects`, { params: {page: page}})
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

    <div class="container">
      <div class="row">
        <div class="col-12 p-5">
          <h1 class="text-center">Elenco progetti</h1>
        </div>
        <div class="col-12">
          <div class="row gy-5">
            <ProjectCard v-for="proj in projects"
            :key="proj.id"
            :project="proj"/>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-center p-5">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item" :class="current_page == 1 ? 'disabled' : ''">
                    <a class="page-link" href="#" @click="goToPage(current_page - 1); $event.target.blur()">Previous</a>
                </li>
                <li class="page-item" v-for="i in last_page">
                    <a class="page-link" :class="current_page == i ? 'bg-primary text-white' : ''" href="#" @click="goToPage(i); $event.target.blur()">{{ i }}</a>
                </li>
                <li class="page-item" :class="current_page == last_page ? 'disabled' : ''">
                    <a class="page-link" href="#" @click="goToPage(current_page + 1); $event.target.blur()">Next</a>
                </li>
              </ul>
            </nav>
          </div>
      </div>
    </div>

</template>

<style lang="scss">

    .page-link:focus{
        outline: none;
    }

</style>