
export default {

   getDataInfo(cb){
     wx.request({
       url: 'http://106.13.112.129:3000/api/cartinfo',  
       header: {
         'content-type': 'application/json' // 默认值
       },
       success(res) {
         cb(res.data)
       }
     })
   }

}