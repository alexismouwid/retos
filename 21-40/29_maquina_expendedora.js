/*
 * Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección
 * del producto.
 * - El programa retornará el nombre del producto y un array con el dinero
 *   de vuelta (con el menor número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe,
 *   deberá indicarse con un mensaje y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas
 *   de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
	*/



function maquina(monedas, index){
	const productos =  {
	1:{ name: 'CocaCola', precio: 10},
	2:{ name: 'Sprite', precio: 10},
	3:{	name: 'Pepsi', precio: 10},
	4:{ name: 'Cola-Roman', precio: 10},
	5:{ name: 'Limonada Cerezada', precio: 25 },
	6:{ name: 'Bandeja Paisa', precio: 60},
	7:{ name: 'Mojarra con Arroz de coco', precio: 80},
	8:{	name: 'Sopa de mondogo', precio: 30},
	9:{ name: 'Churrasco', precio: 50},
};
	const monedasAdmitidas = [5,10,50,100,200];

//Verificacion de monedas soportadas
for(let moneda of monedas){
	if(!monedasAdmitidas.includes(moneda)){
		return console.log(`Monedas no soportadas. \n Devolucion ${monedas}`);
	}
};

//Verificacion de numero de productos
if(!productos[index]){
	return console.log(`El producto no existe. \n Devolucion: ${monedas}`);
}
const producto = productos[index];
const dinero = monedas.reduce((acc, moneda) => acc + moneda, 0);
			
//Verificacion del valor del dinero mayor al producto pedido
if(dinero < productos[index].precio){
return console.log(`Dinero insuficiente \n Devolucion ${monedas}`);
}

const cambioTotal = dinero - producto.precio;
 const cambio = [];

	//Verificacion si hay  que devolver dinero 
let resto = cambioTotal;
for(let moneda of monedasAdmitidas.sort((a, b) => b -a)){
	while(resto >= moneda){
		cambio.push(moneda);
		resto -= moneda;
	}
}

return console.log(`Haz comprado una ${productos[index].name}\n Precio: [${productos[index].precio}] \n Cambio: [${cambio}].\n Gracias por su compra!`)

	
}; //Fin de funcion maquina

let monedas = [200];
let index = 9;

maquina(monedas, index);

