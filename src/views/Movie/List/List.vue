<template tag="li">
  <div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  li{
    width: 100%;
    padding: 15px 15px 15px 0;
    height: 94px;
    position: relative;
  }
  .item-img{
    width: 66px;
    height: 94px;
    position: absolute;
    top: 0;
  }
  .item-img > img{
    width: 100%;
    height: 94px;
    position: absolute;
    top: 50%;
  }
</style>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['targetImg', 'targetName']
}
</script>
