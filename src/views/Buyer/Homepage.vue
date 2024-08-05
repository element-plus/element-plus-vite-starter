<template>
	<div class="carousel m-5">
		<el-carousel :interval="4000"  type="card">
			<el-carousel-item v-for="index in (goods.length < 3 ? goods.length : 3)" :key="index">
				<el-image :src="goods[index - 1].productImageBig" fit="fill"/>
			</el-carousel-item>
		</el-carousel>
	</div>
	<div class="img-item">
		<!--商品-->
		<div class="goods-box w">
			<GoodsCard v-for="(item, i) in goods" :key="i" :msg="item"></GoodsCard>
		</div>
		<!-- <el-pagination
          v-if="!noResult&&!error"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[8, 20, 40, 80]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination> -->
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
			goods: [],
			getGoodsUrl: '',
		}
	},
	methods: {
		getAllGoods() {
			// axios.get(this.getGoodsUrl, {
			// 	headers: { 'Content-Type': 'application/json'}
			// }).then(res => {
			// 	this.goods = res.data;
			// })
			this.goods = [
				{
					productId: 1,
					productName: 'Test Goods',
					productImageBig: this.Postcard,
					salePrice: 114514.19,
				},
				{
					productId: 2,
					productName: 'Test Goods 2',
					productImageBig: this.Postcard2,
					salePrice: 11.19,
				},
				{
					productId: 3,
					productName: 'Test Goods 3',
					productImageBig: this.Postcard,
					salePrice: 4514.19,
				},
				{
					productId: 4,
					productName: 'Test Goods 4',
					productImageBig: this.Postcard,
					salePrice: 810.114,
				},
				{
					productId: 5,
					productName: 'Test Goods 4',
					productImageBig: this.Postcard,
					salePrice: 810.114,
				},
			]
		}
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

.goods-box {
	>div {
		float: left;
		border: 1px solid var(--ep-color-info-light-8);
	}
}

.img-item {
	display: flex;
	flex-direction: column;
}
</style>
