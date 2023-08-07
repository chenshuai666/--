function throttle(func,tamp) {
    let flag = true
    return function () {
        if (!flag) return
        flag = false
        const context = this
        const args = [...arguments]
        setTimeout(() => {
            func.apply(context, args)
            flag = true
        },tamp)
    }
}

