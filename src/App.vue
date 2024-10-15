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
          this.projects = response.data;
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
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card">
                <img class="card-img-top" src="">
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
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
@import './styles/generals.scss'
</style>