const buy = new Cart();
const list_Buy = document.querySelector('#list_buy tbody');
const car_Buy = document.getElementById('carBuy');
const processBtn = document.getElementById('buyProcess');
const tot = document.querySelector('.subtotales');

cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', buy.readLocalStoragebuy());
    car_Buy.addEventListener('click', (e) => {
        buy.removeProduct(e);
    });

    buy.calculateTotal();
    processBtn.addEventListener('click', (e) => {
        buy.processBuy(e);
    });
    document.addEventListener('DOMContentLoaded', buy.calculateTotalR());

}