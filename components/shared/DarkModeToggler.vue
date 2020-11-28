<template>
  <div>
    <button
      v-if="isDarkModeOn"
      class="bottomright p-3 focus:outline-none"
      @click="toggleDarkMode"
    >
      <Light />
    </button>
    <button
      v-else
      class="bottomright p-3 focus:outline-none"
      @click="toggleDarkMode"
    >
      <Dark />
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    isDarkModeOn() {
      return this.$nuxt.$colorMode.preference === 'dark'
    },
  },
  mounted() {
    // this.$nuxt.$colorMode.preference = 'dark'
  },
  methods: {
    toggleDarkMode() {
      if (this.isDarkModeOn) this.$nuxt.$colorMode.preference = 'light'
      else this.$nuxt.$colorMode.preference = 'dark'
    },
  },
}
</script>

<style scoped></style>
