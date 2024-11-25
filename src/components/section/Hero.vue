<template>
  <div w-full flex="~ row" items-start justify-center px-4>
    <div w-full max-w-screen-lg flex="~ col" items-center justify-center>
      <h2 w-full text-10 font-bold leading-13 md:leading-11 mt-12 md:mt-25 text-center text-gray-800>
        为故去亲友创建一个纯净的纪念网站
      </h2>
      <h3 mt-6 text-gray-500>发起人生纪念，留下人生相册，邀请亲友协作</h3>
      <button mt-14 mb-6 class="btn-solid" @click="toLink('https://m.lifepage.cc/register?c=officialsite')" px-10>免费注册</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { toLink } from '../../store';

</script>
<style scoped lang="scss"></style>
