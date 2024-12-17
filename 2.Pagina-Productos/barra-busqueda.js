document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const productos = document.querySelectorAll('.producto');

    searchButton.addEventListener('click', function () {
        const searchText = searchInput.value.toLowerCase();
        productos.forEach(function (producto) {
            const productName = producto.querySelector('h2').innerText.toLowerCase();
            if (productName.includes(searchText)) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    });
});
