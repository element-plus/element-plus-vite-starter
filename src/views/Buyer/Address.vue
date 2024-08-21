<template>  
  <div>  
    <el-button type="primary" @click="showDialog = true">添加新地址</el-button>  
    <el-dialog  
      v-model="showDialog"  
      title="添加地址"  
      width="30%"  
      @close="handleClose"  
    >  
      <el-form :model="dataForm"  :rules="dataRule" ref="dataForm">  
        <el-form-item label="姓名" prop="name">  
          <el-input v-model="dataForm.name"></el-input>  
        </el-form-item>  
        <el-form-item label="电话" prop="phone">  
          <el-input v-model="dataForm.phone"></el-input>  
        </el-form-item>  
        <el-form-item label="地址" prop="address">  
          <el-input type="textarea" v-model="dataForm.address"></el-input>  
        </el-form-item>  
        <span slot="footer" class="dialog-footer">  
          <el-button @click="showDialog = false">取 消</el-button>  
          <el-button type="primary" @click="dataFormSubmit()">确 定</el-button>  
        </span>  
      </el-form>  
    </el-dialog>  
    <!-- 假设的地址列表展示 -->  
    <el-table :data="addresses" style="width: 100%">
      <el-table-column type="index" label="编号" width="180"></el-table-column>  
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>  
      <el-table-column prop="phone" label="电话" width="180"></el-table-column>  
      <el-table-column prop="address" label="地址"></el-table-column> 
    <el-table-column label="操作">
      <template #default="scope">
        <el-button @click="delayAddressRequest(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>  
  </div>  
</template>  
  
<script>
import {addAddress,getAddress,delayAddress} from '../../api/apis.js'  
export default {  
  data() {  
    return {  
      showDialog: false,  
      dataForm: {  
        name: '',  
        phone: '',  
        address: ''  
      },
      dataRule: {
        name: [
          { required: true, message: '收件人姓名不能为空', trigger: 'blur' }
        ],
        phone: [
          { required: true, trigger: 'blur' },{  
            pattern: /^1[3-9]\d{9}$/,  
            message: '请输入正确的11位手机号码',  
            trigger: 'blur',  
          },
        ],
        address: [
          { required: true, message: '地址不能为空', trigger: 'blur' },
        ]
      }, 
      addresses: [] // 假设的地址数据  
    };  
  },
  mounted(){
    this.getAllAddressesRequest();
  },  
  methods: {
    getAddress,
		getAllAddressesRequest() {
			this.addresses = [
				{
					name: 'Test Goods',
					phone: 1111,
					address: 114514.19,
				},
        {
					name: 'Test Goods',
					phone: 2222,
					address: 114514.19,
				},
        {
					name: 'Test Goods',
					phone: 3333,
					address: 114514.19,
				},
			];

			getAddress().then((res) => {
				console.log(res);
				if (res.status === '200') {
					this.addresses = res.data
				} else {
					if (res.statusText) {
						ElMessage.error(res.statusText);
					} else {
						ElMessage.error('未知错误, Status: ' + res.status);

					}
				}
			});
		},
    delayAddress,
    delayAddressRequest(index){
      console.log(index);    
      this.addresses.splice(index, 1);
      delayAddress(this.addresses).then((res) => {
				console.log(res);
				if (res.status === '200') {
					ElMessage.success(res.statusText);
				} else {
					if (res.statusText) {
						ElMessage.error(res.statusText);
					} else {
						ElMessage.error('未知错误, Status: ' + res.status);

					}
				}
			});  
    },  
    handleClose() {  
      this.showDialog = false;  
      this.$refs.dataForm.resetFields();  
    },
    addAddress,  
    dataFormSubmit() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          addAddress(this.dataForm).then(res => {
            console.log(res);
            if (res.status === '200') {
              // localStorage.setItem['loginUserName'] = this.dataForm.userName;
              // localStorage.setItem['loginUserType'] = this.dataForm.userType;
              ElMessage.success(res.statusText);
              this.showDialog=false;
            } else {
              if (res.statusText) {
                ElMessage.error(res.statusText);
              } else {
                ElMessage.error('未知错误, Status: ' + res.status);

              }
            }
          }).catch(error => {
            if (error.response) {
              // 请求已发出，但服务器响应了状态码不在2xx范围内
              console.error('Error status', error.response.status);
              console.error('Error data', error.response.data);
            } else if (error.request) {
              // 请求已发出，但没有收到响应
              console.error('No response received', error.request);
            } else {
              // 请求配置时出现错误
              console.error('Error', error.message);
            }
          });
        }
      })
    },  
  }  
};  
</script>