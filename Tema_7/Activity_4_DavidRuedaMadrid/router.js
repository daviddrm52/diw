import componentLogin from "./js/Login.js";
import componentSignup from "./js/Signup.js";
import componentProducts from "./js/Products.js";

let router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: '/' },
        { path: '/login', component: componentLogin },
        { path: '/sign-up', component: componentSignup },
        { path: '/products', component: componentProducts },
    ]
});

export default router