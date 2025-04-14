class Ubicacion{
    constructor(calle, numero, colonia, cp, estado){
        this.calle = calle;
        this.numero = numero;
        this.colonia = colonia;
        this.cp = cp;
        this.estado = estado;
    }
}

class ReporteCreado {
    constructor(descripcion, fechaReporte,
         foto, tipoDeProblema, 
         ubicacion,idUsuario,idAutoridad) {
        
        this.descripcion = descripcion;
        this.fechaReporte = fechaReporte;
        this.foto = foto;
        this.tipoDeProblema = tipoDeProblema;
        this.ubicacion = ubicacion;
        this.idUsuario = idUsuario;
        this.idAutoridad = idAutoridad;
    }
}

document.getElementById("reporte-agua").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Creando reporte...");
    const ubicacion = new Ubicacion(
        document.getElementById("calle").value,
        document.getElementById("numero").value,
        document.getElementById("colonia").value,
        document.getElementById("cp").value,
        document.getElementById("estado").value,

    );
    
    const reporte = new ReporteCreado(
    document.getElementById("descripcion").value,
    document.getElementById("fechaReporte").value,
    null,
    document.getElementById("tipoReporte").value,
    ubicacion,
    1001,
    1000
    );
    
    const reporteData = JSON.stringify(reporte);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: reporteData
    };
    console.log(reporteData);
});

fetch("/api/reportes", options)
.then(response => {
    if (!response.ok) {
        throw new Error("Error en la creación del reporte: " + response.statusText);
    }
    return response.json();
})
    .then(data => {
    console.log("Reporte creado:", data);
    alert("Reporte creado exitosamente.");
    })
    .catch(error => {
    console.error("Error:", error);
    alert("Error al crear el reporte: " + error.message);
});

