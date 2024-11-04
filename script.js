import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

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

// Función para finalizar el pedido y enviar a Firebase
async function finalizarPedido(event) {
    event.preventDefault();

    // Capturar el nombre del mesero y número de la mesa
    const mesero = document.getElementById("Mesero").value;
    const mesa = document.getElementById("Mesa").value;

    const nuevoPedidoRef = ref(db, 'pedidos/' + Date.now());
    try {
        await set(nuevoPedidoRef, {
            mesero: mesero,
            mesa: mesa,
            pedidos: pedidos,
            total: precioTotal,
            estado: "pendiente"
        });
        console.log("Pedido añadido a Firebase con éxito");

        // Reiniciar para el siguiente pedido
        pedidos = [];
        precioTotal = 0;
        document.getElementById("precioTotal").innerText = "$0.00";

        // Limpiar el formulario para el próximo pedido
        document.getElementById("pedido-form").reset();
    } catch (e) {
        console.error("Error añadiendo el pedido a Firebase: ", e);
    }
}

// Vincular el botón "Finalizar Pedido" al evento submit del formulario
document.getElementById("pedido-form").addEventListener("submit", finalizarPedido);
