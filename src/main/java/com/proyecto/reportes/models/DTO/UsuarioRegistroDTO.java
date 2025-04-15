package com.proyecto.reportes.models.DTO;

public class UsuarioRegistroDTO {
    private String nombre;
    private String correo;
    private String password;
    private String curp;


    public UsuarioRegistroDTO(){}
        public String getNombre(){
            return nombre;

    }

    public void SetNombre(String nombre){
        this.nombre = nombre;
    }

    public String getCorreo(){
        return correo;
    }
    public void setCorreo(String correo){
        this.correo = correo;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }
    public String getCurp(){
        return curp;
    }
    public void setCurp(String curp){
        this.curp = curp;
    }
}
