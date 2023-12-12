
document.querySelector("#submit").addEventListener("click", e => {e.preventDefault();


  // TOTAL

const total = document.querySelector("#total").value;


// DATOS 
const nombre = document.querySelector("#nombre").value;
const telefono = document.querySelector("#telefono").value;
const formadepago = document.querySelector("#formadepago").value;
const cancelocon = document.querySelector("#cancelocon").value;
const pagacon = document.querySelector("#pagacon").value;
const direccionlugar = document.querySelector("#direccion-lugar").value;
const UbicacionActual = document.querySelector("#ubicacion-actual").value;
const otro = document.querySelector("#input-otro").value;
const direccion = document.querySelector("#direccion").value;
const direccionnum = document.querySelector("#direccionnum").value;
const inputdepartamento = document.querySelector("#inputdepartamento").value;



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
*☎️* +56${telefono}%0A%0A
*Forma de Pago:*%0A
*${formadepago}*%0A%0A
${cancelocon} $${pagacon}%0A
---------------------%0A
${direccionlugar}+${direccion}+${direccionnum}%0A
${inputdepartamento}+${otro}%0A
--------------------- %0A%0A
_Ubicación Aproximada:+
${UbicacionActual}_%0A%0A
--------------------- %0A
🛎️== *PEDIDO* == 🛎️ %0A
${formatopizzas}
${pizzas}%0A
${cantidaditaliana}+${pizzaitaliana}
${cantidadhawaiana}+${pizzahawaiana}
${cantidadnapolitana}+${pizzanapolitana}
${cantidadsuperpepperoni}+${pizzasuperpepperoni}
${cantidadvegetariana}+${pizzavegetariana}
${cantidadlucopizza}+${pizzalucopizza}
${cantidadcheeseburger}+${pizzacheeseburger}
${cantidadpollobbq}+${pizzapollobbq}
${cantidadchillian}+${pizzachillian}
${armatupizzacantidad}+${armatupizzapizza}%0A%0A
${pizzauno}
${armatupizzasalsa}%0A
${armatupizzaingredientes}%0A%0A
${pizzados}%0A
${armatupizzasalsados}%0A
${armatupizzaingredientesdos}%0A
🛎️====FIN====🛎️%0A
💴 *SubTotal:* _$${total}_%0A%0A
*Envía Este Mensaje ➡️*`


if (nombre === "" || formadepago === "" || telefono === "" || direccionlugar === "" ) {
resp.classList.add("fail");
resp.innerHTML = `Parece que faltan algunos datos; `;
return false;
}
resp.classList.remove("fail");
resp.classList.add("send");
resp.innerHTML = ` Pedido de ${nombre} ENVIADO`; 

window.open(url);
});


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





setTimeout(() => {
  document.getElementById("seguircomprando").hidden = true;
}, "5");


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
let enviatupedido = new Audio('/Index/Sounds/enviarpedidoanuestrowhatsapp.mp3')
let confirmarpedido = new Audio('/Index/Sounds/confirmatupedido.mp3')

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


function ocultarflecha(){
document.getElementById("arrowvercarrito").hidden = true;
}

function sumartodo(){
  document.getElementById("pedido-vacio").hidden = true;
agregar.play();
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



function Trabajo() {
  document.getElementById("direccion-lugar").value = '*💼Trabajo:*%0A';
  document.getElementById("trabajo").hidden = false;
  document.getElementById("casa").hidden = true;
  document.getElementById("casa-trabajo").hidden = false;
  document.getElementById("departamento").hidden = true;
  document.getElementById("otro").hidden = true;
  document.getElementById("Trabajo-button").classList.add("buttons");
  document.getElementById("Trabajo-button").classList.remove("button-select");
  document.getElementById("Departamento-button").classList.add("button-select");
  document.getElementById("Departamento-button").classList.remove("buttons");
  document.getElementById("Casa-button").classList.add("button-select");
  document.getElementById("Casa-button").classList.remove("buttons");
  document.getElementById("Otro-button").classList.add("button-select");
  document.getElementById("Otro-button").classList.remove("buttons");
  }
  
  function Departamento() {
  document.getElementById("direccion-lugar").value = '*🏢Departamento:*%0A';
  document.getElementById("departamento").hidden = false;
  document.getElementById("casa-trabajo").hidden = false;
  document.getElementById("trabajo").hidden = true;
  document.getElementById("casa").hidden = true;
  document.getElementById("otro").hidden = true;
  document.getElementById("Departamento-button").classList.add("buttons");
  document.getElementById("Departamento-button").classList.remove("button-select");
  document.getElementById("Trabajo-button").classList.add("button-select");
  document.getElementById("Trabajo-button").classList.remove("buttons");
  document.getElementById("Casa-button").classList.add("button-select");
  document.getElementById("Casa-button").classList.remove("buttons");
  document.getElementById("Otro-button").classList.add("button-select");
  document.getElementById("Otro-button").classList.remove("buttons");
  }
  
  
  
  function Casa() {
  document.getElementById("direccion-lugar").value = '*🏠Casa:*%0A';
  document.getElementById("casa").hidden = false;
  document.getElementById("trabajo").hidden = true;
  document.getElementById("otro").hidden = true;
  document.getElementById("departamento").hidden = true;
  document.getElementById("casa-trabajo").hidden = false;
  document.getElementById("Casa-button").classList.add("buttons");
  document.getElementById("Casa-button").classList.remove("button-select");
  document.getElementById("Departamento-button").classList.add("button-select");
  document.getElementById("Departamento-button").classList.remove("buttons");
  document.getElementById("Trabajo-button").classList.add("button-select");
  document.getElementById("Trabajo-button").classList.remove("buttons");
  document.getElementById("Otro-button").classList.add("button-select");
  document.getElementById("Otro-button").classList.remove("buttons");
  }
  
  
  
  
  function Otro() {
  document.getElementById("direccion-lugar").value = '*🎲Otro:*%0A';
  document.getElementById("casa-trabajo").hidden = true;
  document.getElementById("otro").hidden = false;
  document.getElementById("casa").hidden = true;
  document.getElementById("trabajo").hidden = true;
  document.getElementById("departamento").hidden = true;
  document.getElementById("Otro-button").classList.add("buttons");
  document.getElementById("Otro-button").classList.remove("button-select");
  document.getElementById("Casa-button").classList.add("button-select");
  document.getElementById("Casa-button").classList.remove("buttons");
  document.getElementById("Departamento-button").classList.add("button-select");
  document.getElementById("Departamento-button").classList.remove("buttons");
  document.getElementById("Trabajo-button").classList.add("button-select");
  document.getElementById("Trabajo-button").classList.remove("buttons");
  }

  
function tapup(){
  tap.play();
}

function popup(){
  pop.play();
}

function seleccionarunaopcion(){
  seleccionaropcion.play();
}

function agregaunapizza(){
  agregarunapizza.play();
  document.getElementById("agregar-italiana-2").hidden = false;
  document.getElementById("agregar-italiana").hidden = true;

  document.getElementById("agregar-hawaiana-2").hidden = false;
  document.getElementById("agregar-hawaiana").hidden = true;

  document.getElementById("agregar-napolitana-2").hidden = false;
  document.getElementById("agregar-napolitana").hidden = true;

  document.getElementById("agregar-superpepperoni-2").hidden = false;
  document.getElementById("agregar-superpepperoni").hidden = true;

  document.getElementById("agregar-chillian-2").hidden = false;
  document.getElementById("agregar-chillian").hidden = true;

  document.getElementById("agregar-vegetariana-2").hidden = false;
  document.getElementById("agregar-vegetariana").hidden = true;

  document.getElementById("agregar-lucopizza-2").hidden = false;
  document.getElementById("agregar-lucopizza").hidden = true;

  document.getElementById("agregar-cheeseburger-2").hidden = false;
  document.getElementById("agregar-cheeseburger").hidden = true;

  document.getElementById("agregar-pollobbq-2").hidden = false;
  document.getElementById("agregar-pollobbq").hidden = true;

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
}


function agregardospizza(){
  agregardospizzas.play();
}

function agregaralpedidopizza(){
  seleccionarlacantidad.play();
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
      document.getElementById("input-pizza-uno").value = '*Pizza 1* %0A';
}

function seleccionaringredientes2(){
  seleccionaringredientesdos.play();
  document.getElementById("input-pizza-dos").value = '*Pizza 2:* %0A';
}

function concuantocancela(){
  concuantopaga.play();
}

function finalizarpedidoarriba(){
  finalizarpedidosuperior.play();
}


  function agregarsegundapizza() {
  agregartusegundapizza.play();
}

function enviartupedido(){
  enviatupedido.play();
}

function confirmartupedido(){
  confirmarpedido.play();
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

function  agregarpizza(){
  sound.play();
}


function sumaring() {
  document.getElementById('cantidading').value++
  var cantidad = document.getElementById("cantidading").value;
  if (cantidad == 4) {
    document.getElementById("more-ing").hidden = false;
    agregarmasingredientes.play();
  }
  if (cantidad == 3) {
    coste1000();mostraringspans();
  }
  if (cantidad == 2) {
    seleccionaringredientesuno.play();
  }
  if (cantidad == 1) {
    seleccionaringredientesuno.play();
  }

  }


function restaring2(){
  document.getElementById('2-cantidading').value--
}



function sumaring2() {
  document.getElementById('2-cantidading').value++
  var cantidad = document.getElementById("2-cantidading").value;
  if (cantidad == 4) {
    document.getElementById("2-more-ing").hidden = false;
    agregarmasingredientes.play();
  }
  if (cantidad == 3) {
    coste10002();mostraringspans2();
  }
  if (cantidad == 2) {
    seleccionaringredientesdos.play();
  }
  if (cantidad == 1) {
    seleccionaringredientesdos.play();
  }

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
        document.getElementById('2-more-ing').hidden = false;
        
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
    document.getElementById("total").value = '10990';
    document.getElementById("todo").hidden = false;
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById('1-pizza-familiar').hidden= false;
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById("spans-S-1").hidden = true;
    document.getElementById("spans-S-2").hidden = true;
  }

  function unamediana(){
    document.getElementById("total").value = '8990';
    document.getElementById("todo").hidden = false;
    document.getElementById('1-pizza-mediana').hidden= false;
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById("spans-S-1").hidden = true;
    document.getElementById("spans-S-2").hidden = true;
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


  function removeSumarTodo() {
    const buttons = document.querySelectorAll('button[onclick*="sumartodo()"]');
    buttons.forEach(button => {
      const newOnClick = button.getAttribute('onclick').replace('sumartodo();', '');
      button.removeEventListener('click', sumartodo);
      button.setAttribute('onclick', newOnClick);
    });
  }





















  function italiana() {
    document.getElementById("pizza-italiana-input").value = 'Italiana%0A';
    document.getElementById("ventana-pizza-italiana").hidden = false;
    document.getElementById('cantidad-italiana-input').value = '1';
  }

  function borraritaliana(){
    document.getElementById("cantidad-italiana-input").value = '';
    document.getElementById("pizza-italiana-input").value = '';
    document.getElementById("ventana-pizza-italiana").hidden = true;
  }

  function agregaritaliana(){
    document.getElementById("ventana-pizza-italiana").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;



    // ITALIANA 
    document.getElementById("agregar-italiana").hidden = true;
    document.getElementById("agregar-italiana-1").hidden = false;

    // HAWAIANA 
    document.getElementById("agregar-hawaiana").hidden = true;
    document.getElementById("agregar-hawaiana-1").hidden = false;
    
    // NAPOLITANA 
    document.getElementById("agregar-napolitana").hidden = true;
    document.getElementById("agregar-napolitana-1").hidden = false;

     // SUPER PEPPERONI
     document.getElementById("agregar-superpepperoni").hidden = true;
    document.getElementById("agregar-superpepperoni-1").hidden = false;

    
     // VEGETARIANA
     document.getElementById("agregar-vegetariana").hidden = true;
    document.getElementById("agregar-vegetariana-1").hidden = false;

    
     // LUCO PIZZA
     document.getElementById("agregar-lucopizza").hidden = true;
    document.getElementById("agregar-lucopizza-1").hidden = false;

    
     // CHEESEBURGER
     document.getElementById("agregar-cheeseburger").hidden = true;
    document.getElementById("agregar-cheeseburger-1").hidden = false;

    
     // POLLO BBQ
     document.getElementById("agregar-pollobbq").hidden = true;
    document.getElementById("agregar-pollobbq-1").hidden = false;


    
     // CHILLIAN
     document.getElementById("agregar-chillian").hidden = true;
    document.getElementById("agregar-chillian-1").hidden = false;

       // superbeef
   document.getElementById("agregar-superbeef").hidden = true;
   document.getElementById("agregar-superbeef-1").hidden = false;
  }









  function agregaritaliana1(){
    document.getElementById("ventana-pizza-italiana").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById('cantidad-italiana-input').value = '2';


    
  }


  
  function agregaritaliana2(){
    document.getElementById("ventana-pizza-italiana").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }













  function hawaiana() {
    document.getElementById("pizza-hawaiana-input").value = 'Hawaiana%0A';
    document.getElementById("ventana-pizza-hawaiana").hidden = false;
    document.getElementById('cantidad-hawaiana-input').value = '1';
  }

  function borrarhawaiana(){
    document.getElementById("cantidad-hawaiana-input").value = '';
    document.getElementById("pizza-hawaiana-input").value = '';
    document.getElementById("ventana-pizza-hawaiana").hidden = true;
  }

  function agregarhawaiana(){
    document.getElementById("ventana-pizza-hawaiana").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;



    // ITALIANA
    document.getElementById("agregar-italiana").hidden = true;
    document.getElementById("agregar-italiana-1").hidden = false;

    // HAWAIANA 
    document.getElementById("agregar-hawaiana").hidden = true;
    document.getElementById("agregar-hawaiana-1").hidden = false;
    
    // NAPOLITANA 
    document.getElementById("agregar-napolitana").hidden = true;
    document.getElementById("agregar-napolitana-1").hidden = false;

     // SUPER PEPPERONI
     document.getElementById("agregar-superpepperoni").hidden = true;
    document.getElementById("agregar-superpepperoni-1").hidden = false;

    
     // VEGETARIANA
     document.getElementById("agregar-vegetariana").hidden = true;
    document.getElementById("agregar-vegetariana-1").hidden = false;

    
     // LUCO PIZZA
     document.getElementById("agregar-lucopizza").hidden = true;
    document.getElementById("agregar-lucopizza-1").hidden = false;

    
     // CHEESEBURGER
     document.getElementById("agregar-cheeseburger").hidden = true;
    document.getElementById("agregar-cheeseburger-1").hidden = false;

    
     // POLLO BBQ
     document.getElementById("agregar-pollobbq").hidden = true;
    document.getElementById("agregar-pollobbq-1").hidden = false;


    
     // CHILLIAN
     document.getElementById("agregar-chillian").hidden = true;
    document.getElementById("agregar-chillian-1").hidden = false;

       // superbeef
   document.getElementById("agregar-superbeef").hidden = true;
   document.getElementById("agregar-superbeef-1").hidden = false;
  }









  function agregarhawaiana1(){
    document.getElementById("ventana-pizza-hawaiana").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;

    document.getElementById('cantidad-hawaiana-input').value = '2:';

    
  }


  
  function agregarhawaiana2(){
    document.getElementById("ventana-pizza-hawaiana").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }












  function napolitana() {
    document.getElementById("pizza-napolitana-input").value = 'Napolitana%0A';
    document.getElementById("ventana-pizza-napolitana").hidden = false;
    document.getElementById('cantidad-napolitana-input').value = '1';
  }

  function borrarnapolitana(){
    document.getElementById("cantidad-napolitana-input").value = '';
    document.getElementById("pizza-napolitana-input").value = '';
    document.getElementById("ventana-pizza-napolitana").hidden = true;
  }

  function agregarnapolitana(){
    document.getElementById("ventana-pizza-napolitana").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;



    // ITALIANA
    document.getElementById("agregar-italiana").hidden = true;
    document.getElementById("agregar-italiana-1").hidden = false;

    // napolitana 
    document.getElementById("agregar-napolitana").hidden = true;
    document.getElementById("agregar-napolitana-1").hidden = false;
    
    // NAPOLITANA 
    document.getElementById("agregar-napolitana").hidden = true;
    document.getElementById("agregar-napolitana-1").hidden = false;

     // SUPER PEPPERONI
     document.getElementById("agregar-superpepperoni").hidden = true;
    document.getElementById("agregar-superpepperoni-1").hidden = false;

    
     // VEGETARIANA
     document.getElementById("agregar-vegetariana").hidden = true;
    document.getElementById("agregar-vegetariana-1").hidden = false;

    
     // LUCO PIZZA
     document.getElementById("agregar-lucopizza").hidden = true;
    document.getElementById("agregar-lucopizza-1").hidden = false;

    
     // CHEESEBURGER
     document.getElementById("agregar-cheeseburger").hidden = true;
    document.getElementById("agregar-cheeseburger-1").hidden = false;

    
     // POLLO BBQ
     document.getElementById("agregar-pollobbq").hidden = true;
    document.getElementById("agregar-pollobbq-1").hidden = false;


    
     // CHILLIAN
     document.getElementById("agregar-chillian").hidden = true;
    document.getElementById("agregar-chillian-1").hidden = false;

       // superbeef
   document.getElementById("agregar-superbeef").hidden = true;
   document.getElementById("agregar-superbeef-1").hidden = false;
  }









  function agregarnapolitana1(){
    document.getElementById("ventana-pizza-napolitana").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;



    
  }


  
  function agregarnapolitana2(){
    document.getElementById("ventana-pizza-napolitana").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById('cantidad-napolitana-input').value = '2:';


  }

  function superpepperoni() {
    document.getElementById("pizza-superpepperoni-input").value = 'Super Pepperoni%0A';
    document.getElementById("ventana-pizza-superpepperoni").hidden = false;
    document.getElementById('cantidad-superpepperoni-input').value = '1';
  }

  function borrarsuperpepperoni(){
    document.getElementById("cantidad-superpepperoni-input").value = '';
    document.getElementById("pizza-superpepperoni-input").value = '';
    document.getElementById("ventana-pizza-superpepperoni").hidden = true;
  }

  function agregarsuperpepperoni(){
    document.getElementById("ventana-pizza-superpepperoni").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;



     // ITALIANA
     document.getElementById("agregar-italiana").hidden = true;
    document.getElementById("agregar-italiana-1").hidden = false;

    // napolitana 
    document.getElementById("agregar-napolitana").hidden = true;
    document.getElementById("agregar-napolitana-1").hidden = false;
    
    // NAPOLITANA 
    document.getElementById("agregar-napolitana").hidden = true;
    document.getElementById("agregar-napolitana-1").hidden = false;

     // SUPER PEPPERONI
     document.getElementById("agregar-superpepperoni").hidden = true;
    document.getElementById("agregar-superpepperoni-1").hidden = false;

    
     // VEGETARIANA
     document.getElementById("agregar-vegetariana").hidden = true;
    document.getElementById("agregar-vegetariana-1").hidden = false;

    
     // LUCO PIZZA
     document.getElementById("agregar-lucopizza").hidden = true;
    document.getElementById("agregar-lucopizza-1").hidden = false;

    
     // CHEESEBURGER
     document.getElementById("agregar-cheeseburger").hidden = true;
    document.getElementById("agregar-cheeseburger-1").hidden = false;

    
     // POLLO BBQ
     document.getElementById("agregar-pollobbq").hidden = true;
    document.getElementById("agregar-pollobbq-1").hidden = false;


    
     // CHILLIAN
     document.getElementById("agregar-chillian").hidden = true;
    document.getElementById("agregar-chillian-1").hidden = false;

       // superbeef
   document.getElementById("agregar-superbeef").hidden = true;
   document.getElementById("agregar-superbeef-1").hidden = false;
  }









  function agregarsuperpepperoni1(){
    document.getElementById("ventana-pizza-superpepperoni").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById('cantidad-superpepperoni-input').value = '2:';


    
  }


  
  function agregarsuperpepperoni2(){
    document.getElementById("ventana-pizza-superpepperoni").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }



  function vegetariana() {
    document.getElementById("pizza-vegetariana-input").value = 'Vegetariana%0A';
    document.getElementById("ventana-pizza-vegetariana").hidden = false;
    document.getElementById('cantidad-vegetariana-input').value = '1';
  }

  function borrarvegetariana(){
    document.getElementById("cantidad-vegetariana-input").value = '';
    document.getElementById("pizza-vegetariana-input").value = '';
    document.getElementById("ventana-pizza-vegetariana").hidden = true;
  }

  function agregarvegetariana(){
    document.getElementById("ventana-pizza-vegetariana").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;


   // ITALIANA
   document.getElementById("agregar-italiana").hidden = true;
    document.getElementById("agregar-italiana-1").hidden = false;

    // napolitana 
    document.getElementById("agregar-napolitana").hidden = true;
    document.getElementById("agregar-napolitana-1").hidden = false;
    
    // NAPOLITANA 
    document.getElementById("agregar-napolitana").hidden = true;
    document.getElementById("agregar-napolitana-1").hidden = false;

     // SUPER PEPPERONI
     document.getElementById("agregar-superpepperoni").hidden = true;
    document.getElementById("agregar-superpepperoni-1").hidden = false;

    
     // VEGETARIANA
     document.getElementById("agregar-vegetariana").hidden = true;
    document.getElementById("agregar-vegetariana-1").hidden = false;

    
     // LUCO PIZZA
     document.getElementById("agregar-lucopizza").hidden = true;
    document.getElementById("agregar-lucopizza-1").hidden = false;

    
     // CHEESEBURGER
     document.getElementById("agregar-cheeseburger").hidden = true;
    document.getElementById("agregar-cheeseburger-1").hidden = false;

    
     // POLLO BBQ
     document.getElementById("agregar-pollobbq").hidden = true;
    document.getElementById("agregar-pollobbq-1").hidden = false;


    
     // CHILLIAN
     document.getElementById("agregar-chillian").hidden = true;
    document.getElementById("agregar-chillian-1").hidden = false;

       // superbeef
   document.getElementById("agregar-superbeef").hidden = true;
   document.getElementById("agregar-superbeef-1").hidden = false;
  }









  function agregarvegetariana1(){
    document.getElementById("ventana-pizza-vegetariana").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;

    document.getElementById('cantidad-vegetarian-input').value = '2:';

    
  }


  
  function agregarvegetariana2(){
    document.getElementById("ventana-pizza-vegetariana").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }



  function lucopizza() {
    document.getElementById("pizza-lucopizza-input").value = 'Luco Pizza%0A';
    document.getElementById("ventana-pizza-lucopizza").hidden = false;
    document.getElementById('cantidad-lucopizza-input').value = '1';
  }

  function borrarlucopizza(){
    document.getElementById("cantidad-lucopizza-input").value = '';
    document.getElementById("pizza-lucopizza-input").value = '';
    document.getElementById("ventana-pizza-lucopizza").hidden = true;
  }

  function agregarlucopizza(){
    document.getElementById("ventana-pizza-lucopizza").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;


   // ITALIANA
   document.getElementById("agregar-italiana").hidden = true;
    document.getElementById("agregar-italiana-1").hidden = false;

    // napolitana 
    document.getElementById("agregar-napolitana").hidden = true;
    document.getElementById("agregar-napolitana-1").hidden = false;
    
    // NAPOLITANA 
    document.getElementById("agregar-napolitana").hidden = true;
    document.getElementById("agregar-napolitana-1").hidden = false;

     // SUPER PEPPERONI
     document.getElementById("agregar-superpepperoni").hidden = true;
    document.getElementById("agregar-superpepperoni-1").hidden = false;

    
     // VEGETARIANA
     document.getElementById("agregar-vegetariana").hidden = true;
    document.getElementById("agregar-vegetariana-1").hidden = false;

    
     // LUCO PIZZA
     document.getElementById("agregar-lucopizza").hidden = true;
    document.getElementById("agregar-lucopizza-1").hidden = false;

    
     // CHEESEBURGER
     document.getElementById("agregar-cheeseburger").hidden = true;
    document.getElementById("agregar-cheeseburger-1").hidden = false;

    
     // POLLO BBQ
     document.getElementById("agregar-pollobbq").hidden = true;
    document.getElementById("agregar-pollobbq-1").hidden = false;


    
     // CHILLIAN
     document.getElementById("agregar-chillian").hidden = true;
    document.getElementById("agregar-chillian-1").hidden = false;

       // superbeef
   document.getElementById("agregar-superbeef").hidden = true;
   document.getElementById("agregar-superbeef-1").hidden = false;
  }









  function agregarlucopizza1(){
    document.getElementById("ventana-pizza-lucopizza").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById('cantidad-lucopizza-input').value = '2:';


    
  }


  
  function agregarlucopizza2(){
    document.getElementById("ventana-pizza-lucopizza").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }


  function cheeseburger() {
    document.getElementById("pizza-cheeseburger-input").value = 'Cheeseburger%0A';
    document.getElementById("ventana-pizza-cheeseburger").hidden = false;
    document.getElementById('cantidad-cheeseburger-input').value = '1';
  }

  function borrarcheeseburger(){
    document.getElementById("cantidad-cheeseburger-input").value = '';
    document.getElementById("pizza-cheeseburger-input").value = '';
    document.getElementById("ventana-pizza-cheeseburger").hidden = true;
  }

  function agregarcheeseburger(){
    document.getElementById("ventana-pizza-cheeseburger").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;



      // ITALIANA
      document.getElementById("agregar-italiana").hidden = true;
    document.getElementById("agregar-italiana-1").hidden = false;

    // napolitana 
    document.getElementById("agregar-napolitana").hidden = true;
    document.getElementById("agregar-napolitana-1").hidden = false;
    
    // NAPOLITANA 
    document.getElementById("agregar-napolitana").hidden = true;
    document.getElementById("agregar-napolitana-1").hidden = false;

     // SUPER PEPPERONI
     document.getElementById("agregar-superpepperoni").hidden = true;
    document.getElementById("agregar-superpepperoni-1").hidden = false;

    
     // VEGETARIANA
     document.getElementById("agregar-vegetariana").hidden = true;
    document.getElementById("agregar-vegetariana-1").hidden = false;

    
     // LUCO PIZZA
     document.getElementById("agregar-lucopizza").hidden = true;
    document.getElementById("agregar-lucopizza-1").hidden = false;

    
     // CHEESEBURGER
     document.getElementById("agregar-cheeseburger").hidden = true;
    document.getElementById("agregar-cheeseburger-1").hidden = false;

    
     // POLLO BBQ
     document.getElementById("agregar-pollobbq").hidden = true;
    document.getElementById("agregar-pollobbq-1").hidden = false;


    
     // CHILLIAN
     document.getElementById("agregar-chillian").hidden = true;
    document.getElementById("agregar-chillian-1").hidden = false;

       // superbeef
   document.getElementById("agregar-superbeef").hidden = true;
   document.getElementById("agregar-superbeef-1").hidden = false;
  }









  function agregarcheeseburger1(){
    document.getElementById("ventana-pizza-cheeseburger").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById('cantidad-cheeseburger-input').value = '2:';


    
  }


  
  function agregarcheeseburger2(){
    document.getElementById("ventana-pizza-cheeseburger").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }




  
function superbeef() {
  document.getElementById("pizza-superbeef-input").value = 'superbeef%0A';
  document.getElementById("ventana-pizza-superbeef").hidden = false;
  document.getElementById('cantidad-superbeef-input').value = '1';
}

function borrarsuperbeef(){
  document.getElementById("cantidad-superbeef-input").value = '';
  document.getElementById("pizza-superbeef-input").value = '';
  document.getElementById("ventana-pizza-superbeef").hidden = true;
}

function agregarsuperbeef(){
  document.getElementById("ventana-pizza-superbeef").hidden = true;
  agregar.play();
  document.getElementById("pedido-vacio").hidden = true;



  // ITALIANA
  document.getElementById("agregar-italiana").hidden = true;
  document.getElementById("agregar-italiana-1").hidden = false;

  // napolitana 
  document.getElementById("agregar-napolitana").hidden = true;
  document.getElementById("agregar-napolitana-1").hidden = false;
  
  // CHILLIAN 
  document.getElementById("agregar-chillian").hidden = true;
  document.getElementById("agregar-chillian-1").hidden = false;

   // SUPER PEPPERONI
   document.getElementById("agregar-superpepperoni").hidden = true;
  document.getElementById("agregar-superpepperoni-1").hidden = false;

  
   // VEGETARIANA
   document.getElementById("agregar-vegetariana").hidden = true;
  document.getElementById("agregar-vegetariana-1").hidden = false;

  
   // LUCO PIZZA
   document.getElementById("agregar-lucopizza").hidden = true;
  document.getElementById("agregar-lucopizza-1").hidden = false;

  
   // CHEESEBURGER
   document.getElementById("agregar-cheeseburger").hidden = true;
  document.getElementById("agregar-cheeseburger-1").hidden = false;

  
   // POLLO BBQ
   document.getElementById("agregar-pollobbq").hidden = true;
  document.getElementById("agregar-pollobbq-1").hidden = false;


  
   // superbeef
   document.getElementById("agregar-superbeef").hidden = true;
  document.getElementById("agregar-superbeef-1").hidden = false;
}









function agregarsuperbeef1(){
  document.getElementById("ventana-pizza-superbeef").hidden = true;
  finalizarpedidosuperior.play();
  document.getElementById("pedido-vacio").hidden = true;
  document.getElementById('cantidad-superbeef-input').value = '2:';


  
}



function agregarsuperbeef2(){
  document.getElementById("ventana-pizza-superbeef").hidden = true;
  finalizarpedidosuperior.play();
  document.getElementById("pedido-vacio").hidden = true;


}





  function chillian() {
    document.getElementById("pizza-chillian-input").value = 'Chillian%0A';
    document.getElementById("ventana-pizza-chillian").hidden = false;
    document.getElementById('cantidad-chillian-input').value = '1';
  }

  function borrarchillian(){
    document.getElementById("cantidad-chillian-input").value = '';
    document.getElementById("pizza-chillian-input").value = '';
    document.getElementById("ventana-pizza-chillian").hidden = true;
  }

  function agregarchillian(){
    document.getElementById("ventana-pizza-chillian").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;



    // ITALIANA
    document.getElementById("agregar-italiana").hidden = true;
    document.getElementById("agregar-italiana-1").hidden = false;

    // napolitana 
    document.getElementById("agregar-napolitana").hidden = true;
    document.getElementById("agregar-napolitana-1").hidden = false;
    
    // NAPOLITANA 
    document.getElementById("agregar-napolitana").hidden = true;
    document.getElementById("agregar-napolitana-1").hidden = false;

     // SUPER PEPPERONI
     document.getElementById("agregar-superpepperoni").hidden = true;
    document.getElementById("agregar-superpepperoni-1").hidden = false;

    
     // VEGETARIANA
     document.getElementById("agregar-vegetariana").hidden = true;
    document.getElementById("agregar-vegetariana-1").hidden = false;

    
     // LUCO PIZZA
     document.getElementById("agregar-lucopizza").hidden = true;
    document.getElementById("agregar-lucopizza-1").hidden = false;

    
     // CHEESEBURGER
     document.getElementById("agregar-cheeseburger").hidden = true;
    document.getElementById("agregar-cheeseburger-1").hidden = false;

    
     // POLLO BBQ
     document.getElementById("agregar-pollobbq").hidden = true;
    document.getElementById("agregar-pollobbq-1").hidden = false;


    
     // CHILLIAN
     document.getElementById("agregar-chillian").hidden = true;
    document.getElementById("agregar-chillian-1").hidden = false;

      
   // superbeef
   document.getElementById("agregar-superbeef").hidden = true;
   document.getElementById("agregar-superbeef-1").hidden = false;
  }









  function agregarchillian1(){
    document.getElementById("ventana-pizza-chillian").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById('cantidad-chillian-input').value = '2:';


    
  }


  
  function agregarchillian2(){
    document.getElementById("ventana-pizza-chillian").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }






  function pollobbq() {
    document.getElementById("pizza-pollobbq-input").value = 'Pollo BBQ%0A';
    document.getElementById("ventana-pizza-pollobbq").hidden = false;
    document.getElementById('cantidad-pollobbq-input').value = '1';
  }

  function borrarpollobbq(){
    document.getElementById("cantidad-pollobbq-input").value = '';
    document.getElementById("pizza-pollobbq-input").value = '';
    document.getElementById("ventana-pizza-pollobbq").hidden = true;
  }

  function agregarpollobbq(){
    document.getElementById("ventana-pizza-pollobbq").hidden = true;
    agregar.play();
    document.getElementById("pedido-vacio").hidden = true;


   // ITALIANA
   document.getElementById("agregar-italiana").hidden = true;
  document.getElementById("agregar-italiana-1").hidden = false;

  // napolitana 
  document.getElementById("agregar-napolitana").hidden = true;
  document.getElementById("agregar-napolitana-1").hidden = false;
  
  // NAPOLITANA 
  document.getElementById("agregar-napolitana").hidden = true;
  document.getElementById("agregar-napolitana-1").hidden = false;

   // SUPER PEPPERONI
   document.getElementById("agregar-superpepperoni").hidden = true;
  document.getElementById("agregar-superpepperoni-1").hidden = false;

  
   // VEGETARIANA
   document.getElementById("agregar-vegetariana").hidden = true;
  document.getElementById("agregar-vegetariana-1").hidden = false;

  
   // LUCO PIZZA
   document.getElementById("agregar-lucopizza").hidden = true;
  document.getElementById("agregar-lucopizza-1").hidden = false;

  
   // CHEESEBURGER
   document.getElementById("agregar-cheeseburger").hidden = true;
  document.getElementById("agregar-cheeseburger-1").hidden = false;

  
   // POLLO BBQ
   document.getElementById("agregar-pollobbq").hidden = true;
  document.getElementById("agregar-pollobbq-1").hidden = false;


  
   // CHILLIAN
   document.getElementById("agregar-chillian").hidden = true;
  document.getElementById("agregar-chillian-1").hidden = false;

     // superbeef
     document.getElementById("agregar-superbeef").hidden = true;
     document.getElementById("agregar-superbeef-1").hidden = false;
  }









  function agregarpollobbq1(){
    document.getElementById("ventana-pizza-pollobbq").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;

    document.getElementById('cantidad-pollobbq-input').value = '2:';

    
  }


  
  function agregarpollobbq2(){
    document.getElementById("ventana-pizza-pollobbq").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }

