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
            axios.get(`${ store.apiUrl }/projects/${ this.$route.params.slug }`)
            .then((response) => {
                this.project = response.data.result;
            })
        }
    },
    created() {
        this.getSingleProject();
    }
}
</script>

<template>

    <div class="container p-4">
        <div class="row py-3">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center">
                    <h1 class="text-center pb-3">{{ project.name }}</h1>
                    <div>
                        <a href="" class="text-decoration-none btn btn-sm btn-warning fw-semibold me-3">Edit</a>
                        <router-link :to="{ name: 'projects' }" class="text-decoration-none btn btn-sm btn-secondary fw-semibold">
                            <i class="bi bi-arrow-left"></i> Back to Projects
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img 
                        :src="project.image_path == null ? 'https://placehold.co/400x300?text=No+path+image' : 
                        project.image_path.startsWith('https://') ? project.image_path :
                        `http://127.0.0.1:8000/storage/${project.image_path}`" 
                        class="img-fluid rounded-start" alt="..."
                      >
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title pb-3 pt-2">Project Details</h5>
                        <div class="d-flex flex-column">
                            <span class="card-text"><strong>Description:</strong></span>
                            <p>{{ project.description }}</p>
                        </div>
                        <p class="card-text"><strong>Type:</strong> {{ project.type ? project.type.name : 'No type assigned' }}</p>
                        <p class="card-text"><strong>Status: </strong>
                            <span :class="project.status ? 'badge bg-success' : 'badge bg-danger'"> 
                                {{ project.status ? ' Compleated' : ' Not Compleated' }}
                            </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
    
</style>