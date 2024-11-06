// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const registroForm = document.getElementById('registroForm');
    const descargarPDFButton = document.getElementById('descargarPDF');

    // Manejar el envío del formulario
    registroForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const cedula = document.getElementById('cedula').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value;
        const email = document.getElementById('email').value;
        const genero = document.getElementById('genero').value;
        const estadoCivil = document.getElementById('estadoCivil').value;
        const estadoLaboral = document.getElementById('estadoLaboral').value;

        // Crear un objeto con los datos
        const registro = {
            nombre,
            apellidos,
            fechaNacimiento,
            cedula,
            telefono,
            direccion,
            email,
            genero,
            estadoCivil,
            estadoLaboral
        };

        // Guardar el registro en el localStorage
        let registros = JSON.parse(localStorage.getItem('registros')) || [];
        registros.push(registro);
        localStorage.setItem('registros', JSON.stringify(registros));

        // Limpiar el formulario
        registroForm.reset();
    });

    // Manejar la descarga del PDF
    descargarPDFButton.addEventListener('click', function () {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Obtener los registros del localStorage
        const registros = JSON.parse(localStorage.getItem('registros')) || [];
        
        // Agregar contenido al PDF
        let y = 10; // Posición inicial en Y
        doc.text("Historial de Registros", 10, y);
        y += 10;

        registros.forEach((registro, index) => {
            doc.text(Registro ${index + 1}:, 10, y);
            y += 10;
            Object.entries(registro).forEach(([key, value]) => {
                doc.text(${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}, 10, y);
                y += 10;
            });
            y += 5; // Espacio entre registros
        });

        // Descargar el PDF
        doc.save('historial_registros.pdf');
    });

+});