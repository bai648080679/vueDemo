<template>
    <div id="container" ref="contaIner" style='width:100%;height:100%'>
        <!-- vue transition -->
        <div class="vue-transition">
            <button @click="show = !show">toggle</button>
            <transition
                name="fade"
                enter-active-class="animated tada"
                leave-active-class="animated slideinUp"
                >
                    <p v-if="show">Holle</p>
            </transition>
        </div>
        <!-- element transition -->
        <div class="el-transition">
            <el-button @click="el_show=!el_show">toggle</el-button>
            <div style="display:flex">
                <transition name="el-fade-in-linear">
                    <div v-show="el_show" class="transition-box">.el-fade-in-linear</div>
                </transition>
                <transition name="el-zoom-in-center">
                    <div v-show="el_show" class="transition-box">.el-zoom-in-center</div>
                </transition>
            </div>
            <div style="margin-top:20px; height:200px">
                <el-collapse-transition name="el-collapse-transition">
                    <div v-show="el_show">
                        <div class="transition-box">.el-collapse-transition</div>
                    </div>
                </el-collapse-transition>
            </div>
        </div>
    </div>
</template>
<style>
#container{
    width:100%;
    height: 100%;
}
.transition-box{
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
}
</style>

<script>
import $ from 'jquery'
import * as echarts from 'echarts'
import 'echarts-gl';
import '../../assets/stylesheet/animation.css'
export default {
    name: 'zhts',   
   data() {
       return {
           show:true,
           el_show:true
       }
   },
    methods:{
        loadEchartsGL(){
           
        }
    },
    mounted: function(){
            this.loadEchartsGL()
    }
}
</script>