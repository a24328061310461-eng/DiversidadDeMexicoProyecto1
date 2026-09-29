// ============ UTILIDADES MATEMÁTICAS Y DE ANIMACIÓN ============
const U = {
    vec: (x = 0, y = 0) => ({ x, y }),
    lerp: (a, b, t) => a + (b - a) * t,
    smooth: (a, b, t) => a + (b - a) * (t * t * (3 - 2 * t)),
    clamp: (v, min, max) => Math.min(Math.max(v, min), max),
    dist: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1),
    angle: (x1, y1, x2, y2) => Math.atan2(y2 - y1, x2 - x1),
    rand: (min, max) => Math.random() * (max - min) + min,
    randInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,

    noise: (x, y = 0) => {
        const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
        return (n - Math.floor(n)) * 2 - 1;
    },

    noiseSuave: (t, semilla = 0) =>
        U.noise(t * 0.5 + semilla, semilla * 2) * 0.5 +
        U.noise(t * 0.25 + semilla, semilla) * 0.5,

    map: (v, a1, a2, b1, b2) => b1 + ((v - a1) / (a2 - a1)) * (b2 - b1),
    esTactil: () => 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    reducido: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,

    el: (tag, clases = '', html = '') => {
        const e = document.createElement(tag);
        if (clases) e.className = clases;
        if (html) e.innerHTML = html;
        return e;
    }
};

// ============ SISTEMA DE BUCLE OPTIMIZADO ============
class Loop {
    constructor(callback, fps = 60) {
        this.callback = callback;
        this.fps = fps;
        this.intervalo = 1000 / fps;
        this.ultimo = 0;
        this.activo = false;
        this.raf = null;
        this._tick = this._tick.bind(this);
    }

    start() {
        if (this.activo) return;
        this.activo = true;
        this.ultimo = performance.now();
        this.raf = requestAnimationFrame(this._tick);
    }

    stop() {
        this.activo = false;
        if (this.raf) cancelAnimationFrame(this.raf);
    }

    _tick(t) {
        if (!this.activo) return;
        const delta = t - this.ultimo;
        if (delta >= this.intervalo) {
            this.ultimo = t - (delta % this.intervalo);
            this.callback(delta / 1000, t);
        }
        this.raf = requestAnimationFrame(this._tick);
    }
}

// ============ CURSOR PERSONALIZADO CON ESTELA DORADA ============
class CursorEstela {
    constructor() {
        if (U.esTactil() || U.reducido()) return;

        this.puntos = [];
        this.maxPuntos = 20;
        this.raton = { x: -100, y: -100 };
        this.activo = false;

        this.canvas = document.createElement('canvas');
        this.canvas.className = 'cursor-canvas';
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.resize();
        window.addEventListener('resize', () => this.resize());

        window.addEventListener('mousemove', (e) => {
            this.raton.x = e.clientX;
            this.raton.y = e.clientY;
            this.activo = true;
            this.puntos.push({ x: e.clientX, y: e.clientY, vida: 1 });
            if (this.puntos.length > this.maxPuntos) this.puntos.shift();
        });

        window.addEventListener('mouseleave', () => {
            this.activo = false;
        });

        this.loop = new Loop(() => this.dibujar(), 60);
        this.loop.start();
    }

    resize() {
        const DPR = Math.min(window.devicePixelRatio || 1, 2);
        this.canvas.width = window.innerWidth * DPR;
        this.canvas.height = window.innerHeight * DPR;
        this.canvas.style.width = window.innerWidth + 'px';
        this.canvas.style.height = window.innerHeight + 'px';
        this.ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        this.DPR = DPR;
    }

    dibujar() {
        const w = window.innerWidth;
        const h = window.innerHeight;

        this.ctx.clearRect(0, 0, w, h);

        // Actualizar vida de cada punto
        for (let i = this.puntos.length - 1; i >= 0; i--) {
            const p = this.puntos[i];
            p.vida -= 0.05;
            if (p.vida <= 0) {
                this.puntos.splice(i, 1);
            }
        }

        // Dibujar estela
        for (let i = 0; i < this.puntos.length; i++) {
            const p = this.puntos[i];
            const t = i / Math.max(this.puntos.length - 1, 1);
            const size = 2 + t * 8;
            const alpha = t * p.vida * 0.7;

            const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 2.5);
            grad.addColorStop(0, `rgba(255, 220, 100, ${alpha})`);
            grad.addColorStop(0.4, `rgba(212, 175, 55, ${alpha * 0.6})`);
            grad.addColorStop(1, 'rgba(212, 175, 55, 0)');

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
            this.ctx.fillStyle = grad;
            this.ctx.fill();
        }

        // Punto central brillante
        if (this.activo && this.puntos.length > 0) {
            const ultimo = this.puntos[this.puntos.length - 1];
            const grad2 = this.ctx.createRadialGradient(
                ultimo.x, ultimo.y, 0,
                ultimo.x, ultimo.y, 12
            );
            grad2.addColorStop(0, 'rgba(255, 245, 200, 0.95)');
            grad2.addColorStop(0.5, 'rgba(255, 217, 102, 0.5)');
            grad2.addColorStop(1, 'rgba(212, 175, 55, 0)');

            this.ctx.beginPath();
            this.ctx.arc(ultimo.x, ultimo.y, 12, 0, Math.PI * 2);
            this.ctx.fillStyle = grad2;
            this.ctx.fill();
        }
    }
}

// ============ SISTEMA DE TEMA CLARO/OSCURO ============
class TemaManager {
    constructor() {
        this.temaActual = localStorage.getItem('diversidad-tema') || 'oscuro';
        this.aplicar();
        this.crearBoton();
    }

    aplicar() {
        document.documentElement.setAttribute('data-tema', this.temaActual);
    }

    toggle() {
        this.temaActual = this.temaActual === 'oscuro' ? 'claro' : 'oscuro';
        localStorage.setItem('diversidad-tema', this.temaActual);
        this.aplicar();
        this.actualizarBoton();
    }

    crearBoton() {
        const btn = document.createElement('button');
        btn.className = 'tema-btn';
        btn.setAttribute('aria-label', 'Cambiar tema claro/oscuro');
        this.btn = btn;
        this.actualizarBoton();
        document.body.appendChild(btn);
        btn.addEventListener('click', () => this.toggle());
    }

    actualizarBoton() {
        this.btn.innerHTML = this.temaActual === 'oscuro'
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
        this.btn.setAttribute('title',
            this.temaActual === 'oscuro' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'
        );
    }
}

// ============ INICIALIZACIÓN GLOBAL ============
let cursorInstancia = null;
let temaInstancia = null;

document.addEventListener('DOMContentLoaded', () => {
    cursorInstancia = new CursorEstela();
    temaInstancia = new TemaManager();
});