<template>
  <div>
    <h1>{{ hello }}</h1>
    <button @click="eat">eat</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      hello: 'i am apple'
    }
  },
  methods: {
    eat () {
      this.$emit('on-eat', 'auch!')
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
