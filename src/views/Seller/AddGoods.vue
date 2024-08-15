<template>
    <el-container>
      <el-aside width="200px" style="margin-top: 10%">
        <el-menu :default-openeds="['1']" router>
          <el-menu-item index="/Seller/GoodsList">商品列表</el-menu-item>
          <el-menu-item index="/Seller/AddGoods">上架商品</el-menu-item>
          <el-menu-item index="/Seller/EditGoods">编辑商品</el-menu-item>
        </el-menu>
      </el-aside>
  
    </el-container>

    <div class="form-container">
    <el-form :model="good" label-width="100px">
      <el-form-item label="商品名称">
        <el-input v-model="good.name"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload action="your-upload-url" list-type="picture">
          <el-button slot="trigger" size="small" type="primary">选择图片</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="单价">
        <el-input v-model="good.price" placeholder="请输入单价"></el-input>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input type="textarea" v-model="good.description"></el-input>
      </el-form-item>
      <el-form-item label="库存量">
        <el-input-number v-model="good.storage" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item class="form-actions">
        <el-button type="primary" @click="saveGoods">保存</el-button>
      </el-form-item>
    </el-form>
  </div>

  </template>
  
  <script>
  export default {
  data() {
    return {
      good: {
        name: '测试商品名称',
        storage: 20,
        version: ['S', 'M', 'L', 'XL', 'XXL', 'custom'],
        price: 100.01,
        imageSrc: ['https://sc01.alicdn.com/kf/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3/200006212/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3.jpg', '', ''],
        details: 'This is a test product.',
        shopName: 'Bemani Sound Team',
        shopId: 1,
      },
    };
  },
  methods: {
    uploadGoods() {
      // 保存逻辑
    },
  },
  mounted() {
    
  },
};
  </script>
  
  <style scoped>
    #container {
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
    background: rgba(255, 255, 255, 0.90);
    text-align: center;
    border-radius: 5px;
    overflow: hidden;
    margin: 5em auto;
    height: 100%;
    width: 1220px;
    }
    .form-container {
    max-width: 600px; 
    margin: 0 auto; 
    padding: 20px; 
    background-color: #fff; 
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1); 
    border-radius: 8px; 
    }

    .el-form-item {
    margin-bottom: 20px; 
    }

    .form-actions {
    text-align: center; 
    }

    .el-input,
    .el-upload,
    .el-input-number {
    width: 100%; 
    }

    .el-button {
    width: 100%; 
    }
  
  </style>