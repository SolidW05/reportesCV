document.getElementById("formulario-reporte").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = {
        idUsuario: document.body.dataset.id,
        idAutoridad: document.getElementById("autoridad").value,
        municipio: document.getElementById("municipio").value,
        colonia: document.getElementById("colonia").value,
        calle: document.getElementById("calle").value,
        numero: document.getElementById("numero").value,
        codigoPostal: document.getElementById("codigoPostal").value,
        fecha: document.getElementById("fecha").value,
        descripcion: document.getElementById("descripcion").value,
    };

    fetch(`http://localhost:7512/api/reporte`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario)
    })
    .then(response => response.json())
    .then(data => {
        const autoridadSelect = document.getElementById("autoridad");
        autoridadSelect.disabled = true; // Desactivar el select de autoridad
        this.reset(); // Limpiar el formulario después de enviar
        showPopup(data); // Mostrar el popup con el id del reporte creado
    })
    .catch(error => console.error("Error:", error));
});

function showPopup(id) {
    
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const popupMessage = document.getElementById("popup-message");

    if (id == null) {
        popupMessage.textContent = "Error al crear el reporte"; // Mensaje personalizado si lo necesitas
    }
    else{
    popupMessage.textContent = `El reporte se ha creado un id ${id}`;
    }
    popup.classList.add("active");
    overlay.classList.add("active");
}

function closePopup() {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");

    popup.classList.remove("active");
    overlay.classList.remove("active");
}

document.querySelectorAll("[data-close-button]").forEach(button => {
    button.addEventListener("click", () => {
        closePopup();  
    });
});

document.getElementById("overlay").addEventListener("click", () => {
    closePopup();  
});

