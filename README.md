![](https://img.shields.io/badge/build-passing-44cb11.svg)
![](https://img.shields.io/badge/platform-Wechat-44cb11.svg)

# wx-promise-request
wx-promise-request 是对微信小程序 `wx.request` 方法的异步封装。

## 解决问题
- 支持 Promise (使用 [es6-promise](https://github.com/stefanpenner/es6-promise) 库)。
- 管理请求队列，解决 request 最大并发数超过 10 会报错的问题。

## 下载
``` bash
npm install wx-promise-request
```
然后拷贝 dist/index.js 文件到你的小程序项目中。

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

通过 setConfig 配置 wx-promise-request，如：使用 qcloud 提供的 request 方法；使用其他 Promise 库等等。
``` javascript
import {request, setConfig} from './wx-promise-request';
import qcloud from './vendor/qcloud-weapp-client-sdk/index';
import Promise from 'bluebird';

setConfig({
    request: qcloud.request,
    Promise,
})
request({
  url: 'test.php',
})
.then(res => console.log(res))
.catch(error => console.log(error));
```

## License
MIT
