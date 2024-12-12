<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

// const isCollapse = ref(true)
function handleOpen(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
function handleClose(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    router
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <Location />
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title>
          <span>Group One</span>
        </template>
        <el-menu-item index="/nav/1/item-1">
          item one
        </el-menu-item>
        <el-menu-item index="1-2">
          item two
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">
          item three
        </el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>
          <span>item four</span>
        </template>
        <el-menu-item index="1-4-1">
          item one
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="/nav/2">
      <el-icon>
        <IconMenu />
      </el-icon>
      <template #title>
        Navigator Two
      </template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon>
        <Document />
      </el-icon>
      <template #title>
        Navigator Three
      </template>
    </el-menu-item>
    <el-menu-item index="/nav/4">
      <el-icon>
        <Setting />
      </el-icon>
      <template #title>
        Navigator Four
      </template>
    </el-menu-item>
  </el-menu>
</template>
