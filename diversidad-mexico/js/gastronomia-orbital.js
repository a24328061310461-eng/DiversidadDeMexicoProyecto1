(() => {
const plato = document.getElementById('plato');
const panel = document.getElementById('gastronomia-panel');

if (!plato || !panel) return;

const categorias = [
    {
        nombre: 'Bebidas',
        icono: '🥤',
        color: '#7dd3fc',
        descripcion: 'Bebidas tradicionales que forman parte de la vida cotidiana y las celebraciones mexicanas.',
        platillos: [
            {
                nombre: 'Agua de Horchata',
                descripcion: 'Bebida dulce preparada con arroz, canela y azúcar. Es común acompañarla con tacos, antojitos y comida casera.'
            },
            {
                nombre: 'Agua de Jamaica',
                descripcion: 'Infusión de flor de jamaica con un sabor ligeramente ácido y refrescante. Se sirve fría y endulzada.'
            },
            {
                nombre: 'Atole',
                descripcion: 'Bebida caliente de origen prehispánico elaborada principalmente con masa de maíz. Puede prepararse con vainilla, chocolate o frutas.'
            },
            {
                nombre: 'Champurrado',
                descripcion: 'Bebida caliente de maíz y chocolate, espesada con masa. Es especialmente popular durante las temporadas frías.'
            }
        ]
    },
    {
        nombre: 'Postres',
        icono: '🍮',
        color: '#f9a8d4',
        descripcion: 'Dulces mexicanos que combinan ingredientes tradicionales como leche, canela, frutas, piloncillo y chocolate.',
        platillos: [
            {
                nombre: 'Arroz con Leche',
                descripcion: 'Postre cremoso preparado con arroz, leche, azúcar y canela. Es uno de los dulces caseros más conocidos de México.'
            },
            {
                nombre: 'Flan Napolitano',
                descripcion: 'Postre suave elaborado con huevo, leche y azúcar, acompañado de caramelo líquido.'
            },
            {
                nombre: 'Cajeta',
                descripcion: 'Dulce espeso elaborado tradicionalmente con leche de cabra y azúcar. Es característico de la región del Bajío.'
            },
            {
                nombre: 'Pan de Muerto',
                descripcion: 'Pan dulce tradicional relacionado con el Día de Muertos. Su forma y decoración representan elementos simbólicos de esta celebración.'
            }
        ]
    },
    {
        nombre: 'Picantes',
        icono: '🌶️',
        color: '#fb7185',
        descripcion: 'El chile es uno de los ingredientes fundamentales de la cocina mexicana y existe una enorme variedad de preparaciones.',
        platillos: [
            {
                nombre: 'Chiles en Nogada',
                descripcion: 'Chile poblano relleno de picadillo y cubierto con nogada y granada. Es un platillo tradicional asociado con Puebla.'
            },
            {
                nombre: 'Chile Relleno',
                descripcion: 'Chile poblano relleno de queso, carne u otros ingredientes. Puede cubrirse con una capa de huevo y servirse con salsa.'
            },
            {
                nombre: 'Salsa de Molcajete',
                descripcion: 'Preparación de jitomate, chile y otros ingredientes triturados tradicionalmente en un molcajete.'
            },
            {
                nombre: 'Chilaquiles',
                descripcion: 'Totopos de tortilla bañados en salsa verde o roja. Pueden acompañarse con queso, crema, cebolla, pollo o huevo.'
            }
        ]
    },
    {
        nombre: 'Botanas',
        icono: '🥑',
        color: '#86efac',
        descripcion: 'Preparaciones para compartir o disfrutar como aperitivo, muchas veces acompañadas de salsas y chile.',
        platillos: [
            {
                nombre: 'Guacamole',
                descripcion: 'Preparación de aguacate machacado con ingredientes como jitomate, cebolla, chile, cilantro y limón.'
            },
            {
                nombre: 'Esquites',
                descripcion: 'Granos de elote cocidos y preparados con chile, limón, queso, mayonesa o crema, según la región.'
            },
            {
                nombre: 'Elote',
                descripcion: 'Mazorca de maíz cocida o asada que suele servirse con mayonesa, queso, chile y limón.'
            },
            {
                nombre: 'Totopos con Salsa',
                descripcion: 'Trozos de tortilla de maíz dorados y acompañados de diferentes tipos de salsas mexicanas.'
            }
        ]
    },
    {
        nombre: 'Comidas',
        icono: '🍲',
        color: '#fbbf24',
        descripcion: 'Platillos representativos de distintas regiones de México, preparados con ingredientes y técnicas tradicionales.',
        platillos: [
            {
                nombre: 'Mole Poblano',
                descripcion: 'Salsa compleja preparada con diferentes chiles, especias, semillas y chocolate. Tradicionalmente se sirve con pollo o guajolote.'
            },
            {
                nombre: 'Pozole',
                descripcion: 'Caldo preparado con maíz cacahuazintle y carne. Se acompaña con ingredientes como lechuga, rábano, cebolla, orégano y limón.'
            },
            {
                nombre: 'Tacos al Pastor',
                descripcion: 'Carne de cerdo marinada con especias y chile, cocinada en un trompo vertical y servida en tortilla de maíz.'
            },
            {
                nombre: 'Enchiladas',
                descripcion: 'Tortillas de maíz bañadas en salsa de chile y rellenas con ingredientes como pollo, queso o carne.'
            }
        ]
    },
    {
        nombre: 'Antojitos',
        icono: `
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M8 25 Q32 13 56 25 L51 49 Q32 57 13 49 Z" fill="#E8B45B"/>
                <path d="M10 25 Q32 36 54 25" fill="none" stroke="#9A5B28" stroke-width="3"/>
                <path d="M16 29 Q32 39 48 29" fill="none" stroke="#C47A32" stroke-width="2"/>
                <circle cx="24" cy="25" r="3" fill="#D94B35"/>
                <circle cx="36" cy="27" r="3" fill="#5E8C3A"/>
                <circle cx="43" cy="23" r="2.5" fill="#D94B35"/>
            </svg>
        `,
        color: '#c4b5fd',
        descripcion: 'Los antojitos son preparaciones populares hechas principalmente con masa de maíz y acompañadas con salsas, queso y otros ingredientes.',
        platillos: [
            {
                nombre: 'Tamales',
                descripcion: 'Masa de maíz rellena de carne, verduras, chile o ingredientes dulces, envuelta en hojas y cocida al vapor.'
            },
            {
                nombre: 'Gorditas',
                descripcion: 'Discos gruesos de masa de maíz que pueden abrirse y rellenarse con guisos, frijoles, queso o carne.'
            },
            {
                nombre: 'Sopes',
                descripcion: 'Pequeñas bases gruesas de masa con un borde alrededor, cubiertas con frijoles, carne, queso, crema, lechuga y salsa.'
            },
            {
                nombre: 'Quesadillas',
                descripcion: 'Tortillas dobladas y rellenas principalmente de queso, aunque también pueden llevar hongos, flor de calabaza, huitlacoche u otros ingredientes.'
            }
        ]
    }
];

const estilos = document.createElement('style');

estilos.textContent = `
    .gastronomia-layout {
        display: grid !important;
        grid-template-columns: minmax(400px, 48%) minmax(380px, 52%) !important;
        gap: 2rem !important;
        align-items: center !important;
        width: 100% !important;
    }

    .gastronomia-plato-col {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        min-height: 500px !important;
    }

    #plato {
        position: relative !important;
        width: 470px !important;
        height: 470px !important;
        border-radius: 50% !important;
        background:
            radial-gradient(circle at center,
                #ffffff 0%,
                #ffffff 47%,
                #f7f7f7 48%,
                #ffffff 57%,
                #e7e7e7 59%,
                #ffffff 63%,
                #eeeeee 100%) !important;
        border: 10px solid #f4f4f4 !important;
        box-shadow:
            0 20px 50px rgba(0,0,0,.22),
            inset 0 0 0 2px #d8d8d8,
            inset 0 0 35px rgba(0,0,0,.08) !important;
        overflow: visible !important;
    }

    #plato::before {
        content: '';
        position: absolute;
        inset: 34px;
        border-radius: 50%;
        border: 2px solid rgba(180,180,180,.5);
        pointer-events: none;
    }

    #plato::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 130px;
        height: 130px;
        transform: translate(-50%,-50%);
        border-radius: 50%;
        background:
            radial-gradient(circle, #fff 0%, #fafafa 60%, #e5e5e5 100%);
        border: 3px solid #dedede;
        box-shadow: inset 0 3px 12px rgba(0,0,0,.08);
        pointer-events: none;
    }

    .plato-item {
        position: absolute !important;
        left: 50% !important;
        top: 50% !important;
        width: 76px !important;
        height: 76px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        border-radius: 50% !important;
        border: 4px solid rgba(255,255,255,.95) !important;
        box-shadow:
            0 8px 18px rgba(0,0,0,.18),
            inset 0 1px 2px rgba(255,255,255,.9) !important;
        cursor: pointer !important;
        transition: box-shadow .25s ease, border-color .25s ease !important;
        font-size: 2rem !important;
        line-height: 1 !important;
        overflow: visible !important;
    }

    .plato-item svg {
        width: 43px !important;
        height: 43px !important;
        display: block !important;
        overflow: visible !important;
    }

    .plato-item:hover {
        border-color: #d4af37 !important;
        box-shadow:
            0 10px 24px rgba(0,0,0,.22),
            0 0 0 5px rgba(212,175,55,.16) !important;
    }

    .plato-item.activo {
        border-color: #d4af37 !important;
        box-shadow:
            0 10px 25px rgba(0,0,0,.24),
            0 0 0 6px rgba(212,175,55,.18) !important;
    }

    .gastronomia-panel {
        min-height: 440px !important;
        padding: 2rem !important;
        border-radius: 28px !important;
        background:
            linear-gradient(145deg,
                rgba(255,255,255,.96),
                rgba(248,248,248,.92)) !important;
        border: 1px solid rgba(210,210,210,.8) !important;
        box-shadow:
            0 18px 45px rgba(0,0,0,.13),
            inset 0 1px 0 rgba(255,255,255,.9) !important;
        color: #303030 !important;
        overflow: hidden !important;
        position: relative !important;
    }

    .gastronomia-panel::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background: linear-gradient(90deg, #d4af37, #e7c968, #d4af37);
    }

    .gastronomia-panel-vacio {
        height: 100%;
        min-height: 390px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #777;
    }

    .gastronomia-panel-vacio-icono {
        width: 78px;
        height: 78px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.2rem;
        background: #fff;
        border: 1px solid #ddd;
        box-shadow: 0 8px 20px rgba(0,0,0,.08);
        margin-bottom: 1rem;
    }

    .gastronomia-panel-vacio strong {
        display: block;
        color: #444;
        font-size: 1.25rem;
        margin-bottom: .4rem;
    }

    .gastronomia-panel-vacio span {
        max-width: 330px;
        line-height: 1.6;
        font-size: .92rem;
    }

    .gastronomia-panel-contenido {
        animation: entradaGastronomia .35s ease both;
    }

    @keyframes entradaGastronomia {
        from {
            opacity: 0;
            transform: translateX(18px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .gastronomia-panel-cabecera {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding-bottom: 1.2rem;
        margin-bottom: 1.2rem;
        border-bottom: 1px solid #e5e5e5;
    }

    .gastronomia-panel-icono {
        width: 68px;
        height: 68px;
        flex: 0 0 68px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        background: #fff;
        border: 1px solid #ddd;
        box-shadow: 0 7px 18px rgba(0,0,0,.1);
        font-size: 2rem;
    }

    .gastronomia-panel-cabecera h3 {
        margin: 0 0 .25rem;
        font-family: 'Poppins', sans-serif;
        font-size: 1.65rem;
        font-weight: 900;
        color: #292929;
    }

    .gastronomia-panel-cabecera p {
        margin: 0;
        color: #777;
        font-size: .88rem;
        line-height: 1.5;
    }

    .gastronomia-lista {
        display: flex;
        flex-direction: column;
        gap: .75rem;
        max-height: 285px;
        overflow-y: auto;
        padding-right: .35rem;
    }

    .gastronomia-lista::-webkit-scrollbar {
        width: 6px;
    }

    .gastronomia-lista::-webkit-scrollbar-thumb {
        background: #d5d5d5;
        border-radius: 10px;
    }

    .gastronomia-alimento {
        display: flex;
        align-items: flex-start;
        gap: .9rem;
        padding: 1rem 1.1rem;
        background: #fff;
        border: 1px solid #e7e7e7;
        border-radius: 16px;
        box-shadow: 0 4px 12px rgba(0,0,0,.055);
        transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
    }

    .gastronomia-alimento:hover {
        transform: translateX(5px);
        border-color: #d9bd62;
        box-shadow: 0 8px 18px rgba(0,0,0,.09);
    }

    .gastronomia-alimento-icono {
        width: 34px;
        height: 34px;
        flex: 0 0 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #faf7ed;
        color: #d4af37;
        font-size: 1rem;
    }

    .gastronomia-alimento h4 {
        margin: 0 0 .25rem;
        color: #333;
        font-family: 'Poppins', sans-serif;
        font-size: .98rem;
        font-weight: 700;
    }

    .gastronomia-alimento p {
        margin: 0;
        color: #707070;
        font-size: .82rem;
        line-height: 1.55;
    }

    @media (max-width: 1050px) {
        .gastronomia-layout {
            grid-template-columns: 1fr !important;
        }

        .gastronomia-plato-col {
            min-height: 430px !important;
        }

        .gastronomia-panel {
            width: min(700px, 100%);
            margin: 0 auto;
        }
    }

    @media (max-width: 600px) {
        #plato {
            width: 330px !important;
            height: 330px !important;
        }

        .plato-item {
            width: 60px !important;
            height: 60px !important;
            font-size: 1.55rem !important;
        }

        .gastronomia-panel {
            padding: 1.3rem !important;
        }

        .gastronomia-panel-cabecera h3 {
            font-size: 1.3rem;
        }
    }
`;

document.head.appendChild(estilos);

document.querySelector('.gastronomia-categorias')?.remove();

const items = [];
const cantidad = categorias.length;
let anguloGlobal = 0;

categorias.forEach((categoria, indice) => {
    const item = document.createElement('button');

    item.type = 'button';
    item.className = 'plato-item';
    item.setAttribute('aria-label', categoria.nombre);
    item.innerHTML = categoria.icono;

    item.style.background = `
        radial-gradient(circle at 35% 30%,
        #ffffff 0%,
        #ffffff 32%,
        ${categoria.color} 100%)
    `;

    item.dataset.angulo = (indice / cantidad) * Math.PI * 2;
    item.dataset.radio = '175';

    item.addEventListener('click', (e) => {
        e.stopPropagation();

        items.forEach((otro) => otro.classList.remove('activo'));
        item.classList.add('activo');

        mostrarCategoria(categoria);
    });

    plato.appendChild(item);
    items.push(item);
});

function actualizar() {
    anguloGlobal += 0.003;

    items.forEach((item) => {
        const base = parseFloat(item.dataset.angulo);
        const radio = parseFloat(item.dataset.radio);
        const angulo = base + anguloGlobal;

        const x = Math.cos(angulo) * radio;
        const y = Math.sin(angulo) * radio;

        const profundidad = Math.sin(angulo);
        const escala = 0.78 + (profundidad + 1) * 0.14;

        item.style.transform =
            `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${escala})`;

        item.style.zIndex = Math.floor((profundidad + 1) * 100);
    });

    requestAnimationFrame(actualizar);
}

function mostrarCategoria(categoria) {
    panel.innerHTML = `
        <div class="gastronomia-panel-contenido">
            <div class="gastronomia-panel-cabecera">
                <div class="gastronomia-panel-icono">${categoria.icono}</div>
                <div>
                    <h3>${categoria.nombre}</h3>
                    <p>${categoria.descripcion}</p>
                </div>
            </div>

            <div class="gastronomia-lista">
                ${categoria.platillos.map((platillo) => `
                    <article class="gastronomia-alimento">
                        <div class="gastronomia-alimento-icono">
                            <i class="fas fa-leaf"></i>
                        </div>
                        <div>
                            <h4>${platillo.nombre}</h4>
                            <p>${platillo.descripcion}</p>
                        </div>
                    </article>
                `).join('')}
            </div>
        </div>
    `;
}

panel.innerHTML = `
    <div class="gastronomia-panel-vacio">
        <div class="gastronomia-panel-vacio-icono">🌮</div>
        <strong>Explora la gastronomía mexicana</strong>
        <span>Selecciona una categoría del plato para descubrir diferentes platillos y sus tradiciones.</span>
    </div>
`;

actualizar();

})();