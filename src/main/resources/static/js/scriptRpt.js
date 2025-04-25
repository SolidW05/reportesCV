import { setIdReporte } from "./scriptActualizarEstado.js";

$('#tabla-usuario tbody').on('click', 'tr', function () {
  const id = $(this).find('td').eq(0).text(); // Obtener el texto de la primera columna
  if (!id) return;
  setIdReporte(id); // Llamar a la función para establecer el idReporte

  const url = `http://localhost:7512/api/reporte/${id}`;

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(res => res.json())
  .then(data => {
    llenarFormulario(data);
    const reporteSeccion = document.getElementById("contact");
    reporteSeccion.style.display = "block"; // Mostrar la sección del formulario
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  })
  .catch(console.error);
});


function llenarFormulario(data) {
    document.getElementById("servicio").innerHTML = `<option selected>${data.servicio}</option>`;
    document.getElementById("municipio").innerHTML = `<option selected>${data.municipio}</option>`;
    document.getElementById("autoridad").innerHTML = `<option selected>${data.autoridad}</option>`;
    document.getElementById("fecha").value = data.fechaReporte;
    document.getElementById("colonia").value = data.colonia;
    document.getElementById("calle").value = data.calle;
    document.getElementById("numero").value = data.numero;
    document.getElementById("codigoPostal").value = data.codigoPostal;
    document.getElementById("descripcion").value = data.descripcion;
    const estatusSelect = document.getElementById("Estatus");
    const opcionesEstatus = ["Pendiente", "Revision", "Proceso", "Terminado"];
    estatusSelect.innerHTML = opcionesEstatus
      .map(opcion => {
        const selected = opcion === data.estado ? "selected" : "";
        return `<option value="${opcion}" ${selected}>${opcion}</option>`;
      })
      .join("");
      document.getElementById("observaciones").value = data.observaciones ?? "";
}

