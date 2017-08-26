# AngularJs

## AngularJs是什么？

- 简称"ng"
- angularjs 是一个前端高级js框架，是一个MVC模式框架，用于创建webApp
- 在HTML中使用angular，就像使用模板引擎一样
- 通过 指令 扩展HTML，更清晰、更简洁的构建应用程序
- Angular中的双向数据绑定和依赖注入帮你省略了大量的代码
- 与服务器交互友好

```
AngularJS 诞生于2009年，由 Misko Hevery 等人创建，后为Google所收购。
是一款优秀的前端JS框架，已经被用于Google的多款产品当中。
```

- 其他类似的前端框架： Vue 、 Avalon 、 React 、 BackBone 、 KnockoutJS

## Angular的核心特性

- **指令**、**MVC**、**模块化**、**双向数据绑定**、**依赖注入**

## 优势

- 减少了DOM操作，让开发人员专注业务逻辑
- 通过模块机制，让代码结构更合理，增加可维护性
- 通过简单的指令把页面结构和数据结合
- 通过自定义指令实现组件化编程

## 原则

- 不推崇开发人员手动操作DOM, 其底层还是操作DOM
- 解放双手，简化了HTML的操作（从DOM中解放出来）
- 如果要通过AngularJS操作DOM，就通过 自定义指令 来实现

## 使用场景

- AngularJS适用于构建 CRUD （增删改查）应用，一般是：单页应用程序
- 如果一个页面中有大量的DOM操作，或者DOM操作太频繁，就不再适合使用angularjs（标准超过1000条指令）

## SPA-单页应用程序

- SPA: `single page applaction`
- 整个应用程序中只用页面，所有的操作都是在同一个页面中完成

### 单页应用程序 与 传统多页面应用程序的优势

1. 无刷新加载页面，避免了不必要的跳转和重复渲染
2. 更好的用户体验，让用户在web app感受native app的速度和流畅
3. 减少了请求体积，节省流量，加快页面响应速度
4. 可以选择性的保留状态，如音乐网站，切换页面时不会停止播放歌曲（网易云音乐）


### 劣势

1. 因为只有一个页面，需要在同一个页面中管理很多功能，增加应用程序的复杂度。（解决方法：angular框架已经处理好了）
2. ajax不利于SEO（搜索引擎优化），但是有其他解决方案（页面静态化，生成加载好的静态页面专门给网络虫看）

## 主要技术点

1. ajax
2. 锚点的使用（window.location.href #）
3. hashchange事件

## 实现思路

- 监听锚点值变化的事件，根据不同的锚点值，请求相应的数据
- 锚点（#）原本用作页面内部进行跳转，定位并展示相应的内容
- 在NG中，锚点被用作请求不同资源的标识，请求数据并展示内容

### 实例和参考

