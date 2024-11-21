<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { targetLifeCtn, targetPeopleCtn } from "../../store";

const props = defineProps({
  windowWidth: Number
})

const windowWidth = computed(() => {
  return props.windowWidth;
});


// 人数
const counterPeople = ref(1000);
// 写一个将1000累加到一个指定数字target的函数，要求每s变至少50个数字，步进为1

const addAnim = () => {
  let i = 1000;
  const timer = setInterval(() => {
    i += 3;
    if (i > targetPeopleCtn.value) {
      clearInterval(timer);
      return;
    }
    counterPeople.value = i;
  }, 15);
};

// 一页数
const counterPage = ref(2500);
// 写一个将2500累加到一个指定数字target的函数，要求每s变至少50个数字，步进为1
const addAnim2 = () => {
  let i = 2500;
  const timer = setInterval(() => {
    i += 7;
    if (i > targetLifeCtn.value) {
      clearInterval(timer);
      return;
    }
    counterPage.value = i;
  }, 15);
};

onMounted(() => {
  setTimeout(() => {
    addAnim();
    addAnim2();
  }, 1200);
});
</script>
<template>
  <div
    id="story"
    class="scoll-margin-div"
    w-full
    flex="~ row"
    pb-10
    pt-15
    items-center
    justify-center
    px-4
  >
    <div w-full max-w-screen-lg>
      <h2 w-full text-center text-4xl font-bold pb-10 text-gray-800>
        用户故事
      </h2>
      <div grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-2 mt-14 mb-3>
        <div
          flex="~ col"
          justify-between
          p-5
          border-1px
          border-gray-100
          rounded-xl
          hover:shadow-light
          bg-white
        >
          <span text-gray-700 leading-7.5 text-justify
            >老母亲脑瘤急症去世了，很突然。老人已经86岁了，虽然我们也准备着这一天，但当事情发生，悲伤还是超出了我的预期。我是小儿子，大学毕业就离家去外地工作，这30年，除了妈妈偶尔小住，每年只有春节和国庆能和老妈妈团聚。无以言状，只能诚心为她建一个纪念网站，保存音容笑貌，以寄托哀思。</span
          >
          <div mt-6 flex="~ row" justify-start items-center>
            <img w-6 h-6 src="https://lp-file.lifepage.cc/img/avatar4.png" />
            <div text-gray-500 text-xs ml-2>成先生</div>
            <div text-gray-300 text-3 ml-1>(小儿子)</div>
          </div>
        </div>
        <div
          flex="~ col"
          justify-between
          p-5
          border-1px
          border-gray-100
          rounded-xl
          hover:shadow-light
          bg-white
        >
          <span text-gray-700 leading-7.5 text-justify
            >在姥姥去世的时候，我用”人生一页“这个工具和长辈一起发起了网络纪念。亲友留下很多吊唁。我也在上面记下了小时候在姥姥家发生的趣事，她给我做的各种小吃，给我买的每一个生日蛋糕... 每逢佳节，这里寄托着我们的思念。</span
          >
          <div mt-6 flex="~ row" justify-start items-center>
            <img w-6 h-6 src="https://lp-file.lifepage.cc/img/avatar1-2.png" />
            <div text-gray-500 text-xs ml-2>李景念</div>
            <div text-gray-300 text-3 ml-1>(外孙女)</div>
          </div>
        </div>
        <div
          flex="~ col"
          justify-between
          p-5
          border-1px
          border-gray-100
          rounded-xl
          hover:shadow-light
          bg-white
          v-if="windowWidth >= 768"
        >
          <span text-gray-700 leading-7.5 text-justify
            >父亲是得癌症去世的，从第一次住院到离世，短短的10个月时间。10个月之后，他葬在了村子西边庄稼地旁的祖坟里，一副棺材，一抔黄土。那一刻我知道，父亲走了…我成了“孤儿”。吹吹打打的仪式完成了，但是父亲生前的往事却时时涌来。师弟推荐了人生一页这个网站，留存着父亲给我的40多年爱和回忆。</span
          >
          <div mt-6 flex="~ row" justify-start items-center>
            <img w-6 h-6 src="https://lp-file.lifepage.cc/img/avatar1-1.png" />
            <div text-gray-500 text-xs ml-2>王先生</div>
            <div text-gray-300 text-3 ml-1>(儿子)</div>
          </div>
        </div>
        <div
          flex="~ col"
          justify-between
          p-5
          border-1px
          border-gray-100
          rounded-xl
          hover:shadow-light
          bg-white
          v-if="windowWidth >= 768"
        >
          <span text-gray-700 leading-7.5 text-justify
            >前年，我的小学同学身体不适，去医院检查途中猝死了，生命定格在了34岁。他是一个开心果，一个月前他还兴奋的跟我聊着筹备婚礼的事情。噩耗传来后，同学们很想去吊唁或者找到纪念他的方式，但因为疫情的原因，我们没能参加他的葬礼。直到最近我发现了“人生一页”这个平台，我们为他建立了纪念馆，让大家永远记住他曾经带给我们的欢乐。</span
          >
          <div mt-6 flex="~ row" justify-start items-center>
            <img w-6 h-6 src="https://lp-file.lifepage.cc/img/avatar3.png" />
            <div text-gray-500 text-xs ml-2>黄耀婷</div>
            <div text-gray-300 text-3 ml-1>(同学)</div>
          </div>
        </div>
      </div>
      <div flex="~ col" justify-center items-center mt-20>
        <h3 text-2xl text-center px-2>
          已经有<span font-bold min-w-30>{{ counterPeople }}</span
          >+人创建了<span font-bold>{{ counterPage }}</span
          >+个人生一页
        </h3>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
