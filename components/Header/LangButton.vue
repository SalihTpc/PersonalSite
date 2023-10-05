<script setup>
const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <div>
    <button
      v-for="locale in availableLocales"
      :key="locale.code"
      @click.prevent.stop="setLocale(locale.code)"
      class="ml-2 font-montserrat font-semibold rounded-full px-1 py-0.5 sm:px-2 sm:py-1 bg-slate-300 hover:bg-slate-400 hover:font-bold dark:bg-black dark:text-slate-500 transition duration-200 ease-in-out dark:hover:bg-slate-800 hover:scale-110"
    >
      {{ locale.name }}
    </button>
  </div>
</template>
