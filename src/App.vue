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

<template lang="">
    <div class="container">
      <div class="row">
        <div class="col-12 p-5">
          <h1 class="text-center">Elenco progetti</h1>
        </div>
        <div class="col-12">
          <div class="row gy-4">
            <div class="col-12 col-md-6 col-lg-4" v-for="proj in projects" :key="proj.id">
              <div class="card min-h">
                <img class="card-img-top" :src="proj.image_path != null ? `http://127.0.0.1:8000/storage/${proj.image_path}` : 'https://placehold.co/600x400?text=No+path+image'">
                <div class="card-body">
                  <h4 class="card-title">{{ proj.name }}</h4>
                  <span>Lorem ipsum</span>
                </div>
              </div>
            </div>
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