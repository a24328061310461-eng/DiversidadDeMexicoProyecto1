(() => {
    const canvas = document.getElementById('fauna-canvas');

    if (!canvas) {
        return;
    }

    const ctx = canvas.getContext('2d');
    const wrap = canvas.parentElement;
    const slider = document.getElementById('fauna-hora');
    const label = document.getElementById('fauna-hora-label');

    const info = document.getElementById('fauna-info');
    const imgInfo = document.getElementById('fauna-info-img');
    const nombreInfo = document.getElementById('fauna-info-nombre');
    const estadoInfo = document.getElementById('fauna-info-estado');
    const descripcionInfo = document.getElementById('fauna-info-descripcion');
    const habitatInfo = document.getElementById('fauna-info-habitat');
    const regionInfo = document.getElementById('fauna-info-region');
    const dietaInfo = document.getElementById('fauna-info-dieta');
    const curiosidadInfo = document.getElementById('fauna-info-curiosidad');

    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    canvas.style.opacity = '1';
    canvas.style.filter = 'none';

    const ANIMALES = [
        {
            hora: 0,
            nombre: 'Ajolote mexicano',
            tipo: 'agua',
            estado: 'En peligro crítico',
            habitat: 'Canales y humedales de Xochimilco.',
            region: 'Valle de México',
            dieta: 'Pequeños invertebrados, larvas y organismos acuáticos.',
            descripcion: 'Anfibio mexicano famoso por su capacidad de regeneración y por su relación con los humedales de Xochimilco.',
            curiosidad: 'Puede regenerar algunas partes de su cuerpo.',
            emoji: '🦎',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ambystoma_mexicanum.jpg'
        },
        {
            hora: 1,
            nombre: 'Jaguar',
            tipo: 'tierra',
            estado: 'En peligro',
            habitat: 'Selvas tropicales, manglares y bosques.',
            region: 'Yucatán, Chiapas y Oaxaca',
            dieta: 'Mamíferos, aves, reptiles y otros animales.',
            descripcion: 'Es el felino más grande de América y uno de los animales más representativos de las selvas mexicanas.',
            curiosidad: 'Es un excelente nadador.',
            emoji: '🐆',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jaguar.jpg'
        },
        {
            hora: 2,
            nombre: 'Lobo mexicano',
            tipo: 'tierra',
            estado: 'En peligro de extinción',
            habitat: 'Bosques de montaña y zonas áridas.',
            region: 'Sonora, Chihuahua y Durango',
            dieta: 'Venados, pecaríes, conejos y otros mamíferos.',
            descripcion: 'Es la subespecie de lobo gris más pequeña de Norteamérica y forma parte de la fauna del norte de México.',
            curiosidad: 'Vive en grupos familiares y se comunica mediante vocalizaciones.',
            emoji: '🐺',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mexican_Wolf.jpg'
        },
        {
            hora: 3,
            nombre: 'Guacamaya roja',
            tipo: 'aire',
            estado: 'En peligro de extinción',
            habitat: 'Selvas húmedas de tierras bajas.',
            region: 'Chiapas y sureste mexicano',
            dieta: 'Frutos, semillas, flores y hojas.',
            descripcion: 'Ave de colores intensos que habita principalmente las selvas del sureste mexicano.',
            curiosidad: 'Puede formar parejas estables durante largos periodos.',
            emoji: '🦜',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Scarlet_macaw_ara_macao.jpg'
        },
        {
            hora: 4,
            nombre: 'Águila real',
            tipo: 'aire',
            estado: 'Amenazada en México',
            habitat: 'Sierras, cañones, matorrales y zonas abiertas.',
            region: 'Norte, centro y occidente de México',
            dieta: 'Mamíferos pequeños y medianos, aves y reptiles.',
            descripcion: 'Ave rapaz representativa de México y uno de los símbolos presentes en el escudo nacional.',
            curiosidad: 'Puede utilizar corrientes de aire para planear.',
            emoji: '🦅',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aquila_chrysaetos_-_Golden_Eagle.jpg'
        },
        {
            hora: 5,
            nombre: 'Mariposa monarca',
            tipo: 'aire',
            estado: 'Sujeta a protección',
            habitat: 'Bosques de oyamel durante el invierno.',
            region: 'Michoacán y Estado de México',
            dieta: 'Las orugas consumen algodoncillo y los adultos néctar.',
            descripcion: 'Realiza una de las migraciones más conocidas del continente y llega a México durante el invierno.',
            curiosidad: 'Sus principales santuarios están en montañas del centro de México.',
            emoji: '🦋',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mariposa_monarca.JPG'
        },
        {
            hora: 6,
            nombre: 'Vaquita marina',
            tipo: 'agua',
            estado: 'En peligro crítico',
            habitat: 'Aguas costeras poco profundas.',
            region: 'Alto Golfo de California',
            dieta: 'Peces pequeños, calamares y crustáceos.',
            descripcion: 'Pequeño cetáceo exclusivo de México y uno de los mamíferos marinos más pequeños del mundo.',
            curiosidad: 'Su distribución natural está limitada al Alto Golfo de California.',
            emoji: '🐬',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Phocoena_sinus.jpg'
        },
        {
            hora: 7,
            nombre: 'Teporingo',
            tipo: 'tierra',
            estado: 'En peligro de extinción',
            habitat: 'Pastizales de zacatón y bosques de alta montaña.',
            region: 'Eje Neovolcánico',
            dieta: 'Pastos, hierbas y brotes.',
            descripcion: 'También llamado conejo de los volcanes, es un pequeño mamífero de las montañas del centro de México.',
            curiosidad: 'Es uno de los conejos más pequeños de México.',
            emoji: '🐇',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Romerolagus_diazi_.jpg'
        },
        {
            hora: 8,
            nombre: 'Ocelote',
            tipo: 'tierra',
            estado: 'Protección especial',
            habitat: 'Selvas, bosques tropicales y matorrales.',
            region: 'Sureste y costa del Pacífico',
            dieta: 'Roedores, aves, reptiles y pequeños mamíferos.',
            descripcion: 'Felino de tamaño mediano con manchas características y actividad principalmente nocturna y crepuscular.',
            curiosidad: 'Sus manchas son diferentes en cada individuo.',
            emoji: '🐆',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Leopardus_pardalis.jpg'
        },
        {
            hora: 9,
            nombre: 'Perrito de la pradera mexicano',
            tipo: 'tierra',
            estado: 'En peligro de extinción',
            habitat: 'Pastizales y valles semiáridos.',
            region: 'Coahuila, Nuevo León, San Luis Potosí y Zacatecas',
            dieta: 'Hierbas, pastos y otras plantas.',
            descripcion: 'Roedor social que vive en colonias y construye complejas madrigueras.',
            curiosidad: 'Sus llamadas de alarma advierten a otros miembros de la colonia.',
            emoji: '🐿️',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Perrito_de_la_pradera_mexicano_%28Cynomys_mexicanus%29.jpg'
        },
        {
            hora: 10,
            nombre: 'Tortuga golfina',
            tipo: 'agua',
            estado: 'En peligro de extinción',
            habitat: 'Océanos tropicales y playas de anidación.',
            region: 'Costas del Pacífico mexicano',
            dieta: 'Medusas, crustáceos, moluscos y organismos marinos.',
            descripcion: 'Tortuga marina que utiliza diferentes playas mexicanas para reproducirse.',
            curiosidad: 'Las hembras realizan grandes recorridos marinos.',
            emoji: '🐢',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lepidochelys_olivacea.jpg'
        },
        {
            hora: 11,
            nombre: 'Cacomixtle',
            tipo: 'tierra',
            estado: 'Preocupación menor',
            habitat: 'Bosques, matorrales y zonas urbanas con vegetación.',
            region: 'Gran parte de México',
            dieta: 'Frutas, insectos, pequeños vertebrados y huevos.',
            descripcion: 'Mamífero nocturno de cola larga y anillada que puede adaptarse a diferentes ambientes.',
            curiosidad: 'Su cola le ayuda a mantener el equilibrio entre las ramas.',
            emoji: '🦝',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bassariscus_astutus.jpg'
        },
        {
            hora: 12,
            nombre: 'Coatí',
            tipo: 'tierra',
            estado: 'Preocupación menor',
            habitat: 'Selvas, bosques y zonas tropicales.',
            region: 'Sureste y occidente de México',
            dieta: 'Frutas, insectos, huevos y pequeños animales.',
            descripcion: 'Mamífero de hocico alargado y cola anillada que suele desplazarse en grupos.',
            curiosidad: 'Puede buscar alimento tanto en el suelo como en los árboles.',
            emoji: '🦝',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Coati_01.jpg'
        },
        {
            hora: 13,
            nombre: 'Mono araña',
            tipo: 'tierra',
            estado: 'En peligro de extinción',
            habitat: 'Selvas tropicales y bosques húmedos.',
            region: 'Chiapas, Tabasco, Campeche y Yucatán',
            dieta: 'Frutas, semillas, hojas y flores.',
            descripcion: 'Primate que utiliza sus largos brazos y su cola para desplazarse entre las ramas.',
            curiosidad: 'Su cola puede funcionar como una quinta extremidad.',
            emoji: '🐒',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/AtelesGeoffroyi.jpg'
        },
        {
            hora: 14,
            nombre: 'Quetzal',
            tipo: 'aire',
            estado: 'Protección especial',
            habitat: 'Bosques de niebla y montañas húmedas.',
            region: 'Chiapas',
            dieta: 'Frutos, insectos y pequeños vertebrados.',
            descripcion: 'Ave de plumaje brillante asociada con los bosques de niebla del sur de México.',
            curiosidad: 'El macho desarrolla largas plumas en la cola durante la época reproductiva.',
            emoji: '🦚',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pharomachrus_mocinno_-male.jpg'
        },
        {
            hora: 15,
            nombre: 'Loro cabeza amarilla',
            tipo: 'aire',
            estado: 'En peligro de extinción',
            habitat: 'Bosques tropicales y zonas arboladas.',
            region: 'Noreste, Golfo y sureste de México',
            dieta: 'Frutas, semillas, flores y brotes.',
            descripcion: 'Loro mexicano conocido por su cabeza amarilla y su capacidad para imitar sonidos.',
            curiosidad: 'Es una de las especies de loros más reconocibles de México.',
            emoji: '🦜',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Amazona_oratrix_oratrix_Mexico.JPG'
        },
        {
            hora: 16,
            nombre: 'Monstruo de Gila',
            tipo: 'tierra',
            estado: 'Protección especial',
            habitat: 'Zonas áridas y semiáridas.',
            region: 'Sonora y regiones del noroeste',
            dieta: 'Huevos, pequeños mamíferos, aves y reptiles.',
            descripcion: 'Lagarto de cuerpo robusto y piel con patrones de colores característicos.',
            curiosidad: 'Es uno de los pocos lagartos venenosos conocidos.',
            emoji: '🦎',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Heloderma_horridum.jpg'
        },
        {
            hora: 17,
            nombre: 'Iguana verde',
            tipo: 'tierra',
            estado: 'Preocupación menor',
            habitat: 'Selvas, bosques tropicales y zonas cercanas al agua.',
            region: 'Costas y regiones tropicales de México',
            dieta: 'Principalmente hojas, flores y frutos.',
            descripcion: 'Reptil herbívoro que puede encontrarse en ambientes cálidos y húmedos.',
            curiosidad: 'Es excelente trepando árboles y puede nadar.',
            emoji: '🦎',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iguana_in_mexico.jpg'
        },
        {
            hora: 18,
            nombre: 'Cocodrilo de Morelet',
            tipo: 'agua',
            estado: 'Protección especial',
            habitat: 'Pantanos, lagunas, ríos y humedales.',
            region: 'Golfo de México y sureste mexicano',
            dieta: 'Peces, aves, reptiles y pequeños mamíferos.',
            descripcion: 'Cocodrilo de agua dulce presente en humedales del sureste de México.',
            curiosidad: 'También se encuentra en la Laguna del Carpintero, en Tamaulipas.',
            emoji: '🐊',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cocodrilo_Crocodylus_moreletii.jpg'
        },
        {
            hora: 19,
            nombre: 'Tapir centroamericano',
            tipo: 'tierra',
            estado: 'En peligro de extinción',
            habitat: 'Selvas húmedas y bosques tropicales.',
            region: 'Chiapas y sureste de México',
            dieta: 'Hojas, frutos, ramas y plantas acuáticas.',
            descripcion: 'Es el mamífero terrestre más grande de México y tiene una característica trompa corta.',
            curiosidad: 'Es un excelente nadador y suele permanecer cerca del agua.',
            emoji: '🐗',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tapirus_bairdii.jpg'
        },
        {
            hora: 20,
            nombre: 'Manatí del Caribe',
            tipo: 'agua',
            estado: 'En peligro de extinción',
            habitat: 'Ríos, lagunas, costas y aguas tranquilas.',
            region: 'Golfo de México y Caribe mexicano',
            dieta: 'Plantas acuáticas y vegetación.',
            descripcion: 'Mamífero acuático herbívoro que habita zonas costeras y cuerpos de agua cálida.',
            curiosidad: 'Puede alimentarse durante varias horas al día de vegetación acuática.',
            emoji: '🐋',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Trichechus_manatus%2C_NOAA.jpg'
        },
        {
            hora: 21,
            nombre: 'Puma',
            tipo: 'tierra',
            estado: 'Preocupación menor',
            habitat: 'Bosques, montañas, matorrales y zonas áridas.',
            region: 'Gran parte de México',
            dieta: 'Venados, conejos, roedores y otros mamíferos.',
            descripcion: 'Felino adaptable que puede vivir en una gran variedad de ambientes mexicanos.',
            curiosidad: 'Tiene una de las distribuciones geográficas más amplias entre los grandes mamíferos de América.',
            emoji: '🐈',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Puma_concolor.jpg'
        },
        {
            hora: 22,
            nombre: 'Zorro gris',
            tipo: 'tierra',
            estado: 'Preocupación menor',
            habitat: 'Bosques, matorrales y zonas semiáridas.',
            region: 'Gran parte de México',
            dieta: 'Frutas, insectos, roedores, aves y pequeños animales.',
            descripcion: 'Pequeño cánido que puede trepar árboles y adaptarse a diferentes ambientes.',
            curiosidad: 'Es uno de los pocos cánidos con capacidad para trepar árboles.',
            emoji: '🦊',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Urocyon_cinereoargenteus.jpg'
        },
        {
            hora: 23,
            nombre: 'Coyote',
            tipo: 'tierra',
            estado: 'Preocupación menor',
            habitat: 'Desiertos, matorrales, bosques y pastizales.',
            region: 'Norte y centro de México',
            dieta: 'Mamíferos pequeños, aves, reptiles, insectos y frutos.',
            descripcion: 'Cánido muy adaptable que ocupa una gran variedad de ambientes de México.',
            curiosidad: 'Puede adaptarse incluso a zonas cercanas a ciudades.',
            emoji: '🐺',
            foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Canis_latrans.jpg'
        }
    ];

    let W = 0;
    let H = 0;
    let hora = 12;
    let actual = ANIMALES[12];
    let tiempo = 0;
    let ultimo = performance.now();

    function redimensionar() {
        const rect = wrap.getBoundingClientRect();

        W = Math.max(rect.width, 1);
        H = Math.max(rect.height, 1);

        canvas.width = W * DPR;
        canvas.height = H * DPR;

        canvas.style.width = `${W}px`;
        canvas.style.height = `${H}px`;
        canvas.style.opacity = '1';
        canvas.style.filter = 'none';

        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
        ctx.filter = 'none';
    }

    function animalPorHora(h) {
        return ANIMALES[h] || ANIMALES[0];
    }

    function actualizarAnimal() {
        actual = animalPorHora(hora);
        actualizarInfo();
    }

    function actualizarInfo() {
        if (!actual) {
            return;
        }

        nombreInfo.textContent = actual.nombre;
        estadoInfo.textContent = actual.estado;
        descripcionInfo.textContent = actual.descripcion;
        habitatInfo.textContent = actual.habitat;
        regionInfo.textContent = actual.region;
        dietaInfo.textContent = actual.dieta;
        curiosidadInfo.textContent = actual.curiosidad;

        imgInfo.style.display = 'block';
        imgInfo.style.opacity = '1';
        imgInfo.src = actual.foto;
        imgInfo.alt = `Fotografía de ${actual.nombre}`;

        imgInfo.onerror = () => {
            imgInfo.style.display = 'none';
        };

        info.classList.remove('cambio');
        void info.offsetWidth;
        info.classList.add('cambio');
    }

    function cielo(h) {
        if (h < 6 || h >= 20) {
            return ['#07111f', '#172d48'];
        }

        if (h >= 6 && h < 8) {
            return ['#557fae', '#f3a25d'];
        }

        if (h >= 17 && h < 20) {
            return ['#426e9b', '#dc765e'];
        }

        return ['#58b5d7', '#d9eddd'];
    }

    function fondo(h) {
        const [arriba, abajo] = cielo(h);

        const gradiente = ctx.createLinearGradient(
            0,
            0,
            0,
            H
        );

        gradiente.addColorStop(0, arriba);
        gradiente.addColorStop(1, abajo);

        ctx.globalAlpha = 1;
        ctx.filter = 'none';
        ctx.globalCompositeOperation = 'source-over';

        ctx.fillStyle = gradiente;
        ctx.fillRect(0, 0, W, H);

        const noche = h < 6 || h >= 20;

        if (noche) {
            for (let i = 0; i < 70; i++) {
                const x = (i * 137.53) % W;
                const y = (i * 71.21) % (H * 0.55);

                const brillo =
                    0.35 +
                    (Math.sin(tiempo * 1.8 + i) + 1) * 0.2;

                ctx.globalAlpha = 1;
                ctx.fillStyle =
                    `rgba(255,255,255,${brillo})`;

                ctx.beginPath();

                ctx.arc(
                    x,
                    y,
                    1 + brillo,
                    0,
                    Math.PI * 2
                );

                ctx.fill();
            }

            ctx.globalAlpha = 1;
            ctx.fillStyle = '#f7f0cf';

            ctx.beginPath();

            ctx.arc(
                W * 0.82,
                H * 0.19,
                28,
                0,
                Math.PI * 2
            );

            ctx.fill();

            ctx.fillStyle = '#0d1b31';

            ctx.beginPath();

            ctx.arc(
                W * 0.84,
                H * 0.17,
                25,
                0,
                Math.PI * 2
            );

            ctx.fill();
        } else {
            const progreso =
                Math.max(
                    0,
                    Math.min(1, (h - 6) / 14)
                );

            const x =
                W * (0.08 + progreso * 0.84);

            const y =
                H * 0.62 -
                Math.sin(progreso * Math.PI) * H * 0.45;

            ctx.globalAlpha = 1;
            ctx.fillStyle =
                'rgba(255,230,145,.24)';

            ctx.beginPath();

            ctx.arc(
                x,
                y,
                70,
                0,
                Math.PI * 2
            );

            ctx.fill();

            ctx.globalAlpha = 1;
            ctx.fillStyle = '#fff0ad';

            ctx.beginPath();

            ctx.arc(
                x,
                y,
                24,
                0,
                Math.PI * 2
            );

            ctx.fill();
        }
    }

    function paisaje() {
        const agua = actual.tipo === 'agua';
        const base = H * 0.72;

        ctx.globalAlpha = 1;
        ctx.filter = 'none';
        ctx.globalCompositeOperation = 'source-over';

        ctx.fillStyle =
            agua ? '#176477' : '#2b593d';

        ctx.beginPath();
        ctx.moveTo(0, base);

        for (let x = 0; x <= W; x += 24) {
            ctx.lineTo(
                x,
                H * 0.59 +
                Math.sin(x * 0.006) * 30 +
                Math.sin(x * 0.019) * 14
            );
        }

        ctx.lineTo(W, H);
        ctx.lineTo(0, H);
        ctx.fill();

        ctx.fillStyle =
            agua
                ? 'rgba(20,102,124,.9)'
                : '#183d29';

        ctx.fillRect(
            0,
            base,
            W,
            H - base
        );

        for (let i = 0; i < 20; i++) {
            const x = (i * 149) % W;
            const altura = 15 + (i % 5) * 6;

            ctx.globalAlpha = 1;
            ctx.strokeStyle =
                agua
                    ? 'rgba(180,235,230,.22)'
                    : 'rgba(91,151,93,.55)';

            ctx.beginPath();

            ctx.moveTo(
                x,
                base + 10
            );

            ctx.quadraticCurveTo(
                x - 7,
                base - altura,
                x + Math.sin(tiempo + i) * 3,
                base - altura - 5
            );

            ctx.stroke();
        }

        if (agua) {
            for (let i = 0; i < 10; i++) {
                const y = base + 20 + i * 18;

                ctx.globalAlpha = 1;
                ctx.strokeStyle =
                    'rgba(210,250,250,.2)';

                ctx.beginPath();

                for (let x = 0; x <= W; x += 30) {
                    const yy =
                        y +
                        Math.sin(
                            x * 0.025 +
                            tiempo * 1.2 +
                            i
                        ) * 3;

                    if (x === 0) {
                        ctx.moveTo(x, yy);
                    } else {
                        ctx.lineTo(x, yy);
                    }
                }

                ctx.stroke();
            }
        }
    }

    function dibujarSombra(x, y, tam) {
        ctx.save();

        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
        ctx.filter = 'none';

        ctx.fillStyle = 'rgba(0,0,0,.20)';

        ctx.beginPath();

        ctx.ellipse(
            x,
            y + tam * 0.82,
            tam * 0.7,
            tam * 0.14,
            0,
            0,
            Math.PI * 2
        );

        ctx.fill();

        ctx.restore();
    }

    function dibujarAnimal(animal) {
        const movimiento =
            Math.sin(
                tiempo *
                (animal.tipo === 'aire'
                    ? 1.35
                    : 0.72)
            );

        const rebote =
            Math.sin(tiempo * 1.9);

        const avance =
            Math.sin(tiempo * 0.32) *
            W *
            0.29;

        const x =
            W * 0.5 +
            avance;

        let y;

        if (animal.tipo === 'aire') {
            y =
                H * 0.36 +
                movimiento * 22;
        } else if (animal.tipo === 'agua') {
            y =
                H * 0.64 +
                movimiento * 9;
        } else {
            y =
                H * 0.67 +
                movimiento * 4;
        }

        const tam =
            Math.min(W, H) *
            (animal.tipo === 'aire'
                ? 0.13
                : 0.15);

        const escala =
            1 +
            rebote * 0.035;

        ctx.save();

        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
        ctx.filter = 'none';

        ctx.translate(x, y);

        if (animal.tipo === 'aire') {
            ctx.rotate(movimiento * 0.06);
        } else {
            ctx.rotate(movimiento * 0.025);
        }

        ctx.scale(escala, escala);
        ctx.translate(-x, -y);

        /*
         * SOMBRA DEL ANIMAL
         * Se conserva, pero se dibuja aparte para que
         * no reduzca visualmente la intensidad del emoji.
         */
        dibujarSombra(x, y, tam);

        /*
         * ANIMAL
         * Se fuerza un estado completamente limpio del canvas.
         */
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
        ctx.filter = 'none';

        ctx.shadowColor = 'rgba(0,0,0,.45)';
        ctx.shadowBlur = 14;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 6;

        ctx.font =
            `900 ${tam * 1.65}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`;

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.fillText(
            animal.emoji,
            x,
            y
        );

        /*
         * Restablecemos inmediatamente el estado.
         */
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.globalAlpha = 1;
        ctx.filter = 'none';

        ctx.restore();
    }

    function dibujar() {
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
        ctx.filter = 'none';

        fondo(hora);
        paisaje();

        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
        ctx.filter = 'none';

        dibujarAnimal(actual);
    }

    function frame(ahora) {
        const dt =
            Math.min(
                0.05,
                (ahora - ultimo) / 1000
            );

        ultimo = ahora;
        tiempo += dt;

        dibujar();

        requestAnimationFrame(frame);
    }

    slider.addEventListener(
        'input',
        () => {
            hora = Number(slider.value);

            label.textContent =
                `${String(hora).padStart(2, '0')}:00`;

            actualizarAnimal();

            slider.style.setProperty(
                '--hora-progreso',
                `${(hora / 23) * 100}%`
            );
        }
    );

    window.addEventListener(
        'resize',
        redimensionar
    );

    window._alMostrarVista =
        window._alMostrarVista || {};

    window._alMostrarVista.fauna =
        () => {
            setTimeout(
                redimensionar,
                60
            );
        };

    redimensionar();
    actualizarInfo();

    slider.value = hora;
    label.textContent = '12:00';

    slider.style.setProperty(
        '--hora-progreso',
        `${(hora / 23) * 100}%`
    );

    requestAnimationFrame(frame);
})();