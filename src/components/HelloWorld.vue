<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
const input = ref("element-plus");
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    See <a href="https://element-plus.org" target="_blank">element-plus</a> for
    more information.
  </p>

  <el-button icon="el-icon-success" type="primary" @click="count++"
    >count is: {{ count }}
  </el-button>

  <el-input v-model="input" style="width: 200px; margin: 20px" />

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
