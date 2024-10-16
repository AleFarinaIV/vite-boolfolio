<script>
export default {
    props: {
      project: Object
    },
    computed: {
      imageSrc() {
        
        return this.project.image_path == null ? 'https://placehold.co/400x300?text=No+path+image' : 
        this.project.image_path.startsWith('https://') ? this.project.image_path : 
        `http://127.0.0.1:8000/storage/${this.project.image_path}`
      }
    }
}
</script>

<template>

    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img class="card-img-top" :src="imageSrc">
        <div class="card-body">
          <h4 class="card-title">{{ project.name }}</h4>
          <p>{{ project.description.substr(0, 90) +'...' }}</p>
          <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" >More about <i class="bi bi-arrow-up-right"></i></router-link>
        </div>
      </div>
    </div>

</template>

<style scoped>

  a {
    text-decoration: none;
    i {
      font-size: 10px;
    }
  }

</style>