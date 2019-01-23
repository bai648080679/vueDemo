<template>
    <div id="container" ref="contaIner" style='width:100%;height:100%'></div>
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
console.log(echarts);
export default {
    name: 'zhts',   
    methods:{
        loadEchartsGL(){
            
        }
    },
    mounted: function(){
            this.loadEchartsGL()
    }
}
</script>