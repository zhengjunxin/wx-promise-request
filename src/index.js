import Promise from 'es6-promise';
import queue from 'async/queue';

let defaultConfig = {
  request: wx.request,
  Promise,
  maxRequest: 10,
};

const q = queue((task, callback) => task(callback), defaultConfig.maxRequest);

const request = object => new defaultConfig.Promise((resolve, reject) => {
  q.push((callback) => {
    defaultConfig.request(Object.assign({}, object, {
      success: resolve,
      fail: reject,
      complete: callback,
    }));
  });
});

const setConfig = (config) => {
  defaultConfig = Object.assign({}, defaultConfig, config);
};

export default {
  request,
  setConfig,
  Promise,
};
