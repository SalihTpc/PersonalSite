<script setup>
const { t } = useI18n();
const items = computed(() => [
  { id: 1, path: "/", icon: "fa-duotone fa-house", title: t("Home") },
  {
    id: 2,
    path: "/publications",
    icon: "fa-duotone fa-book-open-cover",
    title: t("Publications"),
  },
  {
    id: 3,
    path: "/about",
    icon: "fa-duotone fa-address-card",
    title: t("About"),
  },
]);
</script>

<template>
  <div
    class="w-full flex justify-center z-10 py-8 top-0 pointer-events-none fixed dark:bg-slate-800 dark:bg-transparent"
  >
    <div
      class="bg-black bg-opacity-5 backdrop-blur-md top-8 flex items-center rounded-full gap-1.5 p-1.5 sm:gap-2.5 sm:p-2.5 pointer-events-auto dark:bg-slate-900"
    >
      <HeaderItem
        v-for="item in items"
        :key="item.id"
        :path="item.path"
        :icon="item.icon"
        :title="item.title"
      ></HeaderItem>
      <div
        class="pl-2 border-l dark:border-slate-700 flex items-center justify-center"
      >
        <HeaderThemeButton />
        <HeaderLangButton />
      </div>
    </div>
  </div>
</template>
