<template>
  <div>
    <div class="pt-20 px-8 md:px-16">
      <SearchBar />
    </div>
    <div class="fil text-center py-10 shadow-lg">
      <button
        class="rounded px-5 py-2 focus:outline-none"
        @click="toggleFilter"
      >
        Filters
      </button>
      <div v-if="showFilter" class=""><filters /></div>
    </div>
    <div
      v-if="teams.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <Card
        v-for="(team, id) in teams"
        :key="id"
        :overline="team.short"
        :title="team.name"
      />
    </div>
    <div v-else>
      <div class="text-xl">No results found! Please refine your query!</div>
    </div>
  </div>
</template>

<script>
import Filters from '~/components/Filters.vue'
import allTeams from '~/static/data/teams'
export default {
  components: { Filters },
  data() {
    return {
      showFilter: false,
      teams: allTeams,
      searchTerm: this.$store.state.search.searchTerm,
    }
  },
  computed: {
    term() {
      return this.$store.state.search.searchTerm
    },
  },
  watch: {
    term(newTerm, oldTerm) {
      this.updateSearch(newTerm)
    },
  },
  methods: {
    updateSearch(newTerm) {
      const temp = allTeams.filter((team) => {
        const name = team.name.toLowerCase()
        return name.includes(newTerm)
      })
      this.teams = temp
    },
    toggleFilter() {
      this.showFilter = !this.showFilter
    },
  },
}
</script>

<style scoped></style>
