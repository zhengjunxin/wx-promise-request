import Promise from 'es6-promise';

let defaultConfig = {
  request: wx.request,
  Promise,
};

const request = (method = 'GET') => (url, data = {}, options = {}) => new defaultConfig.Promise((resolve, reject) => {
  const obj = Object.assign({}, options, {
    url,
    data,
    method,
    success(res) {
      resolve(res.data);
    },
    fail(err) {
      reject(err);
    },
  });

  defaultConfig.request(obj);
});

const setConfig = (config) => {
  defaultConfig = Object.assign({}, defaultConfig, config);
};

export default {
  request,
  setConfig,
  Promise,
};
