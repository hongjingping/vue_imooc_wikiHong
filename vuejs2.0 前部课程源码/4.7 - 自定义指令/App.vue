<template>
  <div>
    <!-- 插入页面阶段就focus的input -->
    <input type="text" name="" v-focus>
    <p v-css="{color: 'red', 'font-size': '24px'}">test word</p>
  </div>
</template>

<script>
export default {
  directives: {
    css: {
      inserted (el, binding) {
        // console.log(el, binding)
        let styleObj = binding.value
        let arr = []
        for (let key in styleObj) {
          arr.push(key + ':' + styleObj[key])
        }
        arr = arr.join(';')
        console.log(arr)
        el.style.cssText = arr
      }
    },
    focus: {
      inserted (el, binding) {
        el.focus()  
      }
    }
  },
  data () {
    return {
      isShow: false
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
