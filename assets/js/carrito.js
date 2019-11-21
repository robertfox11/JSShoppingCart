class Cart {
    // add products cart
    tobuyProducts(e) {
        e.preventDefault();
        if (e.target.classList.contains('agregar_carrito')) {
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
            // console.log(producto);
        }
    }


    // creamos otro metodo para leer los datos del producto
    leerDatosProducto() {
        const infoProducto = {
                imagen: productos.querySelector('img').src,
                marca: productos.querySelector('h4').textContent,
                precio: productos.querySelector('.precio span').textContent,
                id: productos.querySelector('a').getAttribute('datos-id'),
                cantidad: 1
            }
            //insertamos el valor en el carrito
        this.insertarCarrito(infoProducto);
    }
    insertarCarrito(productos) {
        //recibimos un valor del producto
        const row = document.createElement('tr');
        row.innerHTML = `
    <td>
        <img src="${productos.imagen}" width = 100>
    </td>
    <td>${productos.marca}</td>
    <td>${productos.precio}</td>
    <td>
        <a href = "#" class= "borrar-producto fas fa-times-circle" data-id="${productos.id}"></a>
    </td>
    `;
        lista_carrito.appendChild(row);
        console.log(row);
    }
}