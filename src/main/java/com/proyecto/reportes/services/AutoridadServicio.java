package com.proyecto.reportes.services;

import com.proyecto.reportes.repositories.AutoridadRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AutoridadServicio {

    @Autowired
    private AutoridadRepositorio autoridadRepositorio;
}
