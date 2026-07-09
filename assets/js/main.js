/* ================================================
   GEOVANE ESTANISLAU — main.js
   1. Modo Dia/Noite automático (Dark Mode após 18h)
   2. Scroll Reveal via IntersectionObserver
   ================================================ */

(function () {
    'use strict';

    // ── 1. MODO DIA / NOITE ──────────────────────
    // Dark Mode entre 18:00 e 05:59 (hora local do visitante)
    const hour = new Date().getHours();
    const isDark = hour >= 18 || hour < 6;

    if (isDark) {
        document.documentElement.classList.add('dark-mode');
    }

    // ── 2. SCROLL REVEAL ─────────────────────────
    document.addEventListener('DOMContentLoaded', function () {
        const revealEls = document.querySelectorAll('.reveal');

        if (!revealEls.length) return;

        const observer = new IntersectionObserver(
            function (entries, obs) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        obs.unobserve(entry.target); // anima só uma vez
                    }
                });
            },
            {
                root: null,
                threshold: 0.08,          // dispara quando 8% visível
                rootMargin: '0px 0px -40px 0px'
            }
        );

        revealEls.forEach(function (el) {
            observer.observe(el);
        });
    });

})();
