<template>
  <div>
    <div
      class="w-full flex justify-center z-10 py-8 top-0 pointer-events-none fixed"
    >
      <div
        class="bg-black bg-opacity-5 backdrop-blur-md top-8 flex rounded-full gap-1.5 p-1.5 sm:gap-2.5 sm:p-2.5 pointer-events-auto"
      >
        <HeaderItem
          path="/"
          icon="fa-duotone fa-house"
          title="Home"
        ></HeaderItem>
        <HeaderItem
          path="/publications"
          icon="fa-duotone fa-book-open-cover"
          title="Publications"
        ></HeaderItem>
        <HeaderItem
          path="/about"
          icon="fa-duotone fa-address-card"
          title="About"
        ></HeaderItem>
      </div>
    </div>
  </div>
</template>
