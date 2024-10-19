
/*
   #22 
  CALCULADORA.TXT
  Lee el fichero "Challenge21.txt" incluido en el proyecto, calcula su
  resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un
 *   símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*"
 *   y división "/".
 * - El resultado se muestra al finalizar la lectura de la última
 *   línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han
 *   podido resolver las operaciones.
 */
 

const { consoleLog } = require('./consoleLog.js');
const fs = require('fs'); //Dependencia necesaria para la lectura del archivo
const path = require('path'); //Dependencia necesaria para la importancion del archivo

// Ruta del archivo
const filePath = path.join(__dirname, 'Challenge21.txt'); //Importamos el archivo txt y lo almacenamos en filePath

// Función para leer y procesar el archivo
function calcularResultado(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {    //Aqui con readFIle leemose el archivo, guardamos el error en err y la informacion obtenida en data
        if (err) {
            console.error('Error al leer el archivo:', err); 
            return; //En llegado caso el return detendrá la ejecucion del programa
        }

        // Dividir el contenido del archivo por líneas
        const lines = data.trim().split('\n'); //Tomamos data y le quitamos los espacios al principio y al final y volvemos el string a un array;

        // Verificar si el formato es correcto
        if (lines.length % 2 === 0) {     //El array debe ser impar, [Numero, operador, numero2]
            console.error('El formato del archivo no es correcto.');
            return;
        }

        // Inicializar el resultado con el primer número
        let resultado = parseFloat(lines[0]);      //Almacenamos el valor del primer numero en resultado
        let numero1 = parseFloat(lines[0]);
        let operador = '';
        let numero = 0;

        // Procesar las operaciones
        for (let i = 1; i < lines.length; i += 2) {
             operador = lines[i];                //Iteramos el array, en el segundo index esta el operador
             numero = parseFloat(lines[i + 1]);  //Aqui en el tercero index esta el segundo numero, parseFloat pasa el string a numero natural.

            if (isNaN(numero)) {
                console.error('El formato del archivo no es correcto.'); //Si el numero no tiene formato
                return;
            }

            switch (operador) {                   //Aqui con ayuda del switch validamos que tipo de operador es
                case '+':
                    resultado += numero;
                    break;
                case '-':
                    resultado -= numero;
                    break;
                case '*':
                    resultado *= numero;
                    break;
                case '/':
                    if (numero === 0) {                   //En llegado caso el operador sea "/" se divide pero si el segundo numero es 0 marca erro
                        console.error('División por cero no permitida.');
                        return;
                    }
                    resultado /= numero;      //Si el numero es != 0 hacemos la división
                    break;
                default:
                    console.error('Operador no reconocido:', operador);  
                    return;
            }
        }
           //Estando fuera del for que itera las lineas del array resultante del txt y el switch que valida el posible operador
        // Mostrar el resultado final
        
       consoleLog(`Operacion: \n ${numero1}  \n${operador} \n ${numero} \n Resultado: ${resultado}`, 100).then(() => {
}); 
    });
}

// Llamar a la función con la ruta del archivo
calcularResultado(filePath);

