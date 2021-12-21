<template>
  <div class="index">
      这是首页
      <img src="../assets/bg1.jpg" style="width:375px"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '这是首页',
    }
  },
  created(){ //初始化加载
    //初始化多语言，为了使表格的页脚不出错
    // this.$i18n.locale = localStorage.getItem("langular")||"cn";
  },
  computed:{
  },
  methods:{
    getMess(){
      console.log(this.msg+"--这是方法");
    },
  }
}
</script>
<style scoped>
.index{
  width:100%;
  height:100%;
}
</style>
