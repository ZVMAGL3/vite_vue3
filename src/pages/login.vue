<template>
    <div data-v-710e84a9="" class="search_layout">
        <layout_header/>
        <div class="resource_search">
            <div class="panel page_w" >
                <div class="panel_header" >
                    <div class="title_box" >
                        <img src="/data_image.png" alt="" style="margin-right:16px" >
                        <p class="header_label" >
                            资源大厅
                        </p>
                    </div> 
                    <div class="search_box" >
                        <!-- <el-input placeholder="请输入资源名称或用户名搜索" v-model="searchText" >
                            <template #append>
                                <el-button type="primary" :icon="Search" @click="search">搜索</el-button>
                            </template>
                        </el-input> -->
                        <el-input placeholder="请输入资源名称或用户名搜索" v-model="searchText" ></el-input>
                        <el-button type="primary" :icon="Search" @click="search">搜索</el-button>
                    </div>
                </div>
                <div class="panel_tabs" >
                    <div 
                        v-for="tabs_item_text,index in tabs_item_texts"
                        class="tabs_item" 
                        :class="tabs_item_active === index?'active':''"
                        @click="tabs_item_active = index"
                    >
                        <p >{{ tabs_item_text }}</p>
                    </div>
                </div>
                <div class="panel_main" >
                    <div class="panel_condition">
                        <condition v-for="eleInfo,index in listInfo" :eleInfo="eleInfo" :listInfo="index" :params="params[index]"/>
                    </div>
                    <div class="result">
                        <div class="result_header tw-flex tw-items-center tw-font-bold tw-text-[14px]" >
                            <div class="result_header_item tw-flex tw-items-center" style="flex:420px" >服务名称</div>
                            <div class="result_header_item tw-flex tw-items-center" style="flex:440px;padding-left:80px" >发布用户</div> 
                            <div class="result_header_item tw-flex tw-items-center" style="flex:300px" >服务类型</div> 
                            <div class="result_header_item tw-flex tw-items-center" style="flex:200px" >成功成交数</div> 
                            <div class="result_header_item tw-flex tw-items-center" style="flex:180px" >信用评价</div>
                        </div>
                        <div class="result_body">
                            <result_body_item  v-for="data in listData" :data="data"/>
                        </div>
                    </div>
                </div>
                <div class="panel_pagination tw-flex tw-justify-center tw-items-center">
                    <el-pagination
                        v-model:current-page="pageNum"
                        v-model:page-size="pageSize"
                        layout="prev, pager, next, jumper"
                        :total="total"
                        :pager-count="7"
                        :jumper-text='123'
                        
                        hide-on-single-page
                        background 
                    />
                </div>
            </div>
        </div>  
    </div>
</template>

<script setup>
    import layout_header from '/src/components/layout_header.vue'
    import condition from '/src/components/condition.vue'
    import result_body_item from '/src/components/result_body_item.vue'
    import { Search } from '@element-plus/icons-vue'
    import { ref,computed } from 'vue';
    import { useMapState } from '/src/hooks/useMapState.js'
    import store from '/src/store/index'
    
    let searchText = ref("")

    function search(){
        console.log('搜索中...')
    }

    let tabs_item_texts = ["服务","需求","科创资源"]
    let tabs_item_active = ref(0)

    const { listInfo,listData } = useMapState('login', ['listInfo','listData']);

    let params = [{name:'serviceTypeId',eleInfo_name:'服务类型:',
            children:{name:'serviceTypeId2',eleInfo_name:'二级分类:'}},
        {name:'technicalId',eleInfo_name:'技术领域:'},
        {name:'dataOrigin',eleInfo_name:'数据来源:'},
        {name:'province',eleInfo_name:'地区:'}]

    let pageNum = computed({
        get(){
            store.state.login.params.pageNum
        },
        set(value){
            store.commit('login/change_params',['pageNum',value])
            store.dispatch('login/getListData')
        }
    })

    let pageSize = computed(()=>{
        return store.state.login.params.pageSize
    })

    let total = computed(()=>{
        return store.state.login.params.total
    })


</script>

<style scoped>

    .search_layout {
        width: 100%;
        min-width: 1240px;
    }

    .resource_search {
        width: 100%;
        background-color: #f6f7f8;
        padding: 30px 0;
    }

    .panel {
        padding: 30px;
        background: #fff;
        box-shadow: 0 0 6px rgba(0,0,0,.06);
        border-radius: 4px;
        overflow: hidden;
    }
    .page_w {
        width: 1200px;
        margin: 0 auto;
    }

    .panel_header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
    }

    .title_box {
        display: flex;
        height: 22px;
        align-items: center;
    }

    .title_box>p{
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        color: #303133;
    }

    .search_box {
        display: flex;
        width: 540px;
    }

    .panel_tabs {
        display: flex;
        align-items: center;
        width: 100%;
        height: 48px;
        padding: 0 30px;
        margin-bottom: 10px;
        background: #f7f8f9;
        border-radius: 4px;
    }

    .tabs_item.active:after, .tabs_item:hover:after {
        width: 100%;
    }

    .tabs_item::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 8px;
        transform: translate(-53%);
        width: 0;
        height: 2px;
        background-color: #3473e6;
        border-radius: 2px;
        transition: all .3s ease;
    }

    .tabs_item:hover {
        color: #3473e6;
    }

    .tabs_item:not(:last-child) {
        margin-right: 120px;
    }

    .tabs_item {
        position: relative;
        cursor: pointer;
        line-height: 20px;
        padding: 14px 6px;
        color: #303133;
    }

    .tabs_item>p {
        font-size: 14px;
        font-weight: 700;
    }

    .panel_main {
        min-height: 100px;
    }

    .panel_condition {
        width: 100%;
        padding: 0 20px;
        margin-bottom: 30px;
        background: #fff;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
    }

    .result {
        padding: 10px 0;
    }

    .result_header {
        width: 100%;
        height: 48px;
        padding: 0 20px;
        background: #f7f8f9;
        border-radius: 4px;
    }

    .tw-font-bold {
        font-weight: 700;
    }

    .tw-items-center {
        align-items: center;
    }
    .tw-flex {
        display: flex;
    }

    .result_header_item {
        color: #909399;
        height: 100%;
        padding: 0 20px;
    }
    .tw-items-center {
        align-items: center;
    }
    .tw-flex {
        display: flex;
    }

    .result_body {
        margin-top: 10px;
    }

    .resource_search .panel .panel_pagination {
        padding: 20px 0;
    }
    .tw-justify-center {
        justify-content: center;
    }
    .tw-items-center {
        align-items: center;
    }
    .tw-flex {
        display: flex;
    }

</style>
