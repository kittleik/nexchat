import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NewPost from '../views/NewPost.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/new-post',
        name: 'NewPost',
        component: NewPost,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;