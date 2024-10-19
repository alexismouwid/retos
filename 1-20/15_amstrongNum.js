/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

  
function esNumeroArmstrong(numero) {
    // Convertimos el número a una cadena para poder iterar sobre sus dígitos
    const digitos = numero.toString();
    // Calculamos la longitud del número (cantidad de dígitos)
    const numDigitos = digitos.length;
    // Sumamos cada dígito elevado a la potencia de la cantidad de dígitos
    const suma = digitos.split('').reduce((acumulador, digito) => {
        return acumulador + Math.pow(parseInt(digito), numDigitos);
    }, 0);
    // Comprobamos si la suma es igual al número original
    return suma === numero;
}

// Ejemplo de uso
const numero = 153;
if (esNumeroArmstrong(numero)) {
    console.log(`${numero} es un número de Armstrong`);
} else {
    console.log(`${numero} no es un número de Armstrong`);
}

