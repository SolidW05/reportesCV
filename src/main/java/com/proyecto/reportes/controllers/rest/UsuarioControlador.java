package com.proyecto.reportes.controllers.rest;

import com.proyecto.reportes.services.AutoridadServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.proyecto.reportes.models.DTO.UsuarioRegistroDTO;
import  com.proyecto.reportes.services.UsuarioServicio;


@RestController
@RequestMapping("/api/usuarios")
public class UsuarioControlador {

    @Autowired
    private AutoridadServicio autoridadServicio;
    @Autowired
    private UsuarioServicio usuarioServicio;

    @PostMapping("/registro")
    public ResponseEntity<String> registrar (@RequestBody UsuarioRegistroDTO dto){
        usuarioServicio.registrarUsuario(dto);
        return ResponseEntity.ok("Revisa tu correo para validar tu cuenta");

    }
    @GetMapping("/verificar")
    public ResponseEntity<String> verificar (@RequestParam("token") String token) {

        boolean validado = usuarioServicio.verificarCuenta(token);
        if (validado) {
            return ResponseEntity.ok("Cuenta verificada con exito");

        } else {
            return ResponseEntity.badRequest().body("Token Invalido o cuenta ya verificada.");

        }
    }


}
