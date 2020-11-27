<template>
  <section class="body-font py-32 my-32">
    <div class="flex flex-col text-center w-full mb-12">
      <div
        class="text-4xl md:text-5xl font-extrabold title-font mb-4 tracking-wider"
      >
        Your IPL database
      </div>
    </div>
    <div class="flex justify-center space-x-5">
      <button
        class="inline-flex dark-btn text-lg uppercase tracking-wider"
        @click="redirectToSearch"
      >
        Search
      </button>
      <button class="btn text-lg uppercase tracking-wider">Subscribe</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    redirectToSearch() {
      this.$router.push('search')
    },
  },
}
</script>

<style></style>
