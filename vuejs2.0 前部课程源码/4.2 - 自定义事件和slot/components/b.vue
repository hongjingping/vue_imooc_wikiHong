<template>
  <div>
    <h1>{{ hello }}</h1>
    <p>common slot: </p>
    <slot>i dont have any slots</slot>
  </div>
</template>

<script>

export default {
  data () {
    return {
      hello: 'i am component B'
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
