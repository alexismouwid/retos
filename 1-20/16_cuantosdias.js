/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */
debugger;
function cuantosDias(fecha1, fecha2) {
    // Expresión regular para validar el formato de la fecha
    const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;

    // Validar que las fechas tengan el formato correcto
    if (!regexFecha.test(fecha1) || !regexFecha.test(fecha2)) {
        throw new Error("Formato de fecha incorrecto. Utilice 'dd/MM/yyyy'.");
    }

    // Convertir las fechas de cadena a objetos Date
    const [dia1, mes1, año1] = fecha1.split('/').map(Number);
    const [dia2, mes2, año2] = fecha2.split('/').map(Number);

    const fechaObj1 = new Date(año1, mes1 - 1, dia1);
    const fechaObj2 = new Date(año2, mes2 - 1, dia2);

    // Validar que las fechas sean correctas
    if (fechaObj1.getDate() !== dia1 || fechaObj1.getMonth() !== mes1 - 1 || fechaObj1.getFullYear() !== año1 ||
        fechaObj2.getDate() !== dia2 || fechaObj2.getMonth() !== mes2 - 1 || fechaObj2.getFullYear() !== año2) {
        throw new Error("Fecha incorrecta.");
    }

    // Calcular la diferencia absoluta en milisegundos
    const diferenciaMilisegundos = Math.abs(fechaObj2 - fechaObj1);

    // Convertir la diferencia de milisegundos a días
    const diferenciaDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    return diferenciaDias;
}

// Ejemplo de uso
const fecha1 = '24/06/2024'; 
const fecha2 = '31/07/2024';

const resultado = cuantosDias(fecha1, fecha2);

console.log(`La diferencia de días es de: ${resultado}`);
