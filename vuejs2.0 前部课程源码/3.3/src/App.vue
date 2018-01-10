<template>
  <div>
    <h2> 数组列表 </h2>
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
import componentA from './components/apple'
import Vue from 'Vue'
export default {
  components: { componentA },
  data () {
    return {
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
.odd {
  text-decoration: underline;
}
.ab {
  position: absolute;
  left: 150px;
  top: 300px;
}
</style>
