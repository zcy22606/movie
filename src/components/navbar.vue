<template>
  <div>
    <ul>
      <router-link to="/movie" tag="li" active-class="active"><i class="iconfont icon-weidianying"></i><p>电影</p></router-link>
      <router-link to="/cinema" tag="li" active-class="active"><i class="iconfont icon-yingyuan"></i><p>影院</p></router-link>
      <router-link to="/information" tag="li" active-class="active"><i class="iconfont icon-zixun"></i><p>资讯</p></router-link>
      <router-link to="/center" tag="li" active-class="active"><i class="iconfont icon-biaoqiankuozhan_wode-310"></i><p>我的</p></router-link>
    </ul>
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
    width: 100%;
    height: 50px;
    list-style: none;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    color: #797d82;
    background-color: white;
    line-height: 25px;
    display: flex;
    font-size: 10px;
    border-top: $line;
    li{
      flex: 1;
      display: flex;
      flex-direction: column;
      i{
        font-size: 22px;
        align-items:center;
        margin-top: 4px;
      }
      p{
        margin-top: -3px;
        align-items:center;
      }
    }
  }
  .active{
    color: $master_color;
  }
</style>
