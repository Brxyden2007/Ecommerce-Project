// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const dialog = document.querySelector('dialog');
    const openButton = document.getElementById('open_dialog');
    const closeButton = document.getElementById('closeDialog');
    const confirmButton = document.getElementById('confirm_dialog');

    // Verificar si los elementos existen
    console.log('Elementos encontrados:', {
        dialog: !!dialog,
        openButton: !!openButton,
        closeButton: !!closeButton,
        confirmButton: !!confirmButton
    });

    // Función para abrir el diálogo
    function openModal() {
        console.log('Intentando abrir el diálogo');
        if (dialog) {
            dialog.showModal();
        }
    }

    // Función para cerrar el diálogo
    function closeModal() {
        console.log('Intentando cerrar el diálogo');
        if (dialog) {
            dialog.close();
        }
    }

    // Agregar event listeners
    if (openButton) {
        openButton.addEventListener('click', openModal);
    }

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    if (confirmButton) {
        confirmButton.addEventListener('click', closeModal);
    }

    // Cerrar al hacer clic fuera del diálogo
    if (dialog) {
        dialog.addEventListener('click', function(event) {
            const rect = dialog.getBoundingClientRect();
            const isInDialog = (
                rect.top <= event.clientY &&
                event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX &&
                event.clientX <= rect.left + rect.width
            );
            if (!isInDialog) {
                dialog.close();
            }
        });
    }
});
