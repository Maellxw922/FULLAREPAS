const form = document.getElementById('pedido-form');
const listaPedidos = document.getElementById('lista-pedidos');
const precios = {
    "pollo": 3.00,
    "carne": 3.50,
    "queso": 2.50,
    "coca-cola": 1.00,
    "sprite": 1.00,
    "fanta": 1.00
};
let precioTotal = 0;

// Función para agregar un pedido al listado y actualizar el precio total
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
    const subtotal = precioUnitario * cantidad;
    precioTotal += subtotal;

    const pedidoItem = document.createElement("li");
    pedidoItem.innerHTML = `<strong>${producto}</strong> x ${cantidad} - $${subtotal.toFixed(2)}`;
    listaPedidos.appendChild(pedidoItem);

    document.getElementById("precioTotal").innerText = `$${precioTotal.toFixed(2)}`;
}

// Evento para finalizar pedido
form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Pedido finalizado con éxito. Precio total: $" + precioTotal.toFixed(2));
    form.reset();
    listaPedidos.innerHTML = "";
    precioTotal = 0;
    document.getElementById("precioTotal").innerText = "$0.00";
});
