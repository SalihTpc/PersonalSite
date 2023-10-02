<script setup lang="ts">
useHead({
  title: "Home Page",
  meta: [{ name: "description", content: "My amazing site." }],
  link: [
    {
      rel: "icon",
      href: "/icon.png",
      type: "image/png",
      sizes: "768x768",
    },
  ],
});
</script>
<template>
  <div>
    <div class="mx-32">
      <Alert />
      <h1 class="text-center text-2xl">Home Page</h1>
      <div class="flex items-center justify-center my-4">
        <NuxtLink
          to="/about"
          class="py-2 px-4 bg-slate-400 text-white rounded-2xl"
          >Go to About</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
