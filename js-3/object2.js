//1 Crea un objeto literal llamado "persona" 
//con las siguientes propiedades: nombre, edad, ciudad y profesión.
let persona= {
    nombre:"Samuel Garcia",
    edad: 10,
    ciudad:"Bogotá",
    profesion: "Estudiante",}
//2 Imprime en la consola el objeto "persona" completo.
console.log (persona)
    // 3.1 Crea una función llamada "presentacion" que tome el objeto "persona" como argumento 
    // y devuelva una cadena de texto que incluya el nombre, la edad y la ciudad de la persona.
    persona.presentacion = function () {
        return `${this.nombre} ${this.edad} ${this.ciudad} ${this.profesion}`;}
console.log(persona.presentacion())
//6 Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo 
//con algunos pasatiempos.
persona.hobbies = ["jugar", "leer", "ver videos"]
//7 Imprime en la consola la propiedad "hobbies" del objeto "persona".
console.log("\nHobbies:")
//Utiliza un ciclo for para imprimir en la consola 
//cada uno de los elementos del arreglo de hobbies.
for (let i = 0; i < persona.hobbies.length; i++){
    console.log(persona.hobbies[i])
}

