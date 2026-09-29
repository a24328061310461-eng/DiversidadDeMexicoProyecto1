(() => {
    const contenedor = document.getElementById('libro-festividades');
    if (!contenedor) return;

    const MESES = [
        {
            nombre: 'Enero',
            color: '#4a9eff',
            emoji: '🎊',
            fest: [
                {
                    t: 'Año Nuevo',
                    d: '1 de enero',
                    info: 'Se recibe el nuevo año con reuniones familiares, cenas y tradiciones como las doce uvas.'
                },
                {
                    t: 'Día de Reyes',
                    d: '6 de enero',
                    info: 'Una de las tradiciones más conocidas es partir la Rosca de Reyes y compartirla en familia.'
                }
            ]
        },
        {
            nombre: 'Febrero',
            color: '#ff6ba8',
            emoji: '💕',
            fest: [
                {
                    t: 'Candelaria',
                    d: '2 de febrero',
                    info: 'Las familias llevan a bendecir al Niño Dios y es tradicional compartir tamales.'
                },
                {
                    t: 'San Valentín',
                    d: '14 de febrero',
                    info: 'Día dedicado a la amistad y al afecto entre familiares, amigos y parejas.'
                },
                {
                    t: 'Carnaval',
                    d: 'Antes de Cuaresma',
                    info: 'En lugares como Veracruz y Mazatlán se realizan desfiles, música y celebraciones.'
                }
            ]
        },
        {
            nombre: 'Marzo',
            color: '#4ad4a8',
            emoji: '🌱',
            fest: [
                {
                    t: 'Natalicio de Juárez',
                    d: '21 de marzo',
                    info: 'Se conmemora el nacimiento de Benito Juárez, una figura importante de la historia de México.'
                },
                {
                    t: 'Equinoccio de Primavera',
                    d: 'Alrededor del 21 de marzo',
                    info: 'Marca el inicio astronómico de la primavera y es una fecha relacionada con diversos sitios arqueológicos.'
                }
            ]
        },
        {
            nombre: 'Abril',
            color: '#ffb84a',
            emoji: '🌸',
            fest: [
                {
                    t: 'Semana Santa',
                    d: 'Fecha variable',
                    info: 'Periodo de tradición religiosa con procesiones, representaciones y reuniones familiares.'
                },
                {
                    t: 'Día del Niño',
                    d: '30 de abril',
                    info: 'En México se realizan actividades escolares, juegos y celebraciones dedicadas a niñas y niños.'
                }
            ]
        },
        {
            nombre: 'Mayo',
            color: '#ff5a5a',
            emoji: '💐',
            fest: [
                {
                    t: 'Día del Trabajo',
                    d: '1 de mayo',
                    info: 'Conmemora las luchas y derechos relacionados con las personas trabajadoras.'
                },
                {
                    t: 'Batalla de Puebla',
                    d: '5 de mayo',
                    info: 'Conmemora la batalla de 1862 en la que el ejército mexicano derrotó al ejército francés en Puebla.'
                },
                {
                    t: 'Día de las Madres',
                    d: '10 de mayo',
                    info: 'Las familias mexicanas acostumbran celebrar y reconocer a las madres.'
                }
            ]
        },
        {
            nombre: 'Junio',
            color: '#a86bff',
            emoji: '👨‍👧',
            fest: [
                {
                    t: 'Día de la Marina',
                    d: '1 de junio',
                    info: 'Fecha dedicada a reconocer la importancia de las actividades marítimas y de quienes trabajan en ellas.'
                },
                {
                    t: 'Día del Padre',
                    d: 'Tercer domingo de junio',
                    info: 'Celebración familiar dedicada a los padres y figuras paternas.'
                }
            ]
        },
        {
            nombre: 'Julio',
            color: '#ff8a4a',
            emoji: '🎭',
            fest: [
                {
                    t: 'Guelaguetza',
                    d: 'Julio · Oaxaca',
                    info: 'Celebración cultural de Oaxaca en la que participan comunidades con música, danza, vestimenta y tradiciones.'
                }
            ]
        },
        {
            nombre: 'Agosto',
            color: '#4affd4',
            emoji: '🏛️',
            fest: [
                {
                    t: 'Día de los Pueblos Indígenas',
                    d: '9 de agosto',
                    info: 'Fecha relacionada con el reconocimiento y valoración de los pueblos indígenas y su diversidad cultural.'
                },
                {
                    t: 'Feria de San Marcos',
                    d: 'Aguascalientes',
                    info: 'Una de las celebraciones y ferias más conocidas de México, con actividades culturales y tradicionales.'
                }
            ]
        },
        {
            nombre: 'Septiembre',
            color: '#00b37e',
            emoji: '🇲🇽',
            fest: [
                {
                    t: 'Grito de Dolores',
                    d: '15 de septiembre',
                    info: 'Durante la noche del 15 de septiembre se realizan ceremonias del Grito de Independencia.'
                },
                {
                    t: 'Día de la Independencia',
                    d: '16 de septiembre',
                    info: 'Se conmemora el inicio de la lucha por la Independencia de México.'
                }
            ]
        },
        {
            nombre: 'Octubre',
            color: '#d4af37',
            emoji: '🎨',
            fest: [
                {
                    t: 'Día de la Raza',
                    d: '12 de octubre',
                    info: 'Fecha que ha recibido distintas interpretaciones y denominaciones relacionadas con el encuentro entre culturas.'
                },
                {
                    t: 'Festival Cervantino',
                    d: 'Guanajuato',
                    info: 'Festival internacional dedicado a las artes y la cultura que reúne diferentes expresiones artísticas.'
                }
            ]
        },
        {
            nombre: 'Noviembre',
            color: '#ff2d4a',
            emoji: '💀',
            fest: [
                {
                    t: 'Día de Muertos',
                    d: '1 y 2 de noviembre',
                    info: 'Tradición mexicana en la que se recuerda a familiares y seres queridos fallecidos mediante ofrendas, alimentos y elementos simbólicos.'
                },
                {
                    t: 'Revolución Mexicana',
                    d: '20 de noviembre',
                    info: 'Conmemora el inicio de la Revolución Mexicana de 1910.'
                }
            ]
        },
        {
            nombre: 'Diciembre',
            color: '#d7a928',
            emoji: '🎄',
            fest: [
                {
                    t: 'Virgen de Guadalupe',
                    d: '12 de diciembre',
                    info: 'Miles de personas participan en peregrinaciones y celebraciones dedicadas a la Virgen de Guadalupe.'
                },
                {
                    t: 'Posadas',
                    d: '16 al 24 de diciembre',
                    info: 'Tradición navideña con cantos, reuniones, piñatas y alimentos típicos.'
                },
                {
                    t: 'Navidad',
                    d: '25 de diciembre',
                    info: 'Celebración familiar acompañada de cenas, reuniones y diferentes tradiciones mexicanas.'
                }
            ]
        }
    ];

    let mesActual = 0;
    let cambiando = false;

    function cargarEstilos() {
        if (document.getElementById('festividades-css')) return;

        const link = document.createElement('link');
        link.id = 'festividades-css';
        link.rel = 'stylesheet';
        link.href = 'css/festividades.css';

        document.head.appendChild(link);
    }

    function crearCalendarioSVG(color) {
        return `
            <svg class="libro-calendario-svg" viewBox="0 0 120 120" aria-hidden="true">
                <rect x="16" y="22" width="88" height="82" rx="12" fill="#fffdf6" stroke="${color}" stroke-width="5"/>
                <rect x="16" y="22" width="88" height="27" rx="12" fill="${color}"/>
                <path d="M35 13v22M85 13v22" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
                <circle cx="37" cy="67" r="5" fill="${color}"/>
                <circle cx="60" cy="67" r="5" fill="${color}"/>
                <circle cx="83" cy="67" r="5" fill="${color}"/>
                <circle cx="37" cy="88" r="5" fill="${color}"/>
                <circle cx="60" cy="88" r="5" fill="${color}"/>
                <circle cx="83" cy="88" r="5" fill="${color}"/>
            </svg>
        `;
    }

    function crearAmbiente() {
        const ambiente = document.createElement('div');
        ambiente.className = 'calendario-ambiente';

        ambiente.innerHTML = `
            <span class="calendario-estrella">✦</span>
            <span class="calendario-estrella">✧</span>
            <span class="calendario-estrella">✦</span>
            <span class="calendario-estrella">✧</span>
        `;

        contenedor.appendChild(ambiente);
    }

    function mostrarPortada() {
        contenedor.innerHTML = '';
        crearAmbiente();

        const escena = document.createElement('div');
        escena.className = 'libro-escena';

        const sombra = document.createElement('div');
        sombra.className = 'libro-sombra';

        const portada = document.createElement('div');
        portada.className = 'libro-cubierta';

        portada.innerHTML = `
            <div class="cubierta-marco"></div>

            <div class="cubierta-contenido">
                <span class="cubierta-kicker">
                    CALENDARIO CULTURAL
                </span>

                ${crearCalendarioSVG('#d7b85a')}

                <h2>
                    Festividades<br>
                    de México
                </h2>

                <p>
                    Un recorrido interactivo por las celebraciones,
                    tradiciones y fechas importantes de México.
                </p>

                <button class="abrir-libro">
                    <i class="fas fa-book-open"></i>
                    &nbsp; Abrir calendario
                </button>
            </div>
        `;

        escena.appendChild(sombra);
        escena.appendChild(portada);
        contenedor.appendChild(escena);

        portada.querySelector('.abrir-libro').addEventListener('click', () => {
            abrirLibro(portada);
        });
    }

    function abrirLibro(portada) {
        if (cambiando) return;

        cambiando = true;

        portada.style.transformOrigin = 'left center';
        portada.style.transform = 'rotateY(-170deg)';

        setTimeout(() => {
            mostrarLibro();
            cambiando = false;
        }, 650);
    }

    function crearPaginaDebajo(indice) {
        const siguiente = (indice + 1) % MESES.length;
        const mes = MESES[siguiente];

        const pagina = document.createElement('div');
        pagina.className = 'libro-pagina-debajo';

        pagina.innerHTML = `
            <div class="libro-borde"></div>

            <div class="libro-contenido">
                <span class="libro-seccion">
                    SIGUIENTE MES
                </span>

                <h2 style="color:${mes.color}">
                    ${mes.nombre}
                </h2>

                ${mes.fest.map((fest, i) => `
                    <div class="festividad" style="--fest-color:${mes.color}">
                        <div class="festividad-numero">
                            ${String(i + 1).padStart(2, '0')}
                        </div>

                        <div>
                            <h3>${fest.t}</h3>

                            <div class="festividad-fecha">
                                ${fest.d}
                            </div>

                            <p>${fest.info}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        return pagina;
    }

    function crearBotonLateral() {
        const boton = document.createElement('button');

        boton.className = 'libro-flecha-lateral';
        boton.setAttribute('aria-label', 'Pasar a la siguiente página');
        boton.innerHTML = '<i class="fas fa-chevron-right"></i>';

        boton.addEventListener('click', () => {
            cambiarMes(1);
        });

        return boton;
    }

    function crearBotonAnterior() {
        const boton = document.createElement('button');

        boton.className = 'libro-flecha-anterior';
        boton.setAttribute('aria-label', 'Regresar a la página anterior');
        boton.innerHTML = '<i class="fas fa-chevron-left"></i>';

        boton.addEventListener('click', () => {
            cambiarMes(-1);
        });

        return boton;
    }

    function mostrarLibro() {
        contenedor.innerHTML = '';
        crearAmbiente();

        const escena = document.createElement('div');
        escena.className = 'libro-escena';

        const sombra = document.createElement('div');
        sombra.className = 'libro-sombra';

        const paginaDebajo = crearPaginaDebajo(mesActual);

        const libro = document.createElement('div');
        libro.className = 'libro';

        const mes = MESES[mesActual];

        const izquierda = document.createElement('div');
        izquierda.className = 'libro-hoja libro-izquierda';

        izquierda.innerHTML = `
            <div class="libro-borde"></div>

            <div class="libro-contenido">
                <span class="libro-numero">
                    PÁGINA ${String(mesActual * 2 + 1).padStart(2, '0')}
                </span>

                <div class="libro-mes">
                    ${crearCalendarioSVG(mes.color)}

                    <span class="libro-kicker">
                        MES ${String(mesActual + 1).padStart(2, '0')}
                    </span>

                    <h2 style="color:${mes.color}">
                        ${mes.nombre}
                    </h2>

                    <div
                        class="libro-linea"
                        style="background:${mes.color}">
                    </div>

                    <p class="libro-subtitulo">
                        Descubre las celebraciones y tradiciones
                        que forman parte de este mes en México.
                    </p>

                    <div class="libro-mes-emoji">
                        ${mes.emoji}
                    </div>
                </div>

                <span class="libro-fecha">
                    MÉXICO · ${mesActual + 1}/12
                </span>
            </div>
        `;

        const derecha = document.createElement('div');
        derecha.className = 'libro-hoja libro-derecha';

        derecha.innerHTML = `
            <div class="libro-borde"></div>

            <div class="libro-contenido">
                <span class="libro-seccion">
                    FESTIVIDADES DEL MES
                </span>

                <h2 style="color:${mes.color}">
                    ${mes.nombre}
                </h2>

                ${mes.fest.map((fest, i) => `
                    <div
                        class="festividad"
                        style="--fest-color:${mes.color}"
                        data-indice="${i}"
                    >
                        <div class="festividad-numero">
                            ${String(i + 1).padStart(2, '0')}
                        </div>

                        <div>
                            <h3>${fest.t}</h3>

                            <div class="festividad-fecha">
                                ${fest.d}
                            </div>

                            <p>${fest.info}</p>
                        </div>
                    </div>
                `).join('')}

                <span class="libro-pagina">
                    ${String(mesActual * 2 + 2).padStart(2, '0')}
                </span>
            </div>
        `;

        libro.appendChild(izquierda);
        libro.appendChild(derecha);

        const lomo = document.createElement('div');
        lomo.className = 'libro-lomo';

        escena.appendChild(sombra);
        escena.appendChild(paginaDebajo);
        escena.appendChild(libro);
        escena.appendChild(lomo);
        escena.appendChild(crearBotonAnterior());
        escena.appendChild(crearBotonLateral());

        contenedor.appendChild(escena);
        contenedor.appendChild(crearControles());

        escena.querySelectorAll('.festividad').forEach((elemento) => {
            elemento.addEventListener('click', () => {
                const indice = Number(elemento.dataset.indice);
                mostrarDetalle(mes.fest[indice], mes);
            });
        });
    }

    function crearControles() {
        const controles = document.createElement('div');
        controles.className = 'libro-controles';

        const anterior = document.createElement('button');
        anterior.className = 'libro-btn';
        anterior.setAttribute('aria-label', 'Mes anterior');
        anterior.innerHTML = '<i class="fas fa-chevron-left"></i>';

        anterior.addEventListener('click', () => {
            cambiarMes(-1);
        });

        const indicador = document.createElement('div');
        indicador.className = 'libro-indicador';
        indicador.textContent =
            `${mesActual + 1} / ${MESES.length} · ${MESES[mesActual].nombre}`;

        const siguiente = document.createElement('button');
        siguiente.className = 'libro-btn';
        siguiente.setAttribute('aria-label', 'Mes siguiente');
        siguiente.innerHTML = '<i class="fas fa-chevron-right"></i>';

        siguiente.addEventListener('click', () => {
            cambiarMes(1);
        });

        controles.appendChild(anterior);
        controles.appendChild(indicador);
        controles.appendChild(siguiente);

        return controles;
    }

    function cambiarMes(direccion) {
        if (cambiando) return;

        cambiando = true;

        const escena = contenedor.querySelector('.libro-escena');
        const libro = contenedor.querySelector('.libro');

        if (!escena || !libro) {
            cambiando = false;
            return;
        }

        const paginaDebajo = escena.querySelector('.libro-pagina-debajo');

        if (direccion > 0) {
            libro.classList.add('volteando-derecha');

            if (paginaDebajo) {
                paginaDebajo.classList.add('pagina-visible');
            }
        } else {
            libro.classList.add('volteando-izquierda');
        }

        setTimeout(() => {
            mesActual =
                (mesActual + direccion + MESES.length) % MESES.length;

            mostrarLibro();

            const nuevoLibro = contenedor.querySelector('.libro');

            if (nuevoLibro) {
                nuevoLibro.classList.add('libro-entrada-nuevo');

                requestAnimationFrame(() => {
                    nuevoLibro.classList.remove('libro-entrada-nuevo');
                });
            }

            setTimeout(() => {
                cambiando = false;
            }, 350);
        }, 700);
    }

    function mostrarDetalle(festividad, mes) {
        const anterior = document.querySelector('.detalle-evento');

        if (anterior) {
            anterior.remove();
        }

        const detalle = document.createElement('div');
        detalle.className = 'detalle-evento';

        detalle.innerHTML = `
            <div class="detalle-tarjeta">
                <button class="detalle-cerrar" aria-label="Cerrar">
                    <i class="fas fa-times"></i>
                </button>

                <div class="detalle-emoji">
                    ${mes.emoji}
                </div>

                <h3 style="color:${mes.color}">
                    ${festividad.t}
                </h3>

                <div
                    class="detalle-fecha"
                    style="color:${mes.color}">
                    ${festividad.d}
                </div>

                <p>
                    ${festividad.info}
                </p>
            </div>
        `;

        document.body.appendChild(detalle);

        const cerrar = () => {
            detalle.remove();
        };

        detalle.querySelector('.detalle-cerrar').addEventListener('click', cerrar);

        detalle.addEventListener('click', (e) => {
            if (e.target === detalle) {
                cerrar();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!contenedor.querySelector('.libro')) return;

        if (e.key === 'ArrowRight') {
            e.preventDefault();
            cambiarMes(1);
        }

        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            cambiarMes(-1);
        }

        if (e.key === 'Escape') {
            const detalle = document.querySelector('.detalle-evento');

            if (detalle) {
                detalle.remove();
            }
        }
    });

    cargarEstilos();
    mostrarPortada();
})();