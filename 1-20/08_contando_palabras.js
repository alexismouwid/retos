/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */


function contarPalabras(texto) {
    const palabras = texto.toLowerCase().replace(/[.,;:!?¿¡'"-]/g, '').split(/\s+/);

    const recuento = {};

    // Iteramos sobre las palabras y actualizamos el recuento
    for (const palabra of palabras) {
        if (palabra in recuento) {
            recuento[palabra]++;
        } else {
            recuento[palabra] = 1;
        }
    }

    // Mostramos el recuento final
    console.log('Recuento de palabras:');
    for (const palabra in recuento) {
        console.log(`${palabra}: ${recuento[palabra]}`);
    }
    // ^ Explicación:

}

// Ejemplo de uso
const textoEjemplo = "Hola, hola hola hola hola mundo. ¿Cómo estás? Estoy bien, gracias.";
contarPalabras(textoEjemplo);

