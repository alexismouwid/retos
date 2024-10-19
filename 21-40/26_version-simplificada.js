/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel)
 *   o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 */

const { consoleLog } = require('./consoleLog.js');
function checkWinner(jugadas) {
    let puntosJugador1 = 0;
    let puntosJugador2 = 0;

    for (const [jugador1, jugador2] of jugadas) {
        if (jugador1 === jugador2) continue; // Empate, no sumar puntos
        if (
            (jugador1 === 'R' && jugador2 === 'S') ||
            (jugador1 === 'P' && jugador2 === 'R') ||
            (jugador1 === 'S' && jugador2 === 'P')
        ) {
            puntosJugador1++;
        } else {
            puntosJugador2++;
        }
    }

    if (puntosJugador1 > puntosJugador2) {
        	return  consolelog(`el ganador es: player 1 `, 100).then(() => { console.log('\n fin del juego');
});


    } else if (puntosJugador2 > puntosJugador1) {
       return consoleLog(`El ganador es:  Player 2 `, 100).then(() => { console.log('\n Fin del juego');
});
    } else {
      	return  consoleLog(`La partida a resultado en empate`, 100).then(() => { console.log('\n Fin del juego');
});
    }
}

// Ejemplo de uso
// R: piedra S: tijera P: Papel
const jugadas = [["R", "S"], ["S", "p"], ["P", "S"]];
checkWinner(jugadas);


