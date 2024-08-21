<template>
	<div class="cart-container">  
      <el-table :data="cartList" style="width: 100%">  
        <el-table-column prop="productImageBig" label="" width="180">
			<template #default="scope">
            <el-image :src="scope.row.productImageBig"></el-image>
            </template>
		</el-table-column>  
        <el-table-column prop="productName" label="商品名称" width="180"></el-table-column>  
        <el-table-column prop="salePrice" label="价格" width="180"></el-table-column>  
        <el-table-column prop="quantity" label="数量" width="180">  
          <template #default="{ row }">  
            <el-input-number v-model="row.quantity" :min="1" @change="handleQuantityChange(row)"></el-input-number>  
          </template>  
        </el-table-column>  
        <el-table-column prop="total" label="总价" width="180"></el-table-column>  
        <el-table-column label="操作" width="180">  
          <template #default="{ row }">  
            <el-button @click="removeFromCart(row.productId)">删除</el-button>  
          </template>  
        </el-table-column>  
      </el-table>  
      <div class="cart-footer">
		<div>总价：{{ totalPrice }}</div>
		<div>当前地址：</div>
		<div>{{ esAddress }}</div>
		<el-button @click="dialogVisible=true">选择地址</el-button>
        <el-button type="primary" @click="checkout">结算</el-button>
		<el-dialog v-model="dialogVisible" style="width:100%">
	       <el-table :data="addressList">
			<el-table-column prop="address" label="地址" width="180"></el-table-column>
		   </el-table>
           <el-button @click="dialogVisible = false">取 消</el-button>  
           <el-button type="primary" @click="dialogVisible = false">确 定</el-button>   
        </el-dialog>  
      </div>
	</div> 
</template>

<script>

import axios from 'axios';
import Postcard from '../../assets/postcard.jpg'
import Postcard2 from '../../assets/postcard2.jpg'
export default {

	data() {
		return {
			Postcard,
			Postcard2,
			cartList: [],
			getGoodsUrl: '',
			esAddress:"未选择",
			addressList:[],
			dialogVisible: false,
		}
	},
	computed: {  
    // 使用计算属性来计算price的总和  
    totalPrice() {  
      // 使用reduce方法来累加price的值  
      return this.cartList.reduce((total, item) => {  
        return total + item.total;  
      }, 0); // 初始值设为0  
    },  
    },
	methods: {
		handleClose(done) {  
        this.$confirm('确认关闭？')  
        .then(_ => {  
          done();  
        })  
        .catch(_ => {});  
        },
		getAllGoods() {
			// axios.get(this.getGoodsUrl, {
			// 	headers: { 'Content-Type': 'application/json'}
			// }).then(res => {
			// 	this.goods = res.data;
			// })
			this.cartList = [
				{
					productId: 1,
					productName: 'Test Goods',
					productImageBig: this.Postcard,
					salePrice: 20.19,
                    quantity:10,
					total:201.9,
					seleced:false,
				},
				{
					productId: 2,
					productName: 'Test Goods 2',
					productImageBig: this.Postcard2,
					salePrice: 11.19,
                    quantity:20,
					total:223.8,
					seleced:false,
				},
				{
					productId: 3,
					productName: 'Test Goods 3',
					productImageBig: this.Postcard,
					salePrice: 10.4,
                    quantity:15,
					total:156,
					seleced:false,
				},
				{
					productId: 4,
					productName: 'Test Goods 4',
					productImageBig: this.Postcard,
					salePrice: 10.3,
                    quantity:16,
					total:164.8,
					seleced:false,
				},
				{
					productId: 5,
					productName: 'Test Goods 4',
					productImageBig: this.Postcard,
					salePrice: 10.1,
                    quantity:20,
					total:202,
					seleced:false,
				},
			];
			
		},
      handleQuantityChange(item) {  
        item.total = item.salePrice * item.quantity;
      },  
      removeFromCart(id) {  
        this.cartList = this.cartList.filter(item => item.productId !== id);  
      },  
      checkout() {  
        alert('正在结算...');  
        // 实际的结算逻辑  
      },
	},
	mounted() {
		this.getAllGoods();
	}

}
</script>

<style lang="scss" scoped>
.carousel {
	// background-color: var(--ep-color-warning-light-3);
	margin-left: 20%;
	margin-right: 20%;
}

.text {
	// color: #ffffff;
	opacity: 0.9;
	line-height: 200px;
	margin: 0;
	text-align: center;
}


.img-item {
	display: flex;
	flex-direction: column;
}
.cart-container{
	text-align: left;
}
.cart-footer {  
    margin-top: 60px;  
    text-align: right;
	color:grey;
	font-size: large;
	line-height: 40px;  
  }
.total-price{
	text-align: center;
	margin-top: 20px;
	color:gray;
	font-size:30px;
	vertical-align: bottom;
}  
</style>