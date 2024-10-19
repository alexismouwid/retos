/*
 * Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno).
 * ¿De cuántas maneras eres capaz de hacerlo?
 * Crea el código para cada una de ellas.
 */

// with for
 
for(let i = 1; i <= 100; i++){
	console.log(i);
}

	*/

// with while

let i = 1;
while(i <= 100){
	console.log(i);
	i++;
}

	

// with do while    

let i = 1;

do{
	console.log(i);
i++;
}while(i <= 100);

//with recursividad

function contar(i){
	if(i <= 100){
		console.log(i);
		contar(i + 1);
	}
	
};

contar(1);

//with forEach

Array.from({ length: 100 }, (_, i) => i + 1).forEach(i => console.log(i));


//with map


Array.from({ length: 100 }, (_, i) => i + 1).map(i => console.log(i));

//with intervalos
let i = 1;
let intervalo = setInterval(() => {
    console.log(i);
    if (i++ >= 100) clearInterval(intervalo); 
}, 100);// 100 ms de intervalo entre números, puedes ajustarlo según tus necesidades

//with settime 
function contar(i) {
    if (i > 100) return;
    console.log(i);
    setTimeout(() => contar(i + 1), 10); // 10 ms de intervalo entre números, puedes ajustarlo según tus necesidades
}

contar(1);

//with reduce

Array.from({ length: 100 }, (_, i) => i + 1).reduce((_, i) => {
    console.log(i);
    return _;
}, 0);



