<script>
export default {
    props: {
      project: Object
    },
    computed: {
      imageSrc() {
        
        return this.project.image_path == null ? 'https://placehold.co/600x400?text=No+path+image' : 
        this.project.image_path.startsWith('https://') ? this.project.image_path : 
        `http://127.0.0.1:8000/storage/${this.project.image_path}`
      }
    }
}
</script>

<template>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card min-h">
            <img class="card-img-top" :src="imageSrc">
            <div class="card-body">
              <h4 class="card-title">{{ project.name }}</h4>
              <span>{{ project.description }}</span>
            </div>
          </div>
        </div>
</template>

<style scoped>
    
</style>