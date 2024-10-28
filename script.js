const precios = {
    "pollo": 8000,
    "carne": 8000,
    "queso": 4000,
    "coca-cola": 2500,
    "chicha": 2000,
    "uva": 2500,
    "colombiana": 2500,
    "naranja": 2500,
    "pepsi": 2500,
    "manzana": 2500,
    "chorizo": 8000,
    "suizo": 8000,
    "chicharron": 8000,
    "hamburguesa": 8000,
    "jamon": 5000,
    "hawaiana": 7000,
    "queso mozarella": 5000,
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

    // Capturar el nombre del mesero y número de la mesa
    const mesero = document.getElementById("Mesero").value;
    const mesa = document.getElementById("Mesa").value;

    // Crear un contenedor para el nuevo pedido
    const pedidoContainer = document.createElement("div");
    pedidoContainer.style.border = "1px solid #ccc";
    pedidoContainer.style.margin = "10px 0";
    pedidoContainer.style.padding = "10px";

    // Añadir encabezado con mesero y mesa
    const encabezadoItem = document.createElement("h4");
    encabezadoItem.innerText = `Mesero: ${mesero} | Mesa: ${mesa}`;
    pedidoContainer.appendChild(encabezadoItem);

    // Mostrar cada pedido en la lista de pedidos
    pedidos.forEach((pedido) => {
        const listItem = document.createElement("p");
        listItem.innerText = `${pedido.cantidad} x ${pedido.producto} - Subtotal: $${pedido.subtotal.toFixed(2)}`;
        pedidoContainer.appendChild(listItem);
    });

    // Mostrar el total final
    const totalItem = document.createElement("p");
    totalItem.innerText = `Total: $${precioTotal.toFixed(2)}`;
    totalItem.style.fontWeight = "bold";
    pedidoContainer.appendChild(totalItem);

    // Añadir el contenedor del pedido a la lista de pedidos
    listaPedidos.appendChild(pedidoContainer);

    // Almacenar el pedido en localStorage
    almacenarPedidosEnLocalStorage({ mesero, mesa, pedidos, total: precioTotal });

    // Reiniciar para el siguiente pedido
    pedidos = [];
    precioTotal = 0;
    document.getElementById("precioTotal").innerText = "$0.00";

    // Limpiar el formulario para el próximo pedido
    document.getElementById("pedido-form").reset();
}

// Función para almacenar pedidos en localStorage
function almacenarPedidosEnLocalStorage(nuevoPedido) {
    let pedidosAlmacenados = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidosAlmacenados.push(nuevoPedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidosAlmacenados));
}

// Vincular el botón "Finalizar Pedido" al evento submit del formulario
document.getElementById("pedido-form").addEventListener("submit", finalizarPedido);
