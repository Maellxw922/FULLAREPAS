const precios = {
    "pollo": 3.00,
    "carne": 3.50,
    "queso": 2.50,
    "coca-cola": 1.00,
    "sprite": 1.00,
    "fanta": 1.00
};

let precioTotal = 0;
let pedidos = []; // Lista para almacenar cada pedido

// Función para agregar un pedido de arepa o gaseosa
function agregarPedido(tipo) {
    let cantidad, producto, precioUnitario;

    if (tipo === 'arepa') {
        producto = document.getElementById("arepa").value;
        cantidad = parseInt(document.getElementById("cantidadArepa").value);
    } else if (tipo === 'gaseosa') {
        producto = document.getElementById("gaseosa").value;
        cantidad = parseInt(document.getElementById("cantidadGaseosa").value);
    }

    precioUnitario = precios[producto];
    let subtotal = precioUnitario * cantidad;
    precioTotal += subtotal;

    // Añadir el pedido a la lista de pedidos
    pedidos.push({ producto, cantidad, subtotal });

    // Actualizar el precio total en la interfaz
    document.getElementById("precioTotal").innerText = `$${precioTotal.toFixed(2)}`;
}

// Función para finalizar el pedido y mostrar la lista completa
function finalizarPedido(event) {
    event.preventDefault();

    const listaPedidos = document.getElementById("lista-pedidos");
    listaPedidos.innerHTML = ""; // Limpiar la lista antes de añadir los pedidos

    // Capturar el nombre del mesero y número de la mesa
    const mesero = document.getElementById("Mesero").value;
    const mesa = document.getElementById("Mesa").value;

    // Añadir encabezado con mesero y mesa
    const encabezadoItem = document.createElement("li");
    encabezadoItem.innerText = `Mesero: ${mesero} | Mesa: ${mesa}`;
    encabezadoItem.style.fontWeight = "bold";
    listaPedidos.appendChild(encabezadoItem);

    // Mostrar cada pedido en la lista de pedidos
    pedidos.forEach(pedido => {
        const listItem = document.createElement("li");
        listItem.innerText = `${pedido.cantidad} x ${pedido.producto} - Subtotal: $${pedido.subtotal.toFixed(2)}`;
        listaPedidos.appendChild(listItem);
    });

    // Mostrar el total final
    const totalItem = document.createElement("li");
    totalItem.innerText = `Total: $${precioTotal.toFixed(2)}`;
    totalItem.style.fontWeight = "bold";
    listaPedidos.appendChild(totalItem);

    // Reiniciar para el siguiente pedido
    pedidos = [];
    precioTotal = 0;
    document.getElementById("precioTotal").innerText = "$0.00";

    // Opcional: limpiar el formulario para el próximo pedido
    document.getElementById("pedido-form").reset();
}

// Vincular el botón "Finalizar Pedido" al evento submit del formulario
document.getElementById("pedido-form").addEventListener("submit", finalizarPedido);
