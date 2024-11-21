<template>
  <div w-full flex flex-col md:flex-row items-center md:items-center md:justify-between px-4 py-4>
    <div flex="~ col" items-center md:items-start mb-6>
      <div class="hidden md:block" mb-3><slot></slot></div>
      <h3 text-3xl text-gray-600 font-bold flex="~ col" items-center md:items-start>
        <span>{{ title }}</span>
        <span mt-0.6>{{ subtitle }}</span>
      </h3>
    </div>
    <img class="w-11/12 md:w-8/12" :src="src" />
  </div>
</template>
<script setup lang="ts">
const { title, subtitle, src } = defineProps({
  title: String,
  subtitle: String,
  src: String,
});
</script>
<style scoped lang="scss"></style>
