/*Ejercicio 1*/

let numero = prompt ("Ingrese un número");
    if (numero%2==0){
        console.log("el número "+numero+" es par");
        } else{
            console.log("el número "+numero+" es impar");
        }


/* Ejercicio 2*/

let a = prompt ("Ingrese un número");
let b = prompt ("Ingrese otro número");
    if (a>b){
    console.log(` ${a} es mayor que ${b}`);
    } else if (b>a) {
    console.log(`${b} es mayor que ${a}`);
    } else {
    console.log(` ${a} y ${b} son iguales`);}

/*Ejercicio 3*/

let numero = prompt ("Ingrese un número");
undefined
if (numero % 5 == 0){
    console.log("El número "+numero+" es múltiplo de 5");
    }else{ 
    console.log ("El número "+numero+"  NO es múltiplo de 5");}

/*Ejercicio 4*/

let numero = prompt ("Ingrese un Número"); {
    for (let i = 0; i < numero; i++) {
      console.log(i)
    }
  }

/*Ejercicio 5*/

let palabra = prompt ("Ingrese una palabra");
let numero = prompt ("Ingrese un número") {
    for (let i = 0; i < palabra; i++) {
      console.log(i)
    }
  }


/*Ejercicio 6*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i=0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

/*Ejercicio 7*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < numeros.length; index ++) {
    if (numeros[index] === 5) {
        continue;
    }
    console.log(numeros[index]);
}

/*Ejercicio 8*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < numeros.length; index++)
{
    console.log(numeros[index] * 5);
}