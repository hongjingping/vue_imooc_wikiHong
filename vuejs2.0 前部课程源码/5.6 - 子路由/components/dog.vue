<template>
  <div>
    <img width=500 src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490692700655&di=bdec697a907f2b3caa33df6f6ce655ef&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201507%2F30%2F20150730163204_A24MX.thumb.700_0.jpeg">
    <p>it's dog</p>
    <h2>子组件</h2>
    <router-link :to="{name: 'dogcoma'}">to dog children router</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data () {
    return {
      hello: 'i am apple'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
