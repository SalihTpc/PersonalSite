<script setup>
const route = useRoute();

const getClass = (path) => {
  return {
    "transition-all duration-150 ease-in bg-gradient-to-r from-white to-sky-600 text-white hover:font-semibold":
      route.path == path,
    "": !route.path == path,
  };
};

const getClassIcon = (path) => {
  return {
    "text-sky-600": route.path == path,
    "": !route.path == path,
  };
};

const props = defineProps({
  path: String,
  icon: String,
  title: String,
});
</script>

<template>
  <div>
    <NuxtLink
      class="relative shrink-0 flex items-center justify-center text-center font-jakarta gap-1 p-3 sm:py-3 sm:px-4 rounded-full transition bg-white hover:scale-[1.1] hover:font-semibold"
      :class="[getClass(path)]"
      :to="{ path }"
      ><i class="text-xl text-sky-500" :class="[icon, getClassIcon(path)]"></i>
      <span class="hidden sm:flex">{{ title }}</span>
    </NuxtLink>
  </div>
</template>
