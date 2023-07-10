import axios from 'axios';

export default {
    namespaced: true,
    //数据存储
    state: () => ({
        firstTimeLogin : true, //是否是第一次登录
        listInfo:[[],[],
            [{id:'',name:'不限'},{id:'nttcc',name:'共创云'},{id:'51kehui',name:'科惠网'},{id:'jxstc',name:'江西省网上常设技术市场'},{id:'hntpe',name:'潇湘科技要素大市场'}],

            [{id:'',name:'不限'},{name:'湖北省'},{name:'湖南省'},{name:'江西省'},{name:'北京市'},{name:'天津市'},
            {name:'河北省'},{name:'山西省'},{name:'内蒙古自治区'},{name:'辽宁省'},{name:'吉林省'},{name:'黑龙江省'},
            {name:'上海市'},{name:'江苏省'},{name:'浙江省'},{name:'安徽省'},{name:'福建省'},{name:'山东省'},
            {name:'河南省'},{name:'广东省'},{name:'广西壮族自治区'},{name:'海南省'},{name:'重庆市'},{name:'四川省'},
            {name:'贵州省'},{name:'云南省'},{name:'西藏自治区'},{name:'陕西省'},{name:'甘肃省'},{name:'青海省'},
            {name:'宁夏回族自治区'},{name:'新疆维吾尔自治区'},{name:'台湾省'},{name:'香港特别行政区'},{name:'澳门特别行政区'}]
        ],
        listData:{},
        mask:false,
        params:{
            pageNum:1, //页数
            pageSize:10, //每页个数
            keywords:'', //关键字
            serviceTypeId:'', //服务类型
            serviceTypeId2:'', //二级分类
            technicalId:'', //技术领域
            province:'', //省份
            dataOrigin:'', //数据来源
            logicStatus:1,
            total:0
        },
    }),
    mutations: {
        NavigationBarOne(state,value){
            value.unshift({
                id:'',
                name:'不限'
            })
            state.listInfo[0] = value
            state.firstTimeLogin = false //检测用户登录状态
        },

        NavigationBarTwo(state,value){
            value.unshift({
                id:'',
                name:'不限'
            })
            state.listInfo[1] = value
        },

        saveListData(state,value){
            state.listData = value
        },

        //修改参数
        change_params(state,value){
            state.params[value[0]] = value[1]
        },

        changeMask(state,value){
            state.mask = value
        }

    },
    actions:{
        //初始化
        initialization(context){
            context.dispatch('getListData')

            axios.get("https://service.test.nttcc.com.cn/admin/api/v1/service_type/ladderlist", {

            }).then(response => {
                if(response.data){
                    context.commit('NavigationBarOne',response.data.data)
                }else{
                    console.log('连接错误')
                }
            }).catch(err => {
                console.log(err)
            })
            
            axios.get("https://service.test.nttcc.com.cn/api/v1/technical/list", {

            }).then(response => {
                if(response.data){
                    context.commit('NavigationBarTwo',response.data.data.list)
                }else{
                    console.log('连接错误')
                }
            }).catch(err => {
                console.log(err)
            })
            

        },
        getListData(context){
            const params = context.state.params
            const url = [
                'https://service.test.nttcc.com.cn/api/v1/service/list',
                `?pageNum=${params.pageNum}`,
                `&pageSize=${params.pageSize}`,
                `&keywords=${encodeURIComponent(params.keywords)}`,
                `&serviceTypeId=${params.serviceTypeId}`,
                `&serviceTypeId2=${params.serviceTypeId2}`,
                `&technicalId=${params.technicalId}`,
                `&province=${params.province}`,
                `&dataOrigin=${params.dataOrigin}`,
                `&logicStatus=${params.logicStatus}`
              ].join('');

            axios.get(url, {

            }).then(response => {
                if(response.data){
                    context.commit('saveListData',response.data.data.list)
                    context.commit('changeMask',true)
                    context.commit('change_params',['total',response.data.data.total])
                }else{
                    console.log('连接错误')
                }
            }).catch(err => {
                console.log(err)
            })
        }
	},
}
