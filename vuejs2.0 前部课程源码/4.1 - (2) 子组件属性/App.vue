<template>
  <div>
    <input type="text" v-model.number="myVal">
    <com-a number=5 number-to-do="78" :my-value="myVal"></com-a>
  </div>
</template>

<script>
import ComA from 'components/a.vue'
export default {
  components: {
    ComA
  },
  data () {
    return {
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
