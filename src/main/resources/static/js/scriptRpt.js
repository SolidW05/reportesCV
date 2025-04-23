document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-reporte");
    const tabla = document.querySelector("#tabla-dinamica tbody");
    const tablaSeccion = document.getElementById("tabla-reporte");
  
    if (formulario) {
      console.log("Formulario encontrado");
      formulario.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const tipo = document.getElementById("tipo").value;
        const municipio = document.getElementById("municipio").value;
        const autoridad = document.getElementById("autoridad").value;
        const fecha = document.getElementById("fecha").value;
        const colonia = document.getElementById("colonia").value;
        const calle = document.getElementById("calle").value;
        const detalles = document.getElementById("detalles").value;
  
        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${tipo}</td>
        <td>${municipio}</td>
        <td>${autoridad}</td>
        <td>${fecha}</td>
        <td>${colonia}</td>
        <td>${calle}</td>
        <td>${detalles}</td>
      `;
        tabla.appendChild(fila);
  
        tablaSeccion.style.display = "block";
        formulario.reset();
      });
    }
  });


function activarClicksTabla() {
  const table = document.getElementById("tabla-usuario");

  table.addEventListener("click", function (e) {
    const row = e.target.closest("tr");

    // Evitar encabezado
    if (!row || row.rowIndex === 0) return;

    const celdas = row.getElementsByTagName("td");

    // Llenar el formulario con datos correctos
    document.getElementById("servicio").value = celdas[9].innerText;
    document.getElementById("municipio").value = celdas[6].innerText;
    document.getElementById("autoridad").value = celdas[8].innerText;
    document.getElementById("fecha").value = celdas[1].innerText;
    document.getElementById("colonia").value = celdas[5].innerText;
    document.getElementById("calle").value = celdas[3].innerText;
    document.getElementById("numero").value = celdas[4].innerText;
    document.getElementById("codigoPostal").value = celdas[7].innerText;
    document.getElementById("descripcion").value = celdas[0].innerText; // ID como "descripción"
    document.getElementById("Estatus").value = celdas[2].innerText;

    // Observaciones opcionales en columna 11 (teléfono en tu tabla actual)
    if (celdas[11]) {
      document.getElementById("Observaciones").value = celdas[11].innerText;
    } else {
      document.getElementById("Observaciones").value = "";
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
  activarClicksTabla();
});
