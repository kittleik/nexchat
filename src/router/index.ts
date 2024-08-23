import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NewPost from '../views/NewPost.vue';
import Profile from '../views/Profile.vue';

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
    {
        path: '/profile/:author', // Dynamic route for the author's profile
        name: 'Profile',
        component: Profile,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;