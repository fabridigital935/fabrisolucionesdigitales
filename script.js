document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector("#menu");
    const navbar = document.querySelector(".navbar");

    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.getElementById('menuToggle');
        const navbar = document.getElementById('navbar');
      
        menuToggle.addEventListener('click', function() {
          menuToggle.classList.toggle('active');
          navbar.classList.toggle('active');
        });
      
        document.addEventListener('click', function(e) {
          if (!menuToggle.contains(e.target) && !navbar.contains(e.target)) {
            menuToggle.classList.remove('active');
            navbar.classList.remove('active');
          }
        });

        // Ocultar menú hamburguesa en desktop
        if (window.innerWidth > 768) {
            menuToggle.style.display = 'none';
        }

        // Animación del header en móvil: oculto al cargar, muestro al hacer scroll
        const header = document.getElementById('header');
        function toggleHeaderOnScroll() {
            if (window.scrollY > 50) {
                header.classList.add('visible');
            } else {
                header.classList.remove('visible');
            }
        }

        if (window.innerWidth <= 768) {
            header.classList.remove('visible');
            window.addEventListener('scroll', toggleHeaderOnScroll);
        } else {
            header.classList.add('visible');
        }
      });
      

    const sliderTrack = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".services-1");
    let currentIndex = 0;

    const updateSlider = () => {
        const slideWidth = slides[0].clientWidth;
        sliderTrack.style.transform = translateX(-${currentIndex * slideWidth}px);
    };

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }, 3000);

    // Ajustar el slider al redimensionar la ventana
    window.addEventListener("resize", updateSlider);

    // Inicia el slider automático
    startAutoSlide();
});

document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".portfolio-item");
    const triggerHeight = window.innerHeight * 0.8;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < triggerHeight) {
            el.classList.add("visible");
        } else {
            el.classList.remove("visible");
        }
    });

    const cards = document.querySelectorAll(".servicio-card");
    const triggerHeight = window.innerHeight * 0.5;

    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < triggerHeight && rect.bottom > triggerHeight) {
            card.classList.add("sticky");
        } else {
            card.classList.remove("sticky");
        }
    });
});

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    alert("Formulario enviado correctamente.");
    this.reset();
});

const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
});

document.querySelectorAll(".footer-section.social a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        alert(Redirigiendo a ${link.textContent});
        window.open(link.href, "_blank");
    });
});

// Filtrar elementos del portafolio
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Filtrar elementos
            portfolioItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
  