import Vue from 'vue'
import VueRouter from 'vue-router'
import TaskList from '../views/TaskList'
import AddTask from '../views/AddTask'
import Task from '../views/Task'
import AnalyticPage from '../views/AnalyticPage'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'TaskList',
        component: TaskList
    },
    {
        path: '/add-task',
        name: 'AddTask',
        component: AddTask
    },
    {
        path: "/tasks/:id",
        name: 'Task',
        component: Task
    },
    {
        path: "/analytic",
        name: 'AnalyticPage',
        component: AnalyticPage
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
