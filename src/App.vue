<template>
  <div id="app">
	  <div id='head'><headers></headers></div>
    <el-row id="main">
      <el-col :span="5" id="asd"><asides class="grid-content"></asides></el-col>
	    <el-col :span="19" id="sec"><div class="grid-content">
        <keep-alive>
		<router-view></router-view>
</keep-alive>
        </div></el-col>
    </el-row>
  </div>
</template>
<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  #head{
    width: 100vw;
    height: 10vh;
  }
  #main{
    overflow: hidden;
  }
  #asd,#sec{
    height: 88%;
    box-sizing: border-box;
    overflow: hidden;
    padding: 10px;
  }

</style>

<script>
import headers from './components/HelloWorld.vue'
import asides from './components/aside.vue'
import sections from './components/synthetical.vue'
import './assets/stylesheet/aside.css'
export default {
  name: 'App',
  components: {
	  headers,
    asides,
    sections
  }
}
</script>
