<template>
  <div>
    <h2>数字: {{ count }}</h2>
    <h2>更新时间： {{ timestr }}</h2>
    <p>点击加减，一秒后更新</p>
    <button @click="add"> add </button>
    <button @click="minus"> minus </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    count () {
      return this.$store.getters.getNum
    },
    timestr () {
      return this.$store.getters.getTime
    }
  },
  methods: {
    add () {
      this.$store.dispatch('add')
      .then(() => {
        console.log('add finish')
      })
    },
    minus () {
      this.$store.dispatch('minus')
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
