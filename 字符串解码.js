export function decodeString(s) {
    const stack = []
    let i = s.length - 1
    while (i >= 0){
        if (s[i] === ']'||/[a-z]/.test(s[i])) {
            stack.push(s[i])
            i--
        } else if (s[i] === '[') {
            let tmp = ''
            while (stack.at(-1) !== ']') {
                tmp += stack.pop()
            }
            stack.pop()
            stack.push(tmp)
            i--
        } else if (!isNaN(s[i])) {
            let tmp = ''
            while (!isNaN(s[i])) {
                tmp = s[i] + tmp
                i--
            }
            let str = stack.pop()
            stack.push(Array(parseInt(tmp)).fill(str).join(''))
        }
    }
    stack.reverse()
    return stack.join('')
}

console.log(decodeString('3[a2[c]]'))