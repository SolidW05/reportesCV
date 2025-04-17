package com.proyecto.reportes.models;

import jakarta.persistence.*;
@Entity
@Table(name = "Ubicacion")
public class Ubicacion {
    public Integer getIdUbicacion() {
        return idUbicacion;
    }

    public void setIdUbicacion(Integer idUbicacion) {
        this.idUbicacion = idUbicacion;
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getColonia() {
        return colonia;
    }

    public void setColonia(String colonia) {
        this.colonia = colonia;
    }

    public String getCodigoPostal() {
        return codigoPostal;
    }

    public void setCodigoPostal(String codigoPostal) {
        this.codigoPostal = codigoPostal;
    }

    public Municipio getMunicipio() {
        return municipio;
    }

    public void setMunicipio(Municipio municipio) {
        this.municipio = municipio;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUbicacion;

    @Column(nullable = false, length = 80)
    private String calle;

    @Column(name = "Num", nullable = false, length = 10)
    private String numero;

    @Column(nullable = false, length = 45)
    private String colonia;

    @Column(nullable = false, length = 8)
    private String codigoPostal;

    @ManyToOne
    @JoinColumn(name = "municipio")
    private Municipio municipio;
}
