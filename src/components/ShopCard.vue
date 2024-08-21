<template>
	<!-- 展示用的商品卡片 -->
	<div class="shop-item" @click="openShop(msg.shopId)">
		<div class="good-img">
			<!-- <a @click="openShop(msg.shopId)">
				<img :src="msg.productImageBig" :alt="msg.productName" :key="msg.productImageBig">
			</a> -->
			<h6 class="good-title">{{ msg.shopName }}</h6>
			<div class="shop-goodsImage">
				<el-row>
					<template v-for="(goods, i) in msg.shopGoodsImage" :key="i">
						<el-col :span=12>
							<el-image fit="cover" :src="goods" style="margin: 5%"/>
						</el-col>
					</template>
				</el-row>
			</div>
			<div class="shop-bottom">
				<el-row>
					<el-col :span="12">粉丝数 {{ msg.shopSubscriberCount }}</el-col>
					<el-col :span="12">总销量 {{ msg.shopSaleCount }}</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		msg: {}
	},
	methods: {
		openShop(id) {
			this.$router.replace({ path: '/shopDetail/' + id });
			// this.goodsDetails(id);
			// window.open('//' + window.location.host + '/goodsDetail?shopId=' + id)
		},
	},
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "../styles/custom/mixin";
// @import "../styles/theme";

.shop-item {
	background-color: var(--ep-color-danger-light-9);
	width: 25%;
	transition: all .5s;
	height: 430px;

	&:hover {
		transform: translateY(-3px);
		box-shadow: 1px 1px 20px #999;

		.good-price p {
			display: none;
		}

		.ds {
			display: flex;
		}
	}

	.ds {
		@extend %block-center;
		width: 100%;
		display: none;
	}

	.shop-goodsImage {
		padding: 5%;

	}

	.good-title {
		line-height: 1.4;
		font-size: 20px;
		margin: 5% auto;
		padding: 0 14px;
		text-align: center;
		overflow: hidden;
	}

	.shop-bottom {
		text-align: center;
		font-size: 18px;
		color: var(--ep-color-primary);
	}
}
</style>