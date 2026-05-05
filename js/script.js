const siteData = {
    basilique: {
        title: "Basilique Notre-Dame de la Paix",
        description: `
            <p>La Basilique Notre-Dame de la Paix est un édifice religieux catholique situé à Yamoussoukro. Construite entre 1985 et 1989, elle est inscrite au Guinness des records comme la plus grande église du monde, dépassant même la Basilique Saint-Pierre de Rome en termes de dimensions.</p>
            <p>La basilique possède un dôme impressionnant de 158 mètres de hauteur, des vitraux colorés s'étendant sur 7 500 m² et peut accueillir jusqu'à 18 000 personnes. Son architecture grandiose, inspirée de la Renaissance italienne, en fait un site incontournable pour les visiteurs de Yamoussoukro.</p>
        `,
        location: "Centre-ville de Yamoussoukro",
        hours: "Tous les jours de 7h à 18h",
        price: "Entrée : 2 000 FCFA / Visite guidée : 5 000 FCFA",
        images: [
            "images/basilique.jpeg",
            "images/basique_jour.jpeg",
            "images/basique_nuit.jpeg"
        ]
    },
    crocodiles: {
        title: "Lac aux Crocodiles Sacrés",
        description: `
            <p>Le Lac aux Crocodiles Sacrés est l'une des attractions les plus fascinantes de Yamoussoukro. Situé à proximité du palais présidentiel, ce lac abrite des dizaines de crocodiles considérés comme sacrés par la population locale.</p>
            <p>Les visiteurs peuvent observer ces impressionnants reptiles depuis les berges sécurisées. Le site est entouré d'une végétation agréable et offre aussi un cadre paisible pour profiter de la nature.</p>
        `,
        location: "Près du Palais Présidentiel",
        hours: "Tous les jours de 9h à 17h",
        price: "Entrée : 1 000 FCFA / Nourrissage : 3 000 FCFA",
        images: [
            "images/lacs.jpeg",
            "images/lacs1.jpeg",
            "images/lacs2.jpeg"
        ]
    },
    fondation: {
        title: "Fondation Félix Houphouët-Boigny",
        description: `
            <p>La Fondation Félix Houphouët-Boigny pour la recherche de la paix est un centre culturel et de conférences prestigieux, nommé en l'honneur du premier président de la Côte d'Ivoire.</p>
            <p>Ce complexe architectural moderne abrite une bibliothèque, des archives historiques, des salles de conférences et des espaces d'exposition. Il accueille régulièrement des événements culturels, des colloques et des expositions.</p>
        `,
        location: "Quartier administratif",
        hours: "Lundi au vendredi de 8h à 16h",
        price: "Entrée : 1 500 FCFA / Visites guidées disponibles",
        images: [
            "images/fondation.jpeg",
            "images/Fondation 2.jpeg",
            "images/La Fondation.jpeg"
        ]
    },
    palais: {
        title: "Palais Présidentiel",
        description: `
            <p>Le Palais Présidentiel de Yamoussoukro est la résidence officielle construite par le président Félix Houphouët-Boigny. Cet imposant édifice est entouré de jardins entretenus et représente un symbole fort du pouvoir politique en Côte d'Ivoire.</p>
            <p>Bien que l'intérieur ne soit généralement pas accessible aux touristes, l'extérieur offre un spectacle impressionnant avec son architecture majestueuse et ses proportions grandioses.</p>
        `,
        location: "Centre de Yamoussoukro",
        hours: "Extérieur visible en permanence",
        price: "Gratuit (extérieur uniquement)",
        images: [
            "images/palais.jpg",
            "images/palais.jpeg",
            "images/palais1.jpeg"
        ]
    },
    inphb: {
        title: "Institut National Polytechnique Félix Houphouët-Boigny",
        description: `
            <p>L'Institut National Polytechnique Félix Houphouët-Boigny (INP-HB) est l'une des institutions d'enseignement supérieur les plus prestigieuses d'Afrique de l'Ouest. Fondé en 1996, il résulte de la fusion de plusieurs grandes écoles.</p>
            <p>Le campus comprend des bâtiments modernes, des laboratoires, des bibliothèques et des espaces verts. Son architecture distinctive en fait aussi un lieu intéressant à découvrir.</p>
        `,
        location: "Périphérie nord de Yamoussoukro",
        hours: "Lundi au vendredi de 8h à 17h (visites sur rendez-vous)",
        price: "Gratuit avec autorisation préalable",
        images: [
            "images/Inphb.jpg",
            "images/inphb1.jpg",
            "images/inphb2.jpg"
        ]
    },
    hotel: {
        title: "Hôtel Président",
        description: `
            <p>L'Hôtel Président est un établissement emblématique de Yamoussoukro, reconnaissable à son architecture caractéristique. Cet hôtel de luxe offre une expérience unique aux visiteurs de la capitale politique.</p>
            <p>L'établissement dispose de chambres spacieuses, d'un restaurant, d'une piscine extérieure et de jardins tropicaux. Même pour les non-résidents, une visite de son hall et de ses abords vaut le détour.</p>
        `,
        location: "Avenue des Hôtels",
        hours: "Ouvert 24h/24",
        price: "Restaurant : à partir de 15 000 FCFA / Nuitée : à partir de 75 000 FCFA",
        images: [
            "images/hotel president.jpg",
            "images/hotel president1.jpg",
            "images/hotel-president.jpg"
        ]
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const modal = document.getElementById("siteModal");
    const closeModal = document.querySelector(".close-modal");
    const readMoreButtons = document.querySelectorAll(".read-more");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const slides = document.querySelector(".slides");
    let currentSlide = 0;

    function toggleNav() {
        nav.classList.toggle("active");
        burger.classList.toggle("toggle");
    }

    if (burger && nav) {
        burger.addEventListener("click", toggleNav);
        burger.addEventListener("keydown", function(event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleNav();
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (!targetElement) {
                return;
            }

            event.preventDefault();

            if (nav && nav.classList.contains("active")) {
                nav.classList.remove("active");
                burger.classList.remove("toggle");
            }

            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: "smooth"
            });
        });
    });

    function renderSlides(site) {
        slides.innerHTML = site.images
            .map((image, index) => `<img src="${image}" alt="${site.title} ${index + 1}" class="slide">`)
            .join("");
    }

    function updateSlider() {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function openModal(site) {
        document.getElementById("modalTitle").textContent = site.title;
        document.getElementById("modalDescription").innerHTML = site.description;
        document.getElementById("modalLocation").textContent = site.location;
        document.getElementById("modalHours").textContent = site.hours;
        document.getElementById("modalPrice").textContent = site.price;

        renderSlides(site);
        currentSlide = 0;
        updateSlider();

        modal.style.display = "block";
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeSiteModal() {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto";
    }

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const siteCard = this.closest(".site-card");
            const site = siteData[siteCard.dataset.site];

            if (site) {
                openModal(site);
            }
        });
    });

    if (closeModal) {
        closeModal.addEventListener("click", closeSiteModal);
    }

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeSiteModal();
        }
    });

    window.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            closeSiteModal();
        }
    });

    if (prevBtn) {
        prevBtn.addEventListener("click", function() {
            const slideElements = document.querySelectorAll(".slide");
            currentSlide = currentSlide > 0 ? currentSlide - 1 : slideElements.length - 1;
            updateSlider();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", function() {
            const slideElements = document.querySelectorAll(".slide");
            currentSlide = currentSlide < slideElements.length - 1 ? currentSlide + 1 : 0;
            updateSlider();
        });
    }

    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Merci pour votre message ! Cette fonctionnalité pourra être connectée à un backend dans une version complète.");
            form.reset();
        });
    });

    const animateOnScroll = function() {
        const elements = document.querySelectorAll(".site-card, .gallery-item, .contact-info, .contact-form");

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };

    document.querySelectorAll(".site-card, .gallery-item, .contact-info, .contact-form").forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    window.addEventListener("load", animateOnScroll);
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
});
