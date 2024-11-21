<script setup lang="ts">
import NavButton from "./NavButton.vue";
import { toLink } from "../store/index";
</script>
<template>
  <div class="w-10/12" max-w-100 flex="~ col" items-center justify-center>
    <NavButton to="#main" mb-2 mt-4>首页</NavButton>
    <NavButton to="#feature" mb-2>产品功能</NavButton>
    <NavButton to="#origin" mb-2>初心</NavButton>
    <NavButton to="#story" mb-2>故事</NavButton>
    <NavButton to="#privacy" mb-2>隐私保护</NavButton>
    <NavButton to="https://doc.lifepage.cc/member" mb-2
      ><div flex="~ row" items-center pl-3>
        会员<svg ml-2px xmlns="http://www.w3.org/2000/svg" width="0.8em" height="0.8em" viewBox="0 0 24 24"><path fill="#ababab" d="M3 21V3h7.09v2H5v14h14v-5.09h2V21zm7.586-9l7-7H13V3h8v8h-2V6.414l-7 7z"/></svg>
      </div>
    </NavButton>
    <button
      mt-6
      flex="~ row"
      items-center
      justify-center
      text-3.8
      w-full
      btn-outline
      @click="toLink('https://m.lifepage.cc/login?from=officialsite')"
    >
      登录
    </button>
    <button
      mt-6
      flex="~ row"
      items-center
      justify-center
      text-3.8
      w-full
      btn-solid
      @click="toLink('https://m.lifepage.cc/register?c=officialsite')"
    >
      免费注册
    </button>
  </div>
</template>
<style scoped lang="scss"></style>
