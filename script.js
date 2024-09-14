// Conectar con el servidor usando Socket.IO
const socket = io();

// Escuchar los eventos que cambian las luces
socket.on('led_on', (data) => {
    // Desactivar todas las luces primero
    apagarLuces();

    // Activar la luz correspondiente basada en el color recibido
    if (data.color === 'red') {
        document.querySelector('.luces-circulo.red').classList.add('active');
    } else if (data.color === 'yellow') {
        document.querySelector('.luces-circulo.yellow').classList.add('active');
    } else if (data.color === 'green') {
        document.querySelector('.luces-circulo.green').classList.add('active');
    }
});

// Función para apagar todas las luces
function apagarLuces() {
    document.querySelectorAll('.luces-circulo').forEach(luz => {
        luz.classList.remove('active');
    });
}

// Opcional: también puedes agregar un evento para apagar todas las luces
socket.on('apagar', () => {
    apagarLuces();
});
