/*
 * Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "*".
 * - Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
 * - EXTRA: ¿Eres capaz de dibujar más figuras?
 */
function dibujarCuadrado(tamaño) {
    let cuadrado = '';
    let mitadcuadrado = tamaño/2;
    for (let i = 0; i < tamaño; i++) {
        cuadrado += '*'.repeat(mitadcuadrado) + '*'.repeat(mitadcuadrado) + '\n';
    }
    return cuadrado;
}
function dibujarRombo(tamaño) {
    let rombo = '';
    for (let i = 0; i < tamaño; i++) {
        rombo += ' '.repeat(tamaño - i - 1) + '*'.repeat(2 * i + 1) + '\n';
    }
    for (let i = tamaño - 2; i >= 0; i--) {
        rombo += ' '.repeat(tamaño - i - 1) + '*'.repeat(2 * i + 1) + '\n';
    }
    return rombo;
}

function dibujarTriangulo(tamaño) {
    let triangulo = '';
    for (let i = 0; i < tamaño; i++) {
        triangulo += ' '.repeat(tamaño - i - 1) + '*'.repeat(2 * i + 1) + '\n';
    }
    return triangulo;
}
function dibujarCirculo(tamaño){
    let circulo = '';
    let mitadtamaño = tamaño / 2;
    for (let i = 0; i < tamaño; i++) {
        circulo += ' '.repeat(tamaño - i - 1) + '*'.repeat(2 * i +  1)+ '\n';
        
    }
}
function dibujarFigura(tamaño, figura) {
    switch(figura.toLowerCase()) {
        case 'cuadrado':
            return dibujarCuadrado(tamaño);
        case 'triangulo':
            return dibujarTriangulo(tamaño);
        case 'rombo':
            return dibujarRombo(tamaño);
        default:
            return "Figura no soportada. Por favor elige 'cuadrado' o 'triangulo'.";
    }
}

// Ejemplo de uso
let tamaño = 6;
let figura = 'rombo'

console.log(dibujarFigura(tamaño, figura));
    
