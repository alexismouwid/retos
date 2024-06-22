/* Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
	* - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"*/


const cadena = 'Hola Mundo';

function inverter(cadena){

	return console.log('Cadena invertida: ', cadena.split('').reverse().join(''));
}
inverter(cadena);
