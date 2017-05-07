# wx-promise-request
微信小程序的异步请求

![](https://img.shields.io/badge/build-passing-44cb11.svg)
![](https://img.shields.io/badge/platform-Wechat-44cb11.svg)

## 原因
微信小程序的原生 `wx.request` 方法不支持 Promise

## 下载
``` bash
npm install wx-promise-request
```
然后拷贝 dist/index.js 文件到你的小程序项目中

## 使用
``` javascript
import {request} from './wx-promise-request';

const url = 'test.php';
const data = {
  x: '',
  y: '',
};
const options = {
    header: {
        'content-type': 'application/json',
    }
};
request('GET')(url, data, options)
  .then(res => console.log(res))
  .catch(error => console.log(error));
```