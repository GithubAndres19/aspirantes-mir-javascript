// escribe la función bmi acá
function bmi(peso, altura) {
    if (peso <= 0) {
        return peso + " el valor no puede ser menor a 1"
        if (altura <= 0)
            return altura + " el valor no puede ser menor a 1"
    }
    return peso / altura ** 2
}
// código de prueba
console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75))// 16.979591836734695