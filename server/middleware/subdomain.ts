import { useCookie, useNuxtApp, useNuxtData } from "nuxt/app";

export default defineEventHandler((event) => {
  const headers = getHeaders(event);
  const hostname = headers.host ?? "";
  const subdomain = hostname.match(/^[^.]*/g)?.[0] ?? "";
  const {req, res} = event
  const subdomainCookie = useCookie("subdomain")
  const layoutCookie = useCookie("layout")
  if ((useRuntimeConfig().app.subdomains).includes(subdomain)) {
    // check if request started with /profile url
      if (req.url?.substring(1, req.url.length).startsWith("profile")) {
        event.context.subdomain = subdomain;
        event.context.layout = "profile";
        // setCookie(event, "subdomain", subdomain);
        // setCookie(event, "layout", "profile");
        subdomainCookie.value = subdomain
        layoutCookie.value = "profile"
        console.log("set to profile")
      } else {
        event.context.subdomain = subdomain;
        event.context.layout = subdomain;
        console.log("we will set subdomain to ", subdomain)
        subdomainCookie.value = subdomain
        layoutCookie.value = subdomain
        // setCookie(event, "subdomain", subdomain);
        // setCookie(event, "layout", subdomain);

      }
  } else {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found'
    })
  }
});