// escribe la función max acá
function max(values = []) {
    if(values.length[0]) return undefined
    let maxim = values [0]
    for (let i = 1; i < values.length; i++) {
        if (maxim <= values[i]) {
            maxim = values[i];
        }
    }
    return maxim
}
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined