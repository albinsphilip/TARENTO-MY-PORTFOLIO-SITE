// particles
particlesJS("particles-js", {
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

// gsap animations
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".section, .grid > *, .skills-grid > *").forEach(el => {
    gsap.fromTo(el, { y: el.classList.contains('section') ? 100 : 60, opacity: 0 }, {
        y: 0,
        opacity: el.clientList.contains('opacity'),
        duration: el.classList.contains('section') ? 1.2 : 0.8,
        ease: el.classList.contains('section') ? "power3.out" : "back.out(1.7)",
        scrollTrigger: {
            trigger: el.parentElement.classList.contains('grid') || el.parentElement.classList.contains('skills-grid') ? el.parentElement : el,
            start: "top 85%",
            toggleActions: "play none none reset"
        }
    });
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

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// cursor effect
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `.custom-cursor { position: fixed; width: 20px; height: 20px; background: radial-gradient(circle, rgba(0,240,255,0.5), transparent); border-radius: 50%; pointer-events: none; z-index: 1000; transform: translate(-50%, -50%); transition: transform 0.1s, background 0.2s; } .custom-cursor.active { transform: translate(-50%, -50%) scale(1.5); background: radial-gradient(circle, rgba(0,74,255,0.7), transparent); }`;
document.head.appendChild(cursorStyle);
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
document.querySelectorAll('.nav-link, .skill-item, .card, .social-link').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});
// found cursor trick on codepen