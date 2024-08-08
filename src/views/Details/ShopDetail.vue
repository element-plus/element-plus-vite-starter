<template>
  <div class="shop-detail">
    <div class="shop-info-box">
      <h1>{{ shop.shopName }}</h1>
      <el-button v-if="!isSubscribed" type="info" @click="subscribeShop"> 关注店铺 </el-button>
      <el-button v-else type="primary" @click="cancelSubscribingShop"> 关注店铺 </el-button>
      <h3>粉丝数 {{ shop.shopSubsciberCount }}</h3>
      <h3>总销量 {{ shop.shopSaleCount }}</h3>
    </div>
    <div class="img-item">
      <el-tabs class="w">
        <el-tab-pane label="热门商品">
          <div class="goods-box w">
            <template v-for="(item, i) in goods" :key="i">
              <GoodsCard v-if="item.isHot" :msg="item" />
            </template>
          </div>
        </el-tab-pane>
        <el-tab-pane label="其他商品">
          <div class="goods-box w">
            <template v-for="(item, i) in goods" :key="i">
              <GoodsCard v-if="!item.isHot" :msg="item" />
            </template>
          </div>
        </el-tab-pane>
      </el-tabs>

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
  </div>
</template>

<script>
import Postcard from '../../assets/postcard.jpg'
import Postcard2 from '../../assets/postcard2.jpg'

export default {

  name: 'SrcShopDetail',

  data() {
    return {
      goods: [],
      shop: {},
      Postcard,
      Postcard2,
    };
  },

  mounted() {
    this.getShopInfo();
    this.getShopGoodsList();
  },

  methods: {
    getShopInfo() {
      this.shop = {
        shopId: 1,
        shopName: 'Bemani Sound Team',
        shopSubsciberCount: 1000,
        shopSaleCount: 2000,
      }
    },
    getShopGoodsList() {
      this.goods = [
        {
          productId: 1,
          productName: 'Test Goods',
          productImageBig: this.Postcard,
          salePrice: 114514.19,
          isHot: true,
        },
        {
          productId: 2,
          productName: 'Test Goods 2',
          productImageBig: this.Postcard2,
          salePrice: 11.19,
          isHot: false,
        },
        {
          productId: 3,
          productName: 'Test Goods 3',
          productImageBig: this.Postcard,
          salePrice: 4514.19,
          isHot: true,
        },
        {
          productId: 4,
          productName: 'Test Goods 4',
          productImageBig: this.Postcard,
          salePrice: 810.114,
          isHot: false,
        },
        {
          productId: 5,
          productName: 'Test Goods 4',
          productImageBig: this.Postcard,
          salePrice: 810.114,
          isHot: true,
        },
      ];
    }
  },
};
</script>

<style lang="scss" scoped>
.shop-detail {
  width: 1700px;
  margin: 3% auto;
  display: flex;
}

.goods-box {
  >div {
    float: left;
    border: 1px solid var(--ep-color-info-light-8);
  }
}

.img-item {
  width: 83.3%;
  display: flex;
  flex-direction: column;
}

.shop-info-box {
  background-color: var(--ep-fill-color-light);
  float: left;
  border: 1px solid var(--ep-color-info-light-8);
  width: 20%;
  text-align: center;
  height: 100%;
  /* margin-right: 16.7%; */

  h3 {
    color: var(--ep-color-warning)
  }
}
</style>