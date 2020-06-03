# my-vue-template

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# vue项目搭建
+ 创建项目 vue create vue-demo
+ 选择呢对应的包router,vuex,babel
+ 安装完成后进入项目运行项目cd vue-demo / npm run serve
- 安装 axios 请求数据 npm i axios --save
- App.vue
    ``` vue
    <template>
        <div id="app">
            <router-view/>
        </div>
    </template>

    <style>
    </style>
    ```
- main.js
    ``` javascript
    import Vue from 'vue'
    import App from './App.vue'
    import router from './router'
    import store from './store'

    Vue.config.productionTip = false

    new Vue({
    router,
    store,
    render: h => h(App)
    }).$mount('#app')
    ```
- store/index.js
    ```javascript
    import Vue from "vue";
    import Vuex from "vuex";
    import axios from "axios";

    Vue.use(Vuex);

    export default new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        setlist(state, data) {
        state.list = data;
        }
    },
    actions: {
        getData({ commit }) {
        axios
            .get("/api/getData", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
            })
            .then(res => {
            if (res.status === 200) {
                return res.data;
            }
            })
            .then(res => {
            commit("setlist", Array.from(res));
            });
        }
    },
    modules: {}
    });
    ```
- Home.vue
    ``` vue
    <template>
        <div class="home">
            <ul>
            <li v-for="item in list" :key="item.id">
                <p>姓名:{{ item.name }}</p>
                <p>年龄:{{ item.age }}</p>
            </li>
            </ul>
        </div>
    </template>

    <script>
    export default {
    name: "Home",
    computed: {
        list() {
        return this.$store.state.list;
        }
    },
    mounted() {
        this.getlist();
    },
    methods: {
        getlist() {
        this.$store.dispatch('getData')
        }
    }
    };
    </script>

    ```
- 根目录新建vue.config.js
    ```javascript
    module.exports = {
        devServer: {
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        proxy: {
            "/api": {
            target: "http://127.0.0.1:3000",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "/"
            }
            }
        }
        }
    };
    ```
- 运行验证npm run serve 控制台不报错，浏览器输入<127.0.0.1:8080>

# 手动构建webpack项目
+ mkdir my-vue-cli
+ cd my-vue-cli
+ npm init -y
  - 根目录手动添加index.html,webpack.config.js
  - src 手动添加index.js,app.vue 
+ 

# 模板构建webpack小型项目
    ```javascript
    $ npm install -g vue-cli
    $ vue init webpack-simple my-project
    $ cd my-project
    $ npm install
    $ npm run dev
    ```
# 模板构建webpack大型项目
    ``` javascript
    $ npm install -g vue-cli
    $ vue init webpack my-project
    $ cd my-project
    $ npm install
    $ npm run dev
    ```
