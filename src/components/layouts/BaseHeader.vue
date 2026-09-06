<script lang="ts" setup>
import { repository } from '~/../package.json'

import { toggleDark } from '~/composables'
</script>

<template>
  <header class="base-header">
    <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" router>
      <el-menu-item index="/">
        <div class="flex items-center justify-center gap-2">
          <div class="text-xl" i-ep-element-plus />
          <span>Element Plus</span>
        </div>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          Workspace
        </template>
        <el-menu-item index="2-1">
          item one
        </el-menu-item>
        <el-menu-item index="2-2">
          item two
        </el-menu-item>
        <el-menu-item index="2-3">
          item three
        </el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>
            item four
          </template>
          <el-menu-item index="2-4-1">
            item one
          </el-menu-item>
          <el-menu-item index="2-4-2">
            item two
          </el-menu-item>
          <el-menu-item index="2-4-3">
            item three
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3" disabled>
        Info
      </el-menu-item>
      <el-menu-item index="4">
        Orders
      </el-menu-item>
    </el-menu>
    <button class="header-action" type="button" aria-label="Toggle dark mode" @click="toggleDark()">
      <i inline-flex i="dark:ep-moon ep-sunny" />
    </button>
    <a class="header-action" :href="repository.url" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
      <div i-ri-github-fill />
    </a>
  </header>
</template>

<style lang="scss">
.base-header {
  display: flex;
  border-bottom: 1px solid var(--ep-menu-border-color, var(--ep-border-color));
  background-color: var(--ep-menu-bg-color, var(--ep-fill-color-blank));
}

.header-action {
  display: flex;
  height: var(--ep-menu-horizontal-height, 60px);
  align-items: center;
  justify-content: center;
  padding: 0 var(--ep-menu-base-level-padding, 20px);
  border: none;
  background: transparent;
  color: var(--ep-menu-text-color, var(--ep-text-color-primary));
  cursor: pointer;

  &:hover {
    background-color: var(--ep-menu-hover-bg-color, var(--ep-color-primary-light-9));
  }
}

.el-menu-demo {
  flex: 1;
  min-width: 0;
  border-bottom: none;

  &.ep-menu--horizontal > .ep-menu-item:nth-child(1) {
    margin-right: auto;
  }
}
</style>
