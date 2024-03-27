<template>
    <div>
        <div class="sso">layout: [sso]</div>
        <slot />
    </div>
</template>

<script setup>
useHead({
    link: [
        {
            rel: "stylesheet",
            href: "./sso.css"
        }
    ]
})
</script>