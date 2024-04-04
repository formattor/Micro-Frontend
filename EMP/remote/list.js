// 暴露给host使用

let wrap = document.createElement('div')

let list = [
    {
        name: '张三',
        age: 18,
        sex: '男'
    },
    {
        name: '李四',
        age: 19,
        sex: '女'
    },
    {
        name: '王五',
        age: 20,
        sex: '男'
    }
]

list.forEach(item => {
    let p = document.createElement('p');
    p.innerHTML = item.name + ' ' + item.age + ' ' + item.sex;
    wrap.appendChild(p)
})

export const addList = () => {
    document.body.appendChild(wrap)
}
