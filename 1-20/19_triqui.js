/*
 * Crea una función que analice una matriz 3x3 compuesta por "X" y "O"
 * y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta.
 *   O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta.
 * Se podría representar con un vacío "", por ejemplo.
 */


function analizarMatriz(matriz) {
    // Verificamos la validez de la matriz
    let xCount = 0;
    let oCount = 0;

    // Contamos la cantidad de "X" y "O" en la matriz
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] === "X") {
                xCount++;
            } else if (matriz[i][j] === "O") {
                oCount++;
            } else if (matriz[i][j] !== "") {
                return "Nulo";
            }
        }
    }

    // La diferencia entre X y O no debe ser mayor que 1
    if (Math.abs(xCount - oCount) > 1) {
        return "Nulo";
    }

    // Función para verificar si hay un ganador
    function checkWinner(player) {
        // Verificar filas
        for (let i = 0; i < 3; i++) {
            if (matriz[i][0] === player && matriz[i][1] === player && matriz[i][2] === player) {
                return true;
            }
        }
        // Verificar columnas
        for (let i = 0; i < 3; i++) {
            if (matriz[0][i] === player && matriz[1][i] === player && matriz[2][i] === player) {
                return true;
            }
        }
        // Verificar diagonales
        if (matriz[0][0] === player && matriz[1][1] === player && matriz[2][2] === player) {
            return true;
        }
        if (matriz[0][2] === player && matriz[1][1] === player && matriz[2][0] === player) {
            return true;
        }
        return false;
    }

    // Verificar si hay ganadores
    const xGana = checkWinner("X");
    const oGana = checkWinner("O");

    // Si ambos han ganado, es nulo
    if (xGana && oGana) {
        return "Nulo";
    } else if (xGana) {
        return "X";
    } else if (oGana) {
        return "O";
    } else if (xCount + oCount === 9) {
        // Si la matriz está completamente llena y no hay ganador, es empate
        return "Empate";
    } else {
        // Si la matriz no está completamente llena, aún puede haber empate
        return "Empate";
    }
}

// Ejemplo de uso
let matriz1 = [
    ["X", "O", "X"],
    ["O", "0", "O"],
    ["X", "O", "X"]
];

let matriz2 = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "O"]
];

console.log(analizarMatriz(matriz1)); // Debería retornar "X"
console.log(analizarMatriz(matriz2)); // Debería retornar "Empate"

