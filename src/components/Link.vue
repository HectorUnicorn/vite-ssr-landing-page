<script setup lang="ts">
import { anchor, toLink } from '../store';

const { to } = defineProps({
  to: {
    type: String,
    required: true,
  }
});

function direct() {
    if (to.startsWith("#")) {
        scrollToElement(to);
    } else {
        toLink(to);
    }
}

function scrollToElement(elementId: string) {
  const id = elementId.replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      anchor.value = to
    }, 400)
  }
}

</script>
<template>
  <span @click="direct" select-none pb-2 mx-3 text-gray-500 :class="to === anchor ? 'border-b border-gray-700 text-gray-700' : ''" cursor-pointer>
    <slot></slot>
  </span>
</template>
<style scoped lang="scss"></style>
