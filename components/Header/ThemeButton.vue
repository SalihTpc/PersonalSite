<script setup>
useHead({
  script: [
    {
      children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }`,
    },
  ],
});

const { enabled, toggleTheme } = useTheme();
</script>
<template>
  <div>
    <button
      class="text-2xl rounded-full px-1 py-0.5 sm:px-2 sm:py-1 bg-white hover:scale-[1.1] hover:font-semibold dark:bg-black flex items-center justify-center"
      @click="toggleTheme"
    >
      <i v-if="enabled" class="fa-solid fa-moon dark:text-slate-500"></i>
      <i
        v-else
        class="fa-duotone fa-brightness dark:text-slate-500 text-slate-600"
      ></i>
    </button>
  </div>
</template>
