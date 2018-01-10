<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <router-link :to="{path: '/dog'}">Dog</router-link>
    <router-link :to="{path: '/cat'}">Cat</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}
.ab {
  position: absolute;
  left: 150px;
  top: 300px;
}
</style>
