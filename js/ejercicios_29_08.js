const btnExerciseOne = document.getElementById("btnExercise1");
const btnExerciseTwo = document.getElementById("btnExercise2");
const btnExerciseThree = document.getElementById("btnExercise3");
const btnExerciseFour = document.getElementById("btnExercise4");
const btnExerciseFive = document.getElementById("btnExercise5");
const btnExerciseSix = document.getElementById("btnExercise6");


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
 * SE DEBE CAMBIAR EL NUMERO EN EL IF
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


function ejercicioSeis() {
  alert("entro 6")


}


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