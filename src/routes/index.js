import { createRouter, createWebHistory } from "vue-router"

const Home = () => import("@/pages/Home.vue")
const About = () => import("@/pages/About.vue")
const Skills = () => import("@/pages/Skills.vue")
const Course = () => import("@/pages/courses/index.vue")
const CoursePage = () => import('@/pages/courses/CoursePage.vue')
const Repository = () => import('@/pages/Repository.vue')
const Experiences = () => import('@/components/Experiences.vue')
const Contact = () => import('@/components/Contact.vue')
const NotFound = () => import('@/components/NotFound.vue')
const CourseCard = () => import('@/components/cards/CourseCard.vue')

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/skills', component: Skills },
    { path: '/courses', component: Course },
    { path: '/courses/:id', component: CoursePage },
    { path: '/repos', component: Repository },
    { path: '/experiences', component: Experiences },
    { path: '/contact', component: Contact },
    { path: '/:courses', component: CourseCard },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router