class Cart {
    // add products cart
    tobuyProducts(e) {
            e.preventDefault();
            if (e.target.classList.contains('add_cart')) {
                const producto = e.target.parentElement.parentElement;
                this.readDataProducts(producto);
                // console.log(producto);
            }
        }
        // creamos otro metodo para leer los datos del producto
    readDataProducts(product) {
            const infoProduct = {
                    imagen: product.querySelector('img').src,
                    marca: product.querySelector('h4').textContent,
                    precio: product.querySelector('.precio span').textContent,
                    stock: product.querySelector('.stock').textContent,
                    id: product.querySelector('a').getAttribute('data-id'),
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
                //     this.insert_car(infoProducto);
                // }
                // console.log(infoProducto);
            this.insert_car(infoProduct);
        }
        //creamos otro metodo para insetar cart
    insert_car(product) {
            //     //recibimos un valor del producto
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>
                <img src="${product.imagen}" width = 100>
            </td>
            <td>${product.marca}</td>
            <td>${product.precio}</td>
            <td>${product.stock}</td>
            <td>
                <a href = "#"  class= "borrar_producto btn btn-danger" data-id="${product.id}">x</a>
            </td>
            `;
            list_products.appendChild(row);
            this.saveProductLocalStorage(product);
            // console.log(row);
            // console.log(producto)
        }
        //remove product selection
    removeProduct(e) {
        //remove product
        e.preventDefault();
        let product, productoId;
        if (e.target.classList.contains('borrar_producto')) {
            e.target.parentElement.parentElement.remove();
            product = e.target.parentElement.parentElement;
            productoId = product.querySelector('a').getAttribute('data-id');
            // var _productoId = JSON.stringify(productoID)
            localStorage.removeItem(productoId);
            console.log(localStorage + "articulo elimando");
        }
        this.removeProductLocalStorage(product);
    }

    empty_Cart(e) {
            e.preventDefault();
            while (list_products.firstChild) {
                list_products.removeChild(list_products.firstChild);
                localStorage.clear();
            }
            // this.vaciarCarritoLocalStorage();
            return false;
        }
        //Guardamos los datos local Storage
    saveProductLocalStorage(product) {
            let products;
            products = this.getProductLocalStorage();
            products.push(product);

            localStorage.setItem('products', JSON.stringify(products));
            console.log(products)

        }
        //     //     //obtenemos los datos localStorage
    getProductLocalStorage() {
            let productLS1;
            if (localStorage.getItem('products') === null) {
                productLS1 = [];
                // console.log(productLS1)
            } else {
                productLS1 = JSON.parse(localStorage.getItem('products'));
                // console.log(productLS1);

            }
            return productLS1;
        }
        //Eliminar producto LocalStorage
    removeProductLocalStorage(productId) {
            let productsLS2;
            productsLS2 = this.getProductLocalStorage();

            productsLS2.forEach(function(productLS, index) {
                // console.log(array);
                if (productLS === productId) {
                    productLS.splice(index, 1);
                    // = JSON.parse(localStorage.removeItem(productsLS2));
                    // console.log(productosLS);
                    // localStorage.removeItem(JSON.stringify(productoLS.id));
                    // console.log(productoLS.id);
                }
            });

            //actualizamos localstorge
            localStorage.setItem('products', JSON.stringify(productsLS2));
        }
        // // leerLocalStorage() {
        // //     let productoLS;
        // //     productoLS = this.obtenerDatosLocalStorage();
        // //     productoLS.forEach(function(producto) {
        // //         const row = document.createElement('tr');
        // //         row.innerHTML = `
        // //     <td>
        // //         <img src="${producto.imagen}" width = 100>
        // //     </td>
        // //     <td>${producto.marca}</td>
        // //     <td>${producto.precio}</td>
        // //     <td>${producto.stock}</td>
        // //     <td>
        // //         <a href = "#"  class= "borrar_producto btn btn-danger" data-id="${producto.id}">x</a>
        // //     </td>
        // //     `;
        // //         list_products.appendChild(row);
        // //     });
        // // }
        // // procesarPedido(e) {
        // //     e.preventDefault();
        // //     if (this.obtenerDatosLocalStorage().length === 0) {
        // //         alert("no hay productos carrito vacio agrega algun producto");
        // //     } else {
        // //         location.href = "buy.html";
        // //     }
        // // }

    // // for (let producto in productoLS) {
    // //     console.log(productoLS[producto]);
    // //     if (productoLS[producto] === productoID) {
    // //         localStorage.removeItem(productoLS[producto]);
    // //     }
    // // }
}