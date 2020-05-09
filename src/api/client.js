import axios from 'axios'

export default (url='', para={}, method='GET')=>{
    let promise;

    return new Promise((resolve, reject)=>{
        if (method.toUpperCase() === 'GET') {
            let paraStr = '';
            Object.keys(para).forEach((key)=>{
                paraStr += key + '=' + para[key] + '&' 
            });
            if (paraStr) {
                paraStr = paraStr.substr(0, paraStr.lastIndexOf('&'));
                url += '?' + paraStr;
            }
            promise = axios.get(url);
        } else if (method.toUpperCase() === 'POST') {
            promise = axios.post(url, para);
        }

        promise.then((response)=>{
            resolve(response.data);
        }).catch (error=>{
            reject(error);
        });
    });
};