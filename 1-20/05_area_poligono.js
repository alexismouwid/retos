/*Fórmula estándar: Área = (Base x Altura) / 2. Se usa cuando se conoce la base y la altura del triángulo*/

/*Fórmula estándar: Área = a^2 donde a es el valor de uno de sus lados*/

/*Fórmula estandar: A = b x h ]

Donde:

(A) representa el área del rectángulo.
(b) es la longitud de la base del rectángulo.
(h) es la altura del rectángulo.*/

function areaPoligonos(poligono, base, altura){
	function calcularArea(base, altura){
		return base * altura;
	}

	if( poligono === 'triangulo' ){
  const area  = calcularArea(base, altura) / 2;
		return console.log('Area del triángulo: ', area);
	}
	else if ( poligono === 'rectangulo' ){

	
		return console.log('Area del rectángulo: ', calcularArea(base, altura));

	}
	else if ( poligono === 'cuadrado' ){

		return console.log('Area del cuadrado: ', Math.pow(base,2));
		
	}else {
		console.log('Nombre de poligono no valido');
	}
};

const resultado = areaPoligonos('triangulo', 4, 20);


