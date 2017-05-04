import Promise from 'es6-promise';

const defaultOptions = {
  requestFunc: wx.request,
};

const request = (method = 'GET') => (url, data = {}, options = {}) => new Promise((resolve, reject) => {
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

  defaultOptions.requestFunc(obj);
});

const setRequestFunc = (requestFunc) => {
  defaultOptions.requestFunc = requestFunc;
};

export default {
  request,
  setRequestFunc,
};
