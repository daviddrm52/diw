import componentLogin from "./js/Login.js";
import componentSignup from "./js/Signup.js";
import scpItem from "./js/scpItem.js";

let router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: '/login', component: componentLogin },
        { path: '/sign-up', component: componentSignup },
    ]
});

export default router