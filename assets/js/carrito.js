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
    leerDatosProducto(productos) {
        const infoProducto = {
                imagen: productos.querySelector('img').src,
                marca: productos.querySelector('h4').textContent,
                precio: productos.querySelector('.precio span').textContent,
                stock: productos.querySelector('.stock').textContent,
                // ids: productos.querySelector('.ids').textContent,
                id: productos.querySelector('a').getAttribute('data-id'),
                cantidad: 1
            }
            // let productoLS;
            // productoLS = this.obtenerDatosLocalStorage();
            // productoLS.forEach(function(elemento) {
            //     if (elemento.id === infoProducto.id) {
            //         elemento == productoLS.id;
            //     }
            // });
            // insertamos el valor en el carrito
            // if (productoLS = infoProducto.id) {
            //     console.log("producto Ya agregado");
            // } else {
            //     this.insertarCarrito(infoProducto);
            // }
            // console.log(infoProducto);
        this.insertarCarrito(infoProducto);
    }
    insertarCarrito(producto) {
        //recibimos un valor del producto
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${producto.imagen}" width = 100>
        </td>
        <td>${producto.marca}</td>
        <td>${producto.precio}</td>
        <td>${producto.stock}</td>
        <td>
            <a href = "#"  class= "borrar_producto btn btn-danger" data-id="${producto.id}">x</a>
        </td>
        `;
        lista_productos.appendChild(row);
        // this.guardarProductoLocalStorage(producto);
        // console.log(row);
        // console.log(producto)
    }
    eliminarProducto(e) {
        //eliminamos producto
        e.preventDefault();
        let producto, productoID;
        if (e.target.classList.contains('borrar_producto')) {
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector('a').getAttribute('data-id');
            // var _productoId = JSON.stringify(productoID)
            localStorage.removeItem(productos);
            // console.log(producto);
        }
        // this.eliminarProductoLocalStorage(productoID);
    }
    vaciarCarrito(e) {
            e.preventDefault();
            while (lista_productos.firstChild) {
                lista_productos.removeChild(lista_productos.firstChild);
                localStorage.clear();
            }
            // this.vaciarCarritoLocalStorage();
            return false;
        }
        //Guardamos los datos local Storage
    guardarProductoLocalStorage(producto) {
            let productos;
            productos = this.obtenerDatosLocalStorage();
            productos.push(producto);
            localStorage.setItem('productos', JSON.stringify(productos));

        }
        //obtenemos los datos localStorage
    obtenerDatosLocalStorage() {
            let productoLS1;
            if (localStorage.getItem('productos') === null) {
                productoLS1 = [];
                console.log(productoLS1)
            } else {
                productoLS1 = localStorage.getItem('productos');
                console.log(productoLS1);
            }
            return productoLS1;
        }
        //Eliminar producto LocalStorage
        // eliminarProductoLocalStorage(producto) {
        //         let productoLS;
        //         productoLS = this.obtenerDatosLocalStorage();

    //         productoLS.forEach(function(productoLS, index) {
    //             // console.log(array);
    //             if (productoLS.id === producto) {
    //                 productosLS.splice(index, 1);
    //                 // console.log(productosLS);
    //                 // localStorage.removeItem(JSON.stringify(productoLS.id));
    //                 // console.log(productoLS.id);
    //             }
    //         });

    //         //actualizamos localstorge
    //         // localStorage.setItem('productos', JSON.stringify(productoLS));
    //     }
    // leerLocalStorage() {
    //     let productoLS;
    //     productoLS = this.obtenerDatosLocalStorage();
    //     productoLS.forEach(function(producto) {
    //         const row = document.createElement('tr');
    //         row.innerHTML = `
    //     <td>
    //         <img src="${producto.imagen}" width = 100>
    //     </td>
    //     <td>${producto.marca}</td>
    //     <td>${producto.precio}</td>
    //     <td>${producto.stock}</td>
    //     <td>
    //         <a href = "#"  class= "borrar_producto btn btn-danger" data-id="${producto.id}">x</a>
    //     </td>
    //     `;
    //         lista_productos.appendChild(row);
    //     });
    // }
    // procesarPedido(e) {
    //     e.preventDefault();
    //     if (this.obtenerDatosLocalStorage().length === 0) {
    //         alert("no hay productos carrito vacio agrega algun producto");
    //     } else {
    //         location.href = "buy.html";
    //     }
    // }

    // for (let producto in productoLS) {
    //     console.log(productoLS[producto]);
    //     if (productoLS[producto] === productoID) {
    //         localStorage.removeItem(productoLS[producto]);
    //     }
    // }
}