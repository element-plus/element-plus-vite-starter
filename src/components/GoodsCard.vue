<template>
  <!-- 展示用的商品卡片 -->
  <div class="good-item">
    <div class="good-img">
      <a @click="openProduct(msg.productId)">
        <img :src="msg.productImageBig" :alt="msg.productName" :key="msg.productImageBig">
      </a>
      <h6 class="good-title">{{ msg.productName }}</h6>
      <!-- <h3 class="sub-title ellipsis">{{ msg.subTitle }}</h3> -->
      <div class="good-price pr">
        <div class="ds pa good-btn">
          <el-button @click="openProduct(msg.productId)" style="margin: 0 20px" type="primary"
            size="small">查看详情</el-button>
          <el-button style="margin: 0 20px" size="small" @btnClick="addCart(msg.productId)"
            type="info">加入购物车</el-button>
        </div>
        <p><span style="font-size:14px">￥</span>{{ Number(msg.salePrice).toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { addToCart, getGoodsDetail } from '../api/apis';
import { ElMessage } from 'element-plus'

export default {
  props: {
    msg: {
      // salePrice: 0
    }
  },
  data() {
    return {
      ElMessage,
      buyInfo :{
        pid,
        userName,
        version,
        quantity: 1,
      },
    }
  },
  methods: {
    getGoodsDetail,
    addToCart,
    goodsDetails(id) {
      console.log(this.$route);
      this.$router.push(`/goodsDetail/${id}`)
      // + product id
    },
    openProduct(id) {
      this.goodsDetails(id);
      // window.open('//' + window.location.host + '/goodsDetail?productId=' + id)
    },
    addToCartRequest(id) {
      this.getGoodsDetailRequest(id);
      this.buyInfo.pid = id;
      this.buyInfo.quantity = 1;
      this.buyInfo.userName = localStorage.getItem['loginUserName'];
      if (this.buyInfo.version) {
        addToCart(this.buyInfo).then(res => {
          if (res.status === '200') {
            ElMessage.success('加入购物车成功');
          } else {
            this.buyInfo.version = null;
            if (res.statusText) {
              ElMessage.error(res.statusText);
            } else {
              ElMessage.error('未知错误, Status: ' + res.status);
            }
          }
        })
      }
    },
    getGoodsDetailRequest(pid) {
      console.log(pid);

      getGoodsDetail({ id: pid }).then(res => {
        if (res.status === '200') {
          this.buyInfo.version = res.data.version[0];
        } else {
          this.buyInfo.version = null;
          if (res.statusText) {
            ElMessage.error(res.statusText);
          } else {
            ElMessage.error('未知错误, Status: ' + res.status);

          }
        }
      });
    },
  },
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "../styles/custom/mixin";
// @import "../styles/theme";

.good-item {
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

  .good-img {
    img {
      margin: 50px auto 10px;
      @include wh(206px);
      display: block;
    }
  }

  .good-price {
    margin: 15px 0;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #d44d44;
    font-family: Arial;
    font-size: 18px;
    font-weight: 700;
  }

  .good-title {
    line-height: 1.4;
    font-size: 18px;
    margin: 10% auto;
    padding: 0 14px;
    text-align: center;
    overflow: hidden;
  }
}
</style>