- [SPA - 百度百科](http://baike.baidu.com/item/SPA/17536313#viewPageContent)
- [一种SPA（单页面应用）架构](https://segmentfault.com/a/1190000000607661)
- [网易云音乐](http://music.163.com/)

## AngularJS的基础使用

- AngularJS 是自动执行的，只需要我们告诉它要做什么，在哪个位置去做

### angularjs实现文本框值加1的使用步骤
- 1 引入angular的js文件
- 2 设置` ng-app `指令
- 3 给文本框添加` ng-model `指令
- 4 给按钮添加` ng-click `指令

## directive 指令

- AngularJS有一套完整的、可扩展的、用来帮助web应用开发的指令集
- 指令是DOM元素上的一些标记，让NG给DOM元添加一些特殊的行为
- 指令包含：内置指令和自定义指令

### 指令是什么

- 将前缀为 `ng-` 的属性称之为指令，其作用是为DOM元素绑定数据、添加事件 等
```html
<input type="text" ng-model="userName">
```
- 指令的值是一个：表达式

### 指令的类型
- 属性（A）、元素（E）、类（C）、注释（M）
- 注意：类和注释这两种指令不常用，也不推荐使用

### 指令的前缀（知道）
- `ng-`：                `ng-model="name"`
- `data-ng-`:            `data-ng-model="name"`
- `ng:`:                 `ng:model="name"`
- `x-ng-`：              `x-ng-model="name"`

### 常用指令

#### ng-app

- 作用：该指令用于启动一个AngularJS应用
- 理解：指定AngularJS应用程序管理的边界（范围），只有在ng-app内部的指令才会起作用

```
ng-app 指令指定了应用的根元素，通常放置在页面的根元素，也可以是任意的元素
例如：body或html标签

应用程序运行时，会自动执行边界内部的其他指令。
标记的范围尽可能小，提高性能
```


> 注意：可以出现多次 `ng-app` 指令（不推荐！）
如果是多个需要手动引导：`ng-bootstrap()`


#### ng-controller="myCtrl"

- 作用：指定那个控制器来管理页面的内容，通过$scope给页面中的指令和表达式提供数据，也可以将一些业务逻辑放在控制器中

#### ng-model="user.name"

- 作用：该指令只能在表单元素中，能够让当前元素与user.name数据双向绑定
- 说明：
```
ng-model指令将尝试把属性绑定到当前作用域中。
如果当前作用域中没有该属性，那么AngluarJS会帮我们隐式创建并且添加到当前作用域中。
```

#### ng-click

- 作用：用来指定DOM元素被点击时执行的事件
- 语法：`ng-click="expression"`

```html
<button ng-click="val + 1"></button>
```

#### ng-init （了解）
- 作用：初始化属性的值
- 语法：`ng-init="name='Jack'"`

#### {{}} 插值表达式


## expression -表达式
- 介绍：是一些JavaScript的代码片段主要被用在插值绑定或者直接作为指令的属性值

```
从JS角度，使用运算符和数据 连接起来的有 结果 的代码就是：表达式
注意：不带分号

例如：
可以使用 console.log(); 打印出来， 或者
    console.log( expression );
可以用作 赋值运算符 的右值
    var test = expression;
```

```html
<p>{{user.name}}</p>
<p>{{1 + 8}}</p>
<p>{{"hello" + "world"}}</p>

<div ng-click="sayHi()"></div>
```

## AngularJS的执行过程分析

- 示例代码
```html
<body ng-app>
    <input type="text" ng-model="user.name" />
    <p>Hello {{user.name}}</p>
</body>
```

### 执行过程说明

- 1 `ng-app`告诉AngularJS让它来管理 body内部的代码
- 2 `ng-app`指令创建了一个对象，对象中包含了AngularJS的相关内容，例如：数据模型
- 3 `ng-model`指令查询数据模型中有没有 `user` 对象以及`name`属性，没有则创建
- 4 创建`user`对象以及`name`属性，并初始化`name`值为：空字符串
- 5 表达式 `{{user.name}}` 从数据模型中查找有没有该数据，如果有就取出来，并展示
- 6 `ng-model`和`{{}}` 中的 user.name 指向的是数据模型中同一个数据
- 7 文本框值的变化会导致数据模型的变化，数据模型的变化也会导致表达式的变化

### 通过js的方式使用angular

## AngularJS文档
- [AngularJS官方文档](https://angularjs.org)
- 学会查看官方文档，很重要！！！

## module -模块
- 所有的其他内容，都是基于模块的，有模块才有其他的内容！

```
模块是一个容器包含了应用程序的不同组成部分，并且这些内容必须要依附于一个模块
    例如：controllers, services, filters, directives, configs 等

模块是应用程序的组成单元，例如：登录模块、注册模块、商品列表模块 等，这些模块
组合在一起构成了一个完整的应用程序。
```

### 创建模块
- 语法：`var app = angular.module(moduleName, []);`
- 作用：创建一个模块，让AngluarJS对整个内容进行模块化管理
- 说明：模块也可以被创建多次，但很少这么做
- 示例：

```js
// 第一个参数：模块名称，字符串
// 第二个参数：数组，用来添加当前模块的依赖项
var app = angular.module("firstApp", ["otherModuleName"]); 
```

### 获取模块
- 语法：`var app = angular.module(moduleName);`
- 作用：获取指定的模块



## controller -控制器
- 需要配合`ng-controller`指令来使用

### 创建控制器
- 语法：`app.controller(ctrlName, callback);`
- 作用：创建一个控制器，控制器必须出现在某个模块下
- 示例：

```js
app.controller("DemoController", function($scope) {
    // $scope 相当于当前的数据模型
});
```

### 控制器的作用
- 1 初始视图中使用的数据，是存储数据的容器
- 2 通过$scope对象把数据模型或函数行为暴露给视图
- 3 监视模型的变化，做出相应的逻辑处理

### $scope的说明
- 1 $scope是控制器和视图之间的桥梁，用于在控制器和视图之间传递数据
- 2 推荐：给 $scope 添加数据应该使用对象，而不是作为其属性
- 2 在控制器中暴露 数据模型（数据和行为），在视图中通过指令或表达式来使用
    + 对比：局部变量
- 4 注意：`$scope`这个名称必须这么写！
- 5 `$scope` 是在控制器创建的时候，被注入进去的

```
1 ng 在使用的时候，页面中只要有 ng-app 就会创建一个 scope，名字是：$rootScope
2 $scope 是 HTML（视图）背后的“男人” ---->
    视图：女人，负责美（展示）
    $scope：男人，负责提供美的资源（数据）
3 所有的控制器都继承自 $rootScope 
4 继承是按照：原型式继承 来实现
5 对于HTML来说，参照原型式继承：子节点继承自父节点
```


## 数据绑定方式
### 双向数据绑定
- 一般通过 `ng-model` 指令实现
- 概述：
```
数据模型的值发生改变，就会导致页面值的改变；页面值的改变，也会导致数据模型中值的改变，
这种相互影响的关系就是双向数据绑定。
```

### 单向数据绑定
- 一般通过 `{{}}` 表达式来实现
- 概述：数据模型的值发生改变，导致页面的值发生改变

## MVC 与 MVVM
- 优势：代码分离（视图代码、控制器代码），职责分离，解耦
- 目的：解决应用程序展示结构、业务逻辑之间的紧耦合关系，实现模块化和复用
- 提高了代码的结构和可维护性，但是不会提高代码执行的效率

### MVC介绍
```
MVC（Model–view–controller）是一种软件架构模式，
把软件系统分为三个基本部分：模型（Model）、视图（View）和控制器（Controller）。
```

- Model 进行数据的存储和数据的处理方法（CRUD）
- View 展示数据
    + 在Angluar中，View指的是在页面中被 `ng-app` 指令包裹的HTML代码
- Controller 是应用程序中处理用户交互的部分
    + 通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据，是数据和视图的桥梁

```
例如：移动端和PC端两个View，共享同一个Model
在MVC设计模式中， Model 响应用户请求并返回响应数据，
View 负责格式化数据并把它们呈现给用户，业务逻辑和表示层分离，
同一个 Model 可以被不同的 View 重用，所以大大提高了代码的可重用性。
```

### AngularJS中的MVC
- Model — scope中的属性
- View — 被 ng-app 指令包裹的HTML内容
- Controller — ng-controller指令指定的控制器函数，处理业务逻辑，并可以为 scope 指定函数和属性

### MVVM
- 由 MVC 模式演变出来的！

```
M: model 模型
V: view 视图， ng-app管理的页面
VM: ViewModel 视图模型，在Angular中就是：$scope
```

#### ViewModel
- 1 $scope实际就是MVVM模式中的VM（视图模型）
- 2 Angular中大量的使用$scope, 盖过了C（控制器）的概念，所以很多人将其称为MVVM框架
- 3 不要深究到底是什么类型（MVC/MVVM），重要的是学会使用。
- 4 `MVW` ===> "Model View Whatever" MV*
- 5 MVVM 首先出现在 微软的WPF 中


### 案例：用户注册
#### localStorage 的基本使用
- `getItem(keyName)`：读取，参数类型：string
- `setItem(keyName, keyValue)`：设置，参数类型：string

#### 参考
- [localStorage - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)
- [localStorage的基本使用](http://www.cnblogs.com/st-leslie/p/5617130.html)


## $watch -监听数据
- 语法：`$scope.$watch(attrName, callback, flag);`
- 作用：监听$scope中数据模型的变化，无法监视其他的数据（例如，普通变量）
- 注意：调用$watch方法时，会立即被调用一次。

```js
app.controller("demoController", function($scope) {
    $scope.name = "jack";
    
    // 参数一：表示监听的$scope中的属性名称，类型为：字符串
    // 参数二：表示数据变化执行的回调函数，有两个参数分别是：当前值与变化之前的值
    // 参数三：比较方式，false：表示比较引用；true：表示比较值。默认值为false
    $scope.$watch("name", function(curValue, oldValue) {
        // 只要被监听的数据发生变化，就会指定该回调函数中的代码！

        // 略过第一次执行
        if(curValue === oldValue) return;
    });
});
```

## 启动NG的方式
- 1 通过 `ng-app` 指令启动
- 2 手动启动：`angular.bootstrap(document, ['MyModule'])`

```js
// 等待文档加载完成后，启动 angular
angular.element(document).ready(function() {
    angular.bootstrap(document, ['MyModule']);
});
```

## 其他

### 多个app
- 注意：不推荐在同一个页面中创建多个 `ng-app`
- 注意：ng只会找到第一个 `ng-app` 并且启动，如果启动其他的，需要手动启动

```html
<div ng-app="FirstApp"></div>
<div ng-app="SecondApp"></div>
```


## 框架和库的区别

### Library
- jQuery is a library， Angular is a framework
- jQuery是API的集合，封装DOM操作，提高开发效率

```
使用jQuery的思路：
1 想要获取元素，我调用 $(selector)
2 元素绑定事件，我调用 .on()
3 进行什么DOM操作，我调用什么方法完成

总结：你告诉jQuery你要做的操作，jQuery就能帮你做好。
      **在使用库的过程中，开发人员是 控制者**
```

### Framework
- 框架规定了一种编程方式
- 使用框架的时候，由框架控制一切，我们只需要按照规则写代码

```
Angular提供了一套完整的解决方案，所有的流程都设定好了
我们只需要按照流程规则，把我们的代码进行填坑。
```

### 主要区别
- 控制反转，框架中控制整个流程的是框架
- You call Library, Framework calls you.
- 好莱坞原则：Don't call us, we'll call you.


## 其他资料

### angular代码风格
- [johnpapa/angular-styleguide](https://github.com/johnpapa/angular-styleguide)

### 模块化
- [乐高](http://baobao.sohu.com/20151225/n432526267.shtml)
- [乐高-机器人](http://baidu.56.com/watch/05196900615515713942.html?page=videoMultiNeed)

### 参考网站
- [百度CDN](http://cdn.code.baidu.com/)
- [开源中国在线工具](http://tool.oschina.net/)