<template>
  <div class="main-view">
    <header>
      <el-header
        ><h1>{{ pageTitle }}</h1></el-header
      >
      <el-empty description="This page is a work in progress" />
    </header>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { startCase, camelCase } from 'lodash'

const route = useRoute()

const pageTitle = computed(() => {
  if (route.name) return convertToTitleCase(String(route.name))
  return 'Unknown Route'
})

function convertToTitleCase(text: string): string {
  const camelCasedText = camelCase(text)
  const titleCasedText = startCase(camelCasedText)
  return titleCasedText
}
</script>

<style scoped>
header {
  text-align: center;
  margin: auto;
  width: 690px;
  padding: 10px;
}
</style>
