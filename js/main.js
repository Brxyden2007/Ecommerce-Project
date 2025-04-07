// Lista de productos recomendados para la barra de búsqueda
const productsListBar = [
    "Modern Light Clothes", // Ropa recomendada en la barra de búsqueda
    "Light Dress Bless",
    "Fashion Clothes Black Dark",
    "Light Dress Pure Yellow"
];

// Selectores del DOM
const resultsInBar = document.querySelector(".searchResults"); // Contenedor de resultados
const inputInBar = document.querySelector(".searchInput"); // Barra de búsqueda

// Función para mostrar los resultados
const displayResults = function (results) {
    if (results.length === 0) { // Si no hay resultados
        resultsInBar.innerHTML = ''; // Limpiar el contenedor de resultados
        resultsInBar.style.display = 'none'; // Ocultar el contenedor
        return; // Salir de la función
    }

    // Crear elementos HTML para los resultados
    const resultHTML = results.map(function (product) {
        return `<li onclick="selectInput(this)">${product}</li>`; // Crear un elemento <li> por cada producto
    });

    // Mostrar los resultados en el contenedor
    resultsInBar.innerHTML = '<ul>' + resultHTML.join('') + '</ul>'; // Unir los resultados en una lista
    resultsInBar.style.display = 'block'; // Mostrar el contenedor
};

// Evento al escribir en la barra de búsqueda
inputInBar.onkeyup = function (e) {
    let result = []; // Array para almacenar los resultados
    const input = inputInBar.value.toLowerCase(); // Obtener el valor del input y convertirlo a minúsculas

    if (input.length === 0) { // Si el usuario borra el texto
        resultsInBar.innerHTML = ''; // Limpiar el contenedor de resultados
        resultsInBar.style.display = 'none'; // Ocultar el contenedor
        return; // Salir de la función
    }

    // Filtrar los productos que coincidan con el texto ingresado
    result = productsListBar.filter((product) => {
        return product.toLowerCase().includes(input); // Verificar si el nombre del producto incluye el texto ingresado
    });

    // Mostrar u ocultar los resultados según el filtro
    if (result.length > 0) { // Si hay resultados
        displayResults(result); // Mostrar los resultados
    } else { // Si no hay resultados
        resultsInBar.style.display = 'none'; // Ocultar el contenedor
    }
};

// Función para seleccionar un resultado
function selectInput(element) {
    inputInBar.value = element.innerText; // Establecer el valor del input al texto del resultado seleccionado
    resultsInBar.style.display = 'none'; // Ocultar el contenedor de resultados
}