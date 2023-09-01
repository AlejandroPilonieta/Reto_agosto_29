const btnExerciseOne = document.getElementById("btnExercise1");
const btnExerciseTwo = document.getElementById("btnExercise2");
const btnExerciseThree = document.getElementById("btnExercise3");
const btnExerciseFour = document.getElementById("btnExercise4");
const btnExerciseFive = document.getElementById("btnExercise5");
const btnExerciseSix = document.getElementById("btnExercise6");
const btnExerciseSeven = document.getElementById("btnExercise7");
const btnExerciseEight = document.getElementById("btnExercise8");

/**
 * Ejercicio ciclo for nomal
 */

function ejercicioUno() {
  const frutas = [" manzana", " banana", " cereza", " datil"];
  for (let i = 0; i < frutas.length; i++) {
    return alert("Lista de frutas es: " + frutas);
  }
}

/**
 * Ejercicio 2
 */
function ejercicioDos() {
  const frutas = [" manzana", " banana", " cereza", " datil"];

  const listaFrutasDiv = document.getElementById("listaFrutas");
  let listaFrutasHtml = "";

  frutas.forEach((e) => {
    listaFrutasHtml += `<h2> ${e} </h2>`;
  });
  listaFrutasDiv.innerHTML = listaFrutasHtml;
}

/**
 * ejercicio 3
 */
function ejercicioTres() {
  const operation = parseInt(
    prompt(
      "OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."
    )
  );
  // insertamos un while a cambio de if
  while (operation < 0 || operation > 4) {
    return alert("ingresa una opcion de 1 a 4");
  }

  while (isNaN(operation) || operation > 4 || operation < 1) {
    return alert("Opcion invalida, favor ingresar entre 1 y 4");
  }

  const num1 = parseFloat(prompt("Ingrese numero 1"));
  const num2 = parseFloat(prompt("Ingrese numero 2"));
  let result = 0;

  while (isNaN(num1) || isNaN(num2)) {
    return alert("Favor ingresar solo numeros");
  }

  switch (operation) {
    case 1:
      result = num1 + num2;
      alert("El resultado de la suma es: " + result);
      break;
    case 2:
      result = num1 - num2;
      alert(result);
      break;
    case 3:
      result = num1 * num2;
      alert("El resultado de la multiplicación es: " + result);
      break;
    case 4:
      if (num2 === 0) {
        alert("No es posible dividir por cero");
      } else {
        result = num1 / num2;
        alert("El resultado de la división es: " + result);
      }
      break;
  }
}

/**
 * crear programa que encuentre el numero más grande de un array usando for y lo imprima en alert o .log matriz [45, 23, 67, 89, 12, 56]
 *
 * 
 */
function ejercicioCuatro() {
  const numeros = ["45", "23", "67", "89", "12", "56"];
  let numero = "";
  let encontro = false;
  for (let i = 0; i < numeros.length; i++) {
    numero = numeros[i];

    if (numero === "89") {
      encontro = true;
      return alert("el nuemro es " + numero);
    }
  }
  if (!encontro) {
    alert("no es el numero mas grande");
  }
}

//Ejercicio 5: Crea un programa que sume todos los elementos de un array de números usando forEach y lo simprima en un alert o log. Matriz de ejemplo: [2, 4, 6, 8, 10]

function ejercicioCinco() {
  const numeros = ["2", "4", "6", "8", "10"];
  let suma = 0;

  numeros.forEach((e) => {
    suma += parseInt(e);
  });
  return alert(`La suma de los elementos del array es: ${suma}`);
}

//: Crea un programa que multiplique cada elemento de un array por 2 y devuelva un nuevo array con los resultados usando for normal. Matriz de ejemplo: [3, 7, 2, 8]

function ejercicioSeis() {
  const numeros = ["3", "7", "2", "8"];
  const multiplicador = 2;
  let resultado = [];

  for (let i = 0; i < numeros.length; i++) {
    const numero = parseFloat(numeros[i]); // convierto en numeros el array
    const nuevoArray = numero * multiplicador;
    resultado.push(nuevoArray);
  }
  console.log(resultado); // Mostrar el nuevo array con los resultados en consola
  return resultado;
}

// Crea un programa que encuentre la suma de los elementos pares (los impares no los suma) en un array usando forEach. Array de ejemplo: [1, 4, 7, 3, 10, 12] muestre el resultado en consola

function ejercicioSiete() {
  const numeros = [1, 4, 7, 3, 10, 12];
  let resultado = 0;

  numeros.forEach((numero) => {
    if (numero % 2 === 0) {
      resultado += numero;
    }
  });
  console.log(resultado);
  return resultado;
}

// Crea un programa que encuentre el primer número mayor que 50 en un array de números usando un bucle while. Matriz de ejemplo: [30, 45, 60, 72, 48, 10]

function ejercicioOcho() {
  const numeros = [30, 45, 60, 72, 48, 10];
  let resultado = 0;

  while (resultado < numeros.length) {
    if (numeros[resultado] > 50) {
      resultado = numeros[resultado];
      break;
    }
    resultado++;
  }
  console.log(resultado);
  return resultado;
}

//onclick

btnExerciseOne.onclick = function () {
  ejercicioUno();
};
btnExerciseTwo.onclick = function () {
  ejercicioDos();
};
btnExerciseThree.onclick = function () {
  ejercicioTres();
};
btnExerciseFour.onclick = function () {
  ejercicioCuatro();
};
btnExerciseFive.onclick = function () {
  ejercicioCinco();
};
btnExerciseSix.onclick = function () {
  ejercicioSeis();
};
btnExerciseSeven.onclick = function () {
  ejercicioSiete();
};
btnExerciseEight.onclick = function () {
  ejercicioOcho();
};
