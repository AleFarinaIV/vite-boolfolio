<script>
export default {
    props: {
        project: Object
    }
}
</script>

<template>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card min-h">
            <img class="card-img-top" :src="project.image_path != null ? `http://127.0.0.1:8000/storage/${project.image_path}` : 'https://placehold.co/600x400?text=No+path+image'">
            <div class="card-body">
              <h4 class="card-title">{{ project.name }}</h4>
              <span>{{ project.description }}</span>
            </div>
          </div>
        </div>
</template>

<style scoped>
    
</style>