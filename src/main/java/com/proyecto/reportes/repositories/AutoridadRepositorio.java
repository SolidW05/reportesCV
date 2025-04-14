package com.proyecto.reportes.repositories;

import com.proyecto.reportes.models.Autoridad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AutoridadRepositorio extends JpaRepository<Autoridad, Integer> {
}
