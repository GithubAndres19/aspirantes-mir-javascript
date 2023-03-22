// escribe la función sum acá
function sum(values = []) {
    let suma = 0
    for (let i = 0; i < values.length; i++) {
        suma += values[i];
    }
    return suma
}
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0