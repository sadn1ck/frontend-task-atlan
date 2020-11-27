<template>
  <div>
    <div class="py-20 px-8 md:px-16">
      <SearchBar />
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
import allTeams from '~/static/data/teams'
export default {
  data() {
    return {
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
      console.log(temp)
      this.teams = temp
      console.log(this.teams)
    },
  },
}
</script>

<style scoped></style>
