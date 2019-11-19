//instaciamos la clase
const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('list-products');
const listaProductos = document.querySelector('#lista-carrito tbody');
//compramos el catalogo de productos
cargarEventos();

function cargarEventos() {
    productos.addEventListener('click', (e) => { carro.comprarProducto(e) });

}