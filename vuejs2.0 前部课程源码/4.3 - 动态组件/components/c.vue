<template>
  <div>
    <h1>{{ hello }}</h1>
    <slot name="header">empty</slot>
    <p>something in component C {{ hello }}</p>
    <slot name="footer">empty</slot>
  </div>
</template>

<script>

export default {
  data () {
    return {
      hello: 'i am component C'
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
