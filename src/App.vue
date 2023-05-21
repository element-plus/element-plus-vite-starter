<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="flex main-container">
      <BaseSide />
      <div>
        <img alt="Vue logo" class="element-plus-logo" src="./assets/logo.png" />
        <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
      </div>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>
