<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActivate" name="item-icon"></slot>
    <slot v-else name="item-icon-activate"></slot>
    <div :style="activateStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      //isActivate:true
    }
  },
  computed: {
    isActivate() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activateStyle() {
      return this.isActivate ? {color: this.activateColor} : {};
    }
  },
  props: {
    path: String,
    activateColor: {
      type: String,
      default: 'rgb(212, 35, 122)'
    }
  },
  methods: {
    itemClick() {
      if(this.$route.path !== this.path)
        this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;

  font-size: 14px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>