<script setup lang="ts">
import { anchor, menuShow } from "../store";

const { to } = defineProps({
  to: {
    type: String,
    required: true,
  },
});

function direct() {
  if (to.startsWith("#")) {
    setTimeout(() => {
      scrollToElement(to);
    }, 0.8)
  } else {
    window.location.href = to;
  }
  menuShow.value = false;
}

function scrollToElement(elementId: string) {
  const id = elementId.replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      anchor.value = to;
    }, 400);
  }
}
</script>
<template>
  <div
    w-full
    text-center
    btn-outline
    flex="~ col"
    items-center
    justify-center
    @click="direct"
    mx-2
    :class="to === anchor ? 'border-gray-400' : ''"
    cursor-pointer
  >
    <slot></slot>
  </div>
</template>
<style scoped lang="scss"></style>
