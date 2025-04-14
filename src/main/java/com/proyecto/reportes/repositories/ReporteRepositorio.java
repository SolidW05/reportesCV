package com.proyecto.reportes.repositories;

import com.proyecto.reportes.models.Reporte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReporteRepositorio extends JpaRepository<Reporte, Integer> {

}
