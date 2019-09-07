// components/world/world.js
Component({

  created(){
    console.log("created")
  },

  attached(){
    console.log("attached")
  },
  ready(){
    console.log("ready")
  },

  behaviors:[require("../behaviors/myBehaviors.js")],
  /**
   * 组件的属性列表
   */
  properties: {
     user:{
       type:Object
     },
     del:{
       type:Function
     },
     idx:{
       type:{
         type:Number
       }
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

     delUser(){
       console.log(this.data)
        this.triggerEvent("del",{id:this.data.idx},{})
     },
    updateTitle(){
      this.setData({
        title:"修改共享的标题"
      })
    }
  },
  observers:{
    "title":function(val){
      console.log(val)
    }
  }
})
