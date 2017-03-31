var encabezado = document.createElement("h2");
var titulo = document.getElementById("tituloNuevaLista");
var id = Date.now();

function ListaIndividual () {
  this.titulo = function crearLista () {

    encabezado.innerHTML = titulo.value;
  }
}

var listaTitulo = new ListaIndividual (titulo)
