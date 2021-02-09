import axios from "axios";

export function request(config) {

  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error);
  })

  instance.interceptors.response.use( res => {
    return res.data
  }, error => {
    console.log(error);
  })

  return instance(config)

    // instance(config)
    //   .then(res => {
    //     resolve(res)
    //   })
    //   .catch(err => {
    //     reject(err)
    //   })
//   })
// }

// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32.8000',
//     timeout: 50000
//   })
//
//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
}
