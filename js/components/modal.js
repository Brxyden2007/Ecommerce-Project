// Selecciona el ícono y el contenedor del mensaje usando sus IDs
const iconContainer = document.getElementById('saveIcon'); // Selecciona el ícono aquí (ID icon)
const message = document.getElementById('messageSave'); // <--- Cambia el ID aquí

// Agrega un evento de clic al ícono 
iconContainer.addEventListener('click', () => { // Agrega un evento de clic al ícono
    // Alterna la clase 'selected' en el ícono y el contenedor del mensaje
    iconContainer.classList.toggle('selected'); // Agrega o elimina la clase 'selected' al ícono

    // Verifica si el ícono tiene la clase 'selected'
    if (iconContainer.classList.contains('selected')) { // Si tiene la clase 'selected' / If this had 'selected' class...
        // Muestra el mensaje de selección / deselección
        message.textContent = 'El producto seleccionado ha sido guardado con exito.'; // Cambia el texto del mensaje / Change the message text
        message.style.display = 'block'; // Muestra el mensaje / Show the message
    } else {
        // Oculta el mensaje si se deselecciona / Hide Message If Deselected
        message.textContent = ''; // Elimina el texto del mensaje / Remove the message text
        message.style.display = 'none'; // Oculta el mensaje / Hide the message
    }
});
// Se utilizo este JS para poder elaborar que el icono de corazon en el detail funcione, que haga simulacion de guardado del producto (usado en el proyecto de ecommerce como opcional)
function showConfirmationMessage(messageElement, messageText) {
    // Establecer el texto del mensaje
    messageElement.textContent = messageText;

    // Mostrar el mensaje cambiando su display y opacidad
    messageElement.style.display = 'block';
    setTimeout(() => {
        messageElement.style.opacity = '1'; // Hacerlo visible gradualmente
    }, 10); // Pequeño retraso para permitir que el navegador actualice el display

    // Esperar 3 segundos antes de desvanecer el mensaje
    setTimeout(() => {
        messageElement.style.opacity = '0'; // Desvanecer el mensaje
    }, 1500); // 3 segundos

    // Ocultar el mensaje completamente después de la transición
    setTimeout(() => {
        messageElement.style.display = 'none'; // Ocultarlo nuevamente
    }, 4000); // 5 segundos (2 segundos para la transición + 3 segundos de espera)
}

// Ejemplo de uso
document.addEventListener('DOMContentLoaded', () => {
    const confirmationMessage = document.getElementById('messageSave'); // Seleccionar el mensaje

    // Simular un evento para mostrar el mensaje (puedes vincular esto a cualquier evento)
    document.getElementById('saveIcon').addEventListener('click', () => {
        showConfirmationMessage(confirmationMessage, '¡Guardado con éxito!');
    });
});