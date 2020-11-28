<template>
  <div class="mx-auto py-5 px-5 flex flex-grow-0">
    <div class="card bg-gray-800 rounded-lg pb-4">
      <img
        class="hidden md:block h-40 rounded w-full object-cover object-center mb-6"
        src="/placeholder.png"
        alt="content"
      />
      <div class="pt-6">
        <h3
          class="tracking-widest px-6 text-secondary text-xs uppercase font-medium title-font"
        >
          {{ subheading }}
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
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    subheading: {
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
