<template>
  <header
    class="nav-content flex flex-row bottom-0 sm:bottom-0 md:top-0 h-16 fixed w-full"
  >
    <NuxtLink to="/" class="p-3 my-auto">
      <span class="text-xl text-strong font-bold"> IPL Search </span>
    </NuxtLink>
    <!-- spacer -->
    <div class="flex-auto"></div>
    <DarkModeToggler />
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.nav-content {
  background-color: var(--bg);
  z-index: 1000;
}
</style>
