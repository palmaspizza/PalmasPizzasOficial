<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palmas Pizza</title>
    <meta name="viewport" content="width=device-width, initial-scale=.0">
    <link rel="icon" type="image/x-icon" href="https://scontent.fscl35-1.fna.fbcdn.net/v/t1.15752-9/397959438_700337758714823_4138704959227799791_n.png?stp=dst-png_p280x280&amp;_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8cd0a2&amp;_nc_eui2=AeFd2lYh71UJJxIqTGtQqYlelfmREYMZEWSV-ZERgxkRZPL4E_VYDYrnee_zWaVC9D6Ezy9wUPMddyTg8lw2srf-&amp;_nc_ohc=CI4L46x-KzkAX9gy94T&amp;_nc_ht=scontent.fscl35-1.fna&amp;oh=03_AdSfbP6A15Hq2xqBIG_eul7kF5WDRPwMd6jnESKT4qo9uw&amp;oe=6574ADC8">
    <link rel="stylesheet" href="/Index/palmaspizza.css">
    <link rel="stylesheet" href="/Index/ventanas.css">
     <link rel="stylesheet" href="/Index/pizzas.css">



</head>


<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<div id="promocion-coca-cola-div" hidden>
  <label for="promcioncocacola"></label>
<input type="text" id="ianput-promocion-coca-cola">

</div>
<div id="promocion-coca-cola" style="position: absolute;" hidden>
  <center>
    <div style="height: 100%; display: grid; text-align: center; z-index: 523; background: rgba(0, 0, 0, 0.796); width: 100%; position: fixed; color: #000000c0; box-shadow: 150px 0px 250px 450px; border: 2px solid black;">
      <div style="background-color: #00000094; border-radius: 8px;width: 100%; height: 100%;">
        <h1 style="margin-bottom: 25%; background-color: #fff; border-radius: 15px; padding: 5px; padding-top: 30px; padding-bottom: 20px; color: #ff5500; width: auto; text-align: center; margin: auto; margin-top: 30%; font-size: 251%;">¿Desea agregar una <span style="text-decoration: underline #ff5500; color: #000">Coca-Cola de 1.25Lts</span> Gratis?<br><br>
        <img src="/PalmasPizzaIMG/promocion1.jfif" alt=""></h1>
        <br><br>
        <button type="button" class="button-select" style="text-align: center; width: 40%;font-size: 200%;" onclick="popup();okpromocioncocacola();">Ok</button>

      <button type="button" class="button-select" style="text-align: center; width: 40%; font-size: 200%;" onclick="popup();offpromocioncocacola();document.getElementById('formato-pizzas').value = '*2 Pizzas Familiares* %0A';">No, Gracias</button>
      </div>

      </div>
  </center>
</div>


<script>
  function removeSumarTodo() {
  const buttons = document.querySelectorAll('button[onclick*="sumartodo()"]');
  buttons.forEach(button => {
    const newOnClick = button.getAttribute('onclick').replace('sumartodo();', '');
    button.removeEventListener('click', sumartodo);
    button.setAttribute('onclick', newOnClick);
  });
}
</script>


<div id="ventana-pizza-italiana" style="position: absolute;" hidden>
  <center>
    <div style="height: 100%; display: grid; text-align: center; z-index: 523; background: rgba(0, 0, 0, 0.796); width: 100%; position: fixed; color: #000000c0; box-shadow: 150px 0px 250px 450px; border: 2px solid black;">
      <div style="background-color: #00000094;border-radius: 8px;width: 100%;height: 100%;">
        <h1 style="background-color: #fff; border-radius: 15px; padding: 5px; padding-top: 30px; padding-bottom: 20px; color: #ff5500; width: auto; text-align: center; margin: auto; margin-top: 20%; font-size: 200%; text-align: center;">1 Italiana
       <br><br>
          <img style="width: 70%;" src="/Pizzas/italiana.png" alt="">
          <br>
          <input id="cantidad-italiana-input" type="number" disabled style="width: 25%; font-size: 160%; text-align: center; background-color: transparent; border: 0px;"></input>
          <br><br>
        <button type="button" id="agregar-italiana" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="agregarsegundapizza();popup();agregaritaliana();sumartodo();">+ Agregar</button>
        <button type="button" id="agregar-italiana-1" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregaritaliana1();sumartodo();" hidden>+ Agregar Pizza 2</button>
        <button type="button" id="agregar-italiana-2" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregaritaliana2();sumartodo();" hidden>+ Agregar Pizza</button>
        <br>

        <button type="button" class="button-select" style="margin-top: 10px; text-align: center; width: 65%; font-size: 60%;" onclick="tapup();borraritaliana();">Borrar</button>
        <input type="text" id="pizza-italiana-input" hidden>
      </div>
  <script>
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
    document.getElementById("agregar--1").hidden = false;
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


  </script>
      </div>
  </center>
</div>













<div id="ventana-pizza-hawaiana" style="position: absolute;" hidden>
  <center>
    <div style="height: 100%; display: grid; text-align: center; z-index: 523; background: rgba(0, 0, 0, 0.796); width: 100%; position: fixed; color: #000000c0; box-shadow: 150px 0px 250px 450px; border: 2px solid black;">
      <div style="background-color: #00000094;border-radius: 8px;width: 100%;height: 100%;">
        <h1 style="background-color: #fff; border-radius: 15px; padding: 5px; padding-top: 30px; padding-bottom: 20px; color: #ff5500; width: auto; text-align: center; margin: auto; margin-top: 20%; font-size: 200%; text-align: center;">1 Hawaiana
       <br><br>
          <img style="width: 70%;" src="/Pizzas/hawaiana.png" alt="">
          <br>
          <input id="cantidad-hawaiana-input" type="number" disabled style="width: 25%; font-size: 160%; text-align: center; background-color: transparent; border: 0px;"></input>
          <br><br>
        <button type="button" id="agregar-hawaiana" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="agregarsegundapizza();popup();agregarhawaiana();sumartodo();">+ Agregar</button>
        <button type="button" id="agregar-hawaiana-1" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarhawaiana1();sumartodo();" hidden>+ Agregar Pizza 2</button>
        <button type="button" id="agregar-hawaiana-2" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarhawaiana2();sumartodo();" hidden>+ Agregar Pizza</button>
        <br>

        <button type="button" class="button-select" style="margin-top: 10px; text-align: center; width: 65%; font-size: 60%;" onclick="tapup();borrarhawaiana();">Borrar</button>
        <input type="text" id="pizza-hawaiana-input" hidden>
      </div>
  <script>
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
    document.getElementById("agregar--1").hidden = false;
  }









  function agregarhawaiana1(){
    document.getElementById("ventana-pizza-hawaiana").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;

    document.getElementById('cantidad-hawaiana-input').value = '2';

    
  }


  
  function agregarhawaiana2(){
    document.getElementById("ventana-pizza-hawaiana").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }


  </script>
      </div>
  </center>
</div>













<div id="ventana-pizza-napolitana" style="position: absolute;" hidden>
  <center>
    <div style="height: 100%; display: grid; text-align: center; z-index: 523; background: rgba(0, 0, 0, 0.796); width: 100%; position: fixed; color: #000000c0; box-shadow: 150px 0px 250px 450px; border: 2px solid black;">
      <div style="background-color: #00000094;border-radius: 8px;width: 100%;height: 100%;">
        <h1 style="background-color: #fff; border-radius: 15px; padding: 5px; padding-top: 30px; padding-bottom: 20px; color: #ff5500; width: auto; text-align: center; margin: auto; margin-top: 20%; font-size: 200%; text-align: center;">1 Napolitana
       <br><br>
          <img style="width: 70%;" src="/Pizzas/napolitana.png" alt="">
          <br>
          <input id="cantidad-napolitana-input" type="number" disabled style="width: 25%; font-size: 160%; text-align: center; background-color: transparent; border: 0px;"></input>
          <br><br>
        <button type="button" id="agregar-napolitana" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="agregarsegundapizza();popup();agregarnapolitana();sumartodo();">+ Agregar</button>
        <button type="button" id="agregar-napolitana-1" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarnapolitana1();sumartodo();" hidden>+ Agregar Pizza 2</button>
        <button type="button" id="agregar-napolitana-2" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarnapolitana2();sumartodo();" hidden>+ Agregar Pizza</button>
        <br>

        <button type="button" class="button-select" style="margin-top: 10px; text-align: center; width: 65%; font-size: 60%;" onclick="tapup();borrarnapolitana();">Borrar</button>
        <input type="text" id="pizza-napolitana-input" hidden>
      </div>
  <script>
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
    document.getElementById('cantidad-napolitana-input').value = '2';


  }


  </script>
      </div>
  </center>
</div>





<div id="ventana-pizza-superpepperoni" style="position: absolute;" hidden>
  <center>
    <div style="height: 100%; display: grid; text-align: center; z-index: 523; background: rgba(0, 0, 0, 0.796); width: 100%; position: fixed; color: #000000c0; box-shadow: 150px 0px 250px 450px; border: 2px solid black;">
      <div style="background-color: #00000094;border-radius: 8px;width: 100%;height: 100%;">
        <h1 style="background-color: #fff; border-radius: 15px; padding: 5px; padding-top: 30px; padding-bottom: 20px; color: #ff5500; width: auto; text-align: center; margin: auto; margin-top: 20%; font-size: 200%; text-align: center;">1 Super Pepperoni
       <br><br>
          <img style="width: 70%;" src="/Pizzas/superpepperoni.png" alt="">
          <br>
          <input id="cantidad-superpepperoni-input" type="number" disabled style="width: 25%; font-size: 160%; text-align: center; background-color: transparent; border: 0px;"></input>
          <br><br>
        <button type="button" id="agregar-superpepperoni" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="agregarsegundapizza();popup();agregarsuperpepperoni();sumartodo();">+ Agregar</button>
        <button type="button" id="agregar-superpepperoni-1" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarsuperpepperoni1();sumartodo();" hidden>+ Agregar Pizza 2</button>
        <button type="button" id="agregar-superpepperoni-2" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarsuperpepperoni2();sumartodo();" hidden>+ Agregar Pizza</button>
        <br>

        <button type="button" class="button-select" style="margin-top: 10px; text-align: center; width: 65%; font-size: 60%;" onclick="tapup();borrarsuperpepperoni();">Borrar</button>
        <input type="text" id="pizza-superpepperoni-input" hidden>
      </div>
  <script>
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
  }









  function agregarsuperpepperoni1(){
    document.getElementById("ventana-pizza-superpepperoni").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById('cantidad-superpepperoni-input').value = '2';


    
  }


  
  function agregarsuperpepperoni2(){
    document.getElementById("ventana-pizza-superpepperoni").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }


  </script>
      </div>
  </center>
</div>








<div id="ventana-pizza-vegetariana" style="position: absolute;" hidden>
  <center>
    <div style="height: 100%; display: grid; text-align: center; z-index: 523; background: rgba(0, 0, 0, 0.796); width: 100%; position: fixed; color: #000000c0; box-shadow: 150px 0px 250px 450px; border: 2px solid black;">
      <div style="background-color: #00000094;border-radius: 8px;width: 100%;height: 100%;">
        <h1 style="background-color: #fff; border-radius: 15px; padding: 5px; padding-top: 30px; padding-bottom: 20px; color: #ff5500; width: auto; text-align: center; margin: auto; margin-top: 20%; font-size: 200%; text-align: center;">1 Vegetariana
       <br><br>
          <img style="width: 70%;" src="/Pizzas/vegetariana.png" alt="">
          <br>
          <input id="cantidad-vegetariana-input" type="number" disabled style="width: 25%; font-size: 160%; text-align: center; background-color: transparent; border: 0px;"></input>
          <br><br>
        <button type="button" id="agregar-vegetariana" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="agregarsegundapizza();popup();agregarvegetariana();sumartodo();">+ Agregar</button>
        <button type="button" id="agregar-vegetariana-1" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarvegetariana1();sumartodo();" hidden>+ Agregar Pizza 2</button>
        <button type="button" id="agregar-vegetariana-2" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarvegetariana2();sumartodo();" hidden>+ Agregar Pizza</button>
        <br>

        <button type="button" class="button-select" style="margin-top: 10px; text-align: center; width: 65%; font-size: 60%;" onclick="tapup();borrarvegetariana();">Borrar</button>
        <input type="text" id="pizza-vegetariana-input" hidden>
      </div>
  <script>
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
  }









  function agregarvegetariana1(){
    document.getElementById("ventana-pizza-vegetariana").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;

    document.getElementById('cantidad-vegetarian-input').value = '2';

    
  }


  
  function agregarvegetariana2(){
    document.getElementById("ventana-pizza-vegetariana").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }


  </script>
      </div>
  </center>
