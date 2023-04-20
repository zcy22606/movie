<template>
  <div>
    我是数据页{{id}}
    我是数据页{{id}}
    我是数据页{{id}}
    我是数据页{{id}}
    我是数据页{{id}}
    我是数据页{{id}}
    我是数据页{{id}}
    我是数据页{{id}}
    我是数据页{{id}}
    吗爱迪生的服务
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  mounted () {
    this.id = this.$route.params.myid
  }
}
</script>
