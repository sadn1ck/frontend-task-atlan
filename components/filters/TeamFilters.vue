<template>
  <div>
    <div class="py-2">Team Filters</div>
    <div class="py-2">
      <label for="wins py-2">
        <div class="py-2">Select Range of IPL Wins:</div>
        <div class="w-3/4 mx-auto">
          <vue-slider
            v-model="wins"
            :data="winData"
            :marks="true"
            :hide-label="true"
          ></vue-slider>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      winData: [0, 1, 2, 3, 4, 5, 6, 7],
      wins: 2,
    }
  },
}
</script>

<style></style>
