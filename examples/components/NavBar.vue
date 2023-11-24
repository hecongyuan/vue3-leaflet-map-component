<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo w-full h-full"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <el-menu-item index="/">
      <span>LsMapPage</span>
    </el-menu-item>
    <el-menu-item index="/LsMapGeoPage">
      <span>LsMapGeoPage</span>
    </el-menu-item>
    <el-menu-item index="/LsMapMarkerPage">
      <span>LsMapMarkerPage</span>
    </el-menu-item>
    <el-menu-item index="/LsMapDivmarkerPage">
      <span>LsMapDivmarkerPage</span>
    </el-menu-item>
    <el-menu-item index="/LsMapPopupPage">
      <span>LsMapPopupPage</span>
    </el-menu-item>
    <el-menu-item index="/LsMapTracklinePage">
      <span>LsMapTracklinePage</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
// 解构
import { defineComponent } from "vue";
// 模块化
export default defineComponent({
  name: "Home", //组件名称
  props: {
    // 接收父组件数据
  },
  components: {
    // 定义子组件
  },
  setup(props, ctx) {
    // 这里没有this,直接使用props里数据
    return {};
  },
});
</script>
<style scoped>
/* scoped 使用得定义的样式只在本页面内生效  */
</style>
 