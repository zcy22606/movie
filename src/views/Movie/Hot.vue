<template>
  <div>
    <ul>
      <li v-for="data in dataList" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster" alt="">
        {{data.name}}
      </li>
    </ul>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      dataList: []
    }
  },
  methods: {
    handleClick (id) {
      this.$router.push({
        name: 'Data',
        params: {
          myid: id
        }
      })
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=9340213',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596502176387264316178433","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.dataList = res.data.data.films
    })
  }
}
</script>

<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  img{
    display: block;
  }
  .content{
    position: relative;
  }
  ul{
    list-style: none;
    li{
      height: 94px;
      padding: 15px 15px 15px 0;
      img{
        width: 66px;
        height: 94px;
      }
    }
  }
</style>
