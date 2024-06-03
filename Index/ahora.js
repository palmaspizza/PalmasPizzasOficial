function agregarchillian1(){
  document.getElementById("ventana-pizza-chillian").hidden = true;
  agregar.play();
  document.getElementById("pedido-vacio").hidden = true;
  document.getElementById("agregar-chillian").hidden = false;
  document.getElementById("agregar-chillian-1").hidden = true;
  setTimeout(() => {
    finalizarpedidoarriba.play();
  }, 2000);
}
