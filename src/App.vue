<template>
  <div id="app">
    <router-view></router-view>
    <main-ta-bar></main-ta-bar>
  </div>
</template>

<script>
import MainTaBar from "@/components/content/mainTabBar";
export default {
  name: 'App',
  components: {
    MainTaBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
