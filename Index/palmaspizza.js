
document.querySelector("#submit").addEventListener("click", e => {e.preventDefault();


  // TOTAL

const total = document.querySelector("#total").value;


// DATOS 
const nombre = document.querySelector("#nombre").value;
const telefono = document.querySelector("#telefono").value;
const formadepago = document.querySelector("#formadepago").value;
const cancelocon = document.querySelector("#cancelocon").value;
const pagacon = document.querySelector("#pagacon").value;
const UbicacionActual = document.querySelector("#ubicacion-actual").value;


// FORMATO
const formatopizzas = document.querySelector("#formato-pizzas").value;

// ARMA TU PIZZA
const pizzauno = document.querySelector("#input-pizza-uno").value;
const armatupizzacantidad = document.querySelector("#input-arma-tu-pizza-cantidad").value;
const armatupizzapizza = document.querySelector("#input-arma-tu-pizza-pizza").value;
const armatupizzasalsa = document.querySelector("#input-arma-tu-pizza-salsa").value;
const armatupizzaingredientes = document.querySelector("#input-ingredientes").value;
const pizzados = document.querySelector("#input-pizza-dos").value;
const armatupizzasalsados = document.querySelector("#input-arma-tu-pizza-salsa-dos").value;
const armatupizzaingredientesdos = document.querySelector("#input-ingredientes-dos").value;
const tamañoitaliana = document.querySelector("#tamaño-italiana").value;
const tamañochillian = document.querySelector("#tamaño-chillian").value;
const tamañopollobbq = document.querySelector("#tamaño-pollobbq").value;
const tamañocheeseburger = document.querySelector("#tamaño-cheeseburger").value;
const tamañovegetariana = document.querySelector("#tamaño-vegetariana").value;
const tamañohawaiana = document.querySelector("#tamaño-hawaiana").value;
const tamañolucopizza = document.querySelector("#tamaño-lucopizza").value;
const tamañosuperpepperoni = document.querySelector("#tamaño-superpepperoni").value;
const tamañonapolitana = document.querySelector("#tamaño-napolitana").value;




// PIZZAS 
const pizzas = document.querySelector("#pizzas").value;
// ITALIANA 
const cantidaditaliana = document.querySelector("#cantidad-italiana-input").value;
const pizzaitaliana = document.querySelector("#pizza-italiana-input").value;

// HAWAIANA
const cantidadhawaiana = document.querySelector("#cantidad-hawaiana-input").value;
const pizzahawaiana = document.querySelector("#pizza-hawaiana-input").value;



// NAPOLITANA
const cantidadnapolitana = document.querySelector("#cantidad-napolitana-input").value;
const pizzanapolitana = document.querySelector("#pizza-napolitana-input").value;



// SUPER PEPPERONI
const cantidadsuperpepperoni = document.querySelector("#cantidad-superpepperoni-input").value;
const pizzasuperpepperoni = document.querySelector("#pizza-superpepperoni-input").value;


// LUCO PIZZA
const cantidadlucopizza = document.querySelector("#cantidad-lucopizza-input").value;
const pizzalucopizza = document.querySelector("#pizza-lucopizza-input").value;


// VEGETARIANA
const cantidadvegetariana = document.querySelector("#cantidad-vegetariana-input").value;
const pizzavegetariana = document.querySelector("#pizza-vegetariana-input").value;



// CHEESEBURGER
const cantidadcheeseburger = document.querySelector("#cantidad-cheeseburger-input").value;
const pizzacheeseburger = document.querySelector("#pizza-cheeseburger-input").value;



// POLLO BBQ
const cantidadpollobbq = document.querySelector("#cantidad-pollobbq-input").value;
const pizzapollobbq = document.querySelector("#pizza-pollobbq-input").value;



// CHILLIAN
const cantidadchillian = document.querySelector("#cantidad-chillian-input").value;
const pizzachillian = document.querySelector("#pizza-chillian-input").value;


const resp = document.querySelector("#respuesta");



resp.classList.remove("fail");
resp.classList.remove("send");





const url = `https://api.whatsapp.com/send?phone=56952323555&text=
*🍕=Palmas Pizza=🍕*%0A
👤${nombre} %0A%0A
*☎️* https://wa.me/56${telefono}%0A%0A
*Forma de Pago:*%0A
*${formadepago}*%0A%0A
Pagaré: ${cancelocon} $${pagacon}%0A
---------------------%0A
--------------------- %0A%0A
  *Dirección*:+%0A
${UbicacionActual}%0A%0A
--------------------- %0A
🛎️== *PEDIDO* == 🛎️ %0A
${formatopizzas}
${pizzas}%0A
${cantidaditaliana}+${pizzaitaliana}+${tamañoitaliana}
${cantidadhawaiana}+${pizzahawaiana}+${tamañohawaiana}
${cantidadnapolitana}+${pizzanapolitana}+${tamañonapolitana}
${cantidadsuperpepperoni}+${pizzasuperpepperoni}+${tamañosuperpepperoni}
${cantidadvegetariana}+${pizzavegetariana}+${tamañovegetariana}
${cantidadlucopizza}+${pizzalucopizza}+${tamañolucopizza}
${cantidadcheeseburger}+${pizzacheeseburger}+${tamañocheeseburger}
${cantidadpollobbq}+${pizzapollobbq}+${tamañopollobbq}
${cantidadchillian}+${pizzachillian}+${tamañochillian}
${armatupizzacantidad}+${armatupizzapizza}%0A%0A
${pizzauno}
${armatupizzasalsa}%0A
${armatupizzaingredientes}%0A%0A
${pizzados}%0A
${armatupizzasalsados}%0A
${armatupizzaingredientesdos}%0A
🛎️====FIN====🛎️%0A
💴 *SubTotal:* _$${total}_ *(Sin Delivery)*%0A%0A
*ENVÍA ESTE MENSAJE ➡️➡️*`


resp.classList.remove("fail");
resp.classList.add("send");
resp.innerHTML = ``; 

if (nombre === "" ) {
resp.classList.add("fail");
resp.innerHTML = `---Olvidaste escribir tu Nombre---`;
return false;
}

if (formadepago === "" ) {
  resp.classList.add("fail");
  resp.innerHTML = `---Olvidaste seleccionar tu Forma de Pago---`;
  return false;
  }

  if (telefono === "" ) {
    resp.classList.add("fail");
    resp.innerHTML = `---Olvidaste escribir tu Número de Teléfono---`;
    return false;
    }

    
  if (UbicacionActual === "" ) {
    resp.classList.add("fail");
    resp.innerHTML = `---Olvidaste escribir tu Dirección---`;
    return false;
    }




window.open(url);
document.getElementById("pedir-de-nuevo").hidden = false;
});

 // Función para abrir la ventana modal
 function abrirModal() {
  document.getElementById("miModal").style.display = "block";
}

