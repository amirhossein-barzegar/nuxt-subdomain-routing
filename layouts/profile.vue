<template>
    <div>
        <div>layout: [profile]</div>
        <slot />
    </div>
</template>
<script setup>
useHead({
    link: [
        {
            rel: "stylesheet",
            href: "./profile.css"
        }
    ]
})
</script>