/*
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

const { consoleLog } = require('./consoleLog.js');
function conjuntos(array1, array2, boolean){
   const arrayRes = [];
    if(boolean){
    		

		for (const elemento of array1) {
        if (array2.includes(elemento)) {
          arrayRes.push(elemento);
        }
    }

    // Mostramos el resultado final
        //
        consoleLog(`Array1: [${array1}] \n Array2: [${array2}] \n Elementos comunes: [${arrayRes}]`, 100).then(() => { console.log('\n Fin del programa')
});
    }
    else{

           for (const elemento of array1) {
        if (!array2.includes(elemento)) {
          arrayRes.push(elemento);
        }
    }

        for(const elemento of array2){
            if(!array1.includes(elemento)){
                arrayRes.push(elemento);
            }
        }

    // Mostramos el resultado final
           consoleLog(`Array1: [${array1}] \n Array2: [${array2}] \n Elementos no comunes: [${arrayRes}]`, 100).then(() => { console.log('\n Fin del programa')
});
    }
	

  };


const array1 = [2,4,6,8,3]; 
const array2 = [4,5,6,3,6]; 
const boolean = false;

conjuntos(array1, array2, boolean);
