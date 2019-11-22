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
                id: productos.querySelector('a').getAttribute('data-id'),
                cantidad: 1
            }
            //insertamos el valor en el carrito
        this.insertarCarrito(infoProducto);
        console.log(infoProducto);
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
    <td>${productos.stock}</td>
    <td>
        <a href = "#" class= "borrar_producto fas fa-times-circle" data-id="${productos.id}"></a>
    </td>
    `;
        lista_productos.appendChild(row);
        console.log(row);
    }
    eliminarProducto(e) {
        e.preventDefault();
        let producto, productoID;
        if (e.target.classList.contains('borrarProducto')) {
            producto = e.target.parentElement.parentElement.remove();
            productoID = producto.querySelector('a').getAttribute('marcador');
            console.log(producto)
        }
    }
    vaciarCarrito(e) {
        e.preventDefault();
        while (lista_productos.firstChild) {
            lista_productos.removeChild(lista_productos.firstChild);
        }
        return false;
    }
}