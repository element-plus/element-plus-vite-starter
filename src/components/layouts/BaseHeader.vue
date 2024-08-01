<script lang="ts" setup>
import { toggleDark } from "~/composables";
</script>

<template>
  <div class="m-2">
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="0">
        <img src="../../assets/Taoduoduo.png" style="width: 100px;" />
      </el-menu-item>
      <div class="flex-grow" />
      
      <el-menu-item index="1">搜索</el-menu-item>
      <el-sub-menu index="2">
        <template #title>个人信息</template>
        <el-menu-item index="2-1">收货地址</el-menu-item>
        <el-menu-item index="2-2">基本信息</el-menu-item>
        <!-- <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu> -->
      </el-sub-menu>
      <el-menu-item index="3" >购物车</el-menu-item>
      <el-menu-item index="4">订单</el-menu-item>
      <el-menu-item h="full" @click="toggleDark()">
        <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height)">
          <i inline-flex i="dark:ep-moon ep-sunny" />
        </button>
      </el-menu-item>
    </el-menu>
  </div>

</template>
