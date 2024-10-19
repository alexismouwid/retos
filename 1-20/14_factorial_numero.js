/*
 * Escribe una función que calcule y retorne el 
 * factorial de un número dado
	* de forma recursiva
 */

function factorialRecursivo(numero) {
    if (numero <= 1) {
        return 1;
    }
    return numero * factorialRecursivo(numero - 1);
}

const otroNumero = 6;
console.log(`El factorial de ${otroNumero} es ${factorialRecursivo(otroNumero)}`);

