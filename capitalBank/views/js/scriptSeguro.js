import { formularioAuto } from "../../controllers/ControllerSeguro.js";
import { expresionesRegulares } from "../../helpers/expresiones.js";

document.getElementById("botonSolicitar").addEventListener("click",formularioAuto);

let inputs = document.getElementsByTagName("input");
for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener("keyup", validarFormulario);
}

function validarFormulario(e) {
    // console.log(e.target.name);
    switch (e.target.name) {
        case "register-nombre":
        if (expresionesRegulares.nombre.test(e.target.value)) {
            document.getElementById("seguro-auto-nombre").classList.add("correcto")
            document.getElementById("seguro-auto-nombre").classList.remove("incorrecto")
        } else {
            document.getElementById("seguro-auto-nombre").classList.add("incorrecto")  
            document.getElementById("seguro-auto-nombre").classList.remove("correcto") 
            // document.getElementById("mensaje-nombre").textContent ="El nombre debe ser en mayuscula" 
        }
            break;
            case "register-usuario":
        if (expresionesRegulares.usuario.test(e.target.value)) {
            document.getElementById("seguro-auto-email").classList.add("correcto")
            document.getElementById("seguro-auto-email").classList.remove("incorrecto")
        } else {
            document.getElementById("seguro-auto-email").classList.add("incorrecto")  
            document.getElementById("seguro-auto-email").classList.remove("correcto")  
        }
            break;
            case "register-correo":
        if (expresionesRegulares.correo.test(e.target.value)) {
            document.getElementById("seguro-auto-telefono").classList.add("correcto")
            document.getElementById("seguro-auto-telefono").classList.remove("incorrecto")
        } else {
            document.getElementById("seguro-auto-telefono").classList.add("incorrecto")  
            document.getElementById("seguro-auto-telefono").classList.remove("correcto")  
        }
            break;
            case "register-contrasena":
        if (expresionesRegulares.contraseña.test(e.target.value)) {
            document.getElementById("seguro-auto-modelo").classList.add("correcto")
            document.getElementById("seguro-auto-modelo").classList.remove("incorrecto")
        } else {
            document.getElementById("seguro-auto-modelo").classList.add("incorrecto")  
            document.getElementById("seguro-auto-modelo").classList.remove("correcto")  
        }
            break;
            
            
        default:
            break;
    }
}