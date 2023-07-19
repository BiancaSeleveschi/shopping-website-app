import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Search from "@/views/Search";
import Men from "@/views/Men";
import Women from "@/views/Women";
import ItemDetails from "@/views/ItemDetails";
import WO23Collection from "@/views/WO23Collection";
import ME23Collection from "@/views/ME23Collection";
import About from "@/views/About";
import PrivacyPolicy from "@/views/PrivacyPolicy";
import TermsConditions from "@/views/TermsConditions";
import CookieStatement from "@/views/CookieStatement";
import Service from "@/views/Service";
import Checkout from "@/views/Checkout";
import Register from "@/views/Register";
import Login from "@/views/Login";
import Favorites from "@/views/Favorites";
import PasswordReset from "@/views/PasswordReset";
import Settings from "@/views/Settings";
import Orders from "@/views/Orders";
import Returns from "@/views/Returns";
import Addresses from "@/views/Addresses";
import CartSummary from "@/views/CartSummary";
import ProductCreate from "@/views/admin/ProductCreate";
import Products from "@/views/admin/Products";
import ProductDetails from "@/views/admin/ProductDetails";
import Contact from "@/views/Contact";
import ReturnItem from "@/views/ReturnItem";
import OrderConfirmation from "@/views/OrderConfirmation";
import ReturnConfirmation from "@/views/ReturnConfirmation";
import {Role} from "../utils/role.js"
import {firebase} from "@/firebaseInit.js"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/about",
        name: "about",
        component: About,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/search",
        name: "search",
        component: Search,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/men",
        name: "Men",
        component: Men,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/me23/collection",
        name: "ME23Collection",
        component: ME23Collection,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/wo23/collection",
        name: "WO23Collection",
        component: WO23Collection,
        meta: {
            requiresAuth: false,
        }
    }, {
        path: "/women",
        name: "Women",
        component: Women,
        meta: {
            requiresAuth: false,
        }
    }, {
        path: "/contact",
        name: "Contact",
        component: Contact,
        meta: {
            requiresAuth: true,
            roles: [Role.User, Role.Admin]
        }
    },
    {
        path: "/admin/product/create",
        name: "ProductCreate",
        component: ProductCreate,
        meta: {
            requiresAuth: false,
            // roles: [Role.Admin, Role.User]
        }
    },
    {
        path: "/admin/products",
        name: "Products",
        component: Products,
        // meta: {
        //     requiresAuth: true,
        //     roles: [Role.Admin]
        // }
    },
    {
        path: "/prod/:id",
        name: "ProductDetails",
        component: ProductDetails,
        props: true,
        // meta: {
        //     requiresAuth: true,
        //     roles: [Role.Admin]
        // }
    }, {
        path: "/shop/:id",
        name: "ItemDetails",
        component: ItemDetails,
        props: true,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/cart/summary",
        name: "CartSummary",
        component: CartSummary,
        meta: {
            requiresAuth: true,
            roles: [Role.User, Role.Admin]
        }
    },
    {
        path: "/favorites",
        name: "Favorites",
        component: Favorites,
        props: true,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/privacy/policy",
        name: "PrivacyPolicy",
        component: PrivacyPolicy,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/settings",
        name: "Settings",
        component: Settings,
        meta: {
            requiresAuth: true,
            roles: [Role.User, Role.Admin]
        }
    },
    {
        path: "/order/confirmation",
        name: "OrderConfirmation",
        component: OrderConfirmation,
        meta: {
            requiresAuth: false,
            // roles: [Role.User]
        }
    },
    {
        path: "/return/confirmation",
        name: "ReturnConfirmation",
        component: ReturnConfirmation,
        meta: {
            requiresAuth: true,
            roles: [Role.User]
        }
    }, {
        path: "/orders",
        name: "Orders",
        component: Orders,
        meta: {
            requiresAuth: true,
            roles: [Role.User, Role.Admin]
        }
    }, {
        path: "/returns",
        name: "Returns",
        component: Returns,
        meta: {
            requiresAuth: true,
            roles: [Role.User, Role.Admin]
        }
    }, {
        path: "/return/item",
        name: "ReturnItem",
        component: ReturnItem,
        props: true,
        meta: {
            requiresAuth: false,
            // roles: [Role.User, Role.Admin]
        }
    }, {
        path: "/addresses",
        name: "Addresses",
        component: Addresses,
        meta: {
            requiresAuth: true,
            roles: [Role.User, Role.Admin]
        }
    }, {
        path: "/terms",
        name: "TermsConditions",
        component: TermsConditions,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/cookie",
        name: "CookieStatement",
        component: CookieStatement,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/service",
        name: "Service",
        component: Service,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
        props: true,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            requiresAuth: false,
        }
    }, {
        path: "/password",
        name: "PasswordReset",
        component: PasswordReset,
        meta: {
            requiresAuth: false,
        }
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    console.log(to.path, to.meta)

            console.log(to.meta.requiresAuth)
    if (to.meta.requiresAuth) {
        console.log(firebase.auth().currentUser)

        if (firebase.auth().currentUser ) {
            // if(to.meta.roles.includes(auth.currentUser.role)){
            // if(to.meta.roles.includes("Admin") && auth?.currentUser.emailAddress === "bianca.seleveschi@gmail.com"){
            //             //     next()
            //             // }else{
            //             //     alert("You are not authorized to go on this path")
            //             // }
            next();
        } else {
            alert("You must be logged in")
            next({path: "/login"})
        }
    } else {
        next();
    }
})

export default router;
