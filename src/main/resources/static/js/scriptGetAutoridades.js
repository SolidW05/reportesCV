const servicioSelect = document.getElementById("servicio");
const municipioSelect = document.getElementById("municipio");
const autoridadSelect = document.getElementById("autoridad");

// Función para verificar si ambos selects tienen valores
function verificarSeleccionYActualizarAutoridades() {
    const servicio = servicioSelect.value;
    const municipio = municipioSelect.value;

    if (servicio && municipio) {
        // Ambos seleccionados, activar el select de autoridad
        autoridadSelect.disabled = false;

        // Aquí haces el fetch, suponiendo que el API usa parámetros tipo query
        const url = `http://localhost:7512/api/autoridad/municipio/${municipio}/servicio/${servicio}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Limpiar opciones anteriores
                autoridadSelect.innerHTML = '<option value="">Seleccione la autoridad</option>';

                data.forEach(autoridad => {
                    const option = document.createElement("option");
                    option.value = autoridad.id;
                    option.text = autoridad.autoridad;
                    console.log(autoridad.id, autoridad.autoridad); // Para depuración
                    autoridadSelect.appendChild(option);
                });
            })
            .catch(error => {
                console.error("Error al obtener autoridades:", error);
                autoridadSelect.disabled = true; // Si falla, lo desactivamos de nuevo
            });
    } else {
        // Falta uno de los dos -> desactivar autoridad
        autoridadSelect.disabled = true;
        autoridadSelect.innerHTML = '<option value="">Seleccione la autoridad</option>';
    }
}

// Escuchar cambios en ambos selects
servicioSelect.addEventListener("change", verificarSeleccionYActualizarAutoridades);
municipioSelect.addEventListener("change", verificarSeleccionYActualizarAutoridades);