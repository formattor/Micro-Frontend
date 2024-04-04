class ProxySandbox {
    proxyWindow = {}
    isRunning = false;

    constructor() {
        const fakeWindow = Object.create(null);
        this.proxyWindow = new Proxy(fakeWindow, {
            set: (target, prop, value, receiver) => {
                if (this.isRunning) {
                    target[prop] = value;
                }
            },
            get: (target, prop, receiver) => {
                return prop in target ? target[prop] : window[prop];
            }
        })
    }

    active() {
        this.isRunning = true;
    }
    inactive() {
        this.isRunning = false;
    }
}

window.city = 'beijing'

let proxySandbox1 = new ProxySandbox();
let proxySandbox2 = new ProxySandbox();

proxySandbox1.active();
proxySandbox2.active();

proxySandbox1.proxyWindow.city = 'shanghai'
proxySandbox2.proxyWindow.city = 'nanjing'

proxySandbox1.inactive();

console.log(window.city); //beijing

proxySandbox1.active();

console.log(proxySandbox1.proxyWindow.city); // shanghai

console.log(proxySandbox2.proxyWindow.city); // nanjing

// 不需要遍历window
// 可以激活多个应用