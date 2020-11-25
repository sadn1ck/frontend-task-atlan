<template>
  <button class="bottomright p-3 focus:outline-none" @click="toggleDarkMode">
    {{ isDarkModeOn ? '🔆' : '🌙' }}
  </button>
</template>

<script>
export default {
  computed: {
    isDarkModeOn() {
      return this.$nuxt.$colorMode.preference === 'dark'
    },
  },
  mounted() {
    this.$nuxt.$colorMode.preference = 'dark'
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
