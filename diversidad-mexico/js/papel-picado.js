(() => {
    const canvas = document.getElementById('papel-picado');
    if (!canvas || U.reducido()) return;

    const ctx = canvas.getContext('2d');
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W, H;
    let activo = true;

    const COLORES = ['#006847', '#00b37e', '#ce1126', '#ff2d4a', '#d4af37', '#ffd966', '#f9f5ed'];
    const NUM = window.innerWidth < 700 ? 20 : 45;

    // ---- BOTÓN DE PAUSA ----
    const btn = document.createElement('button');
    btn.className = 'papel-picado-btn';
    btn.innerHTML = '<i class="fas fa-pause"></i>';
    btn.setAttribute('aria-label', 'Pausar papel picado');
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        activo = !activo;
        btn.innerHTML = activo
            ? '<i class="fas fa-pause"></i>'
            : '<i class="fas fa-play"></i>';
        btn.setAttribute('aria-label', activo ? 'Pausar papel picado' : 'Reanudar papel picado');
        if (activo) {
            loop.start();
        } else {
            loop.stop();
            ctx.clearRect(0, 0, W, H);
        }
    });

    function resize() {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W * DPR;
        canvas.height = H * DPR;
        canvas.style.width = W + 'px';
        canvas.style.height = H + 'px';
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    class Papel {
        constructor() {
            this.reset(true);
        }

        reset(inicial = false) {
            this.w = U.rand(16, 28);
            this.h = this.w * 0.7;
            this.x = U.rand(0, W);
            this.y = inicial ? U.rand(-H, H) : U.rand(-100, -20);
            this.vx = U.rand(-20, 20);
            this.vy = U.rand(30, 70);
            this.rot = U.rand(0, Math.PI * 2);
            this.vrot = U.rand(-1, 1);
            this.color = COLORES[U.randInt(0, COLORES.length - 1)];
            this.semilla = Math.random() * 1000;
            this.aleteo = 0;
            this.velAleteo = U.rand(2, 5);
            this.escalaX = 1;
        }

        update(dt, t) {
            this.aleteo += this.velAleteo * dt;
            this.escalaX = Math.abs(Math.cos(this.aleteo));

            const viento = U.noiseSuave(t + this.semilla, this.semilla) * 40;
            this.vx += viento * dt;
            this.vx *= 0.98;
            this.vy = U.lerp(this.vy, 40 + Math.sin(t * 2 + this.semilla) * 20, 0.02);

            this.x += this.vx * dt;
            this.y += this.vy * dt;
            this.rot += this.vrot * dt;

            if (this.y > H + 50) this.reset();
            if (this.x < -50) this.x = W + 50;
            if (this.x > W + 50) this.x = -50;
        }

        draw() {
            const sx = this.w * this.escalaX;
            if (sx < 1) return;

            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rot);

            ctx.shadowColor = 'rgba(0,0,0,0.25)';
            ctx.shadowBlur = 6;
            ctx.shadowOffsetY = 3;

            ctx.fillStyle = this.color;
            ctx.fillRect(-sx / 2, -this.h / 2, sx, this.h);

            ctx.shadowColor = 'transparent';
            ctx.fillStyle = 'rgba(0,0,0,0.2)';

            const pasos = 3;
            const pasoW = sx / pasos;
            for (let i = 0; i < pasos; i++) {
                const cx = -sx / 2 + i * pasoW + pasoW / 2;
                ctx.beginPath();
                ctx.moveTo(cx - pasoW / 3, this.h / 2);
                ctx.lineTo(cx, this.h / 2 - pasoW / 2.5);
                ctx.lineTo(cx + pasoW / 3, this.h / 2);
                ctx.closePath();
                ctx.fill();
            }

            ctx.restore();
        }
    }

    let papeles = [];
    let loop;

    function init() {
        resize();
        papeles = Array.from({ length: NUM }, () => new Papel());
        loop = new Loop((dt, t) => {
            ctx.clearRect(0, 0, W, H);
            const tiempo = t / 1000;
            for (const p of papeles) {
                p.update(dt, tiempo);
                p.draw();
            }
        }, 60);
        loop.start();
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            loop.stop();
        } else if (activo) {
            loop.start();
        }
    });

    let timeoutResize;
    window.addEventListener('resize', () => {
        clearTimeout(timeoutResize);
        timeoutResize = setTimeout(() => {
            resize();
        }, 200);
    });

    init();
})();