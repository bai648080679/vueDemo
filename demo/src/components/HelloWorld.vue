<template>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1" class="list"><router-link to="/zhts">综合态势</router-link></el-menu-item>
  <el-menu-item index="2" class="list"><router-link to="/znfx">智能分析</router-link></el-menu-item>
  <el-menu-item index="3" class="list"><router-link to="/fzjc">辅助决策</router-link></el-menu-item>
</el-menu>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
