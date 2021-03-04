import axios from 'axios';

const instance = axios.create({
    baseURL:'http://123.207.32.32:9001/',
    timeout:10000,
});


export const createAPI = (url,method,data) => {
    let config = {};
    if (method.toUpperCase === 'GET') {
        config.params = data
    }else {
        config.data = data
    }

    return instance({
        url,
        method,
        ...config
    })
};

// 响应拦截器
instance.interceptors.response.use(data => {
    return data.data;
},error => {
    return error;
});

