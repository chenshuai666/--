class Observer {
    constructor() {
        this.message = {}
    }
    $on(type, cb) {
        if (!this.message[type]) this.message[type] = []
        this.message[type].push(cb)
    }
    $off(type, cb) {
        if (!this.message[type]) return
        if (!cb) return this.message.delete(type)
        this.message[type] = this.message[type].filter(item => item !== cb)
    }
    $emit(type) {
        if (!this.message[type]) return
        this.message[type].forEach(item=>item())
    }
}