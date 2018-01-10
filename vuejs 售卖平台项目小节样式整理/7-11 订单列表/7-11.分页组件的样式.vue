/* 7-11 分页组件  components/base/pagenation.vue */
<template>
    <div class="pagenation-component">
      <ul class="page-numbers">
        <li class="page-links"
        v-for="p in pages"
        :class="{active:current === p}"
        @click="change(p)">{{ p + 1 }}</li>
      </ul>
    </div>
</template>

<style scoped>
.pagenation-component {
  display: inline-block;
  vertical-align: middle;
}
.page-links {
  display: inline-block;
  border: 1px solid #e3e3e3;
  text-align: center;
  height: 30px;
  line-height: 30px;
  width: 30px;
  background: #fff;
  cursor: pointer;
}
.page-numbers {
  display: inline-block;
}
.page-numbers li.active,
.page-links:hover {
  background: #4fc08d;
  color: #fff;
}
</style>
