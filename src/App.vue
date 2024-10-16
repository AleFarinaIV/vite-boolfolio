<script>
import AppHeader from './components/AppHeader.vue';
import PageHome from './pages/PageHome.vue';
import PageProjects from './pages/PageProjects.vue';

export default {
  data() {
    return {
      projects: [],
      last_page: null,
      current_page: null,
    }
  },
  components: {
    AppHeader,
    PageProjects,
  },
  methods:{

  }
}
</script>

<template>

  <AppHeader/>

  <main>
    <PageProjects/>
  </main>

</template>

<style lang="scss">
@import './styles/generals.scss';

  main {
    height: calc(100vh - 80px);
    margin-top: 80px;
  }
</style>