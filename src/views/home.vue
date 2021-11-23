<template>
  <div class="home">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="课程类型">
          <el-select v-model="form.lessionType" placeholder="请选择课程类型" @change="changeType">
            <el-option v-for="(item,index) in typeList" :key="index" :label="item.name" :value="item.code"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-table :data="list" style="width: 100%" border>
        <el-table-column label="课程" property="title"></el-table-column>
        <el-table-column property="titleA" label="书籍"></el-table-column>
        <el-table-column label="券">
          <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.titleB }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column property="name" label="图片" width="120">
          <template slot-scope="scope">
            <img :src="require('../assets/lesson/'+scope.row.imgleftsrc)" style="width:100px;" />
          </template>
        </el-table-column>
        <el-table-column property="name" label="图片" width="120">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>内容: {{ scope.row.detail }}</p>
              <div slot="reference" class="name-wrapper">
                <img :src="require('../assets/lesson/'+scope.row.imgRightSrc)" style="width:100px;" />
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: '这是首页',
      form:{
        lessionType:''
      },
      array:[],
      list:[],
      typeList:[
        {name:'彩绘',code:'caihui'},
        {name:'从业',code:'congye'},
        {name:'金融',code:'jingrong'},
        {name:'中级经济师',code:'zhongjijingjishi'},
      ]
    }
  },
  created(){ 
    this.getList();
  },
  methods:{
    getList(){
      this.api.getLessons().then(res=>{
        this.array = res.data
        this.list = this.array.caihui;
      })
    },
    changeType(val){
      this.list = this.array[val];
    },
  }
}
</script>
<style scoped>

</style>
