<template>
    <div  class="result_body_item item">
        <div  class="item_col col_1" style="flex: 1 1 420px;">
            <p class="tw-text-[16px] tw-font-bold tw-line-clamp-2">{{ data.title }}</p>
        </div>
        <div  class="item_col col_2" style="flex: 1 1 440px;">
            <img  
                :src="data.avatarUrl?data.avatarUrl:'https://test.nttcc.com.cn/_nuxt/img/default_avatar.442622a.png'" 
                style="object-fit: cover;">
            <p  class="tw-text-[16px] tw-font-bold">{{ data.orgName }}</p>
        </div>
        <div  class="item_col col_3" style="flex: 1 1 300px;">
            <p  class="tw-text-[14px]">{{ data.serviceTypeName }}</p>
        </div>
        <div  class="item_col col_4" style="flex: 1 1 200px;">
            <p  class="tw-text-[16px] tw-font-bold">{{ data.totalDeal }}</p>
        </div>
        <div  class="item_col col_5" style="flex: 1 1 180px;">
            <p  class="tw-text-[16px] tw-font-bold">{{ data.avgScore }}</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        data:{
            type: Object,
        },
    });
</script>

<style scoped>

    .item_col {
        padding: 0 20px;
        height: 100%;
        align-items: center;
    }

    .item, .item_col {
        padding: 0 20px;
        display: flex;
    }

    .item {
        margin-bottom: 10px;
    }

    .result_body_item {
        cursor: pointer;
        position: relative;
        width: 100%;
        height: 80px;
        background: #fff;
        border-radius: 4px;
    }

    .result_body_item:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        pointer-events: none;
    }

    .result_body_item:hover:after{
        border:1px solid #3473e6;;
    }

    .col_2 {
        justify-content: flex-start;
    }

    .col_1 {
        color: #000;
    }

    .tw-line-clamp-2 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    
    .col_2 {
        justify-content: flex-start;
    }
    
    .tw-font-bold {
        font-weight: 700;
    }

    .col_2>img {
        width: 40px;
        height: 40px;
        margin-right: 20px;
    }

    .tw-text-\[16px\] {
        font-size: 16px;
    }

    .col_2>p {
        color: #000;
    }

    .col_3 {
        color: #606266;
    }

    .col_4 {
        color: #f1b221;
    }
    
    .col_5 {
        color: #3473e6;
    }

</style>