<script setup>
const route = useRoute();

const props = defineProps({
  path: String,
  icon: String,
  title: String,
});
</script>

<template>
  <div>
    <NuxtLink
      class="relative shrink-0 flex items-center justify-center text-center font-jakarta gap-1 p-2 max-sm:w-10 max-sm:h-10 sm:py-2 sm:px-4 rounded-full bg-white hover:scale-[1.1] hover:font-semibold dark:bg-black dark:text-sky-500 transition duration-200 ease-in-out"
      :class="
        route.path.endsWith(path)
          ? 'bg-gradient-to-r from-white to-sky-400 text-white hover:font-semibold dark:!text-white dark:bg-gradient-to-l dark:from-slate-600 dark:to-indigo-900'
          : ''
      "
      :to="{ path }"
      ><i
        class="text-xl text-sky-500"
        :class="[icon, route.path.endsWith(path) ? 'text-sky-600' : '']"
      ></i>
      <span class="hidden sm:flex">{{ title }}</span>
    </NuxtLink>
  </div>
</template>
