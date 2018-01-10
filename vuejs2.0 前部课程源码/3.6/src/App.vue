<template>
  <div>
    input
    <br/>
    <h2>{{ myVal }}</h2>
    common: <input type="text" v-model="myVal">
    lazy: <input type="text" v-model.lazy="myVal">
    <hr>
    
    options
    <br/>
    <ul>
      <li v-for="item in fruitList">
        {{ item }}
      </li>
    </ul>
    <input type="checkbox" value="apple" v-model="fruitList">apple
    <input type="checkbox" value="banana" v-model="fruitList">banana
    <input type="checkbox" value="orange" v-model="fruitList">orange

    <hr>
    select
    <br/>
    chosen fruit index: {{ chosenFruit }}
    <select v-model="chosenFruit">
      <option v-for="(item, index) in fruitList" :value="index">{{ item }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myVal: '',
      fruitList: [],
      chosenFruit: null
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
