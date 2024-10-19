/*
  #21
PARANDO EL TIEMPO
 * Crea una función que sume 2 números y retorne su resultado pasados
 * unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que
 *   debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma
 *   asíncrona, es decir, sin detener la ejecución del programa principal.
 *   Se podría ejecutar varias veces al mismo tiempo.
 */

const { consoleLog } = require('./consoleLog.js');
function sumaAsync(num1, num2, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num1 + num2);
        }, delay * 1000);
    });
}


/*	consoleLog('La suma de 5 + 3 es: ', 44).then(() => {
});
 Ejemplo de uso
sumaAsync(5, 3, 2).then((resultado) => {

    console.log(resultado);
consoleLog('Operacion completada con exito!\n', 80).then(() => {
});
});
*/
consoleLog('Se creará un arreglo en 3... 2... 1 \n ', 100).then(() => {
});


Promise.all([
    sumaAsync(2, 2,  4),
    sumaAsync(4, 5,  3),
    sumaAsync(1, 1,  2),
	  sumaAsync(2, 18, 1)
]).then((resultados) => {
    console.log(resultados);
	consoleLog('Gracias por visitarnos, vuelva pronto!', 30).then(() => {
});
});

