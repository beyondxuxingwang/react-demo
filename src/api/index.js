import axios from 'axios';


// axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5d4041f51381a33cdf6c9ca5/xxw' // mock

axios.defaults.baseURL = 'https://easy-mock.com/mock/5c0893b83b84ee1919884836/mock.api';
// axios.baseImageUrl = 'http://app-t.healthservice.mobile.taikang.com/clouddevp/storage/file/get?fileId=' //开发
// axios.sdkAppID = '1400176724'  // 开发

var loading;


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    //   console.log(config);
    config.data = config.data || {};
    // 添加请求接口路径前缀
    let token = sessionStorage.getItem("token");

    if (token) {
        config.url = config.url + '?token=' + `${token}`;
    }



    // if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.token = `${token}`;
    // }

    // if (config.method === 'post') {
    //     //添加token判断登录状态
    //     config.headers['Content-Type'] = "application/x-www-form-urlencoded;charset=utf-8";
    //     config.data = JSON.stringify(config.data);
    //     console.log(222);

    // };
    // if (config.url.indexOf('upd')!=-1) {
    //     config.headers['Content-Type'] = "application/json;";
    //     console.log(1111);

    // }

    // 在发送请求之前做些什么
    // loading = Loading.service({
    //     lock: true,
    //     text: "加载中",
    //     spinner: "el-icon-loading",
    //     customClass: "loading-icon",
    //     background: "rgba(0, 0, 0, 0.8)"
    // });

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (res) {
    // loading.close();
    // 对响应数据做点什么
    if (res.data.code == 2000) {
        // Message({
        //     message: res.data.msg,
        //     type: 'success',
        //     duration: 1*1000
        //   })
    } else {

    }
    return res;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default axios;