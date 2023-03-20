// escribe la función suma acá
function sum(num) {
    if (num <= 1) {
        return num
    }
    return num + sum(num - 1)
}
// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 1+2+3+4+5+6+7+8+9+10 = 55
console.log(sum(15)) // 120 