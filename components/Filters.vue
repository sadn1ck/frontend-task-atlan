<template>
  <div class="py-2 w-full md:w-1/2 mx-auto">
    <div class="mt-2 flex">
      <div class="flex-1">
        <label class="inline-flex items-center">
          <input
            id="radio-team"
            v-model="picked"
            value="t"
            type="radio"
            name="filters"
            @change="saveFiltersToStore"
          />
          <span class="ml-2">Teams</span>
        </label>
      </div>
      <div class="flex-1">
        <label class="inline-flex items-center">
          <input
            id="radio-player"
            v-model="picked"
            value="p"
            type="radio"
            name="filters"
            @change="saveFiltersToStore"
          />
          <span class="ml-2">Players</span>
        </label>
      </div>
    </div>
    <div>
      <div v-if="getPicked === 'p'">
        <PlayerFilters />
      </div>
      <div v-else-if="getPicked === 't'">
        <TeamFilters />
      </div>
      <div v-else>Select an option to get more detailed filters</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: '',
    }
  },
  computed: {
    getPicked() {
      return this.$store.state.filters.picked
    },
  },
  methods: {
    saveFiltersToStore() {
      this.$store.commit('filters/setPicked', this.picked)
    },
  },
}
</script>

<style scoped></style>
