
/*33
EL SEGUNDO

 * Dado un listado de números, encuentra el SEGUNDO más grande
 */



function segundoMasGrande(lista) {
    // Ordenamos la lista en orden descendente
    lista.sort((a, b) => b - a);
    
    // El segundo elemento en la lista ordenada es el segundo más grande
    return lista[1];
}

// Ejemplo de uso:
let numeros = [10, 5, 7, 3, 9, 12];
console.log(segundoMasGrande(numeros)); // Salida esperada: 10