</div>






<div id="ventana-pizza-lucopizza" style="position: absolute;" hidden>
  <center>
    <div style="height: 100%; display: grid; text-align: center; z-index: 523; background: rgba(0, 0, 0, 0.796); width: 100%; position: fixed; color: #000000c0; box-shadow: 150px 0px 250px 450px; border: 2px solid black;">
      <div style="background-color: #00000094;border-radius: 8px;width: 100%;height: 100%;">
        <h1 style="background-color: #fff; border-radius: 15px; padding: 5px; padding-top: 30px; padding-bottom: 20px; color: #ff5500; width: auto; text-align: center; margin: auto; margin-top: 20%; font-size: 200%; text-align: center;">1 Luco Pizza
       <br><br>
          <img style="width: 70%;" src="/Pizzas/lucopizza.png" alt="">
          <br>
          <input id="cantidad-lucopizza-input" type="number" disabled style="width: 25%; font-size: 160%; text-align: center; background-color: transparent; border: 0px;"></input>
          <br><br>
        <button type="button" id="agregar-lucopizza" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="agregarsegundapizza();popup();agregarlucopizza();sumartodo();">+ Agregar</button>
        <button type="button" id="agregar-lucopizza-1" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarlucopizza1();sumartodo();" hidden>+ Agregar Pizza 2</button>
        <button type="button" id="agregar-lucopizza-2" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarlucopizza2();sumartodo();" hidden>+ Agregar Pizza</button>
        <br>

        <button type="button" class="button-select" style="margin-top: 10px; text-align: center; width: 65%; font-size: 60%;" onclick="tapup();borrarlucopizza();">Borrar</button>
        <input type="text" id="pizza-lucopizza-input" hidden>
      </div>
  <script>
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
  }









  function agregarlucopizza1(){
    document.getElementById("ventana-pizza-lucopizza").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById('cantidad-lucopizza-input').value = '2';


    
  }


  
  function agregarlucopizza2(){
    document.getElementById("ventana-pizza-lucopizza").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }


  </script>
      </div>
  </center>
</div>






<div id="ventana-pizza-cheeseburger" style="position: absolute;" hidden>
  <center>
    <div style="height: 100%; display: grid; text-align: center; z-index: 523; background: rgba(0, 0, 0, 0.796); width: 100%; position: fixed; color: #000000c0; box-shadow: 150px 0px 250px 450px; border: 2px solid black;">
      <div style="background-color: #00000094;border-radius: 8px;width: 100%;height: 100%;">
        <h1 style="background-color: #fff; border-radius: 15px; padding: 5px; padding-top: 30px; padding-bottom: 20px; color: #ff5500; width: auto; text-align: center; margin: auto; margin-top: 20%; font-size: 200%; text-align: center;">1 Cheeseburger
       <br><br>
          <img style="width: 70%;" src="/Pizzas/cheeseburger.png" alt="">
          <br>
          <input id="cantidad-cheeseburger-input" type="number" disabled style="width: 25%; font-size: 160%; text-align: center; background-color: transparent; border: 0px;"></input>
          <br><br>
        <button type="button" id="agregar-cheeseburger" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="agregarsegundapizza();popup();agregarcheeseburger();sumartodo();">+ Agregar</button>
        <button type="button" id="agregar-cheeseburger-1" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarcheeseburger1();sumartodo();" hidden>+ Agregar Pizza 2</button>
        <button type="button" id="agregar-cheeseburger-2" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarcheeseburger2();sumartodo();" hidden>+ Agregar Pizza</button>
        <br>

        <button type="button" class="button-select" style="margin-top: 10px; text-align: center; width: 65%; font-size: 60%;" onclick="tapup();borrarcheeseburger();">Borrar</button>
        <input type="text" id="pizza-cheeseburger-input" hidden>
      </div>
  <script>
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
  }









  function agregarcheeseburger1(){
    document.getElementById("ventana-pizza-cheeseburger").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById('cantidad-cheeseburger-input').value = '2';


    
  }


  
  function agregarcheeseburger2(){
    document.getElementById("ventana-pizza-cheeseburger").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }


  </script>
      </div>
  </center>
</div>






<div id="ventana-pizza-chillian" style="position: absolute;" hidden>
  <center>
    <div style="height: 100%; display: grid; text-align: center; z-index: 523; background: rgba(0, 0, 0, 0.796); width: 100%; position: fixed; color: #000000c0; box-shadow: 150px 0px 250px 450px; border: 2px solid black;">
      <div style="background-color: #00000094;border-radius: 8px;width: 100%;height: 100%;">
        <h1 style="background-color: #fff; border-radius: 15px; padding: 5px; padding-top: 30px; padding-bottom: 20px; color: #ff5500; width: auto; text-align: center; margin: auto; margin-top: 20%; font-size: 200%; text-align: center;">1 Chillian
       <br><br>
          <img style="width: 70%;" src="/Pizzas/chillian.png" alt="">
          <br>
          <input id="cantidad-chillian-input" type="number" disabled style="width: 25%; font-size: 160%; text-align: center; background-color: transparent; border: 0px;"></input>
          <br><br>
        <button type="button" id="agregar-chillian" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="agregarsegundapizza();popup();agregarchillian();sumartodo();">+ Agregar</button>
        <button type="button" id="agregar-chillian-1" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarchillian1();sumartodo();" hidden>+ Agregar Pizza 2</button>
        <button type="button" id="agregar-chillian-2" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarchillian2();sumartodo();" hidden>+ Agregar Pizza</button>
        <br>

        <button type="button" class="button-select" style="margin-top: 10px; text-align: center; width: 65%; font-size: 60%;" onclick="tapup();borrarchillian();">Borrar</button>
        <input type="text" id="pizza-chillian-input" hidden>
      </div>
  <script>
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
  }









  function agregarchillian1(){
    document.getElementById("ventana-pizza-chillian").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById('cantidad-chillian-input').value = '2';


    
  }


  
  function agregarchillian2(){
    document.getElementById("ventana-pizza-chillian").hidden = true;
    finalizarpedidosuperior.play();
    document.getElementById("pedido-vacio").hidden = true;


  }


  </script>
      </div>
  </center>
</div>




  <div id="ventana-pizza-pollobbq" style="position: absolute;" hidden>
    <center>
      <div style="height: 100%; display: grid; text-align: center; z-index: 523; background: rgba(0, 0, 0, 0.796); width: 100%; position: fixed; color: #000000c0; box-shadow: 150px 0px 250px 450px; border: 2px solid black;">
        <div style="background-color: #00000094;border-radius: 8px;width: 100%;height: 100%;">
          <h1 style="background-color: #fff; border-radius: 15px; padding: 5px; padding-top: 30px; padding-bottom: 20px; color: #ff5500; width: auto; text-align: center; margin: auto; margin-top: 20%; font-size: 200%; text-align: center;">1 Pollo BBQ
         <br><br>
            <img style="width: 70%;" src="/Pizzas/pollobbq.png" alt="">
            <br>
            <input id="cantidad-pollobbq-input" type="number" disabled style="width: 25%; font-size: 160%; text-align: center; background-color: transparent; border: 0px;"></input>
            <br><br>
          <button type="button" id="agregar-pollobbq" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="agregarsegundapizza();popup();agregarpollobbq();sumartodo();">+ Agregar</button>
          <button type="button" id="agregar-pollobbq-1" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarpollobbq1();sumartodo();" hidden>+ Agregar Pizza 2</button>
          <button type="button" id="agregar-pollobbq-2" class="buttons" style="text-align: center; width: 70%; font-size: 70% !important;" onclick="popup();agregarpollobbq2();sumartodo();" hidden>+ Agregar Pizza</button>
          <br>
  
          <button type="button" class="button-select" style="margin-top: 10px; text-align: center; width: 65%; font-size: 60%;" onclick="tapup();borrarpollobbq();">Borrar</button>
          <input type="text" id="pizza-pollobbq-input" hidden>
        </div>
    <script>
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
    }
  
  
  
  
  
  
  
  
  
    function agregarpollobbq1(){
      document.getElementById("ventana-pizza-pollobbq").hidden = true;
      finalizarpedidosuperior.play();
      document.getElementById("pedido-vacio").hidden = true;
  
      document.getElementById('cantidad-pollobbq-input').value = '2';
  
      
    }
  
  
    
    function agregarpollobbq2(){
      document.getElementById("ventana-pizza-pollobbq").hidden = true;
      finalizarpedidosuperior.play();
      document.getElementById("pedido-vacio").hidden = true;
  
  
    }
  
  
    </script>
        </div>
    </center>
  </div>
  




<div id="more-ing" style="position: absolute;" hidden>
  <center>
    <div style="height: 100%; display: grid; text-align: center; z-index: 523; background: rgba(0, 0, 0, 0.796); width: 100%; position: fixed; color: #000000c0; box-shadow: 150px 0px 250px 450px; border: 2px solid black;">
      <div style="background-color: #00000094;border-radius: 8px;width: 100%;height: 100%;">
        <h1 style="background-color: #fff; border-radius: 15px; padding: 5px; padding-top: 30px; padding-bottom: 20px; color: #ff5500; width: auto; text-align: center; margin: auto; margin-top: 50%; font-size: 251%;">Próximo <span style="text-decoration: underline black;">Ingrediente</span> Adicional <br><br><span style=" text-align: center; color: black;">Valor:</span> <span style="color: #000000; text-decoration: underline #000000;">$</span><span style="text-decoration: underline;">1.000</span> <span style="color: #ff5500;">C</span><span style="color: black;">/</span><span style="color: #ff5500;">U</span></h1>
        <br><br><br>
        <button type="button" class="button-select" style="text-align: center; width: 70%; font-size: 200%;" onclick="popup();cerrarcuartoingrediente();coste1000();mostraringspans();">Ok</button>
      </div>
  
      </div>
  </center>
</div>




<div id="2-more-ing" style="position: absolute;" hidden>
  <center>
    <div  style="height: 100%; display: grid; text-align: center; z-index: 523; background: rgba(0, 0, 0, 0.796); width: 100%; position: fixed; color: #000000c0; box-shadow: 150px 0px 250px 450px; border: 2px solid black;">
      <div style="background-color: #00000094;border-radius: 8px;width: 100%;height: 100%;">
        <h1 style="background-color: #fff; border-radius: 15px; padding: 5px; padding-top: 30px; padding-bottom: 20px; color: #ff5500; width: auto; text-align: center; margin: auto; margin-top: 50%; font-size: 251%;">Próximo <span style="text-decoration: underline black;">Ingrediente</span> Adicional <br><br><span style=" text-align: center; color: black;">Valor:</span> <span style="color: #000000; text-decoration: underline #000000;">$</span><span style="text-decoration: underline;">1.000</span> <span style="color: #ff5500;">C</span><span style="color: black;">/</span><span style="color: #ff5500;">U</span></h1>
        <br><br><br>
        <button type="button" class="button-select" style="text-align: center; width: 70%; font-size: 200%;" onclick="popup();cerrarcuartoingrediente2();coste10002();mostraringspans2();">Ok</button>
      </div>
  
      </div>
  </center>
</div>
<header>

  



