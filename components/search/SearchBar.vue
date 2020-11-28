<template>
  <div class="flex items-center">
    <input
      id="searchbar"
      v-model="searchTerm"
      autocomplete="off"
      class="rounded-full w-full py-4 px-6 leading-tight border-0 outline-none shadow-lg focus:shadow-3xl focus:border-none"
      type="text"
      placeholder="Enter search term"
      @keyup.enter="saveToStore"
    />

    <div class="p-4">
      <button
        class="text-white bg-gray-300 hover:bg-gray-500 rounded-full p-2 focus:outline-none w-12 h-12 flex items-center justify-center shadow-xl hover:shadow-3xl"
        @click="saveToStore"
      >
        🔍
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
    }
  },
  methods: {
    saveToStore() {
      this.$store.commit('search/update', this.searchTerm)
      // console.log()
    },
  },
}
</script>

<style></style>
