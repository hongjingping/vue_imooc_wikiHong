<template>
  <div>
    <h1>{{ hello }}</h1>
    <p>number is  {{ number }}</p>
    <button @click="showNumber">show number</button>
    <p> number-to-do tansfer to numberToDo = {{ numberToDo }}</p>

    <p>my-value = {{ myValue }}</p>
  </div>
</template>

<script>

export default {
  // props: ['number', 'number-to-do', 'my-value'],
  props: {
    number: {},
    'my-value': [Number],
    'number-to-do': [Number, String]
  },
  data () {
    return {
      hello: 'i am component A'
    }
  },
  methods: {
    showNumber () {
      alert(this.number)
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
