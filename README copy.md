## 面向对象，类的继承、横向切割
1.程序进行分类
    外层： 浏览器的事件 - 调用方法 - 事件处理函数的绑定
    操作数据：addTodo、removeTodo、toggleComplete
    操作DOM：addItem、removeItem、changeCompleted
    管理模版：todoView - 接收参数


```
yarn add vite --save
```
package.json
```
"dev": "vite",
"build": "vite build",
"preview": "vite preview"
```


```
 <script type="module" src="./src/app.ts"></script>
```
然后
```
npm run dev
```



```
yarn add express @types/express ts-node-dev typescript jquery @types/jquery --save
tsc --init
```
解开tsconfig.json里面的下面3项，就能使用装饰器特性
```
"experimentalDecorators": true,
"emitDecoratorMetadata": true, 
"strictNullChecks": false,
```