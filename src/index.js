import Promise from 'es6-promise'

const request = (method = 'GET') => (url, data = {}, options = {}) => {
    return new Promise((resolve, reject) => {
        const obj = Object.assign({}, options, {
            url,
            data,
            method,
            success(res) {
                resolve(res.data)
            },
            fail(err) {
                reject(err)
            },
        })

        wx.request(obj)
    })
}

export default request