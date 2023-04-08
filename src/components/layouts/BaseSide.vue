<template>
  <el-menu router mode="vertical" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
    <el-menu-item index="/experiment-reports" :disabled="false">
      <el-icon><memo /></el-icon>
      <template #title>Experiment Reports</template>
    </el-menu-item>
    <el-menu-item index="/quick-analysis" :disabled="false">
      <el-icon><DataLine /></el-icon>
      <template #title>Quick Analysis</template>
    </el-menu-item>
    <el-menu-item index="/experiment-calculator" :disabled="false">
      <el-icon><WindPower /></el-icon>
      <template #title>Experiment Calculator</template>
    </el-menu-item>
    <el-menu-item index="/metrics-and-segments" :disabled="false">
      <el-icon><Orange /></el-icon>
      <template #title>Metrics and Segments</template>
    </el-menu-item>
    <div class="flex-grow" />
    <el-divider />
    <el-menu-item index="/settings" :disabled="false" style="margin-bottom: 1rem">
      <el-icon><setting /></el-icon>
      <template #title>Account Settings</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Setting, DataLine, Memo, WindPower, Orange } from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.ep-divider {
  width: 80%;
  margin: 0 1rem 0 1rem;
}
</style>