// Función para cerrar la ventana modal
function cerrarModal() {
  document.getElementById("miModal").style.display = "none";
}



function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var ubicacionActual = latitude + ", " + longitude;
      document.getElementById("ubicacion-actual").value = ubicacionActual;

      // Construye la URL para la solicitud de Geocoding
      var geocodingApiUrl = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + latitude + "&lon=" + longitude;

      // Realiza la solicitud a la API de Geocoding
      fetch(geocodingApiUrl)
        .then(response => response.json())
        .then(data => {
          // Obtiene la dirección legible por humanos de la respuesta
          var direccion = data.display_name;

          // Actualiza el valor del elemento con la dirección
          document.getElementById("ubicacion-actual").value = direccion;
        })
        .catch(error => console.error(error));
    });
  } else {
    alert("Tu navegador no soporta la API de geolocalización.");
  }
}


function openChrome() {
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (isChrome) {
    alert("Ya estás en Chrome");
  } else {
    window.open("googlechrome://newtab", "_blank");
  }
}


setTimeout(() => {
  document.getElementById("seguircomprando").hidden = true;
}, "1000");

let agregar = new Audio('/Index/Sounds/agregar.mp3');
let pop = new Audio('/Index/Sounds/pop.mp3');
let tap = new Audio('/Index/Sounds/tap.mp3');
let seleccionaropcion = new Audio('/Index/Sounds/seleccionaropcion.mp3');
let ingresardatos = new Audio('/Index/Sounds/ingresatusdatos.mp3');
let seleccionarsalsauno = new Audio('/Index/Sounds/seleccionarsalsanuno.mp3');
let seleccionarsalsados = new Audio('/Index/Sounds/seleccionarsalsandos.mp3');
let seleccionaringredientesuno = new Audio('/Index/Sounds/seleccionaringredientesnuno.mp3');
let seleccionaringredientesdos = new Audio('/Index/Sounds/seleccionaringredientesndos.mp3');
let concuantopaga = new Audio('/Index/Sounds/concuantocancelas.mp3');
let agregardospizzas = new Audio('/Index/Sounds/agregardospizzas.mp3');
let agregarunapizza = new Audio('/Index/Sounds/agregaunapizza.mp3');
let finalizarpedidosuperior = new Audio('/Index/Sounds/finalizarelpedidoarrriba.mp3');
let agregarmasingredientes = new Audio('/Index/Sounds/agregarmasingredientes.mp3');
let agregartusegundapizza = new Audio('/Index/Sounds/agregarsegundapizza.mp3');
let enviatupedido = new Audio('/Index/Sounds/enviarpedidoanuestrowhatsapp.mp3');
let confirmarpedido = new Audio('/Index/Sounds/confirmatupedido.mp3');
let llevastresingx = new Audio('/Index/Sounds/llevastresings.mp3');
let llevascuatroingx = new Audio('/Index/Sounds/llevascuatroings.mp3');
let quitaring = new Audio('/Index/Sounds/quitarelingrediente.mp3');
let ninespecialidades = new Audio('/Index/Sounds/especialidades.mp3');
let nenespecialidades = new Audio('/Index/Sounds/especialidadesuno.mp3');

