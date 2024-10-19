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
function checkWinner(player1,player2,Tie){
let ganador = '';
	let p1 = 0;
	let p2 = 0;
for (let i = 0; i <= player1.length; i++) {
		
	if(player1[i] === 'R' && player2[i] === 'S'){
		         p1++;
	}else
		if(player1[i] === 'R' && player2[i] === 'P'){
						p2++;
		}else 
		if(player1[i] === 'R' && player2[i] === 'R'){
	
		}else 
		if(player1[i] === 'P' && player2[i] === 'R'){
			p1++;
		}else
		if(player1[i]=== 'P' && player2[i] === 'S' ){
      p2++;
		}else 
		if(player1[i] === 'P' && player2[i] === 'P'){
	
		}else
		if(player1[i] === 'S' && player2[i] === 'P'){
			p1++;
		}else
		if(player1[i] === 'S' && player2[i] === 'R'){
      p2++;
		}else 
		if(player1[i] === 'S' && player2[i] === 'S'){
	
		}
};

if(p1 > p2){     //Si player1 tiene mas puntos que player2
	return  consolelog(`el ganador es: player 1 `, 100).then(() => { console.log('\n fin del juego');
});

}else if(p1 < p2){ //Si player1 tiene menos puntos que player2 
 return consoleLog(`El ganador es:  Player 2 `, 100).then(() => { console.log('\n Fin del juego');
});

}else 
if(p1 && p2 === 1 ){ //Inicia el desempate...

	if(Tie[0] === 'R' && Tie[1] === 'S'){
		ganador = 'Player 1';
	}else
		if(Tie[0] === 'R' && Tie[1] === 'P'){
			ganador = 'Player 2';

		}else 
		if(Tie[0] === 'R' && Tie[1] === 'R'){
			
			return  consoleLog(`La partida a resultado en empate`, 100).then(() => { console.log('\n Fin del juego');
});

		}else 
		if(Tie[0] === 'P' && Tie[1] === 'R'){
	ganador = 'Player 1';
		}else
		if(Tie[0]=== 'P' && Tie[1] === 'S' ){
			ganador = 'Player 2';

		}else 
		if(Tie[0] === 'P' && Tie[1] === 'P'){
	
	return  consoleLog(`La partida a resultado en empate`, 100).then(() => { console.log('\n Fin del juego');
});
		}else
		if(Tie[0] === 'S' && Tie[1] === 'P'){
			ganador = 'Player 1';
		}else
		if(Tie[0] === 'S' && Tie[1] === 'R'){
			ganador = 'Player 2';
		}else 
		if(Tie[0] === 'S' && Tie[1] === 'S'){
	
	return  consoleLog(`La partida a resultado en empate`, 100).then(() => { console.log('\n Fin del juego');
});
		}

}
if(ganador){
	return  consoleLog(`El desempate finalizó. El ganador es: ${ganador}`, 100).then(() => { console.log('\n Fin del juego');
});
}
		
  
};
const player1= ['R', 'P'];
const player2= ['S', 'S'];
const Tie = ['S','P'];
// R: piedra S: tijera P: Papel
checkWinner(player1, player2, Tie);






