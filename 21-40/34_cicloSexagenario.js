/*#34
CICLO SEXAGENARIO CHINO
/*
 * Crea un función, que dado un año, indique el elemento 
 * y animal correspondiente en el ciclo sexagenario del zodíaco chino.
 * - Info: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - El ciclo sexagenario se corresponde con la combinación de los elementos
 *   madera, fuego, tierra, metal, agua y los animales rata, buey, tigre,
 *   conejo, dragón, serpiente, caballo, oveja, mono, gallo, perro, cerdo
 *   (en este orden).
 * - Cada elemento se repite dos años seguidos.
 * - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
 */

function cicloSexagenario(año){

		const ciclo =  {
	1984:{ animal: 'Rata',      elemento: 'Madera'},
	1985:{ animal: 'Buey',      elemento: 'Madera'},
	1986:{	animal: 'Tigre',    elemento:'Fuego'          },
	1987:{ animal: 'Conejo',    elemento:'Fuego'},
	1988:{ animal: 'Continuar', elemento:'Tierra'},
	1989:{ animal: 'Serpiente', elemento:'Tierra'},
	1990:{ animal:'Caballo',    elemento:'Metal'},
	1991:{	animal: 'Oveja',    elemento:'Metal'},
	1992:{ animal: 'Mono',      elemento:'Agua'},
	1993:{ animal: 'Gallo',     elemento:'Agua'},
	1994:{ animal:'Perro',      elemento:'Madera'},
	1995:{	animal: 'Cerdo',    elemento:'Madera'},
	1996:{ animal: 'Rata',    elemento: 'Fuego'},
	1997:{ animal: 'Buey', elemento: 'Fuego'},
	1998:{	animal: 'Tigre',elemento: 'Tierra'},
	1999:{ animal: 'Conejo', elemento: 'Tierra'},
	2000:{ animal: 'Continuar',elemento: 'Metal'},
	2001:{ animal: 'Serpiente', elemento: 'Metal'},
	2002:{ animal:'Caballo',elemento: 'Agua'},
	2003:{	animal: 'Oveja',elemento: 'Agua'},
	2004:{ animal: 'Mono', elemento: 'Madera'},
	2005:{ animal: 'Gallo',elemento: 'Madera'},
	2006:{ animal:'Perro',elemento: 'Fuego'},
	2007:{	animal: 'Cerdo',elemento: 'Fuego'},
	2008:{ animal: 'Rata',elemento: 'Tierra'},
	2009:{ animal: 'Buey',elemento: 'Tierra'},
	2010:{	animal: 'Tigre',elemento: 'Metal'},
	2011:{ animal: 'Conejo',elemento: 'Metal'},
	2012:{ animal: 'Continuar',elemento: 'Agua'},
	2013:{ animal: 'Serpiente',elemento: 'Agua' },
	2014:{ animal:'Caballo',elemento: 'Madera'},
	2015:{	animal: 'Oveja',elemento: 'Madera'},
	2016:{ animal: 'Mono',elemento: 'Fuego'},
	2017:{ animal: 'Gallo',elemento: 'Fuego'},
	2018:{ animal:'Perro',elemento: 'Tierra'},
	2019:{	animal: 'Cerdo',elemento: 'Tierra'},
	2020:{ animal: 'Rata',elemento: 'Metal'},
	2021:{ animal: 'Buey',elemento: 'Metal'},
	2022:{	animal: 'Tigre',elemento: 'Agua'},
	2023:{ animal: 'Conejo',elemento: 'Agua'},
	2024:{ animal: 'Continuar',elemento: 'Madera'},
	2025:{ animal: 'Serpiente', elemento: 'Madera'},
	2026:{ animal:'Caballo',elemento: 'Fuego'},
	2027:{	animal: 'Oveja',elemento: 'Fuego'},
	2028:{ animal: 'Mono',elemento: 'Tierra'},
	2029:{ animal: 'Gallo',elemento: 'Tierra'},
	2030:{ animal:'Perro',elemento: 'Metal'},
	2031:{	animal: 'Cerdo',elemento: 'Metal'},
	2032:{ animal: 'Rata',elemento: 'Agua'},
	2033:{ animal: 'Buey',elemento: 'Agua'},
	2034:{	animal: 'Tigre',elemento: 'Madera'},
	2035:{ animal: 'Conejo',elemento: 'Madera'},
	2036:{ animal: 'Continuar',elemento: 'Fuego'},
	2037:{ animal: 'Serpiente', elemento: 'Fuego'},
	2038:{ animal:'Caballo',elemento: 'Tierra'},
  2039:{	animal: 'Oveja',elemento: 'Tierra'},
  2040:{ animal: 'Mono',elemento: 'Metal'},
	2041:{ animal: 'Gallo',elemento: 'Metal'},
	2042:{ animal:'Perro',elemento: 'Agua'},
	2043:{animal: 'Cerdo', elemento:'Agua'},
	2044:{ animal: 'Rata', elemento: 'Madera'},
	2045:{	animal: 'Buey', elemento: 'Madera'},
	2047:{ animal: 'Conejo', elemento: 'Fuego'},
	2048:{ animal: 'Continuar', elemento: 'Fuego'},
	2049:{	animal: 'Serpiente', elemento: 'Tierra'},
	2050:{ animal: 'Caballo', elemento: 'Tierra'},
	2051:{ animal: 'Oveja', elemento: 'Metal' },
	2052:{ animal: 'Mono', elemento: 'Metal'},
	2053:{ animal: 'Gallo', elemento: 'Metal'},
	2054:{	animal: 'Perro', elemento: 'Agua'},
	2055:{ animal: 'Cerdo', elemento: 'Agua' },

};

return  console.log(ciclo[año]);



}

const año = 2051;
console.log(año)
cicloSexagenario(año);
