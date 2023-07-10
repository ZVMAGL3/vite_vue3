<template>
    <div class="layout_header" >
        <div class="page_w layout_header_main">
            <div class="left_box">
                <a href="/" class="left_title nuxt-link-active">
                    <img src="https://test.nttcc.com.cn/_nuxt/img/logo_1.e54ae31.png" alt="">
                    <h1>共创云</h1>
                </a> 
                <div class="mid_nav">
                    <a href="/" class="nuxt-link-active">
                        服务产品
                    </a> 
                    <a href="/" class="nuxt-link-active">
                        科创需求
                    </a> 
                    <a href="/" class="nuxt-link-active">
                        专利论文
                    </a> 
                    <a href="/" class="nuxt-link-active">
                        交易大数据
                    </a>
                </div>
            </div> 
            <div class="right_login_box">
                <div class="login_box">
                    <button>
                        登录
                    </button> 
                    <button>
                        注册
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .layout_header{
        width: 100%;
        height: 50px;
    }

    .layout_header_main{
        padding: 0px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }

    .page_w {
        width: 1200px;
        margin: 0 auto;
    }

    .left_box{
        display: flex;
        align-items: center;
    }

    .left_title {
        display: flex;
        align-items: center;
        margin-right: 50px;
    }

    .left_title>img {
        width: 30px;
        height: 30px;
        -o-object-fit: cover;
        object-fit: cover;
        margin-right: 10px;
    }

    .left_title>h1 {
        
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        color: #3473e6;
    }

    .mid_nav {
        display: flex;
        align-items: center;
    }

    .mid_nav>a {
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: #606266;
        cursor: pointer;
    }

    .layout_header_main .left_box .mid_nav>a+a {
        margin-left: 24px;
    }

    .right_login_box {
        display: flex;
        align-items: center;
    }

    .login_box {
        display: flex;
    }

    .login_box>button:first-child {
        width: 64px;
        height: 32px;
        background: #3473e6;
        border-radius: 4px;
        margin-right: 10px;
        color: #fff;
    }

    .login_box>button:last-child {
        width: 64px;
        height: 32px;
        background: #fff;
        border: 1px solid #90b7f1;
        border-radius: 4px;
        color: #3473e6;
    }

</style>