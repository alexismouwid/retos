/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */
function isBalanced(expression) {
    const symbols = { "{" : "}", "[" : "]", "(" : ")" };
    const stack = [];

    for (const char of expression) {
        const symbol = char;

        if (symbols.hasOwnProperty(symbol) || Object.values(symbols).includes(symbol)) {
            if (symbols.hasOwnProperty(symbol)) {
                stack.push(symbol);
            } else if (stack.length === 0 || symbol !== symbols[stack.pop()]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


console.log(isBalanced("{ [ a * ( () c + d )  ]- 5 }"));
console.log(isBalanced("{ [ a * ( c + d )  ]- 5 }"));

