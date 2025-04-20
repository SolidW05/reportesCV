package com.proyecto.reportes.services;

import com.proyecto.reportes.models.DTO.ReporteCrearDTO;
import com.proyecto.reportes.models.DTO.ReporteRespuestaDTO;
import com.proyecto.reportes.models.Reporte;
import com.proyecto.reportes.models.Usuario;
import com.proyecto.reportes.models.Autoridad;
import com.proyecto.reportes.models.Ubicacion;
import com.proyecto.reportes.models.Municipio;
import com.proyecto.reportes.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReporteServicio {

    @Autowired
    private ReporteRepositorio reporteRepositorio;
    @Autowired
    private UsuarioRepositorio usuarioRepositorio;
    @Autowired
    private MunicipioRepositorio municipioRepositorio;
    @Autowired
    private UbicacionRepositorio ubicacionRepositorio;
    @Autowired
    private AutoridadRepositorio autoridadRepositorio;

    public List<Reporte> obtenerReportes(){
        return reporteRepositorio.findAll();
    }

    public List<ReporteRespuestaDTO> reportesLimpios(){
        return reporteRepositorio.obtenerReportesReducidos();
    }

    public List<ReporteRespuestaDTO> reportesPorUsuario(Integer idUsuario){
        return reporteRepositorio.obtenerReportesPorUsuario(idUsuario);
    }

    public Reporte encontrarDatos(ReporteCrearDTO reporteDTO){

        return new Reporte();
    }
    public Integer crearReporte(ReporteCrearDTO nuevoReporte){

        Usuario usuario = usuarioRepositorio.findById(nuevoReporte.getIdUsuario())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Autoridad autoridad = autoridadRepositorio.findById(nuevoReporte.getIdAutoridad())
                .orElseThrow(() -> new RuntimeException("Autoridad no encontrada"));

        Municipio municipio = municipioRepositorio.findById(nuevoReporte.getMunicipio())
                .orElseThrow(() -> new RuntimeException("Municipio no encontrado"));

        Ubicacion ubicacion = new Ubicacion(
                nuevoReporte.getCalle(),
                nuevoReporte.getNumero(),
                nuevoReporte.getColonia(),
                nuevoReporte.getCodigoPostal(),
                municipio
        );

        ubicacion = ubicacionRepositorio.save(ubicacion);

        // creacion del reporte
        Reporte reporte = new Reporte();
        reporte.setDescripcion(nuevoReporte.getDescripcion());
        reporte.setFechaReporte(nuevoReporte.getFecha());

        //Relaciones
        reporte.setUbicacion(ubicacion);
        reporte.setUsuario(usuario);
        reporte.setAutoridad(autoridad);

        return reporteRepositorio.save(reporte).getIdReporte();
    }

}
