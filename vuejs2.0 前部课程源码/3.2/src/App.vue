<template>
  <div>
    <h2> 数组列表 </h2>
    <ul>
      <li v-for="(item, index) in list" :class="{odd: index % 2}" :key="index">
        {{ index + 1}} - {{ item.name }} - {{ item.price }}
      </li>
    </ul>

    <h2> 对象列表 </h2>
    <ul>
      <li v-for="(val, key, index) in objList" :key="index">
        {{ index + 1}} - {{ key }} : {{ val }}
      </li>
    </ul>

    <h2> 循环组件 </h2>
    <componentA v-for="(val, ky, index) in objList" :key="index" :ky="ky" :val="val" :idx="index"></componentA>
  </div>
</template>

<script>
import componentA from './components/apple'
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
      ],
      objList: {
        name: 'apple',
        price: 56,
        color: 'red',
        weight: '78g'
      }
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
