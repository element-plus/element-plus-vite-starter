<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <el-config-provider namespace="ep">
    <BaseHeader class="header-menu" />
    <BaseSide class="side-menu" />
    <div class="main-router-view">
      <RouterView />
    </div>
  </el-config-provider>
</template>

<style>
#app {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    'header-menu header-menu'
    'side-menu main-router-view';
  height: 100vh;
  width: 100vw;
}

.header-menu {
  grid-area: header-menu;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-right: none;
  border-bottom: none;
  box-shadow: var(--ep-box-shadow-lighter);
  z-index: 3;
}

.side-menu {
  grid-area: side-menu;
  display: flex;
  flex-direction: column;
  border-right: none;
  border-bottom: none;
}

.main-router-view {
  grid-area: main-router-view;
  overflow-y: auto;
  padding: 1rem;
}
</style>
