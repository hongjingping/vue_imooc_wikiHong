<template>
  <div>
    <div :is="activeCom"></div>
    <com-a></com-a>
  </div>
</template>

<script>
import Vue from 'Vue'
import ComA from 'components/a.vue'
import ComB from 'components/b.vue'
export default {
  components: {
    ComA, ComB
  },
  data () {
    return {
      activeCom: 'com-b',
      myVal: ''
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
.red-font {
  color: red;
}
.blue-font {
  color: blue;
}
.big-font {
  font-size: 40px;
}
</style>
