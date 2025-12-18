// Menu Responsivo
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Fecha o menu ao clicar em um link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    });
});

// Animação de Scroll (Intersection Observer)
const sections = document.querySelectorAll('.section');

const options = {
    threshold: 0.15 // Ativa quando 15% da seção estiver visível
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('visible');
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});