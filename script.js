const form = document.getElementById('pedido-form');
const listaPedidos = document.getElementById('lista-pedidos');

document.addEventListener('DOMContentLoaded', loadPedidos);
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const Mesa = document.getElementById('Mesa').value;
    const pedido = document.getElementById('pedido').value;

    const pedidoItem = document.createElement('li');
    pedidoItem.innerHTML = `<strong>Mesa:</strong> ${Mesa} <br> <strong>Pedido:</strong> ${pedido} 
                            <button onclick="eliminarPedido(this)">Eliminar</button>`;
    
    listaPedidos.appendChild(pedidoItem);

    guardarPedido(Mesa, pedido);
    
    form.reset();
});

function guardarPedido(Mesa, pedido) {
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidos.push({Mesa, pedido});
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
}

function loadPedidos() {
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidos.forEach(pedido => {
        const pedidoItem = document.createElement('li');
        pedidoItem.innerHTML = `<strong>Mesa:</strong> ${pedido.Mesa} <br> <strong>Pedido:</strong> ${pedido.pedido} 
                                <button onclick="eliminarPedido(this)">Eliminar</button>`;
        listaPedidos.appendChild(pedidoItem);
    });
}

function eliminarPedido(button) {
    const pedidoItem = button.parentElement;
    const Mesa = pedidoItem.querySelector('strong').textContent.split(': ')[1];
    
    let pedidos = JSON.parse(localStorage.getItem('pedidos'));
    pedidos = pedidos.filter(pedido => pedido.Mesa !== Mesa);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    
    pedidoItem.remove();
}
