
<template>
  <el-container class="h-full text-black">
    <el-header class="!p-0">
      <slot name="header"></slot>
    </el-header>
    <el-container>
      <el-aside>
        <slot name="aside"></slot>
      </el-aside>
      <el-main> 
        <slot name="main"></slot>
        </el-main>
    </el-container>
  </el-container>
</template>
<script>
// 解构
import { defineComponent } from "vue";
// 模块化
export default defineComponent({
  name: "Layout", //组件名称
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
 