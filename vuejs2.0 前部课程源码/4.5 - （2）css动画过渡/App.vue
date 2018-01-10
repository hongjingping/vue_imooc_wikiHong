<template>
  <div>
    <button v-for="item in ['com-a', 'com-b', 'com-c']" @click="changeView(item)"> {{ item }} </button>
    <div class="ab">
      <keep-alive>
        <transition name="my-trans" mode="out-in">
          <keep-alive>
            <div :is="currentView"></div>
          </keep-alive>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import ComA from 'components/a.vue'
import ComB from 'components/b.vue'
import ComC from 'components/c.vue'
export default {
  components: {
    ComA, ComB, ComC
  },
  data () {
    return {
      currentView: ''
    }
  },
  methods: {
    changeView (view) {
      this.currentView = view
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
