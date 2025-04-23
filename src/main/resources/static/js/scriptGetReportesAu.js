import { aplicarDataLabels } from "./scripTablas.js";


function obtenerTodosReportesPorAu(tablaID) {

    const idUsr = document.body.dataset.id;
    let url = `http://192.168.1.79:7512/api/reporte/encargado/${idUsr}`;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const tbody = document.querySelector(`#${tablaID} tbody`);
        tbody.innerHTML = ""; // Limpiar el tbody antes de agregar nuevos datos
        data.forEach(element => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${element.idReporte}</td>
                <td>${element.fechaReporte}</td>
                <td>${element.estado}</td>
                <td>${element.calle}</td>
                <td>${element.numero}</td>
                <td>${element.colonia}</td>
                <td>${element.municipio}</td>
                <td>${element.codigoPostal}</td>
                <td>${element.autoridad}</td>
                <td>${element.servicio}</td>
                <td>${element.nombre}</td>
                <td>${element.telefono}</td>
                `
            ;
            tr.dataset.id = element.idReporte;
            tbody.appendChild(tr);
        });
        aplicarDataLabels(tablaID);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

}

window.addEventListener('load', () => {
    obtenerTodosReportesPorAu("tabla-usuario")

    setInterval(() => {
        obtenerTodosReportesPorAu("tabla-usuario")
    }, 5000); 
});