function zooms(){
document.getElementById("headernav").style = "height: 70px; background: #ff8900;"
document.getElementById("carrito").style = "margin-top: 0; border: 0px;"
document.getElementById("zooms").hidden = true;
document.getElementById("signopeso").hidden =  false;
  document.getElementById("signopeso").hidden = false;
  document.getElementById("palmaspizzalogofoto").hidden = false;
  document.getElementById("carrito").hidden = false;
  document.getElementById("palmaspizzalogo").hidden = false;

}

function OK(){
document.getElementById("headernav").style = "height: 70px; background: #ff8900;"
document.getElementById("carrito").style = "margin-top: 0; border: 0px;"
document.getElementById("seguircomprando").hidden = true;
document.getElementById("arrowvercarrito").hidden = true;
}

function fpedidoa(){
  document.getElementById("pedido-vacio").hidden = true;
  document.getElementById("finalizar-1").hidden = false;
  agregar.play();
}

function especialidades() {
  ninespecialidades.play();
  document.getElementById("agregar-napolitana-1").hidden = true;
  document.getElementById("agregar-italiana-1").hidden = true;
  document.getElementById("agregar-hawaiana-1").hidden = true;
  document.getElementById("agregar-lucopizza-1").hidden = true;
  document.getElementById("agregar-chillian-1").hidden = true;
  document.getElementById("agregar-cheeseburger-1").hidden = true;
  document.getElementById("agregar-pollobbq-1").hidden = true;
  document.getElementById("agregar-superpepperoni-1").hidden = true;
  document.getElementById("agregar-vegetariana-1").hidden = true;
}

function especialidades1() {
  nenespecialidades.play();
  document.getElementById("agregar-napolitana").hidden = true;
  document.getElementById("agregar-italiana").hidden = true;
  document.getElementById("agregar-hawaiana").hidden = true;
  document.getElementById("agregar-lucopizza").hidden = true;
  document.getElementById("agregar-chillian").hidden = true;
  document.getElementById("agregar-cheeseburger").hidden = true;
  document.getElementById("agregar-pollobbq").hidden = true;
  document.getElementById("agregar-superpepperoni").hidden = true;
  document.getElementById("agregar-vegetariana").hidden = true;
  
}



function ocultarflecha(){
document.getElementById("arrowvercarrito").hidden = true;
}

function sumartodo() {
  const cantidadDePizzas = document.getElementById("cantidad-de-pizzas").value;



  
}


function agregarproducto(){
document.getElementById("pedido-vacio").hidden = true;
}


function formatNumber(input) {
  input.value = input.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}








function unapizza() {
  document.getElementById("pizzas").value="%0A *🍕Pizza:*%0A"
  
}

