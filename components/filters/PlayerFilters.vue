<template>
  <div>
    <div class="py-2">Player Filters</div>
    <div class="py-2">
      <label for="height">
        <div class="py-2">Select Range of Height:</div>
        <div class="w-3/4 mx-auto">
          <vue-slider
            v-model="playerHeight"
            :data="heightData"
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
      heightData: [100, 120, 140, 160, 180, 200, 220, 240],
      playerHeight: [160, 200],
    }
  },
}
</script>

<style></style>
