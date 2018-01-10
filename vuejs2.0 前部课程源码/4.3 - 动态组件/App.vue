<template>
  <div>
    <keep-alive>
      <div :is="currentView"></div>
    </keep-alive>
    <button v-for="item in ['com-a', 'com-b', 'com-c']" @click="changeView(item)"> {{ item }} </button>
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
      currentView: ''
    }
  },
  methods: {
    changeView (view) {
      this.currentView = view
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
