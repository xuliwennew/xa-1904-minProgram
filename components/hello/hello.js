// components/hello/hello.js
Component({

  behaviors:[require("../behaviors/myBehaviors.js")],
  /**
   * 组件的属性列表
   */
  properties: {
      title:{
        type:String
      },
      content:{
        type:String
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg:"Hello Componentxxxx"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTitle(){
      this.setData({
        msg:"hello component change!"
      })
    }
  }
})
