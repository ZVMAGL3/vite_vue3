import { createRouter, createWebHashHistory } from 'vue-router';
import store from '../store/index';

const routerHistory = createWebHashHistory();
//引入组件

export default createRouter({
	history:routerHistory,
    routes:[
        {
            path:'/',
            redirect:'login', 
        },
        {
            path:'/login',
            name:'login',
            component: () => import('/src/pages/login.vue'),
            beforeEnter: (to, from, next) => {
				if(store.state.login.firstTimeLogin === true){
                    store.dispatch('login/initialization')
				}
				next()
			},
        },
    ]
})