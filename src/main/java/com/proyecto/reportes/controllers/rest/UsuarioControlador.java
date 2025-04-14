package com.proyecto.reportes.controllers.rest;

import com.proyecto.reportes.services.AutoridadServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioControlador {

    @Autowired
    private AutoridadServicio autoridadServicio;


}
