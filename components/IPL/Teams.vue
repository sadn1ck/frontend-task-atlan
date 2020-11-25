<template>
  <main class="pb-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="(team, id) in teams" :key="id">
        <div class="max-w-md mx-auto">
          <Card :overline="team.short" :title="team.name" />
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="btn rounded-2xl" @click="showMore">
        {{ showingmore ? 'Show Less' : 'Show More' }}
      </button>
    </div>
  </main>
</template>

<script>
const allTeams = [
  { name: 'Mumbai Indians', short: 'MI' },
  { name: 'Pune Warriors', short: 'PU' },
  { name: 'Kolkata Knight Riders', short: 'KKR' },
  { name: 'Kochi Tuskers Kerala', short: 'KTK' },
  { name: 'Rajasthan Royals', short: 'RR' },
  { name: 'Gujarat Lions', short: 'GL' },
  { name: 'Chennai Super Kings', short: 'CSK' },
  { name: 'Rising Pune Supergiants', short: 'RPS' },
  { name: 'Delhi Daredevils', short: 'DD' },
  { name: 'Deccan Chargers', short: 'DEC' },
  { name: 'Delhi Capitals', short: 'DC' },
  { name: 'Sunrisers Hyderabad', short: 'SRH' },
  { name: 'Royal Challengers Bangalore', short: 'RCB' },
  { name: 'Kings XI Punjab', short: 'KXIP' },
]
export default {
  data() {
    return {
      showingmore: true,
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
