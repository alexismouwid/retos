/*
 * Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras
 *        "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo)
 *        o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)
 *        será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */


const { consoleLog } = require('./consoleLog');
function carrera(acciones, pista){
if(acciones.length !== pista.length){

		return console.log('La pista con las acciones no coninciden');

	}
	let carreraSuperada = true;
	let pistaArray = pista.split(''); //Convertimos el string de la pista en un array.

	

	for(let i = 0; i < acciones.length; i++){

		if(acciones[i] === 'run' && pistaArray[i] === '_'){
      //Vas bien, sigue corriendo!
		}
			else
				if(acciones[i] === 'jump' && pistaArray[i] === '|'){ 
					//Gran salto, sigue asi!
			}
		else
			if(acciones[i] === 'jump' && pistaArray[i] === '_'){
				pistaArray[i] = 'x';
				carreraSuperada = false;
				//Accion incorrecta, no debiste saltar ahi... sigue corriendo!
			}
		else
		if(acciones[i] === 'run' && pistaArray[i] === '|'){
     pistaArray[i] = '/';
			 carreraSuperada = false;
			//No saltaste la valla! has perdido la carrera...
		}
	}

console.log(pistaArray.join(''));
	//Imprimimos la pista resultante:
	
	return carreraSuperada;
	//Retomamos si la carrera fue superada o no.
};
let acciones = ['run', 'jump', 'run', 'run', 'jump'];
let pista = "_|__|";
const resultado = carrera(acciones, pista);
consoleLog(`El resultado de la carrera fue:  ${resultado} `, 100).then(() => { console.log('\n Fin del programa');
});



