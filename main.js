var mascotas = [];
function mostrarAlerta(mensaje) {
    let alert = document.querySelector(".cont_alerta");
    alert.textContent = mensaje;
    alert.classList.remove("alerta2");
    alert.classList.add("alerta2");
    setTimeout(() => {
        alert.textContent="";
        alert.classList.remove("alerta2");
    }, 3000);
}
function mostrarFormulario() {
    document.getElementById('formulario').style.display = 'block';
}
function guardarDatos() {

    var nombreMascota = document.getElementById('nombreMascota').value;
    var propietario = document.getElementById('propietario').value;
    var telefono = document.getElementById('telefono').value;
    var tipoMascota = document.getElementById('tipoMascota').value;
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var sintomas = document.getElementById('sintomas').value;


    if (!nombreMascota || !propietario || !telefono || !tipoMascota || !fecha || !hora) {
        mostrarAlerta('Por favor, completa todos los campos obligatorios.');
        return;
    }

    if (telefono.length < 9) {
        mostrarAlerta('El teléfono debe tener al menos 9 dígitos.');
        return;
    }

    var fechaSeleccionada = new Date(fecha);
    var hoy = new Date();

    if (fechaSeleccionada <= hoy) {
        mostrarAlerta('Selecciona una fecha posterior a hoy.');
        return;
    }

    var horaCita = parseInt(hora.split(':')[0]);
    if (horaCita < 8 || horaCita >= 18) {
        mostrarAlerta('La hora de la cita debe estar entre las 8am y las 6pm.');
        return;
    }

    var nuevaMascota = {
        nombre: nombreMascota,
        propietario: propietario,
        telefono: telefono,
        tipo: tipoMascota,
        fecha: fecha,
        hora: hora,
        sintomas: sintomas
    };

    mascotas.push(nuevaMascota);
    limpiarFormulario();
    console.log(mascotas);
    var rutaImagen = determinarRutaImagen(tipoMascota);

    var nuevaCitaAsignada = document.createElement('div');
    nuevaCitaAsignada.className = 'citaAsignadaCard';
    nuevaCitaAsignada.innerHTML = `
        <img src="${rutaImagen}" alt="Imagen de la mascota" style="max-width: 100%; height: auto;">
        <p> Nombre Mascota = ${nombreMascota}</p>
        <p> Propietario = ${propietario}</p>
        <p> Telefono = ${telefono}</p>
        <p> Tipo Mascota = ${tipoMascota}</p>
        <p> Fecha = ${fecha}</p>
        <p> Hora = ${hora}</p>
        <p> Sintomas = ${sintomas}</p>
        <button onclick="editarCita(this)">Editar</button>
        <button onclick="marcarCitaAnulada(this)">Anulada</button>
        <button onclick="marcarCitaTerminada(this)">Terminada</button>
    `;

    citasAsignadasContent.appendChild(nuevaCitaAsignada);
    document.getElementById('formulario').style.display = 'none';
}

//  revisar
function editarCita(button) {
    
    var cita = button.parentElement;
    var nombreMascota = cita.querySelector('p:nth-child(2)').textContent.split('=')[1].trim();
    var propietario = cita.querySelector('p:nth-child(3)').textContent.split('=')[1].trim();
    var telefono = cita.querySelector('p:nth-child(4)').textContent.split('=')[1].trim();
    var tipoMascota = cita.querySelector('p:nth-child(5)').textContent.split('=')[1].trim();
    var fecha = cita.querySelector('p:nth-child(6)').textContent.split('=')[1].trim();
    var hora = cita.querySelector('p:nth-child(7)').textContent.split('=')[1].trim();
    var sintomas = cita.querySelector('p:nth-child(8)').textContent.split('=')[1].trim();


    document.getElementById('nombreMascota').value = nombreMascota;
    document.getElementById('propietario').value = propietario;
    document.getElementById('telefono').value = telefono;
    document.getElementById('tipoMascota').value = tipoMascota;
    document.getElementById('fecha').value = fecha;
    document.getElementById('hora').value = hora;
    document.getElementById('sintomas').value = sintomas;

    mostrarFormulario();

//  revisar
}



function mostrarCitasAsignadas() {
    var citasAsignadasContent = document.getElementById('citasAsignadasContent');
    var imagenMascota = document.getElementById('imagenMascota');

    citasAsignadasContent.style.display = citasAsignadasContent.style.display === 'none' ? 'block' : 'none';

    if (citasAsignadasContent.style.display === 'block') {
        imagenMascota.style.display = 'block';
    }
}


function limpiarFormulario() {
    document.getElementById('nombreMascota').value = '';
    document.getElementById('propietario').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('tipoMascota').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('hora').value = '';
    document.getElementById('sintomas').value = '';
}

function cambiarImagen() {
    var tipoMascota = document.getElementById('tipoMascota').value;
    var imagenMascota = document.getElementById('imagenMascota');

    
    var rutaImagen = determinarRutaImagen(tipoMascota);
    imagenMascota.src = rutaImagen;
}

function determinarRutaImagen(tipoMascota) {

    if (tipoMascota === 'PECES') {
        return './imagenes/peces.png';
    } else if (tipoMascota === 'ANFIBIOS') {
        return './imagenes/anfibios.png';
    } else if (tipoMascota === 'REPTILES') {
        return './imagenes/reptil.png';
    } else if (tipoMascota === 'AVES') {
        return './imagenes/ave.png';
    } else if (tipoMascota === 'MAMIFEROS') {
        return './imagenes/tigre.png';
    } else {
 
        return './imagenes/interrogacion.png';
    }
}