<script>

  
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
  }

  function seleccionaringredientes2(){
    seleccionaringredientesdos.play();
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




</script>

<script>


setTimeout(() => {
        document.getElementById("seguircomprando").hidden = true;
      }, "5");


  let agregar = new Audio('/Index/Sounds/agregar.mp3');
  let pop = new Audio('/Index/Sounds/pop.mp3');
  let tap = new Audio('/Index/Sounds/tap.mp3');
  let seleccionaropcion = new Audio('/Index/Sounds/seleccionaropcion.mp3');
  let bienvenido = new Audio('/Index/Sounds/bienvenido.mp3');
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
  let enviatupedido = new Audio('/Index/Sounds/enviatupedidoanuestrowhatsapp.mp3')
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

      
    




</script>


<img src="/PalmasPizzaIMG/arrowvercarrito.png" style="z-index: 4999; height: 200px;" id="arrowvercarrito" alt="" hidden>    

   

 <div class="headernav" style="display: center; z-index: 600 !important;" id="headernav">
      
          <audio hidden id="audio" controls>
            <source  type="audio/mp3" src="/Index/Sounds/agregar.mp3">
            </audio>
       <div id="carrito" style="border: 0px; margin-top: 0px;">
             
        <p id="signopeso">$</p>
        <button onclick="location.href='https://api.whatsapp.com/send?phone=56952323555&text=%C2%A1Hola%20Palmas%20Pizza!%2C%20Me%20gustar%C3%ADa%20ordenar%3A%20___'" id="palmaspizzalogo" style="margin-left: 15px !important; padding: 0; height: 70px; border: #ff8900; background-color: #ff8900; background: #ff8900;">

          <button class="buttxn" id="button-carrito" data-open="carrito-palmaspizza" onclick="popup();ocultarflecha();"> 
          <img class="carrofixedheader" src="/PalmasPizzaIMG/carrito-img.png"  id="carrito"  style="background-color: white; border-right: solid black 2px; width: 68px;" onclick="popup();ocultarflecha()">

        
          
      </button>
      
    </button>  
  
      <input class="carrofixedheader" type="text" value="0" id="total" style="cursor: none; margin-right: 50px !important;" readolny disabled  data-open="carrito-palmaspizza">
      <button type="button" class="buttons" data-open="carrito-palmaspizza" id="finalizar-1" oncanplay="confirmartupedido();">Finalizar</button>
       </div>
<center id="seguircomprando" hidden>
  <h1 style="color: white; background-color: #000000c7; width: auto;"><span style="text-decoration: underline; color: #ff8c00;">Toca</span> el ⬆️Carrito para <span style="color: #6bde97; text-decoration:  underline;">Enviar</span> Tu Pedido</h1>
  <br><br><br><br><br>
  <button id="agregar-mas-productos" class="button-select"  style="font-size: 170%;" onclick="popup();OK();" hidden>Añadir + Productos</button>
  </center>
  <input type="number" id="cantidad-de-pizzas" hidden>
         </div>



      
      <div>

      </div>
    





    <!-- CARRITO PALMAS PIZZA -->

      <div class="btn-group"  >
        <div class="modal cantidad-button" id="carrito-palmaspizza" style="position: fixed; z-index: 601;" data-animation="slideInOutLeft" >
          <div style="height: 100%;" class="modal-dialog" >
            <head style="background: black !important;" >
              <br><br><br>
               
                  
          
              </head>
             <footer>
              <button type="button" class="button-select" data-close="" onclick="popup();sumar();" >Cerrar Carrito</button>    
              
             </footer>
    
            <section class="modal-content">
                <br> <br>

                        
              <br><br>
  <h1 class="formulario__titulo">Pedido</h1>  <br>

              <br><br>
<center>
<div id="1-pizza-familiar" hidden>
  <h2>1 Pizza Familiar</h2><br>
  <img src="/PalmasPizzaIMG/1pizza.png" alt="">
  <br>
<br>
</div>


<div id="1-pizza-mediana" hidden>
  <h2>1 Pizza Mediana</h2>
  <img src="/PalmasPizzaIMG/1pizza.png" alt="">
  <br>
  <br>
</div>


<div id="2-pizzas-familiares" hidden>
  <h2>2 Pizzas Familiares + Coca-Cola 1.25Lts</h2>
  <img src="/PalmasPizzaIMG/2familiaresmasbebida.png" alt="">
  <br>
  <br>

</div>

<div id="2-pizzas-medianas" hidden>
  <h2>2 Pizzas Medianas </h2>
  <img src="/PalmasPizzaIMG/2medianas.png" alt="">
</div>
</center>
<br>
<br>
              <button type="button" class="button" id="finalizar-pedido-button" onclick="tapup();ingresartusdatos();" style=" z-index: 200000000 !important; padding: 29px;" data-close="" data-open="finalizarpedido-html">Confirmar</button>
              <br><br>

<div id="pedido-vacio">
  <h2 style="color: #5d5d5d;">Tu pedido está vacío</h2>
  <img src="/PalmasPizzaIMG/pedidovacio.png"  alt="">

</div>


<!-- INICIO INPUTS ARMA TU PIZZA  -->

<div class="btn-group">
  <div class="modal" id="inputs-ingredientes" data-animation="slideInOutLeft">
    <div style=" margin-bottom: 560px; height: 75%; z-index: 7600 !important; position: fixed; width: 90%; height: 75%; box-shadow: 10px 10px 10px 10px; background-color: white; border: solid 4px #ff5500;" class="modal-dialog" >
      <footer>
        <button type="button" class="buttons" style="position: fixed; width: auto; display: grid;" data-close="">Cerrar</button>
        <br><br><br><br>
      </footer>
      <h1 style="color: #ff5500;">Pizza</h1>
      <textarea disabled name="" id="input-ingredientes" class="formulario__input" style="height: auto; width: 100%;"></textarea>
<br>
<h1 id="pizza-title-2" style="color: #ff5500;">Pizza 2</h1>
<textarea disabled  name="" id="input-ingredientes-dos" value="" class="formulario__input" style="height: auto; width: 100%;"></textarea>



    </div>
  </div>
  </div>

<input type="text" id="input-select-arma-tu-pizza" hidden>

<div id="inputs-arma-tu-pizza" onclick="popup();OK();" hidden>
  <br>
<br><br><br><br><br>
<input type="text" id="input-pizza-uno" value="" hidden>
<input type="text" id="input-pizza-dos" value="" hidden>

 <div style="box-shadow: 0px -5px 57px 7px rgba(255, 123, 0, 0.523);  display: grid; place-items: center; border: #ff8000 solid 4px; border-bottom: 0px; background-color: #00000015; width: 98%; height: 150px; z-index: 1; position: relative; margin: auto;">
  <button type="button" class="button-select" style="margin-left: 40px; margin-top: -43px; border-bottom: 0px;" data-open="inputs-ingredientes">Ver Ingredientes</button>
  <img src="https://th.bing.com/th/id/OIG.j4Mdf12ohzZBcQ_LMtBe?pid=ImgGn&w=1024&h=1024&rs=1" alt="" readolny disabled style="width: 100px; position: absolute; margin-left: -70%; margin-top: 50px;">
   <label for="arma-tu-pizza-pizza"></label>
   <input type="text"  id="input-arma-tu-pizza-pizza" readolny disabled style="background-color: transparent; border: 0px; text-align: start; padding: 0;  font-size: 240%; min-width: 20%; width: 300px; max-width: 80%; font-family:  'Calibri', Haettenschweiler, 'Arial Narrow Bold',  Franklin Gothic Medium; position: relative; margin-left: 5px; color: black;"> <br>
   <label for="arma-tu-pizza-tamaño"></label>
   <input type="text" id="input-arma-tu-pizza-tamaño" readolny disabled style="background-color: transparent; border: 0px; color: #ff9800; text-align: center; padding: auto;  font-size: 35px; font-family:  'Calibri', Haettenschweiler, 'Arial Narrow Bold',  Franklin Gothic Medium; position: relative; margin-right: -23%; max-width: 200px;">
   <label for="arma-tu-pizza-salsa"></label> 
   <input  type="text" id="input-arma-tu-pizza-salsa" readolny disabled style="background-color: transparent; border: 0px; color: #ff6a00; text-align: center; padding: 0;  font-size: 215%; font-family:  'Calibri', Haettenschweiler, 'Arial Narrow Bold',  Franklin Gothic Medium; position: relative; margin-right: -23%; max-width: 240px; ">
   <label for="input-arma-tu-pizza-salsa-dos"></label> 
   <input  type="text" id="input-arma-tu-pizza-salsa-dos" readolny disabled style="background-color: transparent; border: 0px; color: #ff6a00; text-align: center; padding: 0;  font-size: 215%; font-family:  'Calibri', Haettenschweiler, 'Arial Narrow Bold',  Franklin Gothic Medium; position: absolute; margin-right: -23%; max-width: 240px; margin-top: -100px; ">
   <label for="arma-tu-pizza-cantidad"></label>
   <input type="text"  id="input-arma-tu-pizza-cantidad" class="numpizzas" readolny disabled style="background-color: transparent; border: 0px;  width: 40px; font-size: 55px; font-family:  'Calibri'; text-align: start; height: 55px; position: absolute; margin-left: -90%; margin-top: -90px; color: #ff6a04;">  <br>
  
    
    <label for="instruccionesarma-tu-pizza"></label>  
   <input type="text" placeholder="Nota:" id="input-arma-tu-pizza-instrucciones"  style="z-index: 1065700 !important; background-color: #e2e2e2 !important; border: 0px; padding-left: 5px; color: #ff6a00; background-color: #00000015; font-size: 160%; font-family: Arial, Helvetica,  Franklin Gothic Medium; position: relative;  width: 102%; height: auto; padding-top: 5px; border-top: 0px; border-bottom: #ff6a04 solid 5px; border-left: #ff8000  solid 4px ; border-right: #ff8000 solid 4px; margin-top: -20px; ">
            <button type="button" style="background: rgb(255, 0, 0); color: #fff; margin-top: -180px; margin-left: 92%; position: absolute; width: 40px; height: 35px; border: #ff8000 solid 4px; border-bottom: 0px;" onclick="popup();borrarpedidoarmatupizza();"><img src="https://th.bing.com/th/id/OIG.0NDrMGYWVJBbZt2BmPqH?pid=ImgGn" alt=""></button>
          
          
          <!-- EDITAR -->
          <br>
          <br> <br>
          <br>    <img src="https://cdn-icons-png.flaticon.com/512/4226/4226577.png" style="color: #fff; margin-top: -110px; margin-left: 92%; position: absolute; width: 40px; height: 40px; border-bottom: #ff8000; cursor: pointer;" data-close="" data-open="selecciona-3-ingredientes" onclick="popup();volverarmatupizza();" alt="">
   </div>
</div>
  



    


<!-- FIN INPUTS ARMA TU PIZZA -->

   









              







<footer></footer>

</div>
</div>
</div>

<!-- FIN INPUTS NAPOLITANA -->



              
















<br><br><br><br><br>


<div    id="ver-promociones" style="border: solid #ff8900; width: 98%; margin: 1%; cursor: pointer; position: absolute; box-shadow: 1px 1px 15px 1px black; background-color: #fff;">

  <h1 onclick="popup();verpromociones()" readonly disabled style="color: #ff5500;  padding-left: 5%;">Precios</h1>
  <div class="slider">
    <img src="/PalmasPizzaIMG/promocion1.jfif" style="height: auto !important;" alt="Imagen 1" class="active">
    <img src="/PalmasPizzaIMG/promocion2.jfif" style="height: auto !important;" alt="Imagen 2">
    <img src="/PalmasPizzaIMG/promocion3.jfif" style="height: auto !important;" alt="Imagen 3">
    <div class="slider-controls">
      <br><br>
      <button class="active" onclick="changeSlide(1)">1</button>
      <button onclick="changeSlide(2)">2</button>
      <button onclick="changeSlide(3)">3</button>
    </div>
  </div>
  <a href="#pizzas-anchor"  >
    <input type="text" class="formulario__input" style="border-bottom: solid 2px rgb(59, 59, 59); width: 90%;" disabled>
   

 

    <h2 style="color: #ff5500; margin-left: 5%; font-size: 35px; display: grid;">Unitarias</h2>
    <button type="button" class="buttons" style="margin-left: 5%; margin-right: 5%;" onclick="vaciarpizzas();agregaunapizza();unafamiliar();popup();unapizza();document.getElementById('formato-pizzas').value = '1 Pizza Familiar* %0A'">1 Pizza Familiar <spans style="color: black; font-size: 18px;" >$10.990</span></button>
   

 
 <script>
 function unapizza() {
    document.getElementById("pizzas").value="%0A *🍕Pizza:*%0A"
  }

  function pizzas() {
    document.getElementById("pizzas").value="%0A *🍕Pizzas:*%0A"
     
  }

  function vaciarpizzas(){
    document.getElementById("input-pizza-dos").value = '';
    document.getElementById("input-pizza-uno").value = '';
  }


 </script>

<div hidden>

  <input type="text" id="formato-pizzas">
  <input type="text" id="pizzas">

</div>
    <br>
    <br>
    <button type="button" class="buttons" style="margin-left: 5%; margin-right: 5%;" onclick="vaciarpizzas();agregaunapizza();unamediana();popup();unapizza();document.getElementById('formato-pizzas').value = '1 Pizza Mediana* %0A';" >1 Pizza Mediana <spans style="color: black; font-size: 18px;" >$8.990</span></button>
 <input type="text" class="formulario__input" style="border-bottom: solid 3px black; width: 90%;" disabled>
  <br>
<h2 style="color: #ff5500; margin-left: 5%; font-size: 35px; display: grid;">Promociones</h2>
<br>
<button type="button" class="buttons" style="margin-left: 5%; margin-right: 5%;" id="formato-pizzas-1" onclick="agregardospizza();removeSumarTodo();document.getElementById('2-pizzas-familiares').hidden= false;tapup();pizzas();familiaresdos();document.getElementById('formato-pizzas').value = '*2 Pizzas Familiares* %0A %2B+🍺Coca-Cola 1.25Lts';" >2 Pizzas Familiares  <spans style="color: black; font-size: 18px;" >$17.990</span>
<br><span style="color: #fff; font-size: 120%;">+ Coca-Cola 1.25LTS</span></button>
<br><br>
<button type="button" class="buttons" style="margin-left: 5%; margin-right: 5%;" id="formato-pizzas-2" onclick="agregardospizza();removeSumarTodo();tapup();pizzas();medianasdos();document.getElementById('formato-pizzas').value = '*2 Pizzas Medianas* %0A';">2 Pizzas Medianas <spans style="color: black; font-size: 18px;" >$14.990</span></button>
  <br><br>

</a>


</div>



<div>
<div id="brs" >
  <br><br><br> <br><br><br> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>
</div>

<div hidden onclick="popup();ocultarpromociones()" id="ocultar-promociones" style="border: solid #ff8900; width: 98%; margin: 1%; cursor: pointer; position: absolute; box-shadow: 1px 1px 15px 1px black;">
  <h1 readonly disabled style="color: #ff5500; padding-left: 5%; ">Precios ▼</h1>
</div>

        <div class="btn-group">
          <div class="modal cantidad-button" style=" background-color: #fff; width: 102% !important; z-index: 200000000000000000000000000;" id="finalizarpedido-html" data-animation="slideInOutLeft" >
            <div style="position: fixed; height: 100%; text-align: initial ; margin: auto; position: absolute;"class="modal-dialog" >
              <head style="background: black !important; height: 50px;" >
                 <form action="" class="formulario" style="width: 100% !important;  margin: 0; margin-bottom: 0 !important; margin-top: 0px !important; padding: 0; max-width: 100%; height: 200% !important;" >
                     
                     <form action="" class="formulario" style="width: 100% !important; height: 100%;">
                      <br><br><br> <br><br><br>
                     
                  <head>
           
                      <button type="button" id="volver-italiana" class="button-select" style="margin: auto; width: auto; height: auto !important; position: relative; width: 70%; display: grid;" data-close="">🔙 Volver </button>
                     
                 
                  </head>
                      <br><br><br><br>
                      
                         <h1 class="formulario__titulo" style="color: black !important;">Finalizar Pedido</h1> <br>
                              
                         <h3 class="formulario__subtitulo" >Ingresa tus datos</h3>
                     
                     
                         <label for="nombre" class="formulario__label">Nombre:</label>
                         <input
  
                           id="nombre"
                           type="text"
                           class="formulario__input"
                           placeholder="Indica cuál es tu nombre"
                         />
                         
                         <br>  <br>  <br>
                     
                         <label for="telefono" class="formulario__label">Teléfono:</label>
                         <input
                           id="telefono"
                            type="number"
                           class="formulario__input"
                           placeholder="Indica cuál es Teléfono"
                           maxlength="9" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                         />
                     
                         <p style="position: absolute; z-index: inherit; margin-top: -46.5px; font-size: 150%; font-family: Franklin Gothic Medium; user-select: none; margin-left: 5%;" aria-readolny disabled="true" aria-disabled="true">+56</p>
                         
             <br>
             <br><br> 
                  <center>
                    <label for="direccion" class="formulario__label">Dirección:</label>
                    <h2>¿Donde enviaremos tu pedido?</h2>
                    
                  </center>

<input type="text" id="direccion-lugar" hidden>


<script>
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
</script>





<div id="direccion-div">
<center>
  <button type="button" class="button-select" id="Trabajo-button" onclick="Trabajo();tap();" >Trabajo</button>
  <button type="button" class="button-select" id="Departamento-button" onclick="Departamento();tap();" >Departamento</button>
  <br><br>
  <button type="button" class="button-select" id="Casa-button" onclick="Casa();tap();" >Casa</button>
  <button type="button" class="button-select" id="Otro-button" onclick="Otro();tap();" >Otro</button>
  
</center>
</div>

<br>
<div id="otro" hidden>
  <label class="formulario__label" for="label-otro">Otro:</label>
<textarea  name="" id="input-otro" class="formulario__input" placeholder="Descríbenos tu Dirección..." style="height: auto; width: 100%;"></textarea>

</div>

<div id="departamento" hidden>
  <label for="label-departamento" class="formulario__label">Depto:</label>
<input type="text" id="inputdepartamento" value="" class="formulario__input" placeholder="Ej: A-102" style="text-align: center; text-transform: uppercase;">


</div>

<div id="casa-trabajo" hidden>
<div id="casa" hidden>
  <label class="formulario__label" for="label-casa">Casa</label>
</div>


<div id="trabajo" hidden>
  <label class="formulario__label" for="label-trabajo">Trabajo</label>
</div>
                           <input
                           style="z-index: 1;"
                             id="direccion"
                             type="text"
                             value=""
                             class="formulario__input"
                             placeholder="[Calle]"
                             style=" position: relative; width: 60% !important;"
                           />
                           
                           <input
                           style="z-index: 1;"
                             id="direccionnum"
                             type="number"
                             class="formulario__input"
                             placeholder="[Número]"
                             style=" position: relative; width: 30% !important; border: #ff5500 solid 2 px; border-top: 0px;"
                           /> 
</div>




</script>

             <div >
              <input 
              readolny disabled
                class="formulario__input"
         style="border-bottom: #000; height: 5px;"
              />
               <br><br><br>
                         <label style="margin-left: 0px; font-size: 170%; color: black;" for="formadepago" class="formulario__label">Forma de pago:</label>
                         
                         
             
                  
             <br>
                  <button onclick="popup();inputefectivo();concuantocancela()" type="button" id="efectivo" value="💵Efectivo✅" style="padding-top: 9px; color: #ff7700;" class="open-modal button-select" data-open="concuantocancela" >
                  Efectivo
                  </button>
                  <div class="btn-group"  >
                     <div class="modal" id="concuantocancela" data-animation="slideInOutLeft" >
                       <div style="height: auto; z-index: 5;" class="modal-dialog" >
                         <head style="background-color: black !important;" >
                             <h2 class="formulario__titulo" style="font-size: 150% !important;">¿Con cuanto cancela?</h2>
                       
                           </head>
                          
                 
                         <section class="modal-content" >
                             <label for="pagacon"></label>
                             <input
                              
                             id="pagacon"
                             type="number"
                             placeholder="$00.000" class="formulario__input"  style="color: rgb(1, 128, 1) !; padding: 0; width: 60%; font-size: 22px; text-align: center; margin: auto; margin-bottom: 30px; font-family: Arial, Helvetica,  Franklin Gothic Medium;" />
                             
                             <label for="cancelocon"></label>
                             <input type="text" id="cancelocon" hidden>



     

                             <button id="listo" onclick="popup();canceloconx();enviartupedido();" type="button" class="button" style="z-index: 5; position: relative; text-align: center; padding-left: 25px; padding-right: 25px; padding-top: 12px !important; padding-bottom: 12px !important; z-index: 4; position: relative; text-align: center; padding: 10px; padding-top: 10px; padding-bottom: 10px; margin: auto !important; font-size: 125%; margin-right: 200px !important; margin-top: 50px !important; padding: 10px; width: 80%; margin: auto !important;" data-close="">
                                 Listo
                             </button>
             <br>
                    <br><b><br></b>      
                    <br>    
             <br>
             
                             <button type="button" class="button-select" style="z-index: 4; position: relative; text-align: center; padding: 10px; padding-top: 10px; padding-bottom: 10px; margin: auto !important; font-size: 125%;" data-close="" onclick="popup();borrarformadepago();nocanceloconx()">
                                 Cambiar Forma de pago
                             </button>
                             
                       </div>
                     </div>
                     </div>
             
             
             
             
             
             

             
             
                  
             
                  <button onclick="popup();inputtransferencia()" class="button-select" type="button" id="transferencia" value="📲Transferencia✅">
                     Transferencia
                  </button>
                  
             
             
             
                 <br>
             
                  <input 
                  readolny disabled
                    class="formulario__input"
             
                  />   <br><br><br><br><br><br>
                  <label for="formadepago"></label>
                  <input readolny disabled style="font-family: 'Calibri';"
                  id="formadepago"
                  type="text"
             />      <div id="formadepagox" style="background-color: transparent; width: 90%; height: 30px; position: relative;"></div>
                         <div id="respuesta" z-index="43874987u487298437284 !important"></div>
      
<center>
  <p style="color: rgb(0, 255, 0); text-shadow: #5d5d5d 1px; -webkit-text-stroke: black 0.5px; font-size: 160%;">⬇ Enviar a Whatsapp ⬇</p>
  <img src="/PalmasPizzaIMG/submit.png" alt="palmaspizza" id="submit" style="width: 30%;">
                     
</center>
                          
                       </form>
                   </form>
                </head>
      
                      </div>
                    </div>
                    </div>
       
<br>



<br>

<br><br><br><br><br><br><br><br>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>

 </div>
 
</div>


</div>

</div>
</div>




<!-- FIN DE CARRITO PALMAS PIZZA   -->



</header>






<!-- FINALIZAR PEDIDO - HTML ULTIMA PAGINA -->



<!-- FIN DE PAGINA FINALIZAR PEDIDO - HTML -->










<div id="boddydiv">
<body style="overflow: -moz-hidden-unscrollable; " >


  

    <!-- Ventana de carga -->
    <div class="carga" id="carga">
      <div class="carga-contenido">

<br>
<H1 style="color: white;">Bienvenido</H1>
      
          <img  src="https://scontent.fscl35-1.fna.fbcdn.net/v/t1.15752-9/397959438_700337758714823_4138704959227799791_n.png?stp=dst-png_p280x280&_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFd2lYh71UJJxIqTGtQqYlelfmREYMZEWSV-ZERgxkRZPL4E_VYDYrnee_zWaVC9D6Ezy9wUPMddyTg8lw2srf-&_nc_ohc=CI4L46x-KzkAX9gy94T&_nc_ht=scontent.fscl35-1.fna&oh=03_AdSfbP6A15Hq2xqBIG_eul7kF5WDRPwMd6jnESKT4qo9uw&oe=6574ADC8" alt="Imagen giratoria" class="imagen-giratoria">
     <h1 style="color: white;">Palmas Pizza</h1>
     <button type="button" class="button-select" style="box-shadow: white 1px 1px 8px 1px;" onclick="comenzarpedido();">Comenzar Pedido</button>
     <br><br><br>
     
      </div>
  </div>


  


  <!-- INICIO FORM1 -->

    <form action="" style="overflow-x: hidden; height: 100% !important; margin: 0; margin-top: 0px !important; padding: 0; min-width: 100%; max-height: 100%; background-color: #fff !important;" >





<script>
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
</script>


<br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br> <br><br>

<div id="todo" hidden>
  <div id="formpizzas" style="margin-left: 2px; margin-right: 2px; overflow-y: hidden;">

    <br><br><br><br><br>
  
    <br><br><br><br><br> <a name="pizzas-anchor"></a> <br> <br><br><br><br><br>
        
      <br>
    <center>
      <h1 text-decoration="underline black" text-align="center">¿Qué se te antoja Hoy?</h1>
      <h1 style="color: #ff5500">Arma tu Pizza</h1>
     </center>
    <!-- ARMA TU PIZZA -->
  <a onclick="popup();armatupizzatext(' Ingredientes: ');" >
      <div style="border: #000000 solid; box-shadow: 0 3px 20px 3px rgb(255, 102, 0); width: 100%; margin: auto; height: 180px; margin-top: 20px;">
        <button data-open="selecciona-3-ingredientes" type="button" class="buttons" style="width: 100%; border-radius: 0%;" onclick="popup();seleccionarsalsa1()"><span>+</span> Agregar Al Pedido</button>
        <img style="border-right: 2px solid rgb(0, 0, 0); border-bottom: #000000 solid 3px; height: 127px; width: 120px;" class="img-pizza" src="https://th.bing.com/th/id/OIG.j4Mdf12ohzZBcQ_LMtBe?pid=ImgGn&w=1024&h=1024&rs=1" >
      
          <br><br>
          
          <p class="nombre-arma-tu-pizza" style="margin-top: -134px; font-size: 24px; text-decoration: underline black;">ARMA TU PIZZA</p>
          <p class="ing-arma-tu-pizza" >Crea tu propia <span style="color: #ff5500;">PIZZA</span> con la Salsa e Ingredientes <span style="color: #ff5500;">A TU GUSTO</span></p>
    
            
    
               </div>
               
    </a>

  
   <br>
        <br>
        <br><br>
       <center>
    
        <h1 style="color: #ff5500">Pizzas</h1>
       </center>
  
    <div class="btn-group">
      <div class="modal cantidad-button" id="arma-tu-pizza-html" data-animation="slideInOutLeft" >
        <div style="height: 100%;" class="modal-dialog" >
          
       <footer>
        <br>
        <br>
        <br>
        <br>
        <br>
        <button type="button" class="button-select" style="width: 90%; height: 70px !important; z-index: 233;" data-close="arma-tu-pizza-html" onclick="popup();armatupizzatextoff();">🔙 Volver  </button> 
      <br><br><br> 
      </footer>
          <h1 class="formulario__titulo" style="font-size: 320%;">Arma tu Pizza</h1> <br>
    
          <form action="" class="formulario" style="z-index: 5 !important; width: 100% !important; height: 100% !important; margin: 0; margin-top: px !important; padding: 0; max-width: 100%; max-height: 10%; position: static;">
             
    
            <h2 style="margin-left: 4%; font-size: 250%; ">Tamaño:</h2>
            <p style="margin-left: 4%; font-size: 140%; font-family: 'Calibri', 'Arial Narrow', Arial,  Franklin Gothic Medium; color: rgb(93, 93, 93);">Selecciona el <span id="span" style="color: #ff5500;">Tamaño</span> de tu Pizza</p>
            <button type="button" class="tamaño button-select" id="familiar" onclick="popup();cambiarcolorfamiliar();" data-open="cantidad--familiar-button">Familiar <br></button>
    
            
    
            
            <button type="button" class="tamaño button-select" id="mediana" onclick="popup();cambiarcolormediana();" data-open="cantidad--mediana-button">Mediana<br></button>
            
            
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
         <!-- VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad--familiar-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
                        <h1 class="formulario__titulo">Familiares</h1> <br>
                        <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
  
  
  
  
  
  
  
  
                       
                      <button type="button" class="button-select" style="width: 70%;" value="$10.990" id="1familiares" data-close="" onclick="popup();familiares();hiddentitlepizza();buttonoff();selectarmatupizza();">1</button> 
  
                      <button type="button" class="button-select" style="width: 70%;" value="$8.995" id="1familiaresuno" data-close="" onclick="popup();familiaresuno();selectarmatupizza();" hidden >1</button>
                      <br>
                      <br>
                            <button type="button" class="button-select" style="width: 70%;" value="$17.990" id="2familiares" data-close="" onclick="popup();familiaresdos();showpromocioncocacola();" data-open="agregarbebidapromo">2</button>
  
  
  
  
  
  
  
  
  
  
                            
              <br><br>
              <a type="button" class="button-select" style="width: 90% !important; font-size: 250%; padding: 30px; padding-top: 5px; padding-bottom: 4px;">+</a>  <br><br>
                        
         
                  </div>
                </div>
                </div>
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
    
            
     
  
      <!-- VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad--mediana-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
            <h1 class="formulario__titulo">Medianas</h1> <br>
                        <h2 class="" style="font-size: 180% !important;">Cantidad De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
      
                      <button type="button" class="button-select" style="width: 70%;" value="$7.495" id="1medianas" data-close="" onclick="popup();medianas();hiddentitlepizza();buttonoff();selectarmatupizza();">1</button>
  
                       <button type="button" class="button-select" style="width: 70%;" value="$10.990" id="1medianasuno" data-close="" onclick="popup();medianasuno();selectarmatupizza();" hidden>1</button>
                 <br>
                 <br>
                       <button type="button" class="button-select" style="width: 70%;" value="$17.990" id="2medianas" data-close="" onclick="popup();medianasdos();">2</button>
                       <br>
                       <br>
                     
         <a type="button" class="button-select" style="color: #ff6a04; width: 90% !important; font-size: 250%; padding: 30px; padding-top: 5px; padding-bottom: 4px;" href="https://wa.me/56952323555">+</a>            <br><br>
                        <br><br>
                  </div>
                </div>
                </div>
    
    
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
    
    
    
    
    
    
    
     
    
    
    
    
    
    
    
            
     <br><br>
          <br>  
          <footer>
            <button type="button" class="buttons" style=" width: 100%; height: 70px !important;" data-close="" data-open="selecciona-3-ingredientes" onclick="popup();selectarmatupizza();seleccionarsalsa2();"><span style="margin-left: 5%;">Siguiente ➡️</span></button>
           
        
          </footer>
          <input readolny disabled
          class="formulario__input"
   style="border-color: rgb(94, 94, 94) !important; height: 10px !important;"
        />
        
       
                </div>
      </div>
      </div>
        
   <div class="btn-group">
        <div class="modal cantidad-button" id="selecciona-3-ingredientes" data-animation="slideInOutLeft" >
          <div style="height: 100%;" class="modal-dialog" >
            <footer>
              <br>
              <br>
              <br>
              <br>
              <br>
  
                  <button type="button" class="button-select" style="width: 90%; height: 70px !important;" data-close="">🔙 Volver </button>
                  <input readolny disabled
                  class="formulario__input"
            style="border-color: rgb(94, 94, 94) !important; padding-top: 5px !important;"
                />
                    <br>
        <br>  
           
            </footer>
            <h1 style="color: #ff5500; font-size: 35px;">Pizza <h1 style="color: #ff5500; font-size: 35px;" id="1-pizza-number" hidden>1</h1></h1>

            <div style="display: grid;">
              <img src="/PalmasPizzaIMG/pizzasola.png" style="position: absolute; z-index: 13; width: 100%;">
              <img src="/PalmasPizzaIMG/salsapizza.png" id="salsapizza-img" style="position: absolute; z-index: 14; width: 100%;" hidden>
              <img src="/PalmasPizzaIMG/salsabbq.png" id="salsabbq-img" style="position: absolute; z-index: 14; width: 100%;" hidden>
            </div>
          <div style="margin-top: 100%;">
         
            <h2 style="margin-left: 4%; font-size: 280%; ">Salsa:</h2>
            <p style="margin-left: 4%; font-size: 140%; font-family: 'Calibri', 'Arial Narrow', Arial,  Franklin Gothic Medium; color: rgb(93, 93, 93);">Selecciona la <span id="span-salsa-arma-tu-pizza" style="color: #ff5500;">Salsa</span> de tu Pizza</p>
            <button type="button"  class="tamaño button-select"  id="salsapizza" onclick="popup();cambiarcolorsalsapizza();" >Salsa Pizza</button>
    
            
    <br><br>
            
            <button type="button"  class="tamaño button-select"  id="salsabbq" onclick="popup();cambiarcolorsalsabbq();" >Salsa Barbacoa</button>
            
            <br><br><br>
            <button onclick="tapup();seleccionaringredientes1();" type="button" class="buttons" style=" width: 100%; height: 70px !important;" data-close="" data-open="arma-tu-pizza-seleccionar-ingredientes" ><span style="margin-left: 5%;" >Siguiente ➡️</span></button>
  
    
  
          </div>
   
          </div>
        </div>
        </div>
  <div class="btn-group">
        <div class="modal cantidad-button" id="arma-tu-pizza-seleccionar-ingredientes" data-animation="slideInOutLeft" >
          <div style="height: 100%; min-width: 100%;" class="modal-dialog" >
   
            <footer>
              <br>
              <br>
              <br>
              <br>
              <br>
  
                  <button type="button" class="button-select" style="width: 90%; height: 70px !important;" data-close="">🔙 Volver </button>
                 
                  <input readolny disabled
                  class="formulario__input"
            style="border-color: rgb(94, 94, 94) !important; padding-top: 5px !important;"
                />
                    <br>
                    <center style="font-size: 170%;">
                      <h2>Selecciona al menos <br>
                      <span style="color: #ff5500; text-decoration: underline black;">(3 Ingredientes)</span></h2>
                    </center>
        <br>  
           
            </footer>
                <h1 class="formulario__titulo" style="font-size: 320%;">Pizza</h1> <br>
                <br>
                
           
             
                
                <div id="ing-initial">
                  <div style="display: grid; margin-bottom: 105%; width: 100%;">
                    <img src="/PalmasPizzaIMG/pizza.png" style="position: absolute; z-index: 14; width: 100%;">
                  <img src="/PalmasPizzaIMG/champiñoness.png" id="champiñonesX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                  <img src="/PalmasPizzaIMG/aceitunass.png" id="aceitunasX"  style="position: absolute; z-index: 15; width: 100%;" hidden> 
                  <img src="/PalmasPizzaIMG/choclos.png" id="choclosX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                  <img src="/PalmasPizzaIMG/churrascos.png" id="churrascosX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                  <img src="/PalmasPizzaIMG/pimentones.png" id="pimentonesX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                  <img src="/PalmasPizzaIMG/jamones.png" id="jamonesX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                  <img src="/PalmasPizzaIMG/cebollas.png" id="cebollasX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                  <img src="/PalmasPizzaIMG/pepperonis.png" id="pepperonisX"  style="position: absolute; z-index: 16; width: 100%;" hidden>
                  <img src="/PalmasPizzaIMG/piñas.png" id="piñasX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                  <img src="/PalmasPizzaIMG/tomates.png" id="tomatesX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                  <img src="/PalmasPizzaIMG/salchichas.png" id="salchichasX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                  <img src="/PalmasPizzaIMG/salames.png" id="salamesX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                  <img src="/PalmasPizzaIMG/pollos.png" id="pollosX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                  <img src="/PalmasPizzaIMG/tocinos.png" id="tocinosX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
            
                  </div>
                  <center>
                    <input type="text" class="" id="cantidading" value="0" disabled style="color: #ff5500; font-size: 35px; width: 40px; border: 0px; text-align: center; font-family:  'Calibri', Haettenschweiler, 'Arial Narrow Bold',  Franklin Gothic Medium; background: transparent; display: grid !important;">
                  
                     
                   </center>
      <br><br>
  
  
  
  
  
  
    
              <h2 style="margin-left: 4% !important; font-size: 200%; color: #ff5500;">Carnicos:</h2><br><br>
           <br><br>
    <div style="display: grid; place-items: center;">
      <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-left: 50%; width: auto !important;" id="salchichadisplay" value="salchichas" onclick="popup();salchichaD();salchichaingD();sumaring();agregarIngrediente(' Salchicha');agregadoIngX()"><img class="ing-img" src="/PalmasPizzaIMG/salchicha.png" ><br> Salchicha <span class="masIngspan" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button>
      <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-left: 50%; width: auto !important;" id="salchichahidden" onclick="popup();salchichaH();salchichaingH();restaring();eliminarIngrediente(' Salchicha', '');offagregadoIngX()" hidden><img class="ing-img" src="/PalmasPizzaIMG/salchicha.png" ><br> Salchicha</button>
    
  
    
    
    
     
      <button  type="button" class="button-ing" style="margin: 15px; position: absolute; margin-right: 50%;" id="churrascodisplay" onclick="popup();churrascoD();churrascoingD();sumaring();agregarIngrediente(' Churrasco');"><img class="ing-img" src="/PalmasPizzaIMG/churrasco.png" ><br> Churrasco <span class="masIngspan" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
      <button  type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-right: 50%;" id="churrascohidden" onclick="popup();churrascoH();churrascoingH();restaring();eliminarIngrediente(' Churrasco', '');" hidden><img class="ing-img" src="/PalmasPizzaIMG/churrasco.png" ><br> Churrasco</button>
      
    
    
    
  
      
      <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 250px; margin-left: 50%;" id="pepperonidisplay" onclick="popup();pepperoniD();pepperoniingD();sumaring();agregarIngrediente(' Pepperoni');"><img class="ing-img" src="/PalmasPizzaIMG/pepperoni.png" ><br> Pepperoni <span class="masIngspan" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
      <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 250px; margin-left: 50%;" id="pepperonihidden" onclick="popup();pepperoniH();pepperoniingH();restaring();eliminarIngrediente(' Pepperoni', '');" hidden><img class="ing-img" src="/PalmasPizzaIMG/pepperoni.png" ><br> Pepperoni</button>
      
      
    
    
    
      <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 250px; margin-right: 50%;" id="salamedisplay" onclick="popup();salameD();salameingD();sumaring();agregarIngrediente(' Salame');"><img class="ing-img" src="/PalmasPizzaIMG/salame.png" ><br> Salame <span class="masIngspan" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
      <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 250px; margin-right: 50%;" id="salamehidden" onclick="popup();salameH();salameingH();restaring();eliminarIngrediente(' Salame', '');" hidden><img class="ing-img" src="/PalmasPizzaIMG/salame.png" ><br> Salame</button>
      
    
    
    
      
      <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 500px; margin-left: 50%;" id="jamondisplay" onclick="popup();jamonD();jamoningD();sumaring();agregarIngrediente(' Jamón');"><img class="ing-img" src="/PalmasPizzaIMG/jamon.png" ><br> Jamón <span class="masIngspan" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
      <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 500px; margin-left: 50%;" id="jamonhidden" onclick="popup();jamonH();jamoningH();restaring();eliminarIngrediente(' Jamón', '');" hidden><img class="ing-img" src="/PalmasPizzaIMG/jamon.png" ><br> Jamón</button>
    
    
    
    
    
    
      <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 500px; margin-right: 50%;" id="pollodisplay" onclick="popup();polloD();polloingD();sumaring();agregarIngrediente(' Pollo');"><img class="ing-img" src="/PalmasPizzaIMG/pollo.png" ><br> Pollo <span class="masIngspan" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
      <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 500px; margin-right: 50%;" id="pollohidden" onclick="popup();polloH();polloingH();restaring();eliminarIngrediente(' Pollo', '');" hidden><img class="ing-img" src="/PalmasPizzaIMG/pollo.png" ><br> Pollo</button>
    
    
    
    
    
    
    
      <button type="button" class="button-ing" style="position: absolute; margin-top: 700px; width: 85%;" id="tocinodisplay" onclick="popup();tocinoD();tocinoingD();sumaring();agregarIngrediente(' Tocino');"><img class="ing-img" src="/PalmasPizzaIMG/tocino.png" ><br> Tocino <span class="masIngspan" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
      <button type="button" class="button-ing-selected" style=" position: absolute; margin-top: 700px; width: 85%;" id="tocinohidden" onclick="popup();tocinoH();tocinoingH();restaring();eliminarIngrediente(' Tocino', '');" hidden><img class="ing-img" src="/PalmasPizzaIMG/tocino.png" ><br> Tocino</button>
    
    </div>
    
            <br><br><br>    <br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br>
                <br><br><br><br>
                  <input readolny disabled
                class="formulario__input"
         style="border-color: rgb(255, 106, 0) !important; padding-top: 0px; margin-top: -50px;"
              />
  
    
              
                         
              <h2 style="margin-left: 4% !important; font-size: 200%; color: #ff5500;">Vegetales:</h2><br><br><br><br>
           
    <div style="display: grid; place-items: center;">
      <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-left: 50%; width: auto !important;" id="pimentondisplay" onclick="popup();pimentonD();pimentoningD();sumaring();agregarIngrediente(' Pimentón');" ><img class="ing-img" src="/PalmasPizzaIMG/pimenton.png" ><br>Pimentón <span class="masIngspan" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
      <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-left: 50%; width: auto !important;" id="pimentonhidden" onclick="popup();pimentonH();pimentoningH();restaring();offagregarIng();eliminarIngrediente(' Pimentón', '')" hidden><img class="ing-img" src="/PalmasPizzaIMG/pimenton.png" ><br>Pimentón</button>
    
    
    
      <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-right: 50%;" id="cebolladisplay" onclick="popup();cebollaD();cebollaingD();sumaring();agregarIngrediente(' Cebolla');"><img class="ing-img" src="/PalmasPizzaIMG/cebolla.png" ><br>Cebolla <span class="masIngspan" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
      <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-right: 50%;" id="cebollahidden" onclick="popup();cebollaH();cebollaingH();restaring();eliminarIngrediente(' Cebolla', '')" hidden><img class="ing-img" src="/PalmasPizzaIMG/cebolla.png" ><br>Cebolla</button>
      
      
      
      <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 250px; margin-left: 50%;" id="tomatedisplay" onclick="popup();tomateD();tomateingD();sumaring();agregarIngrediente(' Tomate');"><img class="ing-img" src="/PalmasPizzaIMG/tomate.png" ><br>Tomate <span class="masIngspan" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
      <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 250px; margin-left: 50%;" id="tomatehidden" onclick="popup();tomateH();tomateingH();restaring();eliminarIngrediente(' Tomate', '')" hidden><img class="ing-img" src="/PalmasPizzaIMG/tomate.png" ><br>Tomate </button>
      
      
      
      <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 250px; margin-right: 50%;" id="choclodisplay" onclick="popup();chocloD();chocloingD();sumaring();agregarIngrediente(' Choclo');"><img class="ing-img" src="/PalmasPizzaIMG/choclo.png" ><br>Choclo <span class="masIngspan" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
      <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 250px; margin-right: 50%;" id="choclohidden" onclick="popup();chocloH();chocloingH();restaring();eliminarIngrediente(' Choclo', '');" hidden><img class="ing-img" src="/PalmasPizzaIMG/choclo.png" ><br>Choclo </button>
      
      
      
      <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 500px; margin-left: 50%;" id="aceitunasdisplay" onclick="popup();aceitunasD();aceitunasingD();sumaring();agregarIngrediente(' Aceitunas');"><img class="ing-img" src="/PalmasPizzaIMG/aceitunas.png" ><br>Aceitunas <span class="masIngspan" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
      <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 500px; margin-left: 50%;" id="aceitunashidden" onclick="popup();aceitunasH();aceitunasingH();restaring();eliminarIngrediente(' Aceitunas', '')" hidden><img class="ing-img" src="/PalmasPizzaIMG/aceitunas.png" ><br>Aceitunas</button>
      
      
      
      <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 500px; margin-right: 50%;" id="piñadisplay" onclick="popup();piñaD();piñaingD();sumaring();agregarIngrediente(' Piña');"><img class="ing-img" src="/PalmasPizzaIMG/piña.png" ><br>Piña <span class="masIngspan" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
      <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 500px; margin-right: 50%;" id="piñahidden" onclick="popup();piñaH();piñaingH();restaring();eliminarIngrediente(' Piña', '')" hidden><img class="ing-img" src="/PalmasPizzaIMG/piña.png" ><br>Piña</button>
    
    
    
    
      <button type="button" class="button-ing" style="position: absolute; margin-top: 700px; width: 85%;" id="champiñonesdisplay" onclick="popup();champiñonesD();champiñonesingD();sumaring();agregarIngrediente(' Champiñones');"><img class="ing-img" src="/PalmasPizzaIMG/champiñones.png" ><br> Champiñones <span class="masIngspan" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
      <button type="button" class="button-ing-selected" style=" position: absolute; margin-top: 700px; width: 85%;" id="champiñoneshidden" onclick="popup();champiñonesH();champiñonesingH();restaring();eliminarIngrediente(' Champiñones', '')" hidden><img class="ing-img" src="/PalmasPizzaIMG/champiñones.png" ><br> Champiñones</button>
    
    
    
      
    
    
    </div>
  
  
  
  
  
  
  
                </div>
  <br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br>
            <a id="#anchor-pedir-"></a>
             
           <footer>
            <button type="button" class="buttons" style=" width: 100%; height: 70px !important;" data-close="" id="agregar-al-pedido-arma-tu-pizza" onclick="sumartodo();finalizarpedidoarriba();agregarproducto();popup();" ><span onclick="sumartodo();finalizarpedidoarriba();" style="margin-left: 5%;">Agregar al Pedido</span></button>
            <button onclick="tapup();seleccionarsalsa2();" type="button" class="buttons" style=" width: 100%; height: 70px !important;" data-close="" id="2-siguiente-arma-tu-pizza" data-open="2-selecciona-3-ingredientes" hidden><span style="margin-left: 5%;">Siguiente ➡️</span></button>
            <br><br><br><br>
           </footer>    
          </div>
        </div>
        </div>
  
  
          
  <!-- INICIO ARMA TU PIZZA 2 -->
  <div class="btn-group">
    <div class="modal cantidad-button" id="2-selecciona-3-ingredientes" data-animation="slideInOutLeft" >
      <div style="height: 100%;" class="modal-dialog" >
        <footer>
          <br>
          <br>
          <br>
          <br>
          <br>
  
              <button type="button" class="button-select" style="width: 90%; height: 70px !important;" data-close="">🔙 Volver </button>
              <input readolny disabled
              class="formulario__input"
        style="border-color: rgb(94, 94, 94) !important; padding-top: 5px !important;"
            />
                <br>
    <br>  
       
        </footer>
        <h1 style="color: #ff5500; font-size: 35px;">Pizza <br>
           2</h1>
        <div style="display: grid;">
          <img src="/PalmasPizzaIMG/pizzasola.png" style="position: absolute; z-index: 13; width: 100%;">
          <img src="/PalmasPizzaIMG/salsapizza.png" id="2-salsapizza-img" style="position: absolute; z-index: 14; width: 100%;" hidden>
          <img src="/PalmasPizzaIMG/salsabbq.png" id="2-salsabbq-img" style="position: absolute; z-index: 14; width: 100%;" hidden>
        </div>
      <div style="margin-top: 100%;">
      
        <h2 style="margin-left: 4%; font-size: 280%; ">Salsa:</h2>
        <p style="margin-left: 4%; font-size: 140%; font-family: 'Calibri', 'Arial Narrow', Arial,  Franklin Gothic Medium; color: rgb(93, 93, 93);">Selecciona la <span id="2-span-salsa-arma-tu-pizza" style="color: #ff5500;">Salsa</span> de tu Pizza</p>
        <button type="button"  class="tamaño button-select"  id="2-salsapizza" onclick="popup();cambiarcolorsalsapizza2();" >Salsa Pizza</button>
  
        
  <br><br>
        
        <button type="button"  class="tamaño button-select"  id="2-salsabbq" onclick="popup();cambiarcolorsalsabbq2();" >Salsa Barbacoa</button>
        
        <br><br><br>
        <button onclick="tapup();seleccionaringredientes2();" type="button" class="buttons" style=" width: 100%; height: 70px !important;" data-close="" data-open="2-arma-tu-pizza-seleccionar-ingredientes" ><span style="margin-left: 5%;">Siguiente ➡️</span></button>
  
  
  
      </div>
  
      </div>
    </div>
    </div>
  
  
    
  
  <div class="btn-group">
      <div class="modal cantidad-button" id="2-arma-tu-pizza-seleccionar-ingredientes" data-animation="slideInOutLeft" >
        <div style="height: 100%;  min-width: 100%;" class="modal-dialog" >
  
          <footer>
            <br>
            <br>
            <br>
            <br>
            <br>
  
                <button type="button" class="button-select" style="width: 90%; height: 70px !important;" data-close="">🔙 Volver </button>
               
                <input readolny disabled
                class="formulario__input"
          style="border-color: rgb(94, 94, 94) !important; padding-top: 5px !important;"
              />
                  <br>
                  <center style="font-size: 170%;">
                    <h2>Selecciona al menos <br>
                    <span style="color: #ff5500; text-decoration: underline black;">(3 Ingredientes)</span></h2>
                  </center>
      <br>  
         
          </footer>
              <h1 class="formulario__titulo" style="font-size: 320%;">Pizza 2</h1> <br>
              <br>
              
         
  
              
              <div id="2-ing-initial">
                <div style="display: grid; margin-bottom: 105%; width: 100%;">
                  <img src="/PalmasPizzaIMG/pizza.png" style="position: absolute; z-index: 14; width: 100%;">
                <img src="/PalmasPizzaIMG/champiñoness.png" id="2-champiñonesX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                <img src="/PalmasPizzaIMG/aceitunass.png" id="2-aceitunasX"  style="position: absolute; z-index: 15; width: 100%;" hidden> 
                <img src="/PalmasPizzaIMG/choclos.png" id="2-choclosX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                <img src="/PalmasPizzaIMG/churrascos.png" id="2-churrascosX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                <img src="/PalmasPizzaIMG/pimentones.png" id="2-pimentonesX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                <img src="/PalmasPizzaIMG/jamones.png" id="2-jamonesX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                <img src="/PalmasPizzaIMG/cebollas.png" id="2-cebollasX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                <img src="/PalmasPizzaIMG/pepperonis.png" id="2-pepperonisX"  style="position: absolute; z-index: 16; width: 100%;" hidden>
                <img src="/PalmasPizzaIMG/piñas.png" id="2-piñasX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                <img src="/PalmasPizzaIMG/tomates.png" id="2-tomatesX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                <img src="/PalmasPizzaIMG/salchichas.png" id="2-salchichasX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                <img src="/PalmasPizzaIMG/salames.png" id="2-salamesX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                <img src="/PalmasPizzaIMG/pollos.png" id="2-pollosX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
                <img src="/PalmasPizzaIMG/tocinos.png" id="2-tocinosX"  style="position: absolute; z-index: 15; width: 100%;" hidden>
          
                </div>
                <center>
                  <input type="text" class="" id="2-cantidading" value="0" disabled style="color: #ff5500; font-size: 35px; width: 40px; border: 0px; text-align: center; font-family:  'Calibri', Haettenschweiler, 'Arial Narrow Bold',  Franklin Gothic Medium; background: transparent;  display: grid !important;">
                
                   
                 </center>
    <br><br>
  
  
  
  
  
  
  
            <h2 style="margin-left: 4% !important; font-size: 200%; color: #ff5500;">Carnicos:</h2><br><br>
         <br><br>
  <div style="display: grid; place-items: center;">
    <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-left: 50%; width: auto !important;" id="2-salchichadisplay" value="salchichas" onclick="popup();salchichaD2();salchichaingD2();sumaring2();agregarIngrediente2(' Salchicha');"><img class="ing-img" src="/PalmasPizzaIMG/salchicha.png" ><br> Salchicha <span class="masIngspan2" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button>
    <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-left: 50%; width: auto !important;" id="2-salchichahidden" onclick="popup();salchichaH2();salchichaingH2();restaring2();eliminarIngrediente2(' Salchicha', '');"hidden><img class="ing-img" src="/PalmasPizzaIMG/salchicha.png" ><br> Salchicha</button>
  
  
  
  
  
   
    <button  type="button" class="button-ing" style="margin: 15px; position: absolute; margin-right: 50%;" id="2-churrascodisplay" onclick="popup();churrascoD2();churrascoingD2();sumaring2();agregarIngrediente2(' Churrasco');"><img class="ing-img" src="/PalmasPizzaIMG/churrasco.png" ><br> Churrasco <span class="masIngspan2" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
    <button  type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-right: 50%;" id="2-churrascohidden" onclick="popup();churrascoH2();churrascoingH2();restaring2();eliminarIngrediente2(' Churrasco', '');" hidden><img class="ing-img" src="/PalmasPizzaIMG/churrasco.png" ><br> Churrasco</button>
    
  
  
  
  <script></script>
    
    <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 250px; margin-left: 50%;" id="2-pepperonidisplay" onclick="popup();pepperoniD2();pepperoniingD2();sumaring2();agregarIngrediente2(' Pepperoni');"><img class="ing-img" src="/PalmasPizzaIMG/pepperoni.png" ><br> Pepperoni <span class="masIngspan2" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
    <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 250px; margin-left: 50%;" id="2-pepperonihidden" onclick="popup();pepperoniH2();pepperoniingH2();restaring2();eliminarIngrediente2(' Pepperoni', '');" hidden><img class="ing-img" src="/PalmasPizzaIMG/pepperoni.png" ><br> Pepperoni</button>
    
    
  
  
  
    <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 250px; margin-right: 50%;" id="2-salamedisplay" onclick="popup();salameD2();salameingD2();sumaring2();agregarIngrediente2(' Salame');"><img class="ing-img" src="/PalmasPizzaIMG/salame.png" ><br> Salame <span class="masIngspan2" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
    <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 250px; margin-right: 50%;" id="2-salamehidden" onclick="popup();salameH2();salameingH2();restaring2();eliminarIngrediente2(' Salame', '');" hidden><img class="ing-img" src="/PalmasPizzaIMG/salame.png" ><br> Salame</button>
    
  
  
  
    
    <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 500px; margin-left: 50%;" id="2-jamondisplay" onclick="popup();jamonD2();jamoningD2();sumaring2();agregarIngrediente2(' Jamón');"><img class="ing-img" src="/PalmasPizzaIMG/jamon.png" ><br> Jamón <span class="masIngspan2" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
    <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 500px; margin-left: 50%;" id="2-jamonhidden" onclick="popup();jamonH2();jamoningH2();restaring2();eliminarIngrediente2(' Jamón', '');" hidden><img class="ing-img" src="/PalmasPizzaIMG/jamon.png" ><br> Jamón</button>
  
  
  
  
  
  
    <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 500px; margin-right: 50%;" id="2-pollodisplay" onclick="popup();polloD2();polloingD2();sumaring2();agregarIngrediente2(' Pollo');"><img class="ing-img" src="/PalmasPizzaIMG/pollo.png" ><br> Pollo <span class="masIngspan2" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
    <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 500px; margin-right: 50%;" id="2-pollohidden" onclick="popup();polloH2();polloingH2();restaring2();eliminarIngrediente2(' Pollo', '');" hidden><img class="ing-img" src="/PalmasPizzaIMG/pollo.png" ><br> Pollo</button>
  
  
  
  
  
  
  
    <button type="button" class="button-ing" style="position: absolute; margin-top: 700px; width: 85%;" id="2-tocinodisplay" onclick="popup();tocinoD2();tocinoingD2();sumaring2();agregarIngrediente2(' Tocino');"><img class="ing-img" src="/PalmasPizzaIMG/tocino.png" ><br> Tocino <span class="masIngspan2" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
    <button type="button" class="button-ing-selected" style=" position: absolute; margin-top: 700px; width: 85%;" id="2-tocinohidden" onclick="popup();tocinoH2();tocinoingH2();restaring2();eliminarIngrediente2(' Tocino', '');" hidden><img class="ing-img" src="/PalmasPizzaIMG/tocino.png" ><br> Tocino</button>
  
  </div>
  
          <br><br><br>    <br>
              <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
              <br><br><br><br><br><br><br><br>
              <br><br><br><br>
                <input readolny disabled
              class="formulario__input"
       style="border-color: rgb(255, 106, 0) !important; padding-top: 0px; margin-top: -50px;"
            />
     
  
  
            
                       
            <h2 style="margin-left: 4% !important; font-size: 200%; color: #ff5500;">Vegetales:</h2><br><br><br><br>
         
  <div style="display: grid; place-items: center;">
    <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-left: 50%; width: auto !important;" id="2-pimentondisplay" onclick="popup();pimentonD2();pimentoningD2();sumaring2();agregarIngrediente2(' Pimentón');" ><img class="ing-img" src="/PalmasPizzaIMG/pimenton.png" ><br>Pimentón <span class="masIngspan2" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
    <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-left: 50%; width: auto !important;" id="2-pimentonhidden" onclick="popup();pimentonH2();pimentoningH2();restaring2();offagregarIng2();eliminarIngrediente2(' Pimentón', '')" hidden><img class="ing-img" src="/PalmasPizzaIMG/pimenton.png" ><br>Pimentón</button>
  
  
  
    <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-right: 50%;" id="2-cebolladisplay" onclick="popup();cebollaD2();cebollaingD2();sumaring2();agregarIngrediente2(' Cebolla');"><img class="ing-img" src="/PalmasPizzaIMG/cebolla.png" ><br>Cebolla <span class="masIngspan2" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
    <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-right: 50%;" id="2-cebollahidden" onclick="popup();cebollaH2();cebollaingH2();restaring2();eliminarIngrediente2(' Cebolla', '')" hidden><img class="ing-img" src="/PalmasPizzaIMG/cebolla.png" ><br>Cebolla</button>
    
    
    
    <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 250px; margin-left: 50%;" id="2-tomatedisplay" onclick="popup();tomateD2();tomateingD2();sumaring2();agregarIngrediente2(' Tomate');"><img class="ing-img" src="/PalmasPizzaIMG/tomate.png" ><br>Tomate <span class="masIngspan2" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
    <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 250px; margin-left: 50%;" id="2-tomatehidden" onclick="popup();tomateH2();tomateingH2();restaring2();eliminarIngrediente2(' Tomate', '')" hidden><img class="ing-img" src="/PalmasPizzaIMG/tomate.png" ><br>Tomate </button>
    
    
    
    <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 250px; margin-right: 50%;" id="2-choclodisplay" onclick="popup();chocloD2();chocloingD2();sumaring2();agregarIngrediente2(' Choclo');"><img class="ing-img" src="/PalmasPizzaIMG/choclo.png" ><br>Choclo <span class="masIngspan2" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
    <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 250px; margin-right: 50%;" id="2-choclohidden" onclick="popup();chocloH2();chocloingH2();restaring2();eliminarIngrediente2(' Choclo', '');" hidden><img class="ing-img" src="/PalmasPizzaIMG/choclo.png" ><br>Choclo </button>
    
    
    
    <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 500px; margin-left: 50%;" id="2-aceitunasdisplay" onclick="popup();aceitunasD2();aceitunasingD2();sumaring2();agregarIngrediente2(' Aceitunas');"><img class="ing-img" src="/PalmasPizzaIMG/aceitunas.png" ><br>Aceitunas <span class="masIngspan2" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
    <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 500px; margin-left: 50%;" id="2-aceitunashidden" onclick="popup();aceitunasH2();aceitunasingH2();restaring2();eliminarIngrediente2(' Aceitunas', '')" hidden><img class="ing-img" src="/PalmasPizzaIMG/aceitunas.png" ><br>Aceitunas</button>
    
    
    
    <button type="button" class="button-ing" style="margin: 15px; position: absolute; margin-top: 500px; margin-right: 50%;" id="2-piñadisplay" onclick="popup();piñaD2();piñaingD2();sumaring2();agregarIngrediente2(' Piña');"><img class="ing-img" src="/PalmasPizzaIMG/piña.png" ><br>Piña <span class="masIngspan2" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
    <button type="button" class="button-ing-selected" style="margin: 15px; position: absolute; margin-top: 500px; margin-right: 50%;" id="2-piñahidden" onclick="popup();piñaH2();piñaingH2();restaring2();eliminarIngrediente2(' Piña', '')" hidden><img class="ing-img" src="/PalmasPizzaIMG/piña.png" ><br>Piña</button>
  
  
  
  
    <button type="button" class="button-ing" style="position: absolute; margin-top: 700px; width: 85%;" id="2-champiñonesdisplay" onclick="popup();champiñonesD2();champiñonesingD2();sumaring2();agregarIngrediente2(' Champiñones');"><img class="ing-img" src="/PalmasPizzaIMG/champiñones.png" ><br> Champiñones <span class="masIngspan2" hidden><br><span class="addmoreclass">+</span><span class="add1000class">$1.000</span></button></button>
    <button type="button" class="button-ing-selected" style=" position: absolute; margin-top: 700px; width: 85%;" id="2-champiñoneshidden" onclick="popup();champiñonesH2();champiñonesingH2();restaring2();eliminarIngrediente2(' Champiñones', '')" hidden><img class="ing-img" src="/PalmasPizzaIMG/champiñones.png" ><br> Champiñones</button>
  
  
  
    
  
  
  </div>
  
  
  <script>
    function agregarIngrediente2(valor) {
      var areaDeTexto = document.getElementById("input-ingredientes-dos");
      areaDeTexto.value += valor + "\n";
    }
  
    
  </script>
  
  
  
  
              </div>
  <br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br>
          <a id="#2-anchor-pedir-"></a>
           
         <footer>
          <button type="button" class="buttons" style=" width: 100%; height: 70px !important;" data-close="" onclick="sumartodo();finalizarpedidoarriba();agregarproducto();popup();" ><span style="margin-left: 5%;">Agregar al Pedido</span></button>
        <br><br><br><br>
         </footer>    
        </div>
      </div>
      </div>
  <!-- FIN ARMA TU PIZZA 2 -->
  
  
  
  <!-- ITALIANA -->
  
  
  <a data-open="ventana-italiana" href="#anchor-pedir-italiana">
    <div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 100%; margin: auto; height: 170px; margin-top: 20px;">
      <button type="button" class="buttons" style="width: 100%; border-radius: 0%;"  onclick="italiana();popup();agregaralpedidopizza();"><span>+</span> Agregar Al Pedido</button>

      <img style="border-right: 2px solid #ff8800; height: 115px; width: 120px; border-bottom: 2px solid #ff8800; " class="img-pizza" src="/Pizzas/italiana.png" alt="">
    
        <br>
        
        <p class="nombre-pizza" style="margin-top: -120px;">ITALIANA</p>
        <p class="ing-pizza">Salsa, Queso:
          <br> Champiñón, Aceituna, Pepperoni, Salchicha</p>
      
             </div>
             
  </a>
  
  
  

















<br>  <br>
<br>


<!-- HAWAIANA -->


<a data-open="ventana-hawaiana" href="#anchor-pedir-hawaiana">
<div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 100%; margin: auto; height: 170px; margin-top: 20px;">
  <button type="button" class="buttons" style="width: 100%; border-radius: 0%;" id="agregar-hawaiana" onclick="popup();hawaiana();agregaralpedidopizza();"><span>+</span> Agregar Al Pedido</button>

  <img style="border: 2px solid rgb(255, 136, 0); height: 113px; width: 120px; border-bottom: 0px;" class="img-pizza" src="/Pizzas/hawaiana.png" alt="">

    
    <p class="nombre-pizza">HAWAIANA</p>
    <p class="ing-pizza">Salsa, Queso: <br>
Piña, Jamón</p>

<br><br><br>


         </div>
         
</a>










<br>  <br>
<br>



<!-- NAPOLITANA -->


<a data-open="ventana-napolitana" href="#anchor-pedir-napolitana">
<div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 100%; margin: auto; height: 170px; margin-top: 20px;">
  <button type="button" class="buttons" style="width: 100%; border-radius: 0%;" id="agregar-napolitana" onclick="popup();napolitana();agregaralpedidopizza();"><span>+</span> Agregar Al Pedido</button>

  <img style="border: 2px solid rgb(255, 136, 0); height: 113px; width: 120px; border-bottom: 0px;" class="img-pizza" src="/Pizzas/napolitana.png" alt="">

    
    <p class="nombre-pizza">NAPOLITANA</p>
    <p class="ing-pizza">Salsa, Queso: <br>
Tomate, Aceitunas</p>

      

         </div>
         
</a>
















<br>  <br>
<br>


<!-- SUPER PEPPERONI -->


<a data-open="ventana-superpepperoni" href="#anchor-pedir-superpepperoni">
<div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 100%; margin: auto; height: 170px; margin-top: 20px;">
  <button type="button" class="buttons" style="width: 100%; border-radius: 0%;" id="agregar-superpepperoni" onclick="popup();superpepperoni();agregaralpedidopizza();"><span>+</span> Agregar Al Pedido</button>

  <img style="border: 2px solid rgb(255, 136, 0); height: 113px; width: 120px; border-bottom: 0px;" class="img-pizza" src="/Pizzas/superpepperoni.png" alt="">

    
    <p class="nombre-pizza">SUPER PEPERONI</p>
    <p class="ing-pizza">Salsa, Queso: <br>
EXTRA Pepperoni</p>

      

         </div>
         
</a>











<br>  <br>
<br>

<!-- VEGETARIANA -->


<a data-open="ventana-vegetariana" href="#anchor-pedir-vegetariana">
  <div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 100%; margin: auto; height: 170px; margin-top: 20px;">
    <button type="button" class="buttons" style="width: 100%; border-radius: 0%;" id="agregar-vegetariana" onclick="popup();vegetariana();agregaralpedidopizza();"><span>+</span> Agregar Al Pedido</button>

    <img style="border: 2px solid rgb(255, 136, 0); height: 113px; width: 120px; border-bottom: 0px;" class="img-pizza" src="/Pizzas/vegetariana.png" alt="">
  
      
      <p class="nombre-pizza">VEGETARIANA</p>
      <p class="ing-pizza" style="font-size: 125%;" >Salsa, Queso: <br>
        Cebolla, Tomate, Champiñón, Choclo, Aceitunas</p>
  
        
  
           </div>
           
  </a>
  
  
  
  
  


<!-- FIN DE VEGETARIANA -->

<br>  <br>
<br>


<!-- LUCO PIZZA -->


<a data-open="ventana-lucopizza" href="#anchor-pedir-lucopizza">
<div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 100%; margin: auto; height: 170px; margin-top: 20px;">
  <button type="button" class="buttons" style="width: 100%; border-radius: 0%;" id="agregar-lucopizza" onclick="popup();lucopizza();agregaralpedidopizza();"><span>+</span> Agregar Al Pedido</button>
  
  <img style="border: 2px solid rgb(255, 136, 0); height: 114px; width: 120px; border-bottom: 0px;" class="img-pizza" src="/Pizzas/lucopizza.png" alt="">

    
    <p class="nombre-pizza">LUCO PIZZA</p>
    <p class="ing-pizza">Salsa, Queso: <br>
      Tomate, Churrasco, Oregano. </p>

      

         </div>
         
</a>







<!-- FIN DE LUCO PIZZA -->


<br>  <br>
<br>


<!-- CHEESEBURGER -->


<a data-open="ventana-cheeseburger" href="#anchor-pedir-cheeseburger">
  <div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 100%; margin: auto; height: 170px; margin-top: 20px;">
    <button type="button" class="buttons" style="width: 100%; border-radius: 0%;" id="agregar-cheeseburger" onclick="popup();cheeseburger();agregaralpedidopizza();"><span>+</span> Agregar Al Pedido</button>

    <img style="border: 2px solid rgb(255, 136, 0); height: 113px; width: 120px; border-bottom: 0px;" class="img-pizza" src="/Pizzas/cheeseburger.png" alt="">
  
      
      <p class="nombre-pizza" style="font-size: 25px;">CHEESEBURGER</p>
      <p class="ing-pizza">Salsa, Queso: <br>
        Jamón, Pepperoni, Salchicha, Tocino </p>
  
        
  
           </div>
           
  </a>
  
  
  
  
  
 

  <!-- FIN DE CHEESEBURGER -->
  



  <br>  <br>
  <br>

<!-- POLLO BBQ -->


<a data-open="ventana-pollobbq" href="#anchor-pedir-pollobbq">
<div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 100%; margin: auto; height: 170px; margin-top: 20px;">
  <button type="button" class="buttons" style="width: 100%; border-radius: 0%;" id="agregar-pollobbq" onclick="popup();pollobbq();agregaralpedidopizza();"><span>+</span> Agregar Al Pedido</button>

  <img style="border: 2px solid rgb(255, 136, 0); height: 113px; width: 120px; border-bottom: 0px;" class="img-pizza" src="/Pizzas/pollobbq.png" alt="">

    
    <p class="nombre-pizza">POLLO BBQ</p>
    <p class="ing-pizza">Salsa Barbacoa, Queso: <br>
      Cebolla, Pollo, Tocino</p>

      

         </div>
         
</a>






<!-- FIN DE POLLO BBQ -->
<br>  <br>
<br>

<!-- CHILLIAN -->


<a data-open="ventana-chillian" href="#anchor-pedir-chillian">
<div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 100%; margin: auto; height: 170px; margin-top: 20px;">
  <button type="button" class="buttons" style="width: 100%; border-radius: 0%;" id="agregar-chillian" onclick="popup();chillian();agregaralpedidopizza();"><span>+</span> Agregar Al Pedido</button>

  <img style="border: 2px solid rgb(255, 136, 0); height: 113px; width: 120px; border-bottom: 0px;" class="img-pizza" src="/Pizzas/chillian.png" alt="">

    
    <p class="nombre-pizza">CHILLIAN</p>
    <p class="ing-pizza">Salsa, Queso: <br>
      Jamón, Pepperoni, Pimentón, Cebolla </p>

      

         </div>
         
</a>







<br>
<br>  <br>
<br>
<br> 








    </form>

<!-- FIN FORM1 -->


































<!-- INICIO FORM2 -->

<!-- FIN FORM2 -->

      <script src="/Javascript/ventanas.js"></script>
      <script src="/Javascript/palmaspizza.js"></script>
   <script src="/Javascript/armatupizza.js"></script>
   <script src="/Javascript/armatupizza2.js"></script>
</body>
</div>
</html>