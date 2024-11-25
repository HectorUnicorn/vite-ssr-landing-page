<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick, computed } from "vue";
import Link from "./Link.vue";
import { menuShow, toLink } from "../store";


const props = defineProps({
  windowWidth: Number
})

const windowWidth = computed(() => {
  return props.windowWidth;
});


function rem2Px(rem: number): number {
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return rem * rootFontSize;
}

const bannerHeight = ref(0);

const showHeader = ref(false);

const scrollListener = function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > bannerHeight.value) {
    showHeader.value = true;
  } else {
    showHeader.value = false;
  }
};

onMounted(() => {
  console.log("window:", window);
  nextTick(() => {
    if (typeof window !== "undefined") {
      bannerHeight.value = rem2Px(20);
      window.addEventListener("scroll", scrollListener);
    }
  });
});

onUnmounted(() => {
  console.log("window:", window);
  nextTick(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", scrollListener);
    }
  });
});
</script>
<template>
  <div
    w-full
    h-20
    :class="{ 'border-b': showHeader }"
    bg-neutral-100
    flex="~ row" justify-center
  >
    <div w-full max-w-screen-lg h-20 relative>
      <div flex="~ row" items-center absolute left-4 h-10 top-5>
        <img src="../assets/logo_svg.svg" w-8 h-8 alt="人生一页logo" />
        <h1 text-2xl text-gray-800 font-bold ml-1>人生一页</h1>
      </div>
      <div
        v-if="windowWidth >= 768"
        flex="~ row"
        text-3.4
        rounded-full
        h-10
        pt-2.6
        items-center
        px-4
        border-1px
        border-gray-15
        text-gray-600
        class="centered-element"
      >
        <Link to="#main">首页</Link>
        <Link to="#feature">功能</Link>
        <Link to="#origin">初心</Link>
        <Link to="#story">故事</Link>
        <Link to="#privacy">隐私</Link>
        <Link to="https://doc.lifepage.cc/member">
          <div flex="~ row" items-center>
            会员
            <svg
              ml-2px
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#c8c8c8"
                d="M3 21V3h7.09v2H5v14h14v-5.09h2V21zm7.586-9l7-7H13V3h8v8h-2V6.414l-7 7z"
              />
            </svg>
          </div>
        </Link>
      </div>
      <button
        absolute
        top-8
        right-4
        v-if="windowWidth >= 768"
        flex="~ row"
        items-center
        text-3.8
        @click="toLink('https://m.lifepage.cc/login?from=officialsite')"
      >
        登录
        <svg
          ml-1px
          xmlns="http://www.w3.org/2000/svg"
          width="1.2rem"
          height="1.2rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#222222"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"
          />
        </svg>
      </button>
      <div
        v-if="windowWidth < 768"
        absolute
        top-6
        right-3
        w-8
        h-8
        mr-2
        @click="menuShow = !menuShow"
        cursor-pointer
      >
        <svg
          v-if="!menuShow"
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#222222"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          >
            <path d="M5 5L19 19M5 19L19 5">
              <animate
                fill="freeze"
                attributeName="d"
                dur="0.4s"
                values="M5 5L19 19M5 19L19 5;M5 5L19 5M5 19L19 19"
              />
            </path>
            <path d="M12 12H12" opacity="0">
              <animate
                fill="freeze"
                attributeName="d"
                begin="0.2s"
                dur="0.4s"
                values="M12 12H12;M5 12H19"
              />
              <set fill="freeze" attributeName="opacity" begin="0.2s" to="1" />
            </path>
          </g>
        </svg>
        <svg
          v-if="menuShow"
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#222222"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          >
            <path d="M5 12H19">
              <animate
                fill="freeze"
                attributeName="d"
                dur="0.4s"
                values="M5 12H19;M12 12H12"
              />
              <set fill="freeze" attributeName="opacity" begin="0.4s" to="0" />
            </path>
            <path d="M5 5L19 5M5 19L19 19" opacity="0">
              <animate
                fill="freeze"
                attributeName="d"
                begin="0.2s"
                dur="0.4s"
                values="M5 5L19 5M5 19L19 19;M5 5L19 19M5 19L19 5"
              />
              <set fill="freeze" attributeName="opacity" begin="0.2s" to="1" />
            </path>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>
<style scoped lang="css">
.centered-element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
