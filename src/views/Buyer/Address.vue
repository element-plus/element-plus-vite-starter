<template>
    <div class="address-container">
        <el-table :data="addressList" style="width: 100%">    
        <el-table-column prop="name" label="姓名" width="200"></el-table-column>  
        <el-table-column prop="address" label="地址" width="200"></el-table-column>  
        <el-table-column prop="phoneNum" label="联系电话" width="200">  </el-table-column>   
        <el-table-column label="操作" width="180">  
          <template #default="{ row }">  
            <el-button @click="removeFromAddress(row.id)">删除</el-button>  
          </template>  
        </el-table-column>  
      </el-table>
    </div>
    <div>
        <el-button @click="dialogVisible = true">新增地址</el-button>
        <el-dialog v-model="dialogVisible" width="500" class="newAddress">  
        <div class="title">新增地址</div>
        <div>收件人姓名：</div>
        <el-input v-model="name" clearable placeholder="请输入收件人姓名" />
        <div>收件人地址：</div>
        <el-input v-model="address" clearable placeholder="请输入地址" />
        <div>联系方式：</div>
        <el-input v-model="phoneNum" clearable placeholder="请输入联系电话" />
        <el-button @click="dialogVisible = false">取 消</el-button>  
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>   
        </el-dialog>
    </div>
</template>
<script>
import { ElButton } from 'element-plus';

export default{
    data(){
        return{
            addressList:[],
            dialogVisible: false,
            name:"",
            address:"",
            phoneNum:"",
        }
    },
methods:{
    getAddress(){
        this.addressList=[
            {   id:1,
                name:"李田所",
                address:"学院路37号",
                phoneNum:"11451419198",   
            },
            {
                id:2,
                name:"王浩二",
                address:"学院路35号",
                phoneNum:"14342424244",    
            },
            {
                id:3,
                name:"张淳",
                address:"学院路32号",
                phoneNum:"15681119111",
            },
        ]
    },
    removeFromAddress(id) {  
        this.addressList = this.addressList.filter(item => item.id !== id);  
      },
      handleClose(done) {  
      this.$confirm('确认关闭？')  
        .then(_ => {  
          done();  
        })  
        .catch(_ => {});  
    },
    close(){
        this.name="";
        this.address="";
        this.phoneNum="";
    },
    submit(){
        this.name="";
        this.address="";
        this.phoneNum="";
    } 
},
mounted(){
    this.getAddress();
}
}
</script>
<style>
.newAddress{
    margin-top: 60px;  
    text-align: left;
	color:grey;
	font-size: large;
	line-height: 40px;
}
.title{
    text-align: center;
	color:black;
	font-size: 30px;
	line-height: 40px;
}
</style>