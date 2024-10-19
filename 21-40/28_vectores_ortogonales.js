/*
 * Crea un programa que determine si dos vectores son ortogonales.
 * - Los dos array deben tener la misma longitud.
 * - Cada vector se podría representar como un array. Ejemplo: [1, -2]
 */

let u = [3,6];
let v = [-6,3];
//FORMULA DEL PRODUCTO ESCALAR: u . v = (3,2) . (-2 , 3);
function checkOrtogonal(u, v){
	if(u.length !== v.length){
		return false;
	};

	 const escalarp1 = u[0] * v[0];
	const escalarp2 = u[1] * v[1];
const escalar = escalarp1 + escalarp2;

	if(escalar === 0){

	return console.log('los vectores son ortogonales');
	}else{
		return console.log('los vectores no son ortogonales')
	}
}

checkOrtogonal(u, v)
