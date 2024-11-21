<script setup lang="ts">
import Layout from "./components/layout/index.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/section/Main.vue";
import Story from "./components/section/Story.vue";
import Origin from "./components/section/Origin.vue";
import Privacy from "./components/section/Privacy.vue";
import Feature from "./components/section/Feature.vue";
import Menu from "./components/Menu.vue";
import { nextTick, onMounted, onUnmounted, ref } from "vue";
import axios from "axios";
import { targetLifeCtn, targetPeopleCtn } from "./store";

const windowWidth = ref(0);

function handleResize() {
  windowWidth.value = window.innerWidth;
}

onMounted(() => {
  nextTick(() => {
    if (typeof window !== "undefined") {
      windowWidth.value = window.innerWidth;
      window.addEventListener("resize", handleResize);
    }
  });
  setTimeout(() => {
    axios
      .get("https://api.lifepage.cc/v1/system/stat")
      .then((res) => {
        console.log(res);
        if (res != null && res.status === 200) {
          targetPeopleCtn.value = res.data.data.p;
          targetLifeCtn.value = res.data.data.l;
          console.log(
            "l:" + targetLifeCtn.value + " p:" + targetPeopleCtn.value
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, 50);
});

onUnmounted(() => {
  console.log("window:", window);
  nextTick(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", handleResize);
    }
  });
});

</script>

<template>
  <Layout>
    <template #header>
      <Header :windowWidth="windowWidth" />
    </template>
    <template #content>
      <Main />
      <Feature />
      <Origin />
      <Story :windowWidth="windowWidth" />
      <Privacy />
      <Footer />
    </template>
    <template #sidebar>
      <Menu />
    </template>
  </Layout>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
