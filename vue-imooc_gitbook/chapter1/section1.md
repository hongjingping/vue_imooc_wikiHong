## 1.vue-router(前端路由)
1. router-map,通过routes设置
```
// 路由映射表--http://localhost:8080/apple
routes: [
    {
      /* path是路径 */
      path: '/apple',
      /* component是组件 */
      component: Apple
    },
    {
      /* path是路径 */
      path: '/banana',
      /* component是组件 */
      component: Banana
    }
  ]
```

```
// route-view不需要声明,只要我们项目中使用了vue-router,就可以直接使用的
<router-view></router-view>
```

```
// 路由参数---http://localhost:8080/apple/red/detail/3
 routes: [
    {
      /* path是路径 ,:color设定参数,带引号的都是参数 */
      path: '/apple/:color/detail/:type',
      /* component是组件 */
      component: Apple
    },
    {
      /* path是路径 */
      path: '/banana',
      /* component是组件 */
      component: Banana
    }
  ]
```
```
// 路由嵌套---http://localhost:8080/apple/red
  routes: [
    {
      /* path是路径 ,:color设定参数,带引号的都是参数 */
      path: '/apple/:color/detail/:type',
      /* component是组件 */
      component: Apple,
      /* 子组件 */
      children: [
        {
          path: '/red',
          component: RedApple
        },
        {
          path: '/green',
          component: GreenApple
        }
      ]
    },
    {
      /* path是路径 */
      path: '/banana',
      /* component是组件 */
      component: Banana
    }
  ]
```

```
    <router-link :to="{path:'apple/red'}">to redapple</router-link>
```
2. router-range路由视图
3. router-link路由导航

```

// 命名的路由视图，路由重定向
<router-link :to="apple"}">to apple</router-link>
<router-link :to="/apple"}">to apple</router-link>
<router-link :to="{path:apple, param:{color: 'yellow'}}"}">to apple</router-link>


routes: [
    {
      /* path是路径 ,:color设定参数,带引号的都是参数 */
      path: '/apple/:color/detail/:type',
      /* component是组件 */
      component: {
        viewA: Apple,
        viewB: RedApple
      },
      name: 'appPage',
      /* 子组件 */
      children: [
        {
          path: '/red',
          component: RedApple
        },
        {
          path: '/green',
          component: GreenApple
        }
      ]
    },
    {
      /* path是路径 */
      path: '/banana',
      /* component是组件 */
      component: Banana
    }
  ]
```

```
// 重定向---指向apple
    {
      path: '/',
      redirect: 'apple'
    },
```

```
// 使用过度制作路由跳转动画
<!--transition过渡，keep-alive是进行缓存-->
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
```

4. 事件以及状态管理---vuex
    1.