<template>
    <div class="divider" v-if="listInfo"></div>

    <div class="condition" :style="tabs_item_icon_arrow?'height:40px':'height:auto'">
        <p  class="condition_label">{{ params.eleInfo_name }}</p> 
        <div  class="condition_list">
            <p 
                v-for="object,index in eleInfo"
                class="condition_list_item"
                :class="eleInfo_index === index?'selected':''"
                @click="condition_list_click(index,object.id,object.name)"
            >
                {{ object.name }}
            </p>
        </div> 
        <div class="condition_switch" @click="tabs_item_icon_arrow=!tabs_item_icon_arrow">
            <p class="tw-text-[14px]">{{ tabs_item_icon_arrow?'更多':'收起' }}</p>
            <el-icon :style="tabs_item_icon_arrow?'display: none;':''"><ArrowUp /></el-icon>
            <el-icon :style="!tabs_item_icon_arrow?'display: none;':''"><ArrowDown /></el-icon>
        </div>
    </div>

    <condition 
        v-if="params && params.children && eleInfo && eleInfo[eleInfo_index] && eleInfo[eleInfo_index].children"
        :eleInfo="[{
                id:'',
                name:'不限'
            }].concat(eleInfo[eleInfo_index].children)"
        :params="params.children"
    />

    <teleport to="body">
        <div class="mask" :style="mask?'display:none':''"></div>
    </teleport>
</template>

<script setup>

    import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
    import condition from '/src/components/condition.vue'
    import { ref } from 'vue';
    import store from '/src/store/index'
    import { useMapState } from '/src/hooks/useMapState.js'

    const props = defineProps({
        eleInfo:{
            type: Object,
        },
        params:{
            type: Object,
        },
        listInfo:{
            type: Number,
        }
    });

    const { mask } = useMapState('login', ['mask']);
    let tabs_item_icon_arrow = ref(true)
    let eleInfo_index = ref(0)

    function condition_list_click(index,id,name){
        
        eleInfo_index.value = index
        store.commit('login/changeMask',false)
        
        if(props.params.name==='province' && eleInfo_index.value){
            store.commit('login/change_params',[props.params.name,name])
            store.dispatch('login/getListData')
        }else{
            store.commit('login/change_params',[props.params.name,id])
            store.dispatch('login/getListData')
        }
    }

</script>

<style scoped>

    .divider {
        width: 100%;
        height: 1px;
        border-top: 1px dashed #dcdfe6;
    }

    .condition {
        display: flex;
        overflow: hidden;
        margin-bottom: 10px;
    }

    .condition_label {
        width: 120px;
        line-height: 30px;
        padding-left: 10px;
        margin-top: 10px;
        color: #909399;
        font-size: 14px;
    }

    .condition_list {
        flex: 1;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-right: 74px;
    }

    .condition_list_item.selected, .condition_list_item:hover {
        color: #fff;
        background-color: #3473e6;
    }

    .condition_list_item {
        cursor: pointer;
        line-height: 20px;
        padding: 5px 10px;
        margin-right: 10px;
        margin-top: 10px;
        border-radius: 2px;
        color: #303133;
    }

    .condition_switch {
        display: flex;
        align-items: center;
        cursor: pointer;
        width: 48px;
        height: 30px;
        margin-top: 10px;
        color: #3473e6;
    }

    .mask{
		position: absolute;
		top: 0;bottom: 0;left: 0;right: 0;
		background-color: rgba(255,255,255,0.2);
    }

</style>