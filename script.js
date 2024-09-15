// Seleccionamos el formulario y la lista de pedidos
const form = document.getElementById('pedido-form');
const listaPedidos = document.getElementById('lista-pedidos');

// Añadimos un evento para escuchar cuando el formulario se envíe
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenimos que la página se recargue

    // Obtenemos los valores del formulario
    const Mesa = document.getElementById('Mesa').value;
    const pedido = document.getElementById('pedido').value;

    // Creamos un nuevo elemento de lista (li) para mostrar el pedido
    const pedidoItem = document.createElement('li');
    pedidoItem.innerHTML = `<strong>Mesa:</strong> ${Mesa} <br> <strong>Pedido:</strong> ${pedido}`;
    
    // Añadimos el pedido a la lista
    listaPedidos.appendChild(pedidoItem);
    
    // Limpiamos el formulario
    form.reset();
});
