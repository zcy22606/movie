<template>
  <div>
    <banner></banner>
    <ul>
      <router-link to="/movie/hot" tag="li" active-class="active">正在热映</router-link>
      <router-link to="/movie/coming" tag="li" active-class="active">即将上映</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
  $master_color:red;
  $line: 1px solid #ededed;
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
    display: flex;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-bottom: $line;
    position: relative;
    font-size: 14px;
    color: #191a1b;
    li{
      flex: 1;
    }
    span{
      height: 2px;
      width: 56px;
      border-bottom: 2px solid #ff5f16;
      border-radius: 20px;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateX(62px);
    }
  }
  .active{
    color: $master_color;
  }
</style>

<script>
import banner from './Movie/Banner.vue'
export default {
  components: {
    banner
  }
}
</script>
