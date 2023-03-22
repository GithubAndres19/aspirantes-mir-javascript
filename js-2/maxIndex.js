// escribe la función maxIndex acá
function maxIndex(values = []) {
    if (values.length === 0) return -1
    let maxim = 0
    pos = -1
    for (let i = 0; i < values.length; i++) {
        maxim < values[i]
        if (maxim <= values[i]) {
            maxim = values[i]
            pos = i
        }
    }
    return pos
}
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1