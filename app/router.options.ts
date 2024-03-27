import type { RouterConfig } from "@nuxt/schema";
import ssoRouter from "~/routes/sso";
import portalRouter from "~/routes/portal";

const applyRouter = () => {
  const subdomain = useRequestURL().hostname.split(".")[0];
  let router;
  switch (subdomain) {
    case "sso":
      router = ssoRouter;
      break;
    case "news":
      router = portalRouter;
      break;
    default:
      router = ssoRouter;
  }
  return router;
};

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: (_routes) => applyRouter(),
  scrollBehavior() {
    return { top: 0 };
  },
};
