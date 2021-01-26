<template>
  <div>
    <router-view></router-view>
    <navbar></navbar>
  </div>
</template>
<script>
import navbar from './components/navbar'
export default {
  components: {
    navbar
  }
}
// 先导入组件，再在components里注册组件
</script>

<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
  }
</style>
