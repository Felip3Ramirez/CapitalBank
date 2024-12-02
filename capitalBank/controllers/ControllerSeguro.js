import {usuarios} from "../models/ModelSeguro.js"

export function formularioAuto (){

    var formularioAutoNombre = document.getElementById("seguro-auto-nombre").value;
    var formularioAutoCorreo = document.getElementById("seguro-auto-email").value;
    var formularioAutoTelefono = document.getElementById("seguro-auto-telefono").value;
    var formularioAutoModelo = document.getElementById("seguro-auto-modelo").value;
    var newFormulario = {
        nombre: formularioAutoNombre,
        correo: formularioAutoCorreo,
        telefono: formularioAutoTelefono,
        modelo: formularioAutoModelo
    };
    console.log(newFormulario);
    
}