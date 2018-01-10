<template>
  <div>
    <a
    class="big-font"
    :class="fontColor" 
    :href="link"
    :title="tit">to baidu</a>

    <h2 :class="titleClass">对象类名</h2>
    <button @click="toRed">change title red</button>
    <button @click="toBlue">change title blue</button>

    <h2 :style="h2Style">关联样式</h2>
    <button @click="bigger">bigger</button>


    <p v-if="part === 'a'">partA</p>
    <!--vuejs 2.2.0 以上支持v-else-if -->
    <p v-else-if="part === 'b'">partB</p>
    <p v-else>partC</p>
    <p v-show="part === 'a'">you are chosen part A, congz</p>

    <button @click="toggle">toggle</button>

  </div>
</template>

<script>

import Vue from 'Vue'
export default {
  data () {
    return {
    	link: 'http://www.baidu.com',
      tit: 'baidu',
      fontColor: 'red-font',
      titleClass: {
        'red-font': false,
        'blue-font': false
      },
      h2Style: {
        'text-decoration': 'line-through',
        'font-weight': 'bold',
        'font-size': '12px'
      },
      part: 'c'
    }
  },
  methods: {
    toRed () {
      this.titleClass = {
        'red-font': true,
        'blue-font': false
      }
    },
    toBlue () {
      this.titleClass = {
        'red-font': false,
        'blue-font': true
      }
    },
    bigger () {
      this.h2Style['font-size'] = this.h2Style['font-size'].replace('px', '') * 1.5 + 'px'
    },
    toggle () {
      let seed = Math.random()
      this.part = 'c'
      if (seed < .3) {
        this.part =  'a'
      }
      else if (seed < .6) {
        this.part = 'b'
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
