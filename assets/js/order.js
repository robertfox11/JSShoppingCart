//instanciamos una clase
const carro = new Cart();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('list-products');
const lista_carrito = document.querySelector('#lista-carrito tbody');

cargarEventos();

function cargarEventos() {
    productos.addEventListener('click', (e) => {
        carro.tobuyProducts(e)

    });
}