![](https://img.shields.io/badge/build-passing-44cb11.svg)
![](https://img.shields.io/badge/platform-Wechat-44cb11.svg)

# wx-promise-request
wx-promise-request 是微信小程序 `wx.request` 方法的不支持 Promise 和并发数问题的解决方案。

## 解决问题
- 支持 Promise (使用 [es6-promise](https://github.com/stefanpenner/es6-promise) 库)。
- 管理请求队列，解决 request 最大并发数超过 10 会报错的问题。

## 下载
由于小程序不支持 npm，所以直接右键保存 [index.js](https://joezheng2015.github.io/wx-promise-request/dist/index.js) 文件即可。

## 使用
``` javascript
import {request} from './wx-promise-request';

request({
  url: 'test.php',
  data: {
    x: '',
    y: '',
  },
  header: {
    'content-type': 'application/json',
  },
})
.then(res => console.log(res))
.catch(error => console.error(error))
```

## API
setConfig(object)

可以通过 setConfig 配置 wx-promise-request 的行为。

| 属性 | 说明 | 类型 | 默认值 |
| -- | -- | -- | -- |
| request | 发起网络请求的函数 | Function | wx.request |
| Promise | Promise 函数 | Function | [es6-promise](https://github.com/stefanpenner/es6-promise) |
| concurrency | 最大并发数 | number | 10 |

``` javascript
import {request, setConfig} from './wx-promise-request';
import qcloud from './vendor/qcloud-weapp-client-sdk/index';
import Promise from 'bluebird';

setConfig({
    request: qcloud.request,
    Promise,
    concurrency: 5,
})
request({
  url: 'test.php',
})
.then(res => console.log(res))
.catch(error => console.log(error));
```

## License
MIT
