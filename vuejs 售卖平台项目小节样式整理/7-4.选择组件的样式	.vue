/* 
7-4 选择组件的样式  
components/base/chooser.vue 
components/base/multiplyChooser.vue
*/
<template>
    <div class="chooser-component">
        <ul class="chooser-list">
          <li
          v-for="(item, index) in selections"
          @click="chosenSelection(index)"
          :title="item.label"
          :class="{active:index === nowIndex}"
          >{{ item.label }}</li>
        </ul>
      </div>
    </div>
</template>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
