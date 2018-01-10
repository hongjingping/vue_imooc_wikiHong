<template>
  <div :title="who">
    hello {{ who }}
    hello <span v-html="who"></span>
    <br/>
    v-html, v-text 区别：
    <p v-html="demoText"></p>
    <p v-text="demoText"></p>
    <br/>
    花括号里的表达式
    <br>
    num + 1 = {{ num + 1}}
    <br>
    {{ status ? who : num }}
  </div>
</template>

<script>
export default {
  data () {
    return {
    	who: 'world',
    	demoText: '<span>in span tag</span>',
    	num: 1,
    	status: false
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

.ab {
  position: absolute;
  left: 150px;
  top: 300px;
}
</style>
