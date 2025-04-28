document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const btnSignIn = document.getElementById("btn-sign-in");
    const btnSignUp = document.getElementById("btn-sign-up");
    const userInput = document.getElementById("user");

    // Comprobar si estamos en móvil para manejar el diseño diferente
    function checkMobile() {
        return window.innerWidth <= 768;
    }

    // Función para manejar el cambio entre formularios
    function toggleForms() {
        if (checkMobile()) {
            // En móvil, mostramos/ocultamos los formularios según sea necesario
            if (container.classList.contains("toggle")) {
                container.classList.remove("toggle");
            } else {
                container.classList.add("toggle");
            }
        } else {
            // En desktop, comportamiento original
            if (btnSignIn === event.target) {
                container.classList.remove("toggle");
            } else {
                container.classList.add("toggle");
            }
        }
    }

    btnSignIn.addEventListener("click", function(event) {
        event.preventDefault();
        container.classList.remove("toggle");
    });
    
    btnSignUp.addEventListener("click", function(event) {
        event.preventDefault();
        container.classList.add("toggle");
    });

    // Manejar el registro exitoso
    const registroBtn = document.querySelector(".sign-up .button");
    const mensajeExito = document.getElementById("registro-exitoso");

    registroBtn.addEventListener("click", function(event) {
        event.preventDefault();
        
        // Mostrar mensaje de éxito
        mensajeExito.style.display = "block";
        
        // Ocultar después de 3 segundos
        setTimeout(() => {
            mensajeExito.style.display = "none";
        }, 3000);
    });
    
    // Ajustar las vistas cuando la ventana cambia de tamaño
    window.addEventListener('resize', function() {
        if (checkMobile()) {
            // Ajustes para móvil si es necesario
        }
    });
});
  