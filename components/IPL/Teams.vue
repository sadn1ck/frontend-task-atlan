<template>
  <main class="pb-10">
    <div class="text-4xl tracking-wide font-bold text-center pb-16">
      Indian Premiere League Teams
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="(team, id) in teams" :key="id">
        <div class="max-w-md mx-auto">
          <Card :overline="team.short" :title="team.name" />
        </div>
      </div>
    </div>
    <div class="text-center py-10">
      <button class="btn rounded-2xl" @click="showMore">
        {{ showingmore ? 'Show Less' : 'Show More' }}
      </button>
    </div>
  </main>
</template>

<script>
import allTeams from '~/static/data/teams'

export default {
  data() {
    return {
      showingmore: false,
      teams: allTeams.slice(0, 6),
    }
  },
  methods: {
    showMore() {
      if (this.showingmore) {
        this.teams = allTeams.slice(0, 6)
        this.showingmore = !this.showingmore
      } else {
        this.teams = allTeams
        this.showingmore = !this.showingmore
      }
    },
  },
}
</script>

<style></style>
