// ============ MOTOR DE FÍSICA LIGERO ============
const Fisica = {
    gravedad: 900,

    aplicarGravedad: (cuerpo, dt) => {
        cuerpo.vy += Fisica.gravedad * dt;
    },

    aplicarResistencia: (cuerpo, coef = 0.98) => {
        cuerpo.vx *= coef;
        cuerpo.vy *= coef;
    },

    integrar: (cuerpo, dt) => {
        cuerpo.x += cuerpo.vx * dt;
        cuerpo.y += cuerpo.vy * dt;
    },

    limitar: (cuerpo, ancho, alto, rebote = 0.3) => {
        if (cuerpo.y + cuerpo.r > alto) {
            cuerpo.y = alto - cuerpo.r;
            cuerpo.vy *= -rebote;
            cuerpo.vx *= 0.9;
        }
        if (cuerpo.x - cuerpo.r < 0) {
            cuerpo.x = cuerpo.r;
            cuerpo.vx *= -rebote;
        }
        if (cuerpo.x + cuerpo.r > ancho) {
            cuerpo.x = ancho - cuerpo.r;
            cuerpo.vx *= -rebote;
        }
    },

    resorte: (cuerpo, objetivo, k = 0.05, amort = 0.92) => {
        const dx = objetivo.x - cuerpo.x;
        const dy = objetivo.y - cuerpo.y;
        cuerpo.vx = (cuerpo.vx + dx * k) * amort;
        cuerpo.vy = (cuerpo.vy + dy * k) * amort;
    }
};