<template>
  <div>
    <h1>{{ hello }}</h1>
    <p>ky is {{ ky }}</p>
    <p>val is {{ val }}</p>
    <p>idx is {{ idx }}</p>
  </div>
</template>

<script>

export default {
  props: ['ky', 'idx', 'val'],
  data () {
    return {
      hello: 'i am apple'
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
