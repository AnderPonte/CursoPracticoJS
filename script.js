// creamos variables que representen a los selectores de html

const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')


btn.addEventListener('click',sumaryInput);

function sumaryInput(){
    // console.log({event})
    // event.preventDefault();
    const suma = Number(input1.value) + Number(input2.value);
    pResult.innerText = "El resultado es: " + suma;
}





//Clase addEventListener
// form.addEventListener('submit',sumaryInput);

// function sumaryInput(event){
//     console.log({event})
//     event.preventDefault(); // el event.preventDefault activado evita recargar la pagina x defecto, esto pasa xq el form toma x defecto el evento de "submit"
//     const suma = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "El resultado es: " + suma;
// }




//CLASE PLATZI: Escribiendo HTML desde JavaScript
// console.log(input.value)

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// })


// h1.innerText = 'Holis <br> buen dia'; //Podemos cambiar el text de la etiqueta h1
// // console.log(h1.getAttribute('class')) //printeamos el nombre de la clase 'class'
// // h1.setAttribute('class', 'azul') //cambiamos el nombre de la clase, antes 'verde' ahora "azul"

// h1.classList.add('rojo') //propiedad para agregar nombre de la clase
// h1.classList.remove('verde') //permite remover una clase "agregada" pero no el nombre original


// input.value="4,5,6" //para cambiar valor en el input solo se necesita la propiedad value

// const img = document.createElement('img'); //crearmos una nueva etiqueta de img desde js
// img.setAttribute('src','https://www.metroworldnews.com/resizer/Q14B5tjz3Wx3bdV88Gda2ts8380=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ZL4DQPUUVNF57BLLN2K5U3GLFU.jpeg') //con setAttribute seteamos la propiedad "src" para recibir un direccion de un archivo en internet
// console.log(img); //consologeamos "img"

// pid.innerHTML = "";
// pid.append(img);


