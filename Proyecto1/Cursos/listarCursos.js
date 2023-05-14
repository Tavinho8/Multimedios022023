//Declaracion de variables u objetos
var contenidoTablaResultado = document.querySelector("#resultados");
const myModal = new bootstrap.Modal(document.getElementById("modalId"));
var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("salvando");
  var id = document.getElementById("id").value;
  var nombre = document.getElementById("nombre").value;
  var descripcion = document.getElementById("descripcion").value;
  var tiempo = document.getElementById("tiempo").value;

  //       //  apis/ActualizarCursos.php
  // // { "id":3, "nombre":"React 22",
  //  "descripcion":"React Junior",
  //  "tiempo":"10 Meses",

  var datosenviar = {
    id: id,
    nombre: nombre,
    descripcion: descripcion,
    tiempo: tiempo,
    usuario: "profesor Mario",
  };
  // console.log(datosenviar);
  fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php", {
    method: "POST",
    body: JSON.stringify(datosenviar),
  }) //url de peticion de datos
    .then((respuesta) => respuesta.json()) //recibe los datos en formato json
    .then((datosrepuesta) => {
      window.location = "listar.html";
      console.log("Datos", datosrepuesta); //Muestra el resultado de la peticion
    })
    .catch(console.log); //muestra errores
});

//[{"id":"377","nombre":"hola leo","descripcion":"sdsd","tiempo":"asasa"},
function cargarDatos() {
  //alert('Cargue datos');
  fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php") //url de peticion de datos
    .then((respuesta) => respuesta.json()) //recibe los datos en formato json
    .then((datosrepuesta) => {
      steTabla(datosrepuesta.data); //lo envio para la funcion para darle tratamiento
      // console.log('Datos',datosrepuesta.data)//Muestra el resultado de la peticion
    })
    .catch(console.log); //muestra errores
}

function steTabla(datos) {
  console.log("dato.........s", datos);
  //contenidoTablaResultado.innerHTML = 'test';
  for (const valor of datos) {
    // console.log('valor:',valor);
    //[{"id":"377","nombre":"hola leo","descripcion":"sdsd","tiempo":"asasa"},
    contenidoTablaResultado.innerHTML += `
                    <tr class="table-primary" >
                        <td scope="row">${valor.id}</td>
                        <td>${valor.nombre}</td>
                        <td>${valor.descripcion}</td>
                        <td>${valor.tiempo}</td>
                        <td>${valor.usuario}</td>
                       
                        <td>
                          <a name="" id="" class="btn btn-danger" onclick="eliminar('${valor.id}')" role="button">Borrar</a>
                          ||
                          <a name="" id="" class="btn btn-primary" onclick="editar('${valor.id}', '${valor.nombre}', '${valor.descripcion}', '${valor.tiempo}')" role="button">Editar</a>
                        </td>
                    </tr>`;
  }
}

function editar(id, nombre, descripcion, tiempo) {
  myModal.show();
  document.getElementById("nombre").value = nombre;
  document.getElementById("descripcion").value = descripcion;
  document.getElementById("tiempo").value = tiempo;
  document.getElementById("id").value = id;
}

function eliminar(id) {
  alert("eliminar" + id);
  var datosenviar = {
    id: id,
  };
  // console.log(datosenviar);
  fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php", {
    method: "POST",
    body: JSON.stringify(datosenviar),
  }) //url de peticion de datos
    .then((respuesta) => respuesta.json()) //recibe los datos en formato json
    .then((datosrepuesta) => {
      alert(datosrepuesta.data);
      console.log("Datos", datosrepuesta); //Muestra el resultado de la peticion
    })
    .catch(console.log); //muestra errores
}

cargarDatos();
