// escribe la función max acá
function max(values = []) {
    let maxim = 0
    for (let i = 0; i < values.length; i++) {
        maxim < values[i]
        if (maxim <= values[i]) {
            maxim = values[i]
        }
    }
    if (maxim <= 0) return undefined
    return maxim
}
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined