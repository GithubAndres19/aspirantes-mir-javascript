// escribe la función join acá
function join(values = []) {
    let arrayStr = String(values)
    return arrayStr.split(",").join(" ")
}
console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""