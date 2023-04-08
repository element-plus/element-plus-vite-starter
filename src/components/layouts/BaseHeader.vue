<script lang="ts" setup>
import { toggleDark } from '~/composables'
</script>

<template>
  <el-menu mode="horizontal" :ellipsis="false">
    <router-link to="/">
      <el-menu-item h="full" index="1"
        ><img alt="Logo" class="website-logo" src="src/assets/logo.png"
      /></el-menu-item>
    </router-link>
    <div class="flex-grow" />
    <el-menu-item @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.router-link {
  text-decoration: none;
  color: #fff;
}

.website-logo {
  cursor: pointer;
  max-width: 100px;
}

.ep-menu-item:hover {
  background-color: transparent !important;
}
</style>
