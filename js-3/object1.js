
//1 Crea una variable llamada pedro de tipo objeto literal 
let pedro = {
nombre: "Pedro Perez",
edad: 30,
activo: true,
hobbies: ["programar", " squash", " piano"],
//6 Agrégale al objeto una función llamada saluda que retorne la frase 
//“Hola, me llamo ” seguido del nombre de la persona.
saluda: function () { console.log ("Hola, me llamo " + pedro.nombre)} 
}
//2 Imprime en la consola el valor de la llave edad.
console.log (pedro.edad)
//3 Agrega una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8
//4 Elimina la propiedad con llave activo.
delete pedro.activo
//5 Recorre todas las propiedades e imprímelas en consola 
//(una línea por propiedad y separando la llave y el valor con dos puntos :).
console.log("nombre: "+ pedro.nombre)// imprime nombre: Pedro Perez
console.log("edad: "+ pedro.edad)// imprime edad: 30
console.log("activo: "+ pedro.activo)// imprime activo: undefined
console.log("hobbies: "+ pedro.hobbies)// imprime hobbies: programar, squash, piano
console.log("estatura: "+ pedro.estatura)// imprime estatura: 1.8
//7 Llama la función saluda y verifica el resultado, debería decir “Hola, me llamo Pedro Perez”.
pedro.saluda()
