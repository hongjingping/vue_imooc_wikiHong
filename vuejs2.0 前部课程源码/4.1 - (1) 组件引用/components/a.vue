<template>
  <div>
    <h1>{{ hello }}</h1>
  </div>
</template>

<script>

export default {
  data () {
    return {
      hello: 'i am component A'
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
