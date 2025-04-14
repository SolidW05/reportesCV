package com.proyecto.reportes.controllers.views;

import com.proyecto.reportes.models.DTO.UsuarioSesionDTO;
import com.proyecto.reportes.security.UsuarioDetailService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexControlador {

    @GetMapping("/indice")
    public String index() {
        return "index";
    }

    @GetMapping("/home")
    public String home(HttpSession session, Model model){
        UsuarioSesionDTO usuarioSesionDTO = (UsuarioSesionDTO) session.getAttribute("usuarioSesion");

        // se inyectan los valores obtenidos con model
        model.addAttribute("nombre", usuarioSesionDTO.getNombre());
        return "Pagina";
    }

    @GetMapping("/prueba")
    public String prueba(){
        return "prueba";
    }
}
