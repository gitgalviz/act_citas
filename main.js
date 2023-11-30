var mascotas = [];
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
    var citasAsignadasContent = document.getElementById('citasAsignadasContent');
    var nuevaCitaAsignada = document.createElement('div');
    nuevaCitaAsignada.className = 'citaAsignadaCard';
    nuevaCitaAsignada.innerHTML = `
        <p> Nombre Mascota = ${nombreMascota}</p>
        <p> Propietario = ${propietario}</p>
        <p> Telefono = ${telefono}</p>
        <p> Tipo Mascota = ${tipoMascota}</p>
        <p> Fecha = ${fecha}</p>
        <p> Hora = ${hora}</p>
        <p> Sintomas = ${sintomas}</p>
    `;
    citasAsignadasContent.appendChild(nuevaCitaAsignada);
    document.getElementById('formulario').style.display = 'none';
}

function cambiarImagen() {
    var tipoMascota = document.getElementById('tipoMascota').value;
    var imagenMascota = document.getElementById('imagenMascota');

    switch (tipoMascota) {
        case 'PECES':
            imagenMascota.src = './imagenes/peces.png';
            break;
        case 'ANFIBIOS':
            imagenMascota.src = './imagenes/anfibios.png';
            break;
        case 'REPTILES':
            imagenMascota.src = './imagenes/reptil.png';
            break;
        case 'AVES':
            imagenMascota.src = './imagenes/aves.png';
            break;
        case 'MAMIFEROS':
            imagenMascota.src = './imagenes/mamifero.png';
            break;
        default:
            imagenMascota.src = '';
    }
}
function mostrarCitasAsignadas() {
    var citasAsignadasContent = document.getElementById('citasAsignadasContent');
    var imagenMascota = document.getElementById('imagenMascota');

    // Cambia la visibilidad del contenido
    citasAsignadasContent.style.display = citasAsignadasContent.style.display === 'none' ? 'block' : 'none';

    // Muestra la imagen si está oculta
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

function mostrarAlerta(mensaje) {
    document.getElementById("alertaadso").textContent = mensaje;
    setTimeout(() => {
        document.getElementById("alertaadso").textContent = "";
    }, 6000);
}





