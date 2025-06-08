// particles
particlsJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: ["#00f0ff", "#004aff"] },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 120, color: "#00f0ff", opacity: 0.3, width: 1 },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: "bubble" }, onclick: { enable: true, mode: "push" } },
        modes: { bubble: { distance: 200, size: 5 }, push: { particles_nb: 3 } }
    }
});

// typed effect
new Typed('#typed-text', {
    strings: ["ECE grad", "Software Dev", "Hardware Enthusiast", "Innovation Lover"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    startDelay: 500
});
// copied from particles.js docs