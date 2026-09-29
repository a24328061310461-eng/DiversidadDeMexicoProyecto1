(() => {
    const canvas = document.getElementById('mapa-canvas');
    if (!canvas || typeof DATA === 'undefined') return;

    const ctx = canvas.getContext('2d');
    const contenedor = canvas.parentElement;
    const panel = document.getElementById('mapa-panel');
    const cerrar = panel?.querySelector('.mapa-panel-cerrar');
    const imgEl = document.getElementById('leyenda-img');
    const tituloEl = document.getElementById('leyenda-titulo');
    const descEl = document.getElementById('leyenda-desc');
    const estadoEl = document.getElementById('leyenda-estado');

    const mapa = new Image();
    mapa.src = 'assets/img/mx.svg';

    let ancho = 0;
    let alto = 0;
    let puntos = [];
    let seleccionado = -1;
    let hover = -1;
    let arrastrando = false;
    let inicioX = 0;
    let inicioY = 0;
    let ultimoX = 0;
    let ultimoY = 0;

    const camara = {
        x: 0,
        y: 0,
        zoom: 1
    };

    const ubicaciones = {
        pascualita: [-106.1, 28.6],
        llorona_norte: [-110.9, 29.1],
        callejon: [-101.25, 21.02],
        llorona: [-99.13, 19.43],
        munecas: [-99.1, 19.25],
        chupacabras: [-102.5, 23.6],
        charro_negro: [-103.35, 20.67],
        mulata: [-96.85, 18.85],
        nahual: [-96.72, 17.07],
        llorona_sur: [-92.33, 16.75],
        xunaan: [-89.62, 20.97],
        tumba_faraon: [-89.62, 20.97],
        zapata: [-99.1, 18.92],
        bruja_veracruz: [-96.13, 19.17],
        pirata_veracruz: [-96.13, 19.17],
        llorona_monterrey: [-100.32, 25.68],
        pisadas: [-104.65, 24.02],
        isla_catalina: [-110.3, 24.1],
        india_maria: [-101.2, 19.7],
        sirena: [-90.53, 19.85]
    };

    const limites = {
        oeste: -118.5,
        este: -86.5,
        norte: 33.0,
        sur: 14.2
    };

    function ajustarCanvas() {
        const rect = contenedor.getBoundingClientRect();

        ancho = Math.max(rect.width, 1);
        alto = Math.max(rect.height, 1);

        const escala = window.devicePixelRatio || 1;

        canvas.width = ancho * escala;
        canvas.height = alto * escala;
        canvas.style.width = `${ancho}px`;
        canvas.style.height = `${alto}px`;

        ctx.setTransform(
            escala,
            0,
            0,
            escala,
            0,
            0
        );

        dibujar();
    }

    function obtenerRectMapa() {
        const proporcion = 1000 / 630;

        let w = ancho * 0.92;
        let h = w / proporcion;

        if (h > alto * 0.88) {
            h = alto * 0.88;
            w = h * proporcion;
        }

        return {
            x: (ancho - w) / 2 + camara.x,
            y: (alto - h) / 2 + camara.y,
            w: w * camara.zoom,
            h: h * camara.zoom
        };
    }

    function convertirCoordenadas(longitud, latitud) {
        const r = obtenerRectMapa();

        const x =
            r.x +
            (
                (longitud - limites.oeste) /
                (limites.este - limites.oeste)
            ) * r.w;

        const y =
            r.y +
            (
                (limites.norte - latitud) /
                (limites.norte - limites.sur)
            ) * r.h;

        return {
            x,
            y
        };
    }

    function dibujarFondo() {
        const fondo = ctx.createRadialGradient(
            ancho / 2,
            alto / 2,
            20,
            ancho / 2,
            alto / 2,
            Math.max(ancho, alto)
        );

        fondo.addColorStop(0, '#174c38');
        fondo.addColorStop(0.55, '#0d3023');
        fondo.addColorStop(1, '#06150f');

        ctx.fillStyle = fondo;
        ctx.fillRect(
            0,
            0,
            ancho,
            alto
        );
    }

    function dibujarMapa() {
        if (!mapa.complete || mapa.naturalWidth === 0) return;

        const r = obtenerRectMapa();

        ctx.save();

        ctx.globalAlpha = 0.72;

        ctx.drawImage(
            mapa,
            r.x,
            r.y,
            r.w,
            r.h
        );

        ctx.restore();
    }

    function dibujarPuntos() {
        puntos = [];

        if (!DATA.leyendas) return;

        DATA.leyendas.forEach((leyenda, indice) => {
            const coordenadas = ubicaciones[leyenda.id];

            if (!coordenadas) return;

            const posicion = convertirCoordenadas(
                coordenadas[0],
                coordenadas[1]
            );

            puntos.push({
                leyenda,
                indice,
                x: posicion.x,
                y: posicion.y
            });

            const activo =
                indice === hover ||
                indice === seleccionado;

            const pulso =
                1 +
                Math.sin(
                    performance.now() / 450 +
                    indice
                ) *
                0.2;

            ctx.beginPath();

            ctx.arc(
                posicion.x,
                posicion.y,
                activo ? 18 : 12 * pulso,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                leyenda.color
                    ? `${leyenda.color}35`
                    : 'rgba(255,255,255,.18)';

            ctx.fill();

            ctx.beginPath();

            ctx.arc(
                posicion.x,
                posicion.y,
                activo ? 8 : 6,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                leyenda.color ||
                '#ffffff';

            ctx.fill();

            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.stroke();

            if (activo) {
                ctx.font =
                    '600 13px Poppins, Arial, sans-serif';

                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillStyle = '#ffffff';

                ctx.fillText(
                    leyenda.titulo,
                    posicion.x,
                    posicion.y - 14
                );
            }
        });
    }

    function dibujar() {
        if (!ancho || !alto) return;

        ctx.clearRect(
            0,
            0,
            ancho,
            alto
        );

        dibujarFondo();
        dibujarMapa();
        dibujarPuntos();
    }

    function obtenerPunto(x, y) {
        let encontrado = -1;
        let distanciaMinima = 28;

        puntos.forEach((punto, indice) => {
            const distancia = Math.hypot(
                punto.x - x,
                punto.y - y
            );

            if (distancia < distanciaMinima) {
                distanciaMinima = distancia;
                encontrado = indice;
            }
        });

        return encontrado;
    }

    function mostrarLeyenda(leyenda) {
        if (!panel) return;

        if (tituloEl) {
            tituloEl.textContent =
                leyenda.titulo || '';
        }

        if (descEl) {
            descEl.textContent =
                leyenda.desc || '';
        }

        if (estadoEl) {
            estadoEl.textContent =
                leyenda.estado || '';
        }

        if (imgEl) {
            imgEl.onerror = () => {
                imgEl.style.display = 'none';
            };

            if (leyenda.img) {
                imgEl.src = leyenda.img;
                imgEl.alt =
                    leyenda.titulo || 'Leyenda mexicana';
                imgEl.style.display = 'block';
            } else {
                imgEl.removeAttribute('src');
                imgEl.style.display = 'none';
            }
        }

        seleccionado =
            DATA.leyendas.indexOf(leyenda);

        panel.classList.add('abierto');
    }

    function obtenerPosicion(evento) {
        const rect =
            canvas.getBoundingClientRect();

        return {
            x: evento.clientX - rect.left,
            y: evento.clientY - rect.top
        };
    }

    canvas.addEventListener(
        'pointerdown',
        evento => {
            const posicion =
                obtenerPosicion(evento);

            arrastrando = true;

            inicioX = posicion.x;
            inicioY = posicion.y;
            ultimoX = posicion.x;
            ultimoY = posicion.y;

            canvas.setPointerCapture(
                evento.pointerId
            );
        }
    );

    canvas.addEventListener(
        'pointermove',
        evento => {
            const posicion =
                obtenerPosicion(evento);

            if (arrastrando) {
                camara.x +=
                    posicion.x - ultimoX;

                camara.y +=
                    posicion.y - ultimoY;

                ultimoX = posicion.x;
                ultimoY = posicion.y;

                return;
            }

            const nuevoHover =
                obtenerPunto(
                    posicion.x,
                    posicion.y
                );

            if (nuevoHover !== hover) {
                hover = nuevoHover;

                canvas.style.cursor =
                    hover >= 0
                        ? 'pointer'
                        : 'grab';
            }
        }
    );

    canvas.addEventListener(
        'pointerup',
        evento => {
            const posicion =
                obtenerPosicion(evento);

            const distancia =
                Math.hypot(
                    posicion.x - inicioX,
                    posicion.y - inicioY
                );

            arrastrando = false;

            if (distancia > 8) return;

            const indice =
                obtenerPunto(
                    posicion.x,
                    posicion.y
                );

            if (indice >= 0) {
                mostrarLeyenda(
                    puntos[indice].leyenda
                );
            }
        }
    );

    canvas.addEventListener(
        'pointercancel',
        () => {
            arrastrando = false;
        }
    );

    canvas.addEventListener(
        'wheel',
        evento => {
            evento.preventDefault();

            const posicion =
                obtenerPosicion(evento);

            const factor =
                evento.deltaY < 0
                    ? 1.08
                    : 0.93;

            const zoomAnterior =
                camara.zoom;

            camara.zoom = Math.max(
                1,
                Math.min(
                    2.4,
                    camara.zoom * factor
                )
            );

            const cambio =
                camara.zoom / zoomAnterior;

            camara.x =
                posicion.x -
                (
                    posicion.x -
                    camara.x
                ) *
                cambio;

            camara.y =
                posicion.y -
                (
                    posicion.y -
                    camara.y
                ) *
                cambio;

            dibujar();
        },
        {
            passive: false
        }
    );

    cerrar?.addEventListener(
        'click',
        () => {
            panel.classList.remove(
                'abierto'
            );
        }
    );

    window.addEventListener(
        'resize',
        ajustarCanvas
    );

    mapa.addEventListener(
        'load',
        () => {
            ajustarCanvas();
        }
    );

    setTimeout(
        ajustarCanvas,
        100
    );

    function animar() {
        dibujar();
        requestAnimationFrame(animar);
    }

    requestAnimationFrame(animar);
})();