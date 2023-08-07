function debounce(func,tamp) {
    let timer = null
    return function () {
        const context = this
        const args = [...arguments]
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(context,args)
        },tamp)
    }
}

