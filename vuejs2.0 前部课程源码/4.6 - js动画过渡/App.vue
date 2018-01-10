<template>
  <div>
    <button @click="isShow = !isShow"> toggle</button>
    <div class="ab">
      <keep-alive>
        <transition
        @beforeEnter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false">
          <p v-show="isShow">test word</p>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    beforeEnter: function (el) {
      $(el).css({
          left: '-500px',
          opacity: 0
      })
    },
    enter: function (el, done) {
      $(el).animate({
        left: 0,
        opacity: 1
      }, {
        duration: 1500,
        complete: done
      });
    },
    leave: function (el, done) {
      $(el).animate({
          left: '500px',
          opacity: 0
      }, {
        duration: 1500,
        complete: done
      })
    }
  },
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
