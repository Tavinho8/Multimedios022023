var frm_curso = document.getElementById("frm_curso");
var contenidoMenu = document.querySelector("#contenidoMenu");

var nombre = document.getElementById("nombre").value;
var descripcion = document.getElementById("Descripcion");
var tiempo = document.getElementById("tiempo");

frm_curso.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("salvando");

  var datosenviar = {
    nombre: nombre,
    descripcion: descripcion,
    tiempo: tiempo,
    usuario: "profesor Mario",
  };
  // console.log(datosenviar);
  fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php", {
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
