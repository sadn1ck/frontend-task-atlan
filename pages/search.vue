<template>
  <div class="space-y-10">
    <div class="pt-20 px-8 md:px-16">
      <SearchBar />
    </div>
    <div class="filters rounded text-center py-5 mx-auto w-4/5">
      <button
        class="rounded-3xl px-3 py-2 hover:shadow-lg shadow-inner border-2 focus:outline-none hover:border-transparent"
        style="background-color: var(--bg-dark)"
        @click="toggleFilter"
        @keydown.esc="toggleFilter"
      >
        <span class="uppercase flex">
          <span class="inline-flex">Filters</span>
          <span v-if="!showFilter" class="pt-1 pl-2 inline-flex">
            <Down />
          </span>
          <span v-else class="pt-1 pl-2 inline-flex"> <Up /> </span>
        </span>
      </button>
      <button
        v-if="showFilter"
        class="rounded-3xl px-3 py-2 hover:shadow-lg shadow-inner border-2 focus:outline-none hover:border-transparent hover:opacity-50"
        style="background-color: var(--bg-dark)"
        @click="resetFilter"
      >
        <span class="uppercase flex">
          <span class="upppercase inline-flex"> Reset</span>
          <span class="pt-1 pl-1 upppercase inline-flex">
            <Trash />
          </span>
        </span>
      </button>
      <div v-if="showFilter" class="">
        <Filters />
      </div>
    </div>
    <div v-if="teams.length > 0 || players.length > 0" class="">
      <div v-if="picked === 't'">
        <div class="text-4xl tracking-wide font-bold text-center py-16">
          Indian Premier League Teams
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card
            v-for="(team, id) in teams"
            :key="id"
            :subheading="team.short"
            :title="team.name"
          />
        </div>
      </div>
      <div v-else-if="picked === 'p'">
        <Players :players="players" />
      </div>
    </div>
  </div>
</template>

<script>
import allTeams from '~/static/data/teams'
import allPlayers from '~/static/data/players'
export default {
  data() {
    return {
      showFilter: true,
      teams: allTeams,
      players: allPlayers,
      searchTerm: this.$store.state.search.searchTerm,
    }
  },
  computed: {
    term() {
      return this.$store.state.search.searchTerm
    },
    picked() {
      return this.$store.state.filters.picked
    },
  },
  watch: {
    term(newTerm, oldTerm) {
      this.updateSearch(newTerm, this.picked)
    },
  },
  methods: {
    updateSearch(newTerm, choice) {
      if (choice === 't' || choice) {
        const temp = allTeams.filter((team) => {
          const name = team.name.toLowerCase()
          return name.includes(newTerm)
        })
        this.teams = temp
      } else if (choice === 'p') {
        const temp = allPlayers.filter((player) => {
          const name = player.name.toLowerCase()
          const search = newTerm.toLowerCase()
          // console.log(name.includes(search), name)
          return name.includes(search)
        })
        this.players = temp
      }
    },
    toggleFilter() {
      this.showFilter = !this.showFilter
    },
    resetFilter() {
      this.$store.commit('filters/reset')
      this.$store.commit('search/reset')
      if (!document.getElementById('searchbar').value === '')
        document.getElementById('searchbar').value = ''
      if (document.getElementById('radio-player'))
        document.getElementById('radio-player').checked = false
      if (!document.getElementById('radio-team'))
        document.getElementById('radio-team').checked = false
    },
  },
}
</script>

<style scoped>
.filters {
  background-color: var(--bg);
}
</style>
