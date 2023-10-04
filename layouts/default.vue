<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang">
      <Body class="dark:bg-slate-800"><Header></Header><slot></slot></Body>
    </Html>
  </div>
</template>
