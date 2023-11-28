export function sortVersions(arr) {
    return arr.sort((a, b) => {
        const version1 = a.split('.')
        const version2 = b.split('.')
        let i = 0
        while (i < version1.length && i < version2.length) {
            if (+version1[i] === +version2[i]) {
                console.log(version1,version2)
                i++
            } else {
                return version1[i] - version2[i]
            }
        }
    })
}

// console.log(sortVersions(['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']))