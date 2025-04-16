package com.proyecto.reportes.models.DTO;

public class AutoridadIdDTO {

    public AutoridadIdDTO(Integer id, String encargado) {
        this.id = id;
        this.encargado = encargado;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEncargado() {
        return encargado;
    }

    public void setEncargado(String encargado) {
        this.encargado = encargado;
    }

    private Integer id;
    private String encargado;
}
