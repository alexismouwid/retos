function mcd(num, num2 ) {
	let divisores=[];
	let divisores2=[];
	let comunes=[];
	
	for (let i = 1; i <= num; i++) {
		if(num % i === 0){
        divisores.push(i);
		}
	  
	}
	for (let i = 1; i <= num2; i++) {
		if(num2 % i === 0){
			divisores2.push(i);
		}
	}

	for (const divisor of divisores) {
        if (divisores2.includes(divisor)) {
          comunes.push(divisor);
        }
    }
let mcds = Math.max(...comunes); //Con este metodo buscamos el valor máximo del array.

	console.log(`Divisores comunes: [${comunes.join(', ')}]`)
	console.log(`Maximo común divisor: ${mcds}`)
};

function mcm(num, num2) {
  let multiplos=[];
	let multiplos2=[];
	let comunes=[];
	
	for(let i = 1; i <= num; i++){
     multiplos.push(num*i)	};
	
	for(let i = 1; i <= num2; i++){
     multiplos2.push(num2*i)	};

	for (const multiplo of multiplos) {
        if (multiplos2.includes(multiplo)) {
          comunes.push(multiplo);
        }
    }
	let mcms = Math.min(...comunes)
	console.log(`Multiplos comunes: [${comunes.join(', ')}]`)
	console.log(`Minimo común multiplo: ${mcms}`);


	
};



const num = 20;
const num2 = 15;
mcd(num, num2);
mcm(num, num2);


