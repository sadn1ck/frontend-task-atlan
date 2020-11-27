<template>
  <div class="py-2 flex">
    <span class="flex-1 px-3 text-center rounded focus:opacity-25">
      <label for="teams">Teams</label>
      <input
        v-model="isTeamSelected"
        class="focus:border-opacity-0"
        type="checkbox"
        name="teams"
        @change="saveFiltersToStore"
      />
    </span>
    <span class="flex-1 px-3 text-center rounded focus:opacity-25">
      <label for="players">Players</label>
      <input
        v-model="isPlayerSelected"
        class="focus:border-opacity-0"
        type="checkbox"
        name="players"
        @change="saveFiltersToStore"
      />
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTeamSelected: false,
      isPlayerSelected: false,
    }
  },
  methods: {
    saveFiltersToStore() {
      this.$store.commit('filters/update', this.isTeamSelected, 't')
      this.$store.commit('filters/update', this.isPlayerSelected, 'p')
    },
  },
}
</script>

<style></style>
