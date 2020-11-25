<template>
  <div class="p-5 flex flex-grow-0">
    <div class="card bg-gray-800 rounded-lg pb-4">
      <img
        class="h-40 rounded w-full object-cover object-center mb-6"
        src="/placeholder.png"
        alt="content"
      />
      <h3
        class="tracking-widest px-6 text-secondary text-xs font-medium title-font"
      >
        {{ overline }}
      </h3>
      <h2 class="text-lg px-6 text-strong font-medium title-font mb-4">
        {{ title }}
      </h2>
      <p class="leading-relaxed px-6 text-base">
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    overline: {
      type: String,
      default: 'SUBTITLE',
    },
    title: {
      type: String,
      default: 'TITLE',
    },
  },
}
</script>

<style>
.card {
  min-width: 14rem;
  @apply shadow;
  background-color: var(--bg);
  color: var(--color);
}
.card:hover {
  @apply shadow-xl;
}
</style>
