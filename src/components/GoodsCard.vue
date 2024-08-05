<template>
  <div class="good-item">
    <div style="">
      <div class="good-img">
        <a @click="openProduct(msg.productId)">
          <img :src="msg.productImageBig" :alt="msg.productName" :key="msg.productImageBig">
        </a>
      </div>
      <h6 class="good-title">{{ msg.productName }}</h6>
      <!-- <h3 class="sub-title ellipsis">{{ msg.subTitle }}</h3> -->
      <div class="good-price pr">
        <div class="ds pa good-btn">
          <el-button @click="openProduct(msg.productId)" style="margin: 0 20px" type="primary"
            size="small">查看详情</el-button>
          <el-button style="margin: 0 20px" size="small"
            @btnClick="addCart(msg.productId, msg.salePrice, msg.productName, msg.productImageBig)"
            type="info">加入购物车</el-button>
        </div>
        <p><span style="font-size:14px">￥</span>{{ Number(msg.salePrice).toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      salePrice: 0
    }
  },
  methods: {
    goodsDetails(id) {
        // this.$router.push({path: 'goodsDetails/productId=' + id})
    },
    openProduct(id) {
        // window.open('//' + window.location.host + '/#/goodsDetails?productId=' + id)
    },
    addCart(id, price, name, img) {
      //         this.ADD_CART({productId: id, salePrice: price, productName: name, productImg: img})

      //   if (!this.showMoveImg) {     // 动画是否在运动
      //     if (this.login) { // 登录了 直接存在用户名下
      //       addCart({userId: getStore('userId'), productId: id, productNum: 1}).then(res => {
      //         // 并不重新请求数据
      //         this.ADD_CART({productId: id, salePrice: price, productName: name, productImg: img})
      //       })
      //     } else { // 未登录 vuex
      //       this.ADD_CART({productId: id, salePrice: price, productName: name, productImg: img})
      //     }
      //     // 加入购物车动画
      //     var dom = event.target
      //     // 获取点击的坐标
      //     let elLeft = dom.getBoundingClientRect().left + (dom.offsetWidth / 2)
      //     let elTop = dom.getBoundingClientRect().top + (dom.offsetHeight / 2)
      //     // 需要触发
      //     this.ADD_ANIMATION({moveShow: true, elLeft: elLeft, elTop: elTop, img: img})
      //     if (!this.showCart) {
      //       this.SHOW_CART({showCart: true})
      //     }
      //   }
    }
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
    margin: 0 auto;
    padding: 0 14px;
    text-align: center;
    overflow: hidden;
  }

  // .good-btn {

  // }
  // h3 {
  //   text-align: center;
  //   line-height: 1.2;
  //   font-size: 12px;
  //   color: #d0d0d0;
  //   padding: 10px;
  // }

}
</style>