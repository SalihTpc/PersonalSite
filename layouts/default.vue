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
      <Body class="dark:bg-slate-800"
        ><Header></Header>
        <div class="mx-6 sm:mx-32 pt-32 h-full min-h-screen"><slot></slot></div
      ></Body>
    </Html>
  </div>
</template>
