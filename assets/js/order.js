//instanciamos una clase
const carro = new Cart();
const carrito = document.getElementById('carrito');
var productos = document.getElementById('list-products');
const lista_productos = document.querySelector('#lista-carrito tbody');
const vaciar_carritoBtn = document.getElementById('vaciar_carrito');
const orderBtn = document.getElementById('procesar_pedido');

cargarEventos();

function cargarEventos() {
    productos.addEventListener('click', (e) => {
        carro.tobuyProducts(e)

    });
    carrito.addEventListener('click', (e) => {
        carro.eliminarProducto(e)
    });
    vaciar_carritoBtn.addEventListener('click', (e) => {
        carro.vaciarCarrito(e)
    });

    // document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    // orderBtn.addEventListener('click', (e) => carro.procesarPedido());

}