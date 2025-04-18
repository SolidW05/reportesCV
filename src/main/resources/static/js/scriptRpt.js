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