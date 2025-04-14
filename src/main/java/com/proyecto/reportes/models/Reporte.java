package com.proyecto.reportes.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "Reportes")
public class Reporte {
    public Integer getIdReporte() {
        return idReporte;
    }
    public void setIdReporte(Integer idReporte) {
        this.idReporte = idReporte;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public EstadoReporte getEstado() {
        return estado;
    }

    public void setEstado(EstadoReporte estado) {
        this.estado = estado;
    }

    public LocalDate getFechaReporte() {
        return fechaReporte;
    }

    public void setFechaReporte(LocalDate fechaReporte) {
        this.fechaReporte = fechaReporte;
    }

    public byte[] getFoto() {
        return foto;
    }

    public void setFoto(byte[] foto) {
        this.foto = foto;
    }

    public String getTipoDeProblema() {
        return tipoDeProblema;
    }

    public void setTipoDeProblema(String tipoDeProblema) {
        this.tipoDeProblema = tipoDeProblema;
    }

    public Ubicacion getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(Ubicacion ubicacion) {
        this.ubicacion = ubicacion;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Autoridad getAutoridad() {
        return autoridad;
    }

    public void setAutoridad(Autoridad autoridad) {
        this.autoridad = autoridad;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idReportes")
    private Integer idReporte;

    @Column(nullable = false, length = 200)
    private String descripcion;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EstadoReporte estado;

    @Column(name = "Fecha_Reporte", nullable = false)
    private LocalDate fechaReporte;

    @Lob
    private byte[] foto;

    @Column(name = "Tipo_de_problema", nullable = false, length = 50)
    private String tipoDeProblema;

    @ManyToOne
    @JoinColumn(name = "idUbicacion", nullable = false)
    private Ubicacion ubicacion;

    @ManyToOne
    @JoinColumn(name = "idUsuarios", nullable = false)
    private Usuario usuario;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idAutoridades", nullable = false)
    private Autoridad autoridad;

    public enum EstadoReporte {
        Pendiente, Revision, Proceso, Terminado
    }
}
