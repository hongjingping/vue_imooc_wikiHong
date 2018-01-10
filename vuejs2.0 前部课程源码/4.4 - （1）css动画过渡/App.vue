<template>
  <div>
    <button @click="isShow = !isShow">toggle</button>
    <div class="ab">
      <transition name="fade">
        <p v-show="isShow">fade show</p>
      </transition>

      <transition name="my-trans">
        <p v-show="isShow">fly show</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-out;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
.my-trans-enter-active, .my-trans-leave-active {
  transition: all .5s ease-out;
}

.my-trans-enter {
  transform: translateY(-500px);
  opacity: 0;
}
.my-trans-leave-active {
  transform: translateY(500px);
  opacity: 0;
}

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
