<script setup>
defineI18nRoute(false);
</script>

<template>
  <div>
    <h1 class="text-center text-2xl">{{ $t("References") }}</h1>
    <div class="flex items-center justify-center my-4">
      <NuxtLink to="/" class="py-2 px-4 bg-slate-400 text-white rounded-2xl"
        >Go to Home</NuxtLink
      >
    </div>
  </div>
</template>
