<template>
  <div>
    <h2>my value (属性): {{ myVal }}</h2>
    <h2>my value without num (计算属性): {{ myValWithoutNum }}</h2>
    input: <input type="text" v-model="myVal">
    <hr>
    <ul>
      <li v-for="(item, index) in list" :class="{odd: index % 2}" :key="index">
        {{ index + 1}} - {{ item.name }} - {{ item.price }}
      </li>
    </ul>
    <button @click="addItem">add something</button>

    <button @click="changePrice">change firstone price</button>
  </div>
</template>

<script>
import Vue from 'Vue'
export default {
  data () {
    return {
      myVal: '',
      list: [
        {
          name: 'apple',
          price: 56
        },
        {
          name: 'banana',
          price: 12
        }
      ]
    }
  },
  computed: {
    myValWithoutNum () {
      return this.myVal.replace(/\d/g, '')
    }
  },
  // list 监听
  watch: {
    list: {
      handler (val, oldVal) {
        console.log(val, oldVal)
      },
      deep: true
    }
  },
  methods: {
    addItem () {
      this.list.push({
        name: 'somethingnew',
        price: parseInt(Math.random()* 100)
      })
    },
    changePrice () {
      Vue.set(this.list, 0, {
        name: this.list[0].name,
        price: parseInt(Math.random()* 100)
      })
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
