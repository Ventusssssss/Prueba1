function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
    carrito.push(producto);
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

function borrarCarrito() {
    sessionStorage.removeItem('carrito');
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');
    
    // Verificar si listaCarrito es null
    if (!listaCarrito) {
        console.error('El elemento lista-carrito no se encontró en el DOM.');
        return;
    }

    // Imprimir listaCarrito en la consola para depurar
    console.log('listaCarrito:', listaCarrito);
    
    // Limpiar el carrito previo
    listaCarrito.innerHTML = '';
    
    // Recorrer y agregar los productos al carrito
    let total = 0;
    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
    carrito.forEach((producto, index) => {
        const nuevoItem = document.createElement('tr');
        nuevoItem.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td><button onclick="eliminarDelCarrito(${index})">Borrar</button></td>
        `;
        listaCarrito.appendChild(nuevoItem);
        total += producto.precio;
    });
    
    // Actualizar el precio total
    totalElemento.textContent = total.toFixed(2);
}

// Actualizar el carrito cuando la página se carga
window.onload = () => {
    actualizarCarrito();
};
