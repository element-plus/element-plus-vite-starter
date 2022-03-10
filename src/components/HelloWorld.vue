<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from 'element-plus'

defineProps<{ msg: string }>();

const count = ref(0);
const input = ref("element-plus");

const curDate = ref('')

const toast = () => {
  ElMessage.success('Hello')
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    See
    <a href="https://element-plus.org" target="_blank">element-plus</a> for
    more information.
  </p>

  <!-- example components -->
  <el-button @click="toast">El Message</el-button>
  <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
  <el-button type="success" @click="count++">count is: {{ count }}</el-button>
  <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
  <el-button type="danger" @click="count++">count is: {{ count }}</el-button>
  <el-button type="info" @click="count++">count is: {{ count }}</el-button>
  <br />
  <el-input v-model="input" style="width: 200px; margin: 20px" />
  <el-tag>Tag 1</el-tag>

  <br />
  <el-date-picker v-model="curDate" type="date" placeholder="Pick a day"></el-date-picker>

  <p>For example, we can custom primary color to 'green'.</p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test components.
  </p>
  <p>
    Edit
    <code>styles/element/var.scss</code> to test scss variables.
  </p>

  <p>
    Full Example:
    <a
      href="https://github.com/element-plus/element-plus-vite-starter"
      target="_blank"
    >element-plus-vite-starter</a>
    | On demand Example:
    <a
      href="https://github.com/element-plus/unplugin-element-plus"
      target="_blank"
    >unplugin-element-plus/examples/vite</a>
  </p>
</template>

<style>
.el-button {
  margin: 4px;
}
</style>
