  function consoleLog(mensaje, delay) {
    return new Promise((resolve) => {
        let index = 0;
        function mostrarLetra() {
            if (index < mensaje.length) {
                process.stdout.write(mensaje[index]);
                index++;
                setTimeout(mostrarLetra, delay);
            } else {
                resolve();
            }
        }
        mostrarLetra();
    });
}

module.exports = { consoleLog };
 /*
  
  
   consoleLog(`El resultado de la carrera fue:  ${resultado} `, 100).then(() => { console.log('\n Fin del programa');
});


*/
