// Site data
const siteData = {
    basilique: {
        title: "Basilique Notre-Dame de la Paix",
        description: `
            <p>La Basilique Notre-Dame de la Paix est un édifice religieux catholique situé à Yamoussoukro. Construite entre 1985 et 1989, elle est inscrite au Guinness des records comme la plus grande église du monde, dépassant même la Basilique Saint-Pierre de Rome en termes de dimensions.

La basilique possède un dôme impressionnant de 158 mètres de hauteur, des vitraux colorés s'étendant sur 7,500 m² et peut accueillir jusqu'à 18,000 personnes. Son architecture grandiose, inspirée de la Renaissance italienne, en fait un site incontournable pour les visiteurs de Yamoussoukro.</p>
        `,
        location: "Centre-ville de Yamoussoukro",
        hours: "Tous les jours de 7h à 18h",
        price: "Entrée: 2000 FCFA / Visite guidée: 5000 FCFA"
    },
    crocodiles: {
        title: "Lac aux Crocodiles Sacrés",
        description: `
            <p>Le Lac aux Crocodiles Sacrés est l'une des attractions les plus fascinantes de Yamoussoukro. Situé à proximité du palais présidentiel, ce lac abrite des dizaines de crocodiles considérés comme sacrés par la population locale.</p>
            <p>Les visiteurs peuvent observer ces impressionnants reptiles depuis les berges sécurisées ou, pour les plus courageux, avoir l'opportunité unique de les toucher sous la supervision des gardiens expérimentés. Ces crocodiles sont nourris régulièrement lors de séances publiques qui attirent de nombreux touristes.</p>
            <p>Le site est entouré d'une végétation luxuriante et offre également un cadre paisible pour se détendre et profiter de la nature.</p>
        `,
        location: "Près du Palais Présidentiel",
        hours: "Tous les jours de 9h à 17h",
        price: "Entrée: 1000 FCFA / Nourrissage: 3000 FCFA"
    },
    fondation: {
        title: "Fondation Félix Houphouët-Boigny",
        description: `
            <p>La Fondation Félix Houphouët-Boigny pour la recherche de la paix est un centre culturel et de conférences prestigieux, nommé en l'honneur du premier président de la Côte d'Ivoire.</p>
            <p>Ce complexe architectural moderne abrite une bibliothèque importante, des archives historiques, des salles de conférences et des espaces d'exposition. La fondation organise régulièrement des événements culturels, des colloques internationaux et des expositions.</p>
            <p>Sa mission principale est de promouvoir la paix, le dialogue interculturel et la recherche académique. Le bâtiment lui-même est un chef-d'œuvre architectural qui mérite d'être visité pour son design unique et son importance symbolique.</p>
        `,
        location: "Quartier administratif",
        hours: "Lundi au vendredi de 8h à 16h",
        price: "Entrée: 1500 FCFA / Visites guidées disponibles"
    },
    palais: {
        title: "Palais Présidentiel",
        description: `
            <p>Le Palais Présidentiel de Yamoussoukro est la résidence officielle construite par le président Félix Houphouët-Boigny. Cet imposant édifice est entouré de jardins magnifiquement entretenus et représente un symbole fort du pouvoir politique en Côte d'Ivoire.</p>
            <p>Bien que l'intérieur du palais ne soit généralement pas accessible aux touristes, l'extérieur offre déjà un spectacle impressionnant avec son architecture majestueuse et ses proportions grandioses. Les visiteurs peuvent admirer la façade et les jardins depuis les points de vue autorisés.</p>
            <p>Le palais est particulièrement spectaculaire lorsqu'il est illuminé la nuit, créant une atmosphère féerique qui contraste avec le reste de la ville.</p>
        `,
        location: "Centre de Yamoussoukro",
        hours: "Extérieur visible en permanence",
        price: "Gratuit (extérieur uniquement)"
    },
    inphb: {
        title: "Institut National Polytechnique Félix Houphouët-Boigny",
        description: `
            <p>L'Institut National Polytechnique Félix Houphouët-Boigny (INP-HB) est l'une des institutions d'enseignement supérieur les plus prestigieuses d'Afrique de l'Ouest. Fondé en 1996, il résulte de la fusion de plusieurs grandes écoles.</p>
            <p>Le campus s'étend sur une superficie impressionnante et comprend des bâtiments modernes, des laboratoires de recherche, des bibliothèques et des espaces verts. L'architecture distinctive du campus en fait un lieu agréable à visiter.</p>
            <p>L'INP-HB forme des ingénieurs, des techniciens supérieurs et des chercheurs dans divers domaines scientifiques et techniques. Il joue un rôle crucial dans le développement technologique et économique de la Côte d'Ivoire.</p>
        `,
        location: "Périphérie nord de Yamoussoukro",
        hours: "Lundi au vendredi de 8h à 17h (visites sur rendez-vous)",
        price: "Gratuit avec autorisation préalable"
    },
    hotel: {
        title: "Hôtel Président",
        description: `
            <p>L'Hôtel Président est un établissement emblématique de Yamoussoukro, reconnaissable à son architecture caractéristique. Cet hôtel de luxe offre une expérience unique aux visiteurs de la capitale politique.</p>
            <p>L'établissement dispose de chambres spacieuses, d'un restaurant gastronomique, d'une piscine extérieure et de jardins tropicaux. Son design intérieur mêle élégance contemporaine et touches africaines traditionnelles.</p>
            <p>L'Hôtel Président a accueilli de nombreuses personnalités politiques et célébrités au fil des années. Même pour les non-résidents, une visite de son hall impressionnant et de ses jardins vaut le détour.</p>
        `,
        location: "Avenue des Hôtels",
        hours: "Ouvert 24h/24",
        price: "Restaurant: à partir de 15000 FCFA / Nuitée: à partir de 75000 FCFA"
    }
};

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.classList.toggle('toggle');
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal functionality
    const modal = document.getElementById('siteModal');
    const closeModal = document.querySelector('.close-modal');
    const readMoreButtons = document.querySelectorAll('.read-more');
    
    // Open modal when "Read More" is clicked
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const siteCard = this.closest('.site-card');
            const siteId = siteCard.dataset.site;
            const site = siteData[siteId];
            
            // Populate modal with site data
            document.getElementById('modalTitle').textContent = site.title;
            document.getElementById('modalDescription').innerHTML = site.description;
            document.getElementById('modalLocation').textContent = site.location;
            document.getElementById('modalHours').textContent = site.hours;
            document.getElementById('modalPrice').textContent = site.price;
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            
            // Reset slider
            currentSlide = 0;
            updateSlider();
        });
    });
    
    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    });

    // Image slider in modal
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slides = document.querySelector('.slides');
    let currentSlide = 0;
    
    function updateSlider() {
        if (slides) {
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            const slideElements = document.querySelectorAll('.slide');
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : slideElements.length - 1;
            updateSlider();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const slideElements = document.querySelectorAll('.slide');
            currentSlide = (currentSlide < slideElements.length - 1) ? currentSlide + 1 : 0;
            updateSlider();
        });
    }

    // Form submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci pour votre message ! Cette fonctionnalité serait connectée à un backend dans une version complète.');
            form.reset();
        });
    });

    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.site-card, .gallery-item, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    const elementsToAnimate = document.querySelectorAll('.site-card, .gallery-item, .contact-info, .contact-form');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});

// Create a placeholder logo
document.addEventListener('DOMContentLoaded', function() {
    const logoImgs = document.querySelectorAll('.logo img, .footer-logo img');
    
    logoImgs.forEach(img => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = 100;
        canvas.height = 100;
        
        // Background
        ctx.fillStyle = '#f67e0a';
        ctx.beginPath();
        ctx.arc(50, 50, 45, 0, Math.PI * 2);
        ctx.fill();
        
        // Text
        ctx.fillStyle = 'white';
        ctx.font = 'bold 40px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('YSK', 50, 50);
        
        img.src = canvas.toDataURL();
    });
});