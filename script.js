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
    "queso_mozarella": 5000,
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
    const mesero = document.getElementById("Mesero").value;
    const mesa = document.getElementById("Mesa").value;
    const nuevoPedido = {
        mesero,
        mesa,
        pedidos,
        total: precioTotal
    };
    // Almacenar el pedido en Firebase
    almacenarPedidosEnFirebase(nuevoPedido);

    // Limpiar formulario y resetear valores
    pedidos = [];
    precioTotal = 0;
    document.getElementById("precioTotal").innerText = "$0.00";
    document.getElementById("pedido-form").reset();
}

// Función para almacenar pedidos en Firebase
function almacenarPedidosEnFirebase(nuevoPedido) {
    const pedidosRef = firebase.database().ref("pedidos/");
    pedidosRef.push(nuevoPedido);
}

// Vincular el botón "Finalizar Pedido" al evento submit del formulario
document.getElementById("pedido-form").addEventListener("submit", finalizarPedido);
