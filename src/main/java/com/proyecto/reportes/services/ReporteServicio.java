package com.proyecto.reportes.services;

import com.proyecto.reportes.models.DTO.ReporteCrearDTO;
import com.proyecto.reportes.models.Reporte;
import com.proyecto.reportes.models.Usuario;
import com.proyecto.reportes.repositories.ReporteRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReporteServicio {

    @Autowired
    private ReporteRepositorio reporteRepositorio;


    public List<Reporte> obtenerReportes(){
        return reporteRepositorio.findAll();
    }

    public Reporte encontrarDatos(ReporteCrearDTO reporteDTO){
        return new Reporte();
    }
    public Reporte crearReporte(Reporte nuevoReporte){

        return reporteRepositorio.save(nuevoReporte);
    }

}
