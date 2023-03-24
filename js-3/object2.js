let persona = {
    nombre: "Samuel Garcia",
    edad: 10,
    ciudad: "Bogotá",
    profesion: "Estudiante",
}
console.log(persona)
persona.presentacion = function () {
    return `${this.nombre} ${this.edad} ${this.ciudad} ${this.profesion}`;
}
console.log(persona.presentacion())
persona.hobbies = ["jugar", "leer", "ver videos"]
console.log("\nHobbies:")
for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i])
}

