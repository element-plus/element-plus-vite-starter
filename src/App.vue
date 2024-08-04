<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <el-config-provider namespace="ep">
    <body>
      <BaseHeader />
      <RouterView/>
    </body>
  </el-config-provider>
</template>

<style>
/* #app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
} */
</style>

