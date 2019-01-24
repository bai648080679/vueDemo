<template>
    <div id="aside">
        <!-- 树形组件调用 -->
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
</template>
<script>
// import $ from "jquery";
export default {
    name:'tree',
    data() {
        return {
             data: [{
                label: '一级 1',
                jd: '1233',
                wd: '2233.122',
                gc: '1222',
                children: [{
                    label: '二级 1-1',
                    children: [{
                    label: '三级 1-1-1'
                    }]
                }]
                }, {
                label: '一级 2',
                jd: '1233',
                wd: '2233.122',
                gc: '1222',
                children: [{
                    label: '二级 2-1',
                    jd: '1233',
                    wd: '2233.122',
                    gc: '1222',
                    children: [{
                        label: '三级 2-1-1',
                        jd: '1233',
                        wd: '2233.122',
                        gc: '1222',
                    }]
                }, {
                    label: '二级 2-2',
                    jd: '1233',
                    wd: '2233.122',
                    gc: '1222',
                    children: [{
                        label: '三级 2-2-1',
                        jd: '1233',
                        wd: '2233.122',
                        gc: '1222',
                    }]
                }]
                }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    jd: '1233',
                    wd: '2233.122',
                    gc: '1222',
                    children: [{
                        label: '三级 3-1-1',
                        jd: '1233',
                        wd: '2233.122',
                        gc: '1222',
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1',
                        jd: '1233',
                        wd: '2233.122',
                        gc: '1222',
                    }]
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
        }
    },
}
</script>
