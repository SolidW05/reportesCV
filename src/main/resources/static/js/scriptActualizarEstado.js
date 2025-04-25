var idReporte;

export function setIdReporte(id) {
    idReporte = id;
}
 

document.getElementById("formulario-reporte")
.addEventListener("submit", function(event) {
    event.preventDefault();

    const reporteAct = {
        idReporte: idReporte,
        estatus: document.getElementById("Estatus").value,
        observaciones: document.getElementById("observaciones").value
    };

    let url = `http://localhost:7512/api/reporte/actualizar/estatus` 
    console.log(url)
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reporteAct)
    })
    .then(response => response.json())
    .then(data => {
        this.reset(); // Limpiar el formulario después de enviar
        const reporteSeccion = document.getElementById("contact");
        reporteSeccion.style.display = 'none'; // Mostrar la sección del formulario
        document.getElementById("tabla-usuario-reportes").scrollIntoView({
          behavior: "smooth"
        });
    })
    .catch(error => console.error("Error:", error));
});
