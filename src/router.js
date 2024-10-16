import { createRouter, createWebHistory} from 'vue-router';
import PageHome from './pages/PageHome.vue';
import PageProjects from './pages/PageProjects.vue';
import PageSingleProject from './pages/PageSingleProject.vue';
import PageSingleProject from './pages/PageSingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name: 'homepage',
            component: PageHome,
        },
        {
            path:'/projects',
            name: 'projects',
            component: PageProjects,
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: PageSingleProject,
        }
    ]
})

export { router }