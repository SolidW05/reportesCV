package com.proyecto.reportes.services;

import com.proyecto.reportes.models.Autoridad;
import com.proyecto.reportes.repositories.AutoridadRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AutoridadServicio {

    @Autowired
    private AutoridadRepositorio autoridadRepositorio;

    public List<Autoridad> obtenerAutoridades(){
        return autoridadRepositorio.findAll();
    }
}