function pizzas() {
  document.getElementById("pizzas").value="%0A *🍕Pizzas:*%0A"
  
}




  
function tapup(){
  document.getElementById("formpizzas").hidden = false;
  document.getElementById("ver-promociones").hidden = true;
  tap.play();

  sumarpizzas();

  
 
}




function popup(){
  document.getElementById("formpizzas").hidden = false;
  document.getElementById("ver-promociones").hidden = true;
  pop.play();
  setTimeout(() => {
    const total = document.getElementById("total").value;
    const cantidadDePizzas = document.getElementById("cantidad-de-pizzas").value;
    if (cantidadDePizzas === "2") {
      finalizarpedidosuperior.play();
      document.getElementById("finalizar-1").hidden = false;

      if ((total === 10990 || total === 8990) && cantidadDePizzas === "1") {
        finalizarpedidosuperior.play(); // Verifica que finalizarpedidosuperior esté cargado correctamente
    }
    

    }
  
  }, "1000");

  sumarpizzas();
  
  

}




function seleccionarunaopcion(){
  seleccionaropcion.play();
}

function agregaunapizza(){
  agregarunapizza.play();
  document.getElementById("2-siguiente-arma-tu-pizza").hidden = true;
  document.getElementById("agregar-al-pedido-arma-tu-pizza").hidden = false;
  document.getElementById("nuestras-pizzas").hidden = true;
}

function agregarIngrediente2(valor) {
  var areaDeTexto = document.getElementById("input-ingredientes-dos");
  areaDeTexto.value += valor + "\n";
}

function armatupizzatext(valor) {
  var textarmatupizza = document.getElementById("text-ingredientes");
  textarmatupizza.value += valor + "\n";
}


function armatupizzatextoff() {
document.getElementById('text-ingredientes').value = "";
}

function verpromociones(){
document.getElementById("brs").hidden = true;
document.getElementById("ver-promociones").hidden = true;
document.getElementById("ocultar-promociones").hidden = false;
}

function ocultarpromociones(){
document.getElementById("brs").hidden = false;
document.getElementById("ver-promociones").hidden = false;
document.getElementById("ocultar-promociones").hidden = true;
}


let bienvenido = new Audio('/Index/Sounds/bienvenido.mp3');  
window.onload = function() {
      bienvenido.play();
      document.getElementById('carga').style.display = 'block';
      
}


function ingresartusdatos() {
  ingresardatos.play();
  confirmarpedido.pause();

}





function agregardospizza() {
  agregarunapizza.play();
  document.getElementById("s-1").hidden = false;
  document.getElementById("s-2").hidden = false;
  document.getElementById("s-3").hidden = false;
  document.getElementById("s-4").hidden = false;
  document.getElementById("2-siguiente-arma-tu-pizza").hidden = false;
  document.getElementById("agregar-al-pedido-arma-tu-pizza").hidden = true;
}

function seleccionarsalsa1(){
  seleccionarsalsauno.play();

}

function agregarotroingrediente(){
  agregarmasingredientes.play();
}

function seleccionarsalsa2(){
  seleccionarsalsados.play();
}

function seleccionaringredientes1(){
  seleccionaringredientesuno.play();
  document.getElementById("input-pizza-uno").value = '*Pizza 1* ';
}

function seleccionaringredientes2(){
  seleccionaringredientesdos.play();
  document.getElementById("input-pizza-dos").value = '*Pizza 2:* ';
}

function concuantocancela(){
  concuantopaga.play();
}

function finalizarpedidoarriba(){
  finalizarpedidosuperior.play();


}



function enviartupedido(){
  enviatupedido.play();
}

function confirmartupedido(){
  confirmarpedido.play();
  finalizarpedidosuperior.pause();
  document.getElementById("finalizar-1").hidden = true;
}


function activarBotones() {
  var botones = document.querySelectorAll(".boton-activo");
  for (var i = 0; i < botones.length; i++) {
    botones[i].onclick = function() {
      var total = document.getElementById("total");
      total.value = parseInt(total.value) + 1000;
    }
  }
}



