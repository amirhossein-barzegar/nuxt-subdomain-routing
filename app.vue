<template>
  <NuxtLayout :name="layout">
    <span class="custom">
      Styles to show
    </span>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
const layout = useState("layout")
console.log("state", layout.value)

</script>
