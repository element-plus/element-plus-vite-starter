<template>
  <h1>{{ msg }}</h1>
  <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
