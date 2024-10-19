/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */
function eliminador(str1, str2) {
    const cadClean = str1.toLowerCase().split(' ');
    const cadClean2 = str2.toLowerCase().split(' ');

    const out1 = [];
    const out2 = [];

    for (const palabra of cadClean) {
        if (!cadClean2.includes(palabra)) {
            out1.push(palabra);
        }
    }

    for (const palabra of cadClean2) {
        if (!cadClean.includes(palabra)) {
            out2.push(palabra);
        }
    }

    console.log(`out1: ${out1.join(' ')}\nout2: ${out2.join(' ')}`);
}

const cad1 = 'Este es la primera cadena';
const cad2 = 'Este es la segunda cadena';

eliminador(cad1, cad2);

