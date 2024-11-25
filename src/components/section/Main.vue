<script setup lang="ts">
import Hero from "./Hero.vue";
</script>
<template>
  <div id="main" w-full mb-4 flex="~ col" items-center px-2 pb-15 pt-10>
    <div w-full max-w-screen-lg flex="~ col">
      <Hero />
      <div flex="~ col" w-full mt-8>
        <div w-full rounded-xl py-2>
          <img src="https://lp-file.lifepage.cc/img/pc-phone1.png" rounded-lg alt="人生一页PC端和微信端" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
