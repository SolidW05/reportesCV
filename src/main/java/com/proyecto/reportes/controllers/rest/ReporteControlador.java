package com.proyecto.reportes.controllers.rest;

import com.proyecto.reportes.models.DTO.ReporteRespuestaDTO;
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
    public List<ReporteRespuestaDTO> reporteList(){
        return reporteServicio.reportesLimpios();
    }

    @GetMapping("/usuarios/{id}")
    public List<ReporteRespuestaDTO> reportesUsuario(@PathVariable Integer id){
        return reporteServicio.reportesPorUsuario(id);
    }

    @PostMapping
    public Reporte agregarReporte(@RequestBody Reporte nuevoReporte){

        return new Reporte();
    }

}
