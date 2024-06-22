/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */
function esPrimo(numero){
    if(numero <= 1){
        return false;  // 0 y 1 no son primos
    }
    for(let i = 2; i <= Math.sqrt(numero) ; i++){
        if(numero % i === 0){
            return false;    // si es divisible por algun numero no es primo

        }
    }
    // si logra pasar por todo esto
    return true;


}


function printPrimosList(inicio, final){

    const primos = []; //se crea un array en el que se almaceran los numeros primos

    for(let num = inicio; num <= final; num++){ //repita mientras que num igual a inicio se menor o igual a final
        if(esPrimo(num)){ //pregunte en cada iteracion si num es primo, si lo es almacene en el array con push
            primos.push(num);

        }

    }
    console.log(primos.join(', ')) //al final de la iteracion mostramos el array resultante
}

const inicio = 2;
const final = 23;

printPrimosList(2, 23);

