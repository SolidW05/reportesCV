package com.proyecto.reportes.controllers.rest;

import com.proyecto.reportes.models.DTO.ReporteCrearDTO;
import com.proyecto.reportes.models.DTO.ReporteRespuestaDTO;
import com.proyecto.reportes.models.Reporte;
import com.proyecto.reportes.services.ReporteServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Integer> agregarReporte(@RequestBody ReporteCrearDTO nuevoReporte){
        Integer idReporte = reporteServicio.crearReporte(nuevoReporte);

        return ResponseEntity.status(HttpStatus.CREATED).body(idReporte);

    }

}
