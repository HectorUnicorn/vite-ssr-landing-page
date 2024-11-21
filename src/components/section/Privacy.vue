<template>
  <div id="privacy" class="scoll-margin-div" w-full flex="~ row" items-center justify-center px-4 pb-10 pt-15>
    <div w-full max-w-screen-lg flex="~ col" items-center justify-between>
      <div flex="~ col" items-center>
        <h2 w-full text-center text-4xl font-bold pb-10 text-gray-800>
          您的隐私您做主
        </h2>
        <p text-base mt-4 text-gray-500 leading-7>
          您创建的纪念网站默认私有，分享给谁可以完全控制；我们不贩卖隐私
        </p>
      </div>
      <div grid grid-cols-1 gap-10 gap-5 md:grid-cols-2 mt-14 mb-3>
        <div shadow-light p-5 rounded-2xl flex="~ row" bg-white>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4.5rem"
            height="4.5rem"
            viewBox="0 0 32 32"
            w-32
            ml--2
            mr-4
          >
            <path
              fill="#b0b0b0"
              d="M22.86 25.86c-.72.75-1.54 1.42-2.46 1.94L15 31l-5.5-3.2c-3.4-2-5.5-5.6-5.5-9.5V4c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v5h-2V4H6v14.3c0 3.2 1.7 6.2 4.5 7.8l4.5 2.7l4.5-2.7c.73-.47 1.41-.99 2-1.6zM28 12H18v2h10zm0 8H18v2h10zm2-4H20v2h10z"
            />
          </svg>
          <div>
            <h3 text-lg font-bold>纪念权限控制</h3>
            <p mt-4 leading-8 text-justify>我们倡导真名参与</p>
            <p mt-2 leading-8 text-justify>
              不同的纪念权限：管理员和参与者分开，保证不乱留言，便于管理
            </p>
            <p text-sm mt-4 text-gray-500 leading-8>保障活动有序</p>
          </div>
        </div>
        <div shadow-light p-5 rounded-2xl flex="~ row" bg-white>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5rem"
            height="5rem"
            viewBox="0 0 48 48"
            w-32
            mr-5
            mt--2
            ml-1
          >
            <g
              fill="none"
              stroke="#95b98d"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            >
              <path
                d="M39 28v4h-8v-4a4 4 0 0 1 8 0m-13 4h18v12H26zm6-26h6a4 4 0 0 1 4 4v6M16 42h-6a4 4 0 0 1-4-4v-6M22 8v12c0 2.21-4.03 4-9 4s-9-1.79-9-4V8"
              />
              <path
                d="M22 14c0 2.21-4.03 4-9 4s-9-1.79-9-4m18-6c0 2.21-4.03 4-9 4s-9-1.79-9-4s4.03-4 9-4s9 1.79 9 4"
              />
            </g>
          </svg>
          <div>
            <h3 text-lg font-bold>数据安全的技术</h3>
            <p mt-4 leading-8 text-justify>
              使用SSL加密传输；图片视频加密和防盗链；敏感信息加密；操作分权限等方式切实保护您的数据安全。
            </p>
            <p text-sm mt-4 text-gray-500 leading-8>保障数据安全</p>
          </div>
        </div>
      </div>
      <h2 w-full text-center text-3xl font-bold text-gray-800 mt-20>
        开始纪念，不要让他(她)被遗忘
      </h2>
      <button
        mt-14
        class="btn-solid"
        flex="~ row"
        items-center
        px-10
        @click="toLink('https://m.lifepage.cc/register?c=officialsite2')"
      >
        免费注册
        <svg ml-2px xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"/></svg>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { toLink } from "../../store";
</script>
<style scoped lang="scss"></style>
