<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activate-color="red">
        <template v-slot:item-icon>
          <img src="~@/assets/img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:item-icon-activate>
          <img src="~@/assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-icon>
          <img src="~@/assets/img/tabbar/category.svg" alt="">
        </template>
        <template v-slot:item-icon-activate>
          <img src="~@/assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>菜单</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:item-icon>
          <img src="~@/assets/img/tabbar/shopcart.svg" alt="">
        </template>
        <template v-slot:item-icon-activate>
          <img src="~@/assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="~@/assets/img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:item-icon-activate>
          <img src="~@/assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem";
import TabBar from "@/components/common/tabbar/TabBar";

export default {
  name: "MainTaBar",
  components: {
    TabBar,TabBarItem
  }
}
</script>

<style scoped>

</style>
