# hash和history的原理

## 一、hash和history的区别

|          | hash                       | History          |
| -------- | -------------------------- | ---------------- |
| ur显示   | 有#，很Low                 | 无#，好看        |
| 回车刷新 | 可以加载到hash值对应页面   | 一般就是404掉了  |
| 支持版本 | 支持低版本浏览器和IE浏览器 | HTML5新推出的API |

## 二、hash路由

### 1. hash模式(Vue-router默认)

hash模式是一种把前端路由的路径用 `#`拼接在真实的URL后面的模式 当`#`后面的路径发生变化时，浏览器并不会重新发起请求，而是会触发hashchange事件。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <a href="#/a">A页面</a>
    <a href="#/b">B页面</a>
    <div id="app"></div>
  </body>
</html>
<script>
  function render() {
    const app = document.querySelector("#app");
    app.innerHTML = window.location.hash;
  }

  // element.addEventListener(event, function, useCapture);
  // 第一个参数是事件的类型（如“ click”或“ mousedown”）。
  // 第二个参数是我们想要在事件发生时调用的函数。
  // 第三个参数是一个布尔值，指定是使用事件冒泡还是事件捕获。此参数是可选的。
  window.addEventListener("hashchange", render);
</script>

```

在上面的例子中，我们利用 `a 标签`设置了两个路由导航，把 app 当做`视图渲染容器`，当`切换路由时`触发`视图容器更新`，这其实就是大多数前端框架`哈希路由`的实现原理。

### 2.hash模式优缺点

优点

- 只需要前端配置路由表, 不需要后端的参与
- 兼容性好, 浏览器都能支持
- hash值改变不会向后端发送请求, 完全属于前端路由

缺点

- hash值前面需要加#, 不符合url规范,也不美观



## 三、history

history API 是 H5 提供的新特性，允许开发者直接更改前端路由，即`更新浏览器 URL 地址`而`不重新发起请求`(将url替换并且不刷新页面)。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>history</title>
  </head>
  <body>
    <a href="javascript:toA();">A页面</a>
    <a href="javascript:toB();">B页面</a>
    <div id="app"></div>
    <script>
      function render() {
        console.log("render");
        app.innerHTML = window.location.pathname;
      }
      function toA() {
        history.pushState({}, null, "/a");
        render();
      }
      function toB() {
        history.pushState({}, null, "/b");
        render();
      }
      window.addEventListener("popstate", render);
    </script>
  </body>
</html>
```

history API 提供了丰富的函数供开发者调用，我们不妨把`控制台`打开，然后输入下面的语句来观察浏览器地址栏的变化

```js
history.replaceState({}, null, '/b') // 替换路由
history.pushState({}, null, '/a') // 路由压栈 替换当前地址 被替换地址进入访问历史
history.back() // 返回
history.forward() // 前进
history.go(-2) // 后退2次
```

上面的代码监听了 popstate 事件，该事件能监听到：

- 用户点击浏览器的前进和后退操作
- 手动调用 history 的 back、forward和 go方法 监听不到

history 的 pushState和 replaceState方法 这也是为什么上面的 toA 和 toB 函数内部需要手动调用 render 方法的原因。 另外，大家可能也注意到 light-server 的命令多了 --historyindex '/history.html'参数，这是干什么的呢？

浏览器在刷新的时候，会按照路径发送真实的资源请求，如果这个路径是前端通过 history API 设置的 URL，那么在服务端往往不存在这个资源，于是就返回 `404`了。 上面的参数的意思就是如果后端资源不存在就返回 history.html 的内容。(试了没反应，知道有这种用法即可)

因此在线上部署基于 history API的单页面应用的时候，一定要后端配合支持才行，否则会出现大量的 `404`。 以最常用的 Nginx 为例，只需要在配置的 location / 中增加下面一行即可：

try_files $uri /index.html 1 history 模式的优缺点：

> 优点：

符合url地址规范, 不需要#, 使用起来比较美观

> ​	缺点：

- 兼容性不如 hash，且需要服务端支持重定向，否则一刷新页面就404了
- 兼容性比较差, 利用了 HTML5 History对象中新增的 pushState() 和 replaceState() 方法,需要特定浏览器的支持.

## 四、传统路由跟前端路由不同

传统的路由指的是：当用户访问一个url时，对应的服务器会接收这个请求，然后解析url中的路径，从而执行对应的处理逻辑。这样就完成了一次路由分发。