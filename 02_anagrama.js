/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
function sonAnagramas(palabra1, palabra2) {
    // Elimina espacios con replace (/\s/g) y convierte a minúsculas con toLowerCase
    const palabra1Limpia = palabra1.replace(/\s/g, '').toLowerCase();
    const palabra2Limpia = palabra2.replace(/\s/g, '').toLowerCase();

    // Compara las longitudes, si son diferentes return false.
    if (palabra1Limpia.length !== palabra2Limpia.length) {
        return false;
    }

	// Ordena las letras y compara
	// Split: crea un array 	
    const sorted1 = palabra1Limpia.split('').sort().join('');
    const sorted2 = palabra2Limpia.split('').sort().join('');

    return sorted1 === sorted2;
}

// Ejemplo de uso
const palabraA = 'enrique';
const palabraB = 'quieren';
console.log(sonAnagramas(palabraA, palabraB)); // Debería mostrar true

