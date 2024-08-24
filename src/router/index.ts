import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NewPost from '../views/NewPost.vue';
import Profile from '../views/Profile.vue';
import Post from '../views/Post.vue';

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
    {
        path: '/profile/:author/post/:id', // Nested route for post under the author's profile
        name: 'Post',
        component: Post,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;