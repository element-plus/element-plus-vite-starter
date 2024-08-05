<script>
// import { RouterLink } from "vue-router";
import { toggleDark } from "~/composables";

export default {
  computed: {
    isLogined() {
      return localStorage.getItem["Authorization"] ? true : false;
    }
  },
  methods: {
    gotoLoginPage() {
      this.$router.replace({path: '/login'});
    },
    gotoHomePage() {
      this.$router.replace({path: '/'});
    },
    toggleDark
  }
}
</script>

<template>
  <div class="m-2 base-header">
    <el-menu mode="horizontal">
      <el-menu-item index="0" @click="gotoHomePage">
        <img src="../../assets/Taoduoduo.png" style="width: 100px;" />
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">搜索</el-menu-item>
      <el-sub-menu index="2">
        <template #title>个人信息</template>
        <el-menu-item index="2-1">收货地址</el-menu-item>
        <el-menu-item index="2-2">基本信息</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">购物车</el-menu-item>
      <el-menu-item index="4" v-if="!isLogined" @click="gotoLoginPage">注册/登录</el-menu-item>
      <el-menu-item index="4" v-if="isLogined">退出登录</el-menu-item>
      <el-menu-item h="full" @click="toggleDark()">
        <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height)">
          <i inline-flex i="dark:ep-moon ep-sunny" />
        </button>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<style lang="scss" scoped>

</style>