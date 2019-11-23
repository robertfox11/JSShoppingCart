//instanciamos una clase
const car = new Cart();
const _car_little = document.getElementById('car_little');
const products = document.getElementById('list-products');
const list_products = document.querySelector('#list-car tbody');
const emptyCarBtn = document.getElementById('emptyCar');
const orderBtn = document.getElementById('procesar_pedido');

cargarEventos();

function cargarEventos() {
    products.addEventListener('click', (e) => {
        car.tobuyProducts(e)

    });

    _car_little.addEventListener('click', (e) => {
        car.removeProduct(e);
    });
    emptyCarBtn.addEventListener('click', (e) => {
        car.empty_Cart(e)
    });

    // document.addEventListener('DOMContentLoaded', car.leerLocalStorage());

    // orderBtn.addEventListener('click', (e) => car.procesarPedido());

}