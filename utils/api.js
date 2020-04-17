const app = getApp()
let Base_URL = 'https://www.tuopu.fun/admin.php/api'
// const api = (url,method,data,)=>{
//     let _url = Base_URL + url;
//     return new Promise((resolve, reject) => {
//         wx.request({
//             url:_url,
//             method:method,
//             data:data,
//             header: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             success(request) {
//                 resolve(request.data)
//
//             },
//             fail(error) {
//                 reject(error)
//             }
//         })
//     })
// }
export  function api (url,method,data){
    let _url = Base_URL + url;
    return new Promise((resolve, reject) => {
        wx.request({
            url:_url,
            method:method,
            data:data,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success(request) {
                resolve(request.data)

            },
            fail(error) {
                reject(error)
            }
        })
    })
}
// module.exports ={
//     Get_OpenId:(data)=>{
//         return api('/admin/Get_OpenId','get',data)
//     }
// }