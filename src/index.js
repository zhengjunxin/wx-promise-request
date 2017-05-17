import Promise from 'es6-promise';

let defaultConfig = {
  request: wx.request,
  Promise,
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

export default {
  request,
  setConfig,
  Promise,
};
