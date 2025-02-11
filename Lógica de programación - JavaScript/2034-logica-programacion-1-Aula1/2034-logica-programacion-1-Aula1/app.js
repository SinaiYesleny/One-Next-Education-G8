// Condicionales y concatenación: DESAFIOS - HORA DE PRACTICAR

/*Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let FinDeSemana = ['Sábado', 'Domingo'];
let diaSemana = prompt("Me indicas el día de la semana por favor:");
console.log(diaSemana);
if (FinDeSemana.includes(diaSemana)) {
    alert('Buen fin de semana');
} else {
    alert('Buena semana');
}
*/ 

/*Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let NumeroIngresado = prompt('Ingresa un número por favor:');
console.log(NumeroIngresado);
if (NumeroIngresado > 0) {
    alert('El número es positivo');
} else {
    alert('El número es negativo');
}
*/

/*Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let Puntuacion = prompt('Ingresa la puntuación que obtuviste:');
console.log(Puntuacion);
if (Puntuacion >= 100) {
    alert('¡Felicidades, has ganado!');
} else {
    alert('Inténtalo nuevamente para ganar');
}
*/

/*
let SaldoCuenta = 1000000;
    alert(`Saldo de la cuenta: ${SaldoCuenta}`);
*/


// DESAFÍOS LOOPS Y TENTATIVAS

//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
/*
let contador = 1;
while (contador <= 10) {
    suma = 0 + contador;
    console.log(suma);
    alert(suma);
    contador= contador + 1;
}
*/
/*
//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador = 10;
while (contador > 0) {
    resta = contador - 1;
    console.log(resta);
    alert(resta);
    contador = contador - 1;
}*/
/*
//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let NumeroIngresado = prompt('Ingresa un número:');
console.log(NumeroIngresado);
let conteo = 0;
while (NumeroIngresado > conteo) {
    conteo = conteo +1;
    alert(conteo)
}
*/
/*
// Crea un programa de cuenta regresiva. Pide un número y cuenta desde ese número hasta 0 utilizando un bucle 'while' en la consola del navegador.
let NumeroIngresado = prompt('Ingresa el número para empezar a descontar:');
console.log(NumeroIngresado);
let conteo = NumeroIngresado;
while (conteo > 0) {
    conteo = conteo -1;
    alert(conteo)
}
*/

//BUENAS PRÁCTICAS DE PROGRAMACIÓN

/*
//Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log('Hola, bienvenidx a mi primer programa de JavaScript');
*/

/*
//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
nombre = 'Sinaí';
console.log(`¡Hola, ${nombre}!`);
*/

/*
//Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
lenguajeProgramacion = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(lenguajeProgramacion);
*/

/*
//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
valor = 5;
valor2 = 6;
resultado = valor + valor2;
console.log(`La suma de ${valor} y ${valor2} es igual a ${resultado}`); 
*/

/*
//Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
edad = prompt('Ingresa tu edad:');
    if (edad >= 18) {
        console.log('Eres mayor de edad');
    } else {
        console.log('Eres menor de edad');
    }
*/

//Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
/*
numero = parseFloat(prompt('Ingresa un número:'));
console.log(numero);
if (numero > 0) {
    alert('El número es positivo');
} else if (numero < 0) {
    alert('El número es negativo');
} else {
    alert('El número es cero');
}
*/

//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
/*
numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++};
*/

//Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
/*
nota = 8;
if (nota >= 7){
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}
*/

//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
/*
console.log(Math.random())
*/

//Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
/*
numero = parseInt(Math.random()*1000+1);
console.log(numero);
*/