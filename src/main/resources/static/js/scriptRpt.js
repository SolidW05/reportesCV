import { setIdReporte } from "./scriptActualizarEstado.js";
function activarClicksTabla() {
  const table = document.getElementById("tabla-usuario");

  table.addEventListener("click", function (e) {
    const row = e.target.closest("tr");
    const id = row.dataset.id; // Obtener el ID del reporte desde el atributo data-id
    setIdReporte(id);
    const url = `http://192.168.1.79:7512/api/reporte/${id}`; // URL de la API para obtener el reporte específico
    
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        llenarFormulario(data);
        document.getElementById("contact").scrollIntoView({
          behavior: "smooth" // animación suave
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  });
}

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
      document.getElementById("Observaciones").value = data.obs ?? "";
}

document.addEventListener("DOMContentLoaded", () => {
  activarClicksTabla();
});
