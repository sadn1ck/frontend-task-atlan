<template>
  <div class="py-20 px-8 md:px-16">
    <div class="flex items-center">
      <input
        id="search"
        class="rounded-full w-full py-4 px-6 leading-tight border-0 outline-none shadow-lg focus:shadow-3xl focus:border-none"
        type="text"
        placeholder="Search"
      />

      <div class="p-4">
        <button
          class="text-white bg-gray-300 hover:bg-gray-500 rounded-full p-2 focus:outline-none w-12 h-12 flex items-center justify-center shadow-xl hover:shadow-3xl"
        >
          🔍
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
    workon() {
      console.log(this.search)
    },
  },
}
</script>

<style></style>
