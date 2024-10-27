//botones del header y barra de navegacion primerias
function IrARegistro() {
    window.location.href = "Register.html";
}
function IrALogin() {
    window.location.href = "Login.html";
}
function IrAPrincipal() {
    window.location.href = "Index.html";
}
function IrAServicios() {
    window.location.href = "Servicios.html";
}
function IrATarjetasCredito() {
    window.location.href = "Tarjetas.html";
}
function IrACuentasAhorro() {
    window.location.href = "CuentasAhorros.html";
}
function IrALineasCredito() {
    window.location.href = "LineasCredito.html";
}
function IrAEmpresas() {
    window.location.href = "Empresas.html";
}
function IrASeguros() {
    window.location.href = "Seguros.html";
}
//botones de los servicios
function IrANotificacion() {
    window.location.href = "Notificaciones.html";
}
function IrATransferencias() {
    window.location.href = "Transferencias.html";
}
function IrAPagoFactura() {
    window.location.href = ".html";
}
function IrAConsultaMovimientos() {
    window.location.href = ".html";
}
function IrAConsultaCuenta() {
    window.location.href = ".html";
}

function IrA() {
    window.location.href = ".html";
}





function showInfo(id) {
    // Verifica si ya existe un modal y lo elimina antes de crear uno nuevo
    const existingModal = document.querySelector(".modal");
    if (existingModal) {
        existingModal.remove();
    }

    const section = document.getElementById(id);
    const info = section.querySelector(".additional-info");

    // Crea el modal
    const modal = document.createElement("div");
    modal.className = "modal";

    // Crea el contenido del modal con un botón para cerrar
    modal.innerHTML = `
      <div class="modal-content">
        ${info.innerHTML}
        <button class="close-modal" onclick="closeModal()">Cerrar</button>
      </div>
    `;

    // Añade el modal al body
    document.body.appendChild(modal);
    modal.style.display = "block";

    // Estilo para el fondo de modal (opcional para mejorar UX)
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    document.body.appendChild(overlay);
    overlay.style.display = "block";
}

function closeModal() {
    // Elimina el modal y la capa de fondo
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".modal-overlay");
    if (modal) {
        modal.remove();
    }
    if (overlay) {
        overlay.remove();
    }
}
