function calcularColor(num) {

    var color;

    if (num === 1) {
        color = "negro";
    }
    else if (num === 2) {
        color = "blanco";
    }
    else if (num === 3) {
        color = "rojo";
    } 
    else if (num === 4) {
        color= "verde";
    }
    return "El color es " + color;
}
// código de prueba
console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(4)) // "El color es verde"