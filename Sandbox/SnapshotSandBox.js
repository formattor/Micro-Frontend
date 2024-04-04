class Snapshotbox {
    windowSnapshot = {}
    modifyPropsMap = {}
    // 微应用运行状态
    active() {
        // 1.保存window对象上所有属性的状态
        for (const prop in window) {
            this.windowSnapshot[prop] = window[prop]
        }
        // 2.恢复上次运行该应用所修改过的window上的属性
        Object.keys(this.modifyPropsMap).forEach(prop => {
            window[prop] = this.modifyPropsMap[prop];
        })
    }
    // 微应用停止状态
    inactive() {
        for (const prop in window) {
            if (window[prop] !== this.windowSnapshot[prop]) {
                // 3.记录修改了window上的哪些属性
                this.modifyPropsMap[prop] = window[prop]
                // 4.还原window上微应用运行之前的状态
                window[prop] = this.windowSnapshot[prop]
            }
        }
    }
}

// window.city = 'beijing'

// 进入微应用

// window.city = 'shanghai'

// 退出微应用

// window.city = 'beijing'

window.city = 'beijing'

let snapSandbox = new Snapshotbox();

snapSandbox.active();

window.city = 'shanghai'

snapSandbox.inactive();

console.log(window.city); //beijing

snapSandbox.active();

console.log(window.city); // shanghai

// 遍历window所有属性，性能差
// 同一时间只能激活一个微应用