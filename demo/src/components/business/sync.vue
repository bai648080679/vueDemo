<template>
    <div id="container" ref="contaIner" style='width:100%;height:100%'>
        <button @click="show = !show">toggle</button>
        <transition
         name="fade"
         enter-active-class="animated tada"
         leave-active-class="animated slideinUp"
         >
            <p v-if="show">Holle</p>
        </transition>
    </div>
</template>
<style>
#container{
    width:100%;
    height: 100%;
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
           show:true
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