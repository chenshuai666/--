class Scheduler{
    constructor(max) {
        this.max = max
        this.excuqueue = []
        this.waitqueue = []
        // this.cur = 0
    }
    addTask(task) {
        this.waitqueue.push(task)
        this.run()
    }
    run() {
        if (this.waitqueue.length&&this.excuqueue.length < this.max) {
            let task = this.waitqueue.shift()
            // console.log(task)
            this.excuqueue.push(task)
            if(this.excuqueue.length) this.excuqueue[this.excuqueue.length - 1]().then(() => {
                this.excuqueue.splice(this.excuqueue.indexOf(task), 1)
                this.run()
            })
        }
    }
}

let sche = new Scheduler(2)
const timeout = time => new Promise(resolve => {
    setTimeout(resolve, time);
})
const add = (time,order) => {
    sche.addTask(() => timeout(time).then(()=>console.log(order)))
}
add(1000, '1');
add(500, '2');
add(300, '3');
add(400, '4');