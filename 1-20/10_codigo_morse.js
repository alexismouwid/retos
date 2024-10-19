/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

// Definimos el alfabeto Morse (solo letras minúsculas)
const morseAlphabet = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.',
    'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
    'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---',
    'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
    'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--',
    'z': '--..'
};

function textoAMorse(texto) {
    const palabras = texto.toLowerCase().split(' ');
    const resultado = [];

    for (const palabra of palabras) {
        const morsePalabra = palabra.split('').map(letra => morseAlphabet[letra] || '').join(' ');
        resultado.push(morsePalabra);
    }

    return resultado.join('  '); // Dos espacios entre palabras
}

// Ejemplo de uso
const textoEjemplo = 'SOS';
const morseResultado = textoAMorse(textoEjemplo);
console.log('Conversión a código Morse:', morseResultado);

