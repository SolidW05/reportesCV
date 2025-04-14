package com.proyecto.reportes.controllers.rest;

import com.proyecto.reportes.models.Reporte;
import com.proyecto.reportes.services.ReporteServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reporte")
public class ReporteControlador {

    @Autowired
    private ReporteServicio reporteServicio;

    @GetMapping
    public List<Reporte> reporteList(){
        return reporteServicio.obtenerReportes();
    }

    @PostMapping
    public Reporte agregarReporte(@RequestBody Reporte nuevoReporte){

        return new Reporte();
    }

}
