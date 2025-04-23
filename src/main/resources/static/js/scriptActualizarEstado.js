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
        observaciones: document.getElementById("Observaciones").value
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
    })
    .catch(error => console.error("Error:", error));
});