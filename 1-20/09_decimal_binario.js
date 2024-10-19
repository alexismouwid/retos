/*Crea un programa que se encargude transforma un numero decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.*/

function decimalABinario(numeroDecimal) {
    let binario = ''; // Inicializamos una cadena vacía para almacenar el número binario

    while (numeroDecimal > 0) {
        // Obtenemos el residuo de la división por 2
        const residuo = numeroDecimal % 2;
        // Agregamos el residuo al inicio de la cadena binaria
        binario = residuo + binario;
        // Actualizamos el número decimal dividiéndolo entre 2
        numeroDecimal = Math.floor(numeroDecimal / 2);
    }

    return binario;
}

// Ejemplo de uso
const numero = 1234; // Cambia este número por el que desees convertir
const binarioResultado = decimalABinario(numero);
console.log(`El número ${numero} en binario es: ${binarioResultado}`);