function sumaring() {



  document.getElementById('cantidading').value++
  var cantidad = document.getElementById("cantidading").value;

  if (cantidad == 15) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 14) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 13) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 12) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 11) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 10) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 9) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 8) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 7) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 6) {
    document.getElementById("more-ing").hidden = false;
  
    llevascuatroingx.play();
  }

  if (cantidad == 5) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }
  
  if (cantidad == 4) {
    llevascuatroingx.play();
    document.getElementById("more-ing").hidden = false;

  }

  if (cantidad == 3) {
    

    coste1000();mostraringspans();
  
  }

  if (cantidad == 2) {
   
  }
  if (cantidad == 1) {
    
  }

  }


function restaring2(){
  document.getElementById('2-cantidading').value--
}



function sumaring2() {

  onclick= window.location.href = '#seccion-pizza-dos'

  document.getElementById('2-cantidading').value++
  var cantidad = document.getElementById("2-cantidading").value;
  if (cantidad == 4) {
    llevascuatroingx.play();
    document.getElementById("2-more-ing").hidden = false;
    
  }
  
  if (cantidad == 15) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 14) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 13) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 12) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 11) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 10) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 9) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 8) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 7) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 6) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  if (cantidad == 5) {
    document.getElementById("more-ing").hidden = false;

    llevascuatroingx.play();
  }

  
  if (cantidad == 3) {
    
    coste10002();mostraringspans2();
  }
  if (cantidad == 2) {
    
  }
  if (cantidad == 1) {
  }

}

function quitarelingrediente(){
  quitaring.play();
}

function restaring(){
  document.getElementById('cantidading').value--
}





telefono.addEventListener("keyup",e=>{
  let string = e.target.value
  e.target.value = string.split("+").join("");
  e.target.value = string.split("56").join("");
  e.target.value = string.split("569").join("9");
})


direccion.addEventListener("keyup", e => {
  let string = e.target.value;
  e.target.value = string.replace(/\d/g, "");
});


inputdepartamento.addEventListener("keyup",e=>{
  let string = e.target.value
  e.target.value = string.split(" ").join("-");
})


    
function eliminarIngrediente(palabraAntigua, palabraNueva) {
var textarea = document.getElementById("input-ingredientes");
var contenido = textarea.value;
var nuevoContenido = contenido.replace(new RegExp(palabraAntigua, 'g'), palabraNueva);
textarea.value = nuevoContenido;



}


function agregarIngrediente(valor) {
var areaDeTexto = document.getElementById("input-ingredientes");
areaDeTexto.value += valor + "\n";
      
    }

    document.getElementById('2-cantidading').addEventListener('input', function() {
      if (this.value == 4) {
  
        
      }
    });
    function eliminarIngrediente2(palabraAntigua, palabraNueva) {
      var textarea = document.getElementById("input-ingredientes-dos");
      var contenido = textarea.value;
      var nuevoContenido = contenido.replace(new RegExp(palabraAntigua, 'g'), palabraNueva);
      textarea.value = nuevoContenido;
      
      
      
      }
    // Abre la ventana de carga automáticamente al cargar la página


  function comenzarpedido() {
    document.getElementById('carga').style.display = 'none';
    seleccionaropcion.play();
  }
  function okpromocioncocacola() {
  document.getElementById("promocion-coca-cola").hidden = true;
  }

  function offpromocioncocacola() {
  document.getElementById("promocion-coca-cola").hidden = true;
  }


  function showpromocioncocacola(){
    document.getElementById("promocion-coca-cola").hidden = false;

  }
  

  let slideIndex = 1;
  showSlide(slideIndex);

  function changeSlide(n) {
    showSlide(slideIndex = n);
  }

  function showSlide(n) {
    let slides = document.querySelectorAll('.slider img');
    let dots = document.querySelectorAll('.slider-controls button');

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
  }

  setInterval(() => {
    changeSlide(slideIndex += 1);
  }, 5000);




  function eliminarFuncion() {
    var botones = document.getElementsByClassName("agregar-al-pedido-pizzas");
    for (var i = 0; i < botones.length; i++) {
      botones[i].removeAttribute("sumartodo");
    }
  }


  function unafamiliar(){
   
    document.getElementById("todo").hidden = false;
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById('1-pizza-familiar').hidden= false;
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById("s-1").hidden = true;
    document.getElementById("s-2").hidden = true;
    document.getElementById("s-3").hidden = true;
    document.getElementById("s-4").hidden = true;
    document.getElementById("id-familiares-1").hidden = false;
  }

  function unamediana(){
    document.getElementById("total").value = '8990';
    document.getElementById("todo").hidden = false;
    document.getElementById('1-pizza-mediana').hidden= false;
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById("s-1").hidden = true;
    document.getElementById("s-2").hidden = true;
    document.getElementById("s-3").hidden = true;
    document.getElementById("s-4").hidden = true;
    document.getElementById("id-medianas-1").hidden = false;
  }

