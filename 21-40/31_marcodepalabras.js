/*#31
MARCO DE PALABRAS

 * Crea una función que reciba un texto y muestre cada palabra en una línea,
 * formando un marco rectangular de asteriscos.
 * - ¿Qué te parece el reto? Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 */

function marcodePalabras(texto){ 

    const textArray = texto.split(' ');
    const n = textArray.length;

    
    console.log('**********')
    for(let i = 0; i < n; i++){
        console.log('* '+textArray[i]+'    *')
    }
    console.log('**********')
}
const texto = '¿Que te parece el reto?';
marcodePalabras(texto);
