(() => {
    const botones = document.querySelectorAll('.nav-btn');
    const vistas = document.querySelectorAll('.vista');

    window._alMostrarVista =
        window._alMostrarVista || {};

    function mostrar(vistaId) {
        const vistaActiva =
            document.querySelector('.vista.activa');

        if (vistaActiva) {
            vistaActiva.classList.add('saliendo');

            setTimeout(() => {
                vistaActiva.classList.remove(
                    'activa',
                    'saliendo'
                );
            }, 200);
        }

        setTimeout(() => {
            const nueva =
                document.getElementById(
                    `vista-${vistaId}`
                );

            if (!nueva) {
                return;
            }

            nueva.classList.add('activa');

            botones.forEach(boton => {
                boton.classList.toggle(
                    'activo',
                    boton.dataset.vista === vistaId
                );
            });

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    Object.values(
                        window._alMostrarVista
                    ).forEach(callback => {
                        try {
                            callback();
                        } catch (error) {
                            console.warn(
                                'Error al mostrar vista:',
                                error
                            );
                        }
                    });

                    window.dispatchEvent(
                        new Event('resize')
                    );
                });
            });
        }, 200);
    }

    botones.forEach(boton => {
        boton.addEventListener(
            'click',
            () => {
                mostrar(
                    boton.dataset.vista
                );
            }
        );
    });

    window.mostrarVista = mostrar;
})();