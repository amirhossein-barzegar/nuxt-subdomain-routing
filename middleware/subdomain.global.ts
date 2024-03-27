export default defineNuxtRouteMiddleware((to, from) => {
    const layout = useState<string>("layout", () => "amirhossein")
    if (to.name?.startsWith("profile")) {
        setPageLayout("profile")
        layout.value = "profile"
    } else {
        const layoutCookie = useCookie("layout")
        console.log("state will be ", layoutCookie.value)
        layout.value = layoutCookie.value ?? ""
    }
})