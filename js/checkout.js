document.addEventListener('DOMContentLoaded', function () {
    // Menú desplegable
    const navBtn = document.getElementById('navButton'); // Botón de navegación
    const navbar = document.querySelector('.checkoutNavContainer'); // Contenedor del menú
    const menuLinks = document.querySelectorAll('.navigationMenu a'); // Enlaces del menú

    // Función para cerrar el menú
    const closeMenu = () => {
        navBtn.classList.remove('active');
        navbar.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar el desplazamiento
    };

    // Evento para alternar el menú
    navBtn.addEventListener('click', function () {
        this.classList.toggle('active'); // Alternar clase "active" en el botón
        navbar.classList.toggle('active'); // Alternar clase "active" en el menú

        // Bloquear/desbloquear el desplazamiento
        document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
    });

    // Cerrar el menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target) && e.target !== navBtn) {
            closeMenu();
        }
    });
});

    // Alerta de pago
    const payButton = document.querySelector('.paymentButton'); // Botón de pago

    payButton.addEventListener('click', function () {
        Swal.fire({
            title: "Payment Complete!",
            text: "Thank you for your purchase! See you later and we want you again!",
            icon: "success"
        });
    });
