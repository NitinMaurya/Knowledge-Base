/**
 * Created by nitin on 9/6/17.
 */
import VueRouter from 'vue-router'
import User from './User.vue'
import SignUp from './SignUp.vue'
import Login from './Login.vue'
import Home from './Home.vue'

let routes = [
    {path:'/users', component: SignUp},
    {path:'/users/login', component: Login},
    {path:'/users/:id', component: User},
    {path:'/', component: Home}

];

export default new VueRouter ({
    routes
});