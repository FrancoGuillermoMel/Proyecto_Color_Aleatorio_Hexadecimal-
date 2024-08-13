//Selecciona el primer botón en el documento HTML y lo almacena en la variable boton.
const boton = document.querySelector('button');
//Selecciona el elemento con el id color y lo almacena en la variable color.
const color = document.getElementById('color');

function generarColorHexAleatorio(){
    //Define una cadena de caracteres que incluye todos los posibles dígitos hexadecimales.
    let digitos = '0123456789ABCDEF';
    // Inicializa la variable colorHex con el símbolo #, que es el prefijo de los colores hexadecimales.
    let colorHex = '#';


    //El bucle for se ejecuta 6 veces para generar los 6 dígitos hexadecimales necesarios para un color hexadecimal:
    for(let i = 0; i < 6; i++ ){
        //Math.floor(Math.random() * 16): Genera un número aleatorio entre 0 y 15.
        let indiceAleatorio = Math.floor(Math.random() * 16);
        // Añade el carácter correspondiente al número aleatorio a la cadena colorHex.
        colorHex += digitos[indiceAleatorio];
    }
    return colorHex; //Devuelve el color hexadecimal generado.
}

//Agrega un "event listener" al botón que ejecuta la función proporcionada cuando el botón es clickeado.
boton.addEventListener('click', function(){
    let colorAleatorio = generarColorHexAleatorio(); //Llama la funcion para obtener un nuevo color hexadecimal
    // Actualizar el texto
    color.textContent = colorAleatorio;//Actualiza el texto del elemento con id color para mostrar el nuevo color
    //Actualizar el colo del fondo
    document.body.style.backgroundColor = colorAleatorio; //cambia el color de fondo del cuerpo del documento 
    //al nuevo color hexadecimal generado.
});