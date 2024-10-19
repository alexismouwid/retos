/*
#32
AÑOS BISIESTOS

 * Crea una función que imprima los 30 próximos años bisiestos
 * siguientes a uno dado.
 * - Utiliza el menor número de líneas para resolver el ejercicio.
 */

function añoBiciesto(año){

    const añosBiciestos = [];
    do{
        if(año % 4 === 0){
            añosBiciestos.push(año);
        }
        año++;
    } while(añosBiciestos.length <= 30);

   return console.log(añosBiciestos);
}   


const año = 1996;

añoBiciesto(año);
