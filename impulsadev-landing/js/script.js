const WHATSAPP_NUMBER = "18298700599";

function waLink(mensaje){
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

document.getElementById("nav-cta").href = waLink("Hola, quiero saber más sobre ImpulsaDev");
document.getElementById("hero-cta").href = waLink("Hola, quiero probar el sistema de ImpulsaDev para mi negocio");
document.getElementById("offer-cta").href = waLink("Hola, quiero empezar mi prueba de 30 días con ImpulsaDev");
document.getElementById("footer-cta").href = waLink("Hola, quiero información sobre ImpulsaDev");

const bars = document.querySelectorAll(".bar");
const arrows = document.querySelectorAll(".arrow");

setTimeout(() => {
  bars.forEach((bar, i) => {
    setTimeout(() => bar.classList.add("rise"), i * 120);
  });

  setTimeout(() => {
    arrows.forEach((arrow,) => arrow.classList.add("draw"));
  }, 500);
}, 150);


const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
        }
    });
},
{threshold: 0.25 }
);
revealElements.forEach((el) => observer.observe(el));