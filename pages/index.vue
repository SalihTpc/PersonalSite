<script setup lang="ts">
useHead({
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
    <Head>
      <Title>{{ $t("Home Page") }}</Title>
    </Head>
    <div class="mx-32 pt-32 h-full min-h-screen">
      <Alert />
      <h1 class="text-center text-2xl py-24">{{ $t("Home Page") }}</h1>
      <h2 class="text-center text-2xl">{{ $t("Welcome") }}</h2>

      <div class="flex items-center justify-center py-24">
        <NuxtLink
          to="/about"
          class="py-2 px-4 bg-slate-400 text-white rounded-2xl"
          >Go to About</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
