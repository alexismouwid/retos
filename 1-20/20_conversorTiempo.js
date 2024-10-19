/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */
/*
 milisegundos por dia = 86400000;
 milisegundos por hora = 3600000;
 milisegundos por minuto = 60000;
 milisegundos por segundo = 1000;
*/

const { consoleLog } = require('./consoleLog.js');
function conversor ( dia , hora , minuto , segundo ){
	const msdia = 86400000;
	const mshora = 3600000;
	const msmin = 60000;
	const msseg = 1000;

	return (msdia * dia)+(mshora * hora)+(msmin * minuto)+(msseg * segundo);
  }


const dia = 1;
const hora = 1;
const minuto = 1;
const segundo = 1;
const resultado = conversor( dia, hora , minuto , segundo );
consoleLog(`El resultado en 3... 2... 1... \n ${resultado} milisegundos`, 100).then(() => {
});


