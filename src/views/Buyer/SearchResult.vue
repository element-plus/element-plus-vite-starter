<template>
	<el-tabs class="w">
		<el-tab-pane label="商品">
			<div class="img-item">
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
		</el-tab-pane>
		<el-tab-pane label="商店">
			<div class="img-item">
				<div class="goods-box w">
					<ShopCard v-for="(item, i) in shops" :key="i" :msg="item"></ShopCard>
				</div>
			</div>
		</el-tab-pane>
	</el-tabs>
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
			shops: [],
			getResultUrl: '',
		}
	},
	methods: {
		getResult() {
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
			],
			this.shops = [
				{
					shopId: 1,
					shopName: 'Cygames',
					// 商店图片取最多四张
					shopGoodsImage: [Postcard],
					shopSubscriberCount: 1000,
					shopSaleCount: 2000,
				},
				{
					shopId: 2,
					shopName: 'Bemani Sound Team',
					// 商店图片取最多四张
					shopGoodsImage: [Postcard, Postcard2],
					shopSubscriberCount: 1000,
					shopSaleCount: 2000,
				},
				{
					shopId: 3,
					shopName: 'Animate',
					// 商店图片取最多四张
					shopGoodsImage: [Postcard, Postcard2, Postcard],
					shopSubscriberCount: 1000,
					shopSaleCount: 2000,
				},
				{
					shopId: 4,
					shopName: 'Capcom',
					// 商店图片取最多四张
					shopGoodsImage: [Postcard, Postcard2, Postcard, Postcard2],
					shopSubscriberCount: 1000,
					shopSaleCount: 2000,
				}
			]
		}
	},
	mounted() {
		this.getResult();
	}

}
</script>

<style lang="scss" scoped>
.carousel {
	// background-color: var(--ep-color-warning-light-3);
	margin-left: 20%;
	margin-right: 20%;
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
