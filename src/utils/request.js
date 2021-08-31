import axios from 'axios'

// 初始化axios实例
const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  timeout: 10000
})

// get请求方式
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, params).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

// post请求方式
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
  })
}

// put请求方式
export const put = (url, data = {}) => {
  instance.put(url, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

// delete请求方式
export const deltePost = url => {
  instance.delete(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
