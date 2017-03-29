//alert("Éxito");
var titulo = document.getElementById("tituloNuevaLista").value;


function MoldeListaPendientes(titulo, lista, input, boton) {
  this.titulo = titulo,
  this.lista = lista,
  this.input = inputPendientes,
  this.boton = boton
}

// AGREGAR ELEMENTOS A CONTENEDOR GENERAL DESDE EL INPUT
function agregarTitulo(){
  var encabezadoUno = document.createElement("h2");
  var tituloUno = document.createTextNode(encabezadoUno);
  tituloUno.innerHTML = MoldeListaPendientes.titulo;
  console.log(tituloUno);
  (encabezadoUno.appendChild(tituloUno));
  document.getElementById("contenedorListas").appendChild(encabezadoUno);
}

var inputPendiente = document.createElement("input");

function agregarLista(){
  var lista = document.createElement("ul");
  var listaElemento = document.createElement("li");
  listaElemento.innerText = inputPendiente.value;
  lista.appendChild(listaElemento);
  document.getElementById("contenedorPendienteSemana").appendChild(lista);

}

function agregarInputDePendiente(){
  var valorDelInput = inputPendiente.value;
  document.getElementById("contenedorPendienteSemana").appendChild(inputPendiente);
}

function agregarBotonParaPendientes(){
  var botonAnadir = document.createElement("button");
  inputPendiente.appendChild(botonAnadir);
  botonAnadir.innerText = "Añadir pendiente";
  document.getElementById("contenedorPendienteSemana").appendChild(botonAnadir);
}

function agregarDivASection(){
  var contenedorMenor = document.getElementById("contenedorPendienteSemana");
  var contenedorGeneral = document.getElementById("contenedorListas");
  contenedorMenor.appendChild("contenedorListas");
  document.getElementById("contenedorListas").appendChild("contenedorPendienteSemana");
}

/*-------- PRUEBAS RADIOACTIVAS ---------------------------------------------------------------*/
/*----CONTENEDOR DE LISTAS (CONTENEDOR GENERAL) ----
var contenedorListas = [];

var titulo = document.getElementById("tituloNuevaLista").value;


/*-----CREAR OBJETO LISTA DE PENDIENTES ----
function ListaDePendientes (mostrarTitulo) {
  this.mostrarTitulo = function (){
  var titulo = document.getElementById("tituloNuevaLista").value;
  return titulo;
  titulo.innerText = document.createElement("h2");
  console.log(titulo);
  }

};

function agregarTitulo(){
  console.log(ListaDePendientes.mostrarTitulo);
}





//alert("Éxito");

function ListaDePendientes (titulo, lista, input, boton){
  this.titulo = titulo;
  this.lista = lista;
  this.input = input;
  this.boton = boton;
};

var listaPendientesUno = new ListaDePendientes (
  titulo = "titulo",
  lista = "lista",
  input = "input",
  boton = "boton"
)

console.log(listaPendientesUno.titulo);
*/
