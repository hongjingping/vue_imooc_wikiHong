<template>
  <div>

    <button v-on:click="onclick">click me</button>
    <input type="text" @keydown.13="onkeyenter">
    <componentA @on-eat="oneat"></componentA>
  </div>
</template>

<script>
import componentA from './components/apple'
import Vue from 'Vue'
export default {
  components: {
    componentA
  },
  data () {
    return {

    }
  },
  methods: {
    onclick () {
      console.log('you click me!')
    },
    onkeyenter () {
      console.log('on key enter!')
    },
    oneat (msg) {
      console.log('you eat componentA, he said: ' + msg)
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
