/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */
class Challenge5 {
    constructor() {} // Constructor de la clase Challenge5 (no se utiliza en este caso)

    aspectRatio(url) {
        // Método aspectRatio que calcula el aspect ratio de una imagen a partir de una URL
        const rationalAspectRatio = (aspectRatio) => {
            // Función interna para calcular el aspect ratio racional
            const precision = 1.0E-6; // Precisión para la comparación
            let x = aspectRatio; // Valor inicial de x
            let a = Math.round(x); // Redondeo de x
            let q = { h1: 1, k1: 0, h: a, k: 1 }; // Inicialización de un objeto q con valores iniciales

            while (x - a > precision * q.k * q.k) {
                // Bucle mientras la diferencia entre x y a sea mayor que la precisión
                x = 1.0 / (x - a); // Actualización de x
                a = Math.round(x); // Nuevo redondeo de x
                q = {
                    h: q.h,
                    k: q.k,
                    h1: q.h1 + a * q.h,
                    k1: q.k1 + a * q.k,
                }; // Actualización de los valores de q
            }
            return [q.h, q.k]; // Devuelve el aspect ratio racional como un par de valores
        };

        const getImageSize = async (url) => {
            // Función asincrónica para obtener el tamaño de la imagen desde la URL
            const response = await fetch(url); // Realiza una solicitud HTTP a la URL
            const blob = await response.blob(); // Obtiene los datos de la imagen como un blob
            const image = new Image(); // Crea un nuevo objeto Image
            image.src = URL.createObjectURL(blob); // Asigna la URL del blob al objeto Image
            await image.decode(); // Espera a que la imagen se cargue completamente
            return { width: image.width, height: image.height }; // Devuelve el tamaño de la imagen
        };

        getImageSize(url)
            .then(({ width, height }) => {
                // Obtiene el tamaño de la imagen y maneja la promesa
                const aspectRatio = rationalAspectRatio(height / width); // Calcula el aspect ratio racional
                const aspectRatioStr = `${aspectRatio[1]}:${aspectRatio[0]}`; // Convierte el aspect ratio en una cadena
                console.log(`El aspect ratio es ${aspectRatioStr}`); // Muestra el resultado en la consola
            })
            .catch(() => {
                console.log("No se ha podido calcular el aspect ratio"); // Maneja errores si no se puede obtener el tamaño de la imagen
            });
    }
}

const challenge = new Challenge5(); // Crea una instancia de la clase Challenge5
challenge.aspectRatio(
    "https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png"
); // Calcula el aspect ratio para la imagen proporcionada por la URL

