import ProfileIndex from "~/pages/profile/index.vue";
import Index from "~/pages/sso/index.vue";


const router = [
    {
        path: "/",
        name: "index",
        component: Index,
    },
    {
        path: "/profile",
        name: "profile-index",
        component: ProfileIndex,
    }
];

export default router;