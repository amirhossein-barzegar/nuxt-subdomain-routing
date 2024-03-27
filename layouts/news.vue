<template>
    <div>
        <div>layout: [news]</div>
        <slot />
    </div>
</template>
<script setup>
useHead({
    link: [
        {
            rel: "stylesheet",
            href: "./news.css"
        }
    ]
})
</script>