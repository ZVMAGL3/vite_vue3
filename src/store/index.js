//该文件用于创建Vuex中最为核心的store

// 引入Vuex
import { createStore } from 'vuex'

import login from './login'

// 创建并导出store
export default createStore({
  modules: {
    login,
  },
})