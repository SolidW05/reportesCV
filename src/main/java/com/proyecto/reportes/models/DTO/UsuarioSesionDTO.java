package com.proyecto.reportes.models.DTO;

public class UsuarioSesionDTO {
    private String nombre;
    private Integer id;

    public UsuarioSesionDTO(String nombre, Integer id) {
        this.nombre = nombre;
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public Integer getId() {
        return id;
    }
}
