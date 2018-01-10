<template>
  <div>
    <input type="text" v-model.number="myVal">
    <com-a @com-a-emit="onComAEmit"></com-a>
    <!-- slot -->
    <com-b>
      <p> "content 123 as slot pass to com-b" </p>
      <p> - msg from father </p>
    </com-b>
    <!-- 具名slot -->
    <com-c>
      <span slot="header">logo</span> <span slot="header">login | registry</span>

      <span slot="footer">copyright@</span> <span slot="footer">2017.3.28</span>
    </com-c>
  </div>
</template>

<script>
import ComA from 'components/a.vue'
import ComB from 'components/b.vue'
import ComC from 'components/c.vue'
export default {
  components: {
    ComA, ComB, ComC
  },
  data () {
    return {
      myVal: ''
    }
  },
  methods: {
    onComAEmit (hello) {
      console.log('msg from comA is ' + hello)
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