function medianasdos(){
  document.getElementById("id-medianas-2").hidden = false;
}


function familiaresdos(){
  document.getElementById("id-familiares-2").hidden = false;
}




  function sumarpizzas() {

  

    const italianacantidad = parseInt(document.querySelector('#cantidad-italiana-input').value) || 0;
    const hawaianacantidad = parseInt(document.querySelector('#cantidad-hawaiana-input').value) || 0;
    const napolitanacantidad = parseInt(document.querySelector('#cantidad-napolitana-input').value) || 0;
    const superpepperonicantidad = parseInt(document.querySelector('#cantidad-superpepperoni-input').value) || 0;
    const vegetarianacantidad = parseInt(document.querySelector('#cantidad-vegetariana-input').value) || 0;
    const lucopizzacantidad = parseInt(document.querySelector('#cantidad-lucopizza-input').value) || 0;
    const cheeseburgercantidad = parseInt(document.querySelector('#cantidad-cheeseburger-input').value) || 0;
    const pollobbqcantidad = parseInt(document.querySelector('#cantidad-pollobbq-input').value) || 0;
    const chilliancantidad = parseInt(document.querySelector('#cantidad-chillian-input').value) || 0;
  
    const totalcantidadpizzas = italianacantidad + hawaianacantidad + napolitanacantidad + superpepperonicantidad + vegetarianacantidad + lucopizzacantidad + cheeseburgercantidad + pollobbqcantidad + chilliancantidad;
  
    document.querySelector('#cantidad-de-pizzas').value = totalcantidadpizzas;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


  function removeSumarTodo() {
    const buttons = document.querySelectorAll('button[onclick*="sumartodo()"]');
    buttons.forEach(button => {
      const newOnClick = button.getAttribute('onclick').replace('sumartodo();', '');
      button.removeEventListener('click', sumartodo);
      button.setAttribute('onclick', newOnClick);
    });
  }





















  
  function italiana() {
    document.getElementById("pizza-italiana-input").value = 'Italiana';
    document.getElementById("ventana-pizza-italiana").hidden = false;
    document.getElementById('cantidad-italiana-input').value++;
  }
  
  function borraritaliana(){
    document.getElementById("cantidad-italiana-input").value--;
    document.getElementById("pizza-italiana-input").value = '';
    document.getElementById("ventana-pizza-italiana").hidden = true;
    document.getElementById("tamaño-italiana").value = '';
    document.getElementById("finalizar-1").hidden = true;
  }
  
  function agregaritaliana(){
    document.getElementById("ventana-pizza-italiana").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;
  
  }
  
  
  












 
  function agregarcheeseburger(){
    document.getElementById("ventana-pizza-cheeseburger").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;
  
  }
  









 











  function napolitana() {
    document.getElementById("pizza-napolitana-input").value = 'Napolitana';
    document.getElementById("ventana-pizza-napolitana").hidden = false;
    document.getElementById('cantidad-napolitana-input').value++;
  }

  function borrarnapolitana(){
    document.getElementById("cantidad-napolitana-input").value = '';
    document.getElementById("pizza-napolitana-input").value = '';
    document.getElementById("ventana-pizza-napolitana").hidden = true;
    document.getElementById("tamaño-napolitana").value = '';
    document.getElementById("finalizar-1").hidden = true;
  }

  function agregarnapolitana(){
    document.getElementById("ventana-pizza-napolitana").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;

  }








  
 
  function superpepperoni() {
    document.getElementById("pizza-superpepperoni-input").value = 'Super Pepperoni';
    document.getElementById("ventana-pizza-superpepperoni").hidden = false;
    document.getElementById('cantidad-superpepperoni-input').value++;
  }

  function borrarsuperpepperoni(){
    document.getElementById("cantidad-superpepperoni-input").value = '';
    document.getElementById("pizza-superpepperoni-input").value = '';
    document.getElementById("ventana-pizza-superpepperoni").hidden = true;
    document.getElementById("tamaño-superpepperoni").value = '';
    document.getElementById("finalizar-1").hidden = true;
  }

  
  function agregarsuperpepperoni(){
    document.getElementById("ventana-pizza-superpepperoni").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;
  
  }
  


  function agregarnapolitana1(){
    finalizarpedidosuperior.play();
    document.getElementById("ventana-pizza-napolitana").hidden = true;
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById("finalizar-1").hidden = false;
    agregar.play();


  }

  function agregarhawaiana1(){
    finalizarpedidosuperior.play();
    document.getElementById("ventana-pizza-hawaiana").hidden = true;
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById("finalizar-1").hidden = false;
    agregar.play();


  }


  function agregarsuperpepperoni1(){
    finalizarpedidosuperior.play();
    document.getElementById("ventana-pizza-superpepperoni").hidden = true;
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById("finalizar-1").hidden = false;
    agregar.play();


  }


  
  function agregarsuperpepperoni2(){
    document.getElementById("ventana-pizza-superpepperoni").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }



  function vegetariana() {
    document.getElementById("pizza-vegetariana-input").value = 'Vegetariana';
    document.getElementById("ventana-pizza-vegetariana").hidden = false;
    document.getElementById('cantidad-vegetariana-input').value++;
  }

  function borrarvegetariana(){
    document.getElementById("cantidad-vegetariana-input").value--;
    document.getElementById("pizza-vegetariana-input").value = '';
    document.getElementById("ventana-pizza-vegetariana").hidden = true;
    document.getElementById("tamaño-vegetariana").value = '';
    document.getElementById("finalizar-1").hidden = true;
  }

 
  function agregarvegetariana(){
    document.getElementById("ventana-pizza-vegetariana").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;
  
  }
  





  function agregarvegetariana1(){
    finalizarpedidosuperior.play();
    document.getElementById("ventana-pizza-vegetariana").hidden = true;
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById("finalizar-1").hidden = false;
    agregar.play();


  }

  
  function agregarvegetariana2(){
    document.getElementById("ventana-pizza-vegetariana").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }



  function lucopizza() {
    document.getElementById("pizza-lucopizza-input").value = 'Luco Pizza';
    document.getElementById("ventana-pizza-lucopizza").hidden = false;
    document.getElementById('cantidad-lucopizza-input').value++;
  }

  function borrarlucopizza(){
    document.getElementById("cantidad-lucopizza-input").value--;
    document.getElementById("pizza-lucopizza-input").value = '';
    document.getElementById("ventana-pizza-lucopizza").hidden = true;
    document.getElementById("tamaño-lucopizza").value = '';
    document.getElementById("finalizar-1").hidden = true;
  }

 
  function agregarlucopizza(){
    document.getElementById("ventana-pizza-lucopizza").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;
  
  }
  



  function agregarlucopizza1(){
    finalizarpedidosuperior.play();
    document.getElementById("ventana-pizza-lucopizza").hidden = true;
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById("finalizar-1").hidden = false;
    agregar.play();


  }






  
  function agregarlucopizza2(){
    document.getElementById("ventana-pizza-lucopizza").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }


  function cheeseburger() {
    document.getElementById("pizza-cheeseburger-input").value = 'Cheeseburger';
    document.getElementById("ventana-pizza-cheeseburger").hidden = false;
    document.getElementById('cantidad-cheeseburger-input').value++;
  }

  function borrarcheeseburger(){
    document.getElementById("cantidad-cheeseburger-input").value--;
    document.getElementById("pizza-cheeseburger-input").value = '';
    document.getElementById("ventana-pizza-cheeseburger").hidden = true;
    document.getElementById("tamaño-cheeseburger").value = '';
    document.getElementById("finalizar-1").hidden = true;
  }

  function agregarcheeseburger(){
    document.getElementById("ventana-pizza-cheeseburger").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;
  
  }
  








  function agregarcheeseburger1(){
    finalizarpedidosuperior.play();
    document.getElementById("ventana-pizza-cheeseburger").hidden = true;
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById("finalizar-1").hidden = false;
    agregar.play();


  }
  
  function agregarcheeseburger2(){
    document.getElementById("ventana-pizza-cheeseburger").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }












function agregarsuperbeef1(){
  document.getElementById("ventana-pizza-superbeef").hidden = true;
  finalizarpedidosuperior.play();
  document.getElementById("pedido-vacio").hidden = true;
  document.getElementById('cantidad-superbeef-input').value = '2:';
  document.getElementById("finalizar-1").hidden = false;
  agregar.play();

  
}



function agregarsuperbeef2(){
  document.getElementById("ventana-pizza-superbeef").hidden = true;
  finalizarpedidosuperior.play();
  document.getElementById("pedido-vacio").hidden = true;


}





  function chillian() {
    document.getElementById("pizza-chillian-input").value = 'Chillian';
    document.getElementById("ventana-pizza-chillian").hidden = false;
    document.getElementById('cantidad-chillian-input').value++;
  }

  function borrarchillian(){
    document.getElementById("cantidad-chillian-input").value--;
    document.getElementById("pizza-chillian-input").value = '';
    document.getElementById("ventana-pizza-chillian").hidden = true;
    document.getElementById("tamaño-chillian").value = '';
    document.getElementById("finalizar-1").hidden = true;
    
  }

  function agregarchillian(){
    document.getElementById("ventana-pizza-chillian").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;
  }









  function agregarchillian1(){
    finalizarpedidosuperior.play();
    document.getElementById("ventana-pizza-chillian").hidden = true;
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById("finalizar-1").hidden = false;
    agregar.play();


  }


  
  function agregarchillian2(){
    document.getElementById("ventana-pizza-chillian").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }






  function pollobbq() {
    document.getElementById("pizza-pollobbq-input").value = 'Pollo BBQ';
    document.getElementById("ventana-pizza-pollobbq").hidden = false;
    document.getElementById('cantidad-pollobbq-input').value++;
  }

  function borrarpollobbq(){
    document.getElementById("cantidad-pollobbq-input").value--;
    document.getElementById("pizza-pollobbq-input").value = '';
    document.getElementById("ventana-pizza-pollobbq").hidden = true;
    document.getElementById("tamaño-pollobbq").value = '';
    document.getElementById("finalizar-1").hidden = true;
  }

  function agregarpollobbq(){
    document.getElementById("ventana-pizza-pollobbq").hidden = true;
    agregar.play();

    document.getElementById("pedido-vacio").hidden = true;
  
  }
  








  function agregarpollobbq1(){
    finalizarpedidosuperior.play();
    document.getElementById("ventana-pizza-pollobbq").hidden = true;
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById("finalizar-1").hidden = false;
    agregar.play();


  }

  
  function agregarpollobbq2(){
    document.getElementById("ventana-pizza-pollobbq").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }





        // Función para abrir y cerrar la ventana modal
        function toggleModal(modalId) {
          const modal = document.getElementById(modalId);
          modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
      }

      // Escuchar eventos de clic en los botones
      document.querySelectorAll('[data-open]').forEach(button => {
          button.addEventListener('click', () => toggleModal(button.getAttribute('data-open')));
      });
      document.querySelectorAll('[data-close]').forEach(button => {
          button.addEventListener('click', () => toggleModal(button.getAttribute('data-close')));
      });





    

  
      function hawaiana() {
        document.getElementById("pizza-hawaiana-input").value = "Hawaiana"
        document.getElementById("ventana-pizza-hawaiana").hidden = false;
        document.getElementById('cantidad-hawaiana-input').value++;
      }
      
      function borrarhawaiana(){
        document.getElementById("cantidad-hawaiana-input").value--;
        document.getElementById("pizza-hawaiana-input").value = '';
        document.getElementById("ventana-pizza-hawaiana").hidden = true;
        document.getElementById("tamaño-hawaiana").value = '';
        document.getElementById("finalizar-1").hidden = true;
      }
      
      function agregarhawaiana(){
        document.getElementById("ventana-pizza-hawaiana").hidden = true;
        agregar.play();
        document.getElementById("pedido-vacio").hidden = true;
      
      }
      
      
      




      const btn = document.querySelector('.btnToScroll');
      const section = document.querySelector('.scrollToSection');
      btn.addEventListener('click', function() {
        section.scrollIntoView({ behavior: 'smooth' });
      });
     
































  











      