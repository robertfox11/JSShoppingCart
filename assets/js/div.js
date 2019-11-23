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

    let miNodoH = document.createElement('h1');
    miNodoH.classList.add('precio');
    miNodoH.textContent = "S/. ";

    let miNodoPrecio = document.createElement('span');
    miNodoPrecio.textContent = datos.precio + '€';

    let miBtn = document.createElement('a');
    miBtn.classList.add('btn', 'btn-primary', 'add_cart')
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