var item = document.getElementById('list-products');

// console.log(baseDeDatos);

for (datos of baseDeDatos) {
    // console.log(datos)

    var miNodo = document.createElement('div');
    miNodo.classList.add('mb-4', 'card-desk', 'col-md-4', 'text-center');

    let miNodoCardDeck = document.createElement('div');
    miNodoCardDeck.classList.add('mb-1', 'card', 'shadow-sm');

    let miNodoCardHeader = document.createElement('div');
    miNodoCardHeader.classList.add('card-header');

    let miNodoTitle = document.createElement('h4');
    miNodoTitle.classList.add('my-0', 'font-weight-bold');
    miNodoTitle.textContent = datos.marca + "  " + datos.nombre;

    let miNodoBody = document.createElement('div');
    miNodoBody.classList.add('card-body');

    let miNodoImg = document.createElement('img');
    miNodoImg.classList.add('card-img-top');
    miNodoImg.src = datos.img;

    let miNodoStock = document.createElement('span');
    miNodoStock.classList.add('card-title', 'mx-auto', 'stock');
    miNodoStock.textContent = datos.stock + " uni ";

    // let miNodoUni = document.createElement('span');
    // miNodoUni.classList.add('card-title', 'mx-auto', 'ids');
    // miNodoUni.textContent = " id " + datos.id;
    // miNodoUni.setAttribute('id', datos.id);


    let miNodoH = document.createElement('h1');
    miNodoH.classList.add('precio');
    miNodoH.textContent = "S/. ";

    let miNodoPrecio = document.createElement('span');
    miNodoPrecio.textContent = datos.precio + '€';

    let miBtn = document.createElement('a');
    miBtn.classList.add('btn', 'btn-primary', 'agregar_carrito')
    miBtn.textContent = 'Comprar';
    miBtn.setAttribute('data-id', datos.id);

    let miNodoUl = document.createElement('ul');
    miNodoUl.classList.add('list-unstyled', 'mt-3', 'mb-4');

    let miNodoLi = document.createElement('li');


    // miBtn.addEventListener('click', anadir);

    item.appendChild(miNodo);
    miNodo.appendChild(miNodoCardDeck);
    miNodoCardDeck.appendChild(miNodoCardHeader);
    miNodoCardHeader.appendChild(miNodoTitle)
    miNodoCardDeck.appendChild(miNodoBody);
    miNodoBody.appendChild(miNodoImg);
    miNodoBody.appendChild(miNodoH);
    miNodoBody.appendChild(miNodoStock);
    miNodoBody.appendChild(miNodoUl);

    miNodoH.appendChild(miNodoPrecio);
    miNodoBody.appendChild(miBtn);
    // miNodoTitle.appendChild(miNodoTitle);
    // miNodoBody.appendChild(miNodoH);

}

function anadir() {

}



/* <div class="container" id="list-products">
<div class="card-deck mb-3 text-center">
    <div class="card mb-4 shadow-sm">
        <div class="card-header">
            <h4 class="my-0 font-weight-bold">HP PAVILION</h4>
        </div>
        <div class="card-body">
            <img src="assets/img/carro.png" class="card-img-top">
            <h1 class="card-title pricing-card-title precio">S/. <span class="">5000</span></h1>
            <ul class="list-unstyled mt-3 mb-4">
                <li></li>
                <li>8 GB RAM</li>
                <li>COLOR PLATEADO</li>
                <li>256 GB DISCO SSD</li>
            </ul>
            <a href="" class="btn btn-block btn-primary agregar-carrito" data-id="1">Comprar</a>
        </div>
    </div>
</div> */