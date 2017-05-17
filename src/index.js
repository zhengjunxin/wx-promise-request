import Promise from 'es6-promise';
import queue from 'async/queue';

let defaultConfig = {
  request: wx.request,
  Promise,
  maxRequest: 10,
};

const request = object => new defaultConfig.Promise((resolve, reject) => {
  defaultConfig.request(Object.assign({}, object, {
    success(res) {
      resolve(res);
    },
    fail(err) {
      reject(err);
    },
  }));
});

const setConfig = (config) => {
  defaultConfig = Object.assign({}, defaultConfig, config);
};

const q = queue((task, callback) => {
  task()
    .then(callback);
}, defaultConfig.maxRequest);

const queueRequest = object => new defaultConfig.Promise((resolve, reject) => {
  q.push(() => request(object).then(resolve, reject));
});

export default {
  request: queueRequest,
  setConfig,
  Promise,
};
