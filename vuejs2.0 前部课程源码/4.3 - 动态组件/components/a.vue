<template>
  <div>
    <h1>{{ hello }}</h1>
    <button @click="dosomthing">emit hello</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      hello: 'i am component A'
    }
  },
  methods: {
    dosomthing () {
      this.$emit('com-a-emit', this.hello)
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
