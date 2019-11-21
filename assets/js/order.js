//instanciamos una clase
const carro = new Cart();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('list-products');
const lista_productos = document.querySelector('#lista-carrito tbody');
const vaciar_carritoBtn = document.getElementById('vaciar-carrito');

cargarEventos();

function cargarEventos() {
    productos.addEventListener('click', (e) => {
        carro.tobuyProducts(e)

    });
    carrito.addEventListener('click', (e) => {
        carro.eliminarProducto(e)
    });
    vaciar_carritoBtn.addEventListener('clicl', (e) => {
        carro.vaciarCarrito(e)
    });

}