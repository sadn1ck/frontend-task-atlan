<template>
  <div>
    <div class="py-2">Player Filters</div>
    <div class="py-2">
      <label for="height py-2">
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
      <div class="text-xl pt-5">Batting Hand:</div>
      <div class="mt-2 flex pb-3">
        <div class="flex-1">
          <label class="inline-flex items-center">
            <input type="checkbox" name="bathand" />
            <span class="ml-2">Right</span>
          </label>
        </div>
        <div class="flex-1">
          <label class="inline-flex items-center">
            <input type="checkbox" name="bathand" />
            <span class="ml-2">Left</span>
          </label>
        </div>
      </div>
      <div class="text-xl pt-5">Bowling:</div>
      <div class="mt-2 flex pb-3">
        <div class="flex-1">
          <label class="inline-flex items-center">
            <input type="radio" name="bowlers" />
            <span class="ml-2">Pacer</span>
          </label>
        </div>
        <div class="flex-1">
          <label class="inline-flex items-center">
            <input type="radio" name="bowlers" />
            <span class="ml-2">Spinner</span>
          </label>
        </div>
      </div>
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
