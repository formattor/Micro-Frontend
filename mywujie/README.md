npm init vue

npm init vite
    - vue
    - react

[pnpm](https://www.pnpm.cn/pnpm-workspace_yaml)

pnpm -F react-demo dev

pnpm i wujie

pnpm i wujie-vue3 -S

<!-- 通讯 -->
1. 子应用的js是存放在iframe中的，所以子应用就可以通过window.parent.variable的方式访问全局变量

2.  父组件传:props={name:"zzz"}
    子组件接收window.$wujie.props.name

3. eventBus 发布订阅

```
import {bus} from 'wujie'

bus.$on('vue3',(data)=>{
    console.log(data,我是主应用)
})

window.$wujie.bus.$emit('vue3','我是子应用')
```