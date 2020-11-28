<template>
  <main class="py-10">
    <div class="text-4xl tracking-wide font-bold text-center pb-16">
      Indian Premier League Players
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="(player, id) in players" :key="id">
        <div class="max-w-md mx-auto">
          <Card :subheading="player.country" :title="player.name" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    players: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      playerShowingMore: false,
    }
  },
}
</script>

<style></style>
