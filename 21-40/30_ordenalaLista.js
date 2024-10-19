/*
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */

function ordenarYConvertirAMatriz(lista, orden) {
    // Obtiene la longitud de la lista.
    const n = lista.length;

    // Calcula el tamaño de la matriz cuadrada (ceil redondea hacia arriba).
    const size = Math.ceil(Math.sqrt(n));
    
    // Inicializa una matriz vacía.
    const matriz = [];

    // Implementación del algoritmo de burbuja para ordenar la lista.
    for (let i = 0; i < n; i++) {  // Recorre la lista n veces.
        for (let j = 0; j < n - i - 1; j++) {  // Recorre la lista hasta el penúltimo elemento no ordenado.
            if (orden === "Asc") {  // Si el orden es ascendente.
                if (lista[j] > lista[j + 1]) {  // Compara elementos adyacentes.
                    // Intercambia los elementos si están en el orden incorrecto.
                    [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
                }
            } else if (orden === "Desc") {  // Si el orden es descendente.
                if (lista[j] < lista[j + 1]) {  // Compara elementos adyacentes.
                    // Intercambia los elementos si están en el orden incorrecto.
                    [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
                }
            } else {
                // Lanza un error si el parámetro 'orden' no es válido.
                throw new Error("El parámetro 'orden' debe ser 'Asc' o 'Desc'");
            }
        }
    }

    // Convierte la lista ordenada en una matriz cuadrada.
    for (let i = 0; i < size; i++) {  // Recorre cada fila de la matriz.
        const fila = [];  // Inicializa una fila vacía.
        for (let j = 0; j < size; j++) {  // Recorre cada columna de la matriz.
            if (i * size + j < n) {  // Si el índice está dentro del rango de la lista.
                // Agrega el elemento correspondiente de la lista a la fila.
                fila.push(lista[i * size + j]);
            } else {
                // Agrega null para completar los espacios vacíos.
                fila.push(null);
            }
        }
        // Agrega la fila completa a la matriz.
        matriz.push(fila);
    }

    // Retorna la matriz cuadrada ordenada.
    return matriz;
}

// Ejemplo de uso
const lista = [2, 4, 6, 8, 9];
console.log(ordenarYConvertirAMatriz(lista, "Asc"));  // Salida esperada: matriz ordenada en orden ascendente.
console.log(ordenarYConvertirAMatriz(lista, "Desc"));  // Salida esperada: matriz ordenada en orden descendente.

