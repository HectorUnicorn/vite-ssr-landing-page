<script setup lang="ts">
import { menuShow } from "../../store/index";
</script>
<template>
  <div relative w-full h-full flex="~ col" :class="{ 'overflow-hidden': menuShow } ">
    <div w-full fixed z-1 top-0 left-0 right-0>
      <slot name="header"></slot>
    </div>
    <div w-full flex="~ col" absolute top-0 left-0 right-0 pt-20 bg-neutral-100>
      <slot name="content"> </slot>
      <div w-full>
        <slot name="footer"></slot>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="menuShow"
        fixed
        h-auto
        top-20
        left-0
        right-0
        bottom-0
        bg-white
        z-100
        flex="~ col"
        items-center
      >
        <slot name="sidebar"></slot>
      </div>
    </transition>
  </div>
</template>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
