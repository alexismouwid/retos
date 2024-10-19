/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function capitalizarCadaPalabra(cadena) {
    // Dividir la cadena en palabras
    const palabras = cadena.split(' ');

    // Iterar sobre cada palabra y capitalizar la primera letra
    const palabrasCapitalizadas = palabras.map(palabra => 
        palabra.charAt(0).toUpperCase() + palabra.slice(1)
    );

    // Unir las palabras capitalizadas en un solo string
    return palabrasCapitalizadas.join(' ');
}

// Ejemplo de uso
const cadena = "hola mundo esto es javascript";
const cadenaCapitalizada = capitalizarCadaPalabra(cadena);
console.log(cadenaCapitalizada);  // Salida: "Hola Mundo Esto Es Javascript"

