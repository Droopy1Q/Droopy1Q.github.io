/* =========================
   PROJECT REVEAL
========================= */

const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

projects.forEach((project) => {
    observer.observe(project);
});


/* =========================
   NAVBAR ON SCROLL
========================= */

const nav = document.querySelector(".nav");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
        nav.style.background = "rgba(245, 245, 243, 0.92)";
    } else {
        nav.style.background = "rgba(245, 245, 243, 0.78)";
    }

    lastScroll = currentScroll;

}, { passive: true });


/* =========================
   SMOOTH ANCHOR OFFSET
========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (targetId === "#") {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const offset = 70;

        const position =
            target.getBoundingClientRect().top +
            window.scrollY -
            offset;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

    });

});


/* =========================
   HERO ENTRANCE
========================= */

window.addEventListener("DOMContentLoaded", () => {

    const heroContent = document.querySelector(".hero-content");

    heroContent.animate(
        [
            {
                opacity: 0,
                transform: "translateY(30px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 1000,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "forwards"
        }
    );

});
