class LegacySandbox {
    currentUpdatePropsValueMap = new Map();
    modifiedPropsOriginalValueMap = new Map();
    addedPropsMap = new Map();
    proxyWindow = {}

    constructor() {
        const fakeWindow = Object.create(null);
        this.proxyWindow = new Proxy(fakeWindow, {
            set: (target, prop, value, receiver) => {
                const originalVal = window[prop];
                if (!window.hasOwnProperty(prop)) {
                    this.addedPropsMap.set(prop, value)
                } else if (!this.modifiedPropsOriginalValueMap.has(prop)) {
                    this.modifiedPropsOriginalValueMap.set(prop, originalVal)
                }
                this.currentUpdatePropsValueMap.set(prop, value);
                window[prop] = value;
            },
            get: (target, prop, receiver) => {
                return window[prop]
            }
        })
    }

    setWindowProp(prop, value, isToDelete) {
        if (value === undefined && isToDelete) {
            delete window[prop];
        } else {
            window[prop] = value;
        }
    }
    active() {
        // 回复上一次window运行状态
        this.currentUpdatePropsValueMap.forEach((value, prop) => {
            this.setWindowProp(prop, value);
        })
    }
    inactive() {
        // 还原window原有属性
        this.modifiedPropsOriginalValueMap.forEach((value, prop) => {
            this.setWindowProp(prop, value);
        })
        // 删除新增属性
        this.addedPropsMap.forEach((_, prop) => {
            this.setWindowProp(prop, undefined, true);
        })
    }
}


window.city = 'beijing'

let legacySandbox = new LegacySandbox();

legacySandbox.active();

legacySandbox.proxyWindow.city = 'shanghai'

legacySandbox.inactive();

console.log(window.city); //beijing

legacySandbox.active();

console.log(window.city); // shanghai

// 没有遍历对象的属性
// 也只能一个实例