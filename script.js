/* =========================================
   1. DONNÉES & CONFIGURATION
   ========================================= */

// Dictionnaire des logos (Tech Stack)
const techLogos = {
    "HTML": "icons/html5.svg",
    "CSS": "icons/css3.svg",
    "JS": "icons/javascript.svg",
    "React": "icons/react.svg",
    "NodeJS": "icons/nodejs.svg",
    "PHP": "icons/php.svg",
    "Python": "icons/python.svg",
    "Java": "icons/java.svg",
    "MySQL": "icons/mysql.svg",
    "PS": "icons/photoshop.svg",
    "AI": "icons/illustrator.svg",
    "Pr": "icons/premierepro.svg",
    "WordPress": "icons/wordpress.svg",
    "Figma": "icons/figma.svg",
    "UX": "icons/layout.svg",
    "Photo": "icons/camera.svg",
    "Video": "icons/video.svg",
    "Team": "icons/users.svg",
    "Communication": "icons/message-text.svg",
    "Organisation": "icons/list.svg",
    "Gestion": "icons/chart-bar.svg"
}
// Base de données des projets
const projectsData = {
    1: {
        title: "FoodTruck - 1ère année",
        category: "web",
        cardTitle: "FoodTruck",
        thumb: "images/foodtruck.jpg",
        thumbAlt: "Foodtruck Image",
        shortDesc: "Projet conçu pour une SAE où le but était de concevoir un site pour le FoodTruck de notre choix.",
        badges: [{ label: "HTML", cls: "html" }, { label: "CSS", cls: "css" }],
        stack: ["HTML", "CSS"],
        desc: `
            Dans le cadre de la SAE105, nous avions pour objectif de concevoir un site vitrine pour un foodtruck fictif ou réel, en appliquant les bases de l'intégration web vues en cours.

            J'ai choisi de créer un site pour un foodtruck original, avec une identité visuelle propre, un nom, un logo, et une carte de plats.

            Le site présente les différentes sections classiques d'un site de restauration :
            - Une page d'accueil
            - Une carte des plats
            - Une présentation du foodtruck
            - Et une page de contact

            J'ai aussi travaillé sur l'esthétique du site (choix des couleurs, typographies, mise en page), tout en respectant l'accessibilité et la cohérence visuelle.

            Cette SAE m'a permis de mieux comprendre l'importance d'une hiérarchie visuelle, de structurer correctement mon HTML, et de progresser sur la mise en page CSS.`,
        gallery: [
            "images/menu-foodtruck.jpg",
            "images/horaire-foodtruck.jpg"
        ],
        link: "https://foodtruck.corvolmatheo.fr",
        buttonText: "Voir le site en ligne >"
    },
    2: {
        title: "Site Billetterie - 1ère année",
        category: "web",
        cardTitle: "Site Billetterie",
        thumb: "images/billetterie.jpg",
        thumbAlt: "Site de Billetterie",
        shortDesc: "Projet conçu pour une SAE ou le but était de concevoir un site de Billetterie pour des événements.",
        badges: [{ label: "HTML", cls: "html" }, { label: "CSS", cls: "css" }, { label: "JS", cls: "js" }, { label: "PHP", cls: "php" }, { label: "SQL", cls: "html" }],
        stack: ["HTML", "CSS", "JS", "PHP", "MySQL"],
        desc: `
        Dans le cadre de la SAE203, nous avions pour objectif de concevoir un site de billetterie ou l'on pouvait réserver, annuler l'événement de notre choix pour l'utilisateur et modifier, ajouter un événement pour le côté administrateur.

        Cette SAE avait pour but de travailler le PHP et les bases de données avec MySQL, le côté design n'était pas demander mais j'ai décidé de m'en occuper pour améliorer mes compétences dans le CSS

        Le site présente ces différentes sections :
        - Une page d'accueil avec des catégories pour chaque événements
        - Une page connexion/déconnexion
        - Une page réservation
        - Une page mes réservations
        - Une page ajouter événement (ADMIN)
        - Une page modifier événement (ADMIN)

        Cette SAE m'a permit d'apprendre à lier PHP et MySQL et c'était un travail vraiment plaisaint car j'ai fais un site de billetterie qui aurait pu servir à n'importe quelle entreprise. Cela nous a permit de voir comment cela pouvait se passer dans la vraie vie.`,
        gallery: [
            "images/connexion-sae203.jpg",
            "images/reservation-sae203.jpg",
            "images/sql-sae203.jpg"
        ], 
        link: "https://sae203.corvolmatheo.fr",
        buttonText: "Voir le site en ligne >"
    },
    3: {
        title: "The Bike Repair - 1ère année",
        category: "graphisme",
        cardTitle: "The Bike Repair",
        thumb: "images/the-bike-repair.jpg",
        thumbAlt: "TheBikeRepair",
        shortDesc: "Projet conçu afin de créer l'identité d'un atelier participatif consacré au vélo.",
        badges: [{ label: "PS", cls: "ps" }, { label: "AI", cls: "ai" }],
        stack: ["PS", "AI"],
        desc: `
        Dans le cadre de ce projet, nous avions pour objectif de concevoir une identitée visuelle pour un atelier participatif consacré au vélo.

        Cette conception avait pour but d'utiliser la typographie comme logo et donc jouer avec la typo, les couleurs et créer un univers spécifique.

        Ce projet contient :
        - Un logo principal, un logo réseau et un favicon
        - La typographie
        - Les couleurs
        - Flyers/Affiche
        - Maquette site web Ordinateur/Mobile
        - Mockup

        Ce projet m'a permit de progresser dans les compétences de l'univers graphique et d'accroître mes connaissances dans ce domaine.`,
        gallery: [
            "images/maquette-web-tbr.jpg",
        ], 
        link: "documents/the-bike-repair.pdf",
        buttonText: "Voir le PDF >"
    },
    4: {
        title: "Film Noir et Blanc - 1ère année",
        category: "video",
        cardTitle: "Film Noir et Blanc",
        thumb: "images/film.jpg",
        thumbAlt: "Film Noir et Blanc",
        shortDesc: "Ce film a été réalisé dans le but de produire un film en Noir et Blanc des années 50.",
        badges: [{ label: "Pr", cls: "pr" }],
        stack: ["Pr", "Video", "Photo"],
        desc: `
        Dans le cadre de ce projet, nous avions pour objectif de concevoir un film en noir et blanc des années 50.

        Ce film avait pour but de mettre en application la théorie que l'on a apprise sur les films des années 50 à savoir le jeu de lumière, de profondeur, du décors.

        Ce projet m'a permit de progresser dans les compétences de l'univers audiovisuel et accroître mes connaissances dans ce domaine.`,
        gallery: [],
        link: "https://youtu.be/hdKGqa2H9DY",
        buttonText: "Voir le film >"
    },
    5: {
        title: "Docteur Poupi - 1ère année",
        category: "communication",
        cardTitle: "Docteur Poupi",
        thumb: "images/docteur-poupi.jpg",
        thumbAlt: "Docteur Poupi",
        shortDesc: `Ce projet a été conçu dans le but de créer une mascotte pour "Le rire médecin".`,
        badges: [],
        stack: ["Gestion", "Team"],
        desc: `
        Dans le cadre de cete SAE201, l'objectif était de créer une mascotte pour l'association "Le rire médecin" qui incarne les valeurs de l’association : bienveillance 🎈 , humour 🎭 , réconfort ❤️ et proximité avec les enfants hospitalisés 👶 . Ce projet fait partie du cadre de la gestion de Projet.

        Ce projet nous a permis de travailler en équipe, de mieux comprendre les attentes d'un client associatif, et d'explorer les usages liés à la communication affective et visuelle auprès des enfants.`,
        gallery: [],
        link: "documents/sae-201.pdf",
        buttonText: "Voir le PDF >"
    },
    6: {
        title: "Soccer Contest - ère année",
        category: "communication",
        cardTitle: "Soccer Contest",
        thumb: "images/soccer-contest.jpg",
        thumbAlt: "Soccer Contest",
        shortDesc: "Ce projet a été conçu dans le cadre de la Gestion de Projet. Ici le but était de construire un projet avec les méthodes vues en cours.",
        badges: [],
        stack: ["Gestion", "Team"],
        desc: `
        Ce projet a été conçu dans le cadre de la gestion de projet pour la SAE 106, l'objectif était de créer un événement et mettre en place une gestion de projet effiace pour concevoir et déployer un plan de communication autour d'un événement. L'objectif était de bien communiquer sur un événement de notre choix.

        Ce projet nous a donc permis de maîtriser d'avantage la gestion de projet en équipe ainsi que la conception de cahier des charges en définissant les objectifs, élaborer une stratégie et assurer le bon déroulement de la communication.`,
        gallery: [],
        link: "documents/sae-106.pdf",
        buttonText: "Voir le PDF >"
    },
    7: {
        title: "Mémorium d'Elbeuf - 1ère année",
        category: "web",
        cardTitle: "Memorium Elbeuf",
        thumb: "images/logo-sae202.jpg",
        thumbAlt: "Logo Mémorium Elbeuf",
        shortDesc: "Le projet de la fin de ma 1ère année dans ma formation en BUT MMI. Le but ici était de redonner vie au patrimoine du textile d'Elbeuf.",
        badges: [{ label: "PS", cls: "ps" }, { label: "WordPress", cls: "wordpress" }],
        stack: ["PS", "WordPress"],
        desc: `
        Cette SAE est la dernière SAE de ma 1ère année en BUT MMI. Elle regroupe la totalité des ressources travaillées dans l'année. L'objectif final était de concevoir un Musée qui regroupe et parle du patrimoine textile d'Elbeuf.

        Pour cela il a fallut construire une charte graphique complète avec logo, univers graphique etc..
        Une communication regroupant la stratégie, le public cible, les moyens de communications utilisées.
        Une partie audiovisuel qui comportait la photographie utilisé pour les autres parties du projet et la vidéo pour un teaser du Musée.
        Et pour finir un CMS sur WordPress qui sert à informer et communiquer sur le Musée d'Elbeuf.
        
        Je me suis occupé particulièrement du CMS de la SAE je vous présente celui-ci mais n'hésitez pas à aller voir le CMS car il contient des photographies dont j'ai pu participé.`,
        gallery: [
            "images/cms.jpg",
        ],
        link: "",
        buttonText: "Site non disponible >"
    },
    8: {
        title: "Productions Publicitaires - 1ère année",
        category: "graphisme",
        cardTitle: "Productions Publicitaires",
        thumb: "images/production-publicitaires.jpg",
        thumbAlt: "Production publicitaire",
        shortDesc: "Ici vous pourrez retrouver 2 productions liés à la publicité.",
        badges: [{ label: "PS", cls: "ps" }, { label: "AI", cls: "ai" }],
        stack: ["PS", "AI"],
        desc: `
        J'ai produit 2 publicités. Une pour un Atelier coiffure où le but était de construire un flyers pour l'atelier. Et l'autre était de faire une bannière web pour un produit Sephora. Ce projet a été conçu dans un but pédagogique et donc contient des images non libre de droit.`,
        gallery: [
            "images/banniere-sephora.jpg",
        ],
        link: "documents/atelier-coiffure.pdf",
        buttonText: "Voir le PDF de l'Atelier Coiffure >"
    },
    9: {
        title: "Projet GreenAwards Deauville - 1ère année",
        category: "video",
        cardTitle: "Projet GreenAwards Deauville",
        thumb: "images/miniature-green-award.jpg",
        thumbAlt: "Miniature GreenAwards",
        shortDesc: "Projet réalisé dans le cadre de la participation au GreenAwards de Deauville. L'objectif était d'encourager la lutte contre le réchauffement climatique.",
        badges: [{ label: "Pr", cls: "pr" }],
        stack: ["Pr", "Video"],
        desc: `
        Participation au Green Awards 2025 de Deauville dans le thème du réchauffement climatique. Ce projet parle de l'utilisateur des transports en communs et vélo contrairement à l'utilisation de la voiture.`,
        gallery: [
        ],
        link: "https://youtu.be/Iav_OIn84Dk",
        buttonText: "Voir la vidéo >"
    },
    10: {
        title: "Application de vêtement - 2ème année",
        category: "graphisme",
        cardTitle: "Application de vêtements",
        thumb: "images/maquette-figma.jpg",
        thumbAlt: "Maquette Figma",
        shortDesc: "Projet réalisé dans le cadre de l'exploration dans l'UX Design notamment grâce à l'outil Figma.",
        badges: [{ label: "UX/UI", cls: "ux" }, { label: "Figma", cls: "figma" }],
        stack: ["UX", "Figma"],
        desc: `
        Production d'une application de vêtement fictif via Figma afin d'approfondir les compétences en UX Design`,
        gallery: [
            "images/maquette-figma-1.jpg",
            "images/maquette-figma-2.jpg"
        ],
        link: "https://www.figma.com/proto/brnbD8RrROp7RIKEU0PQgN/TD-Figma?node-id=10-76&t=K16pRdfxlvrJYA98-1",
        buttonText: "Voir la maquette Figma >"
    },
    11: {
        title: "Film Crescendo - 2ème année",
        category: "video",
        cardTitle: "Film Crescendo",
        thumb: "images/crescendo.jpg",
        thumbAlt: "Miniature Crescendo",
        shortDesc: "Projet réalisé dans le cadre de l'exploration du son et son utilisation notamment avec un effet Crescendo. L'objectif étant de raccorder les plans au son pour donner un effet Crescendo.",
        badges: [{ label: "Pr", cls: "pr" }],
        stack: ["Pr", "Video"],
        desc: `
        Projet réalisé dans le cadre de l'exploration du son et son utilisation notamment avec un effet Crescendo. L'objectif étant de raccorder les plans au son pour donner un effet Crescendo.`,
        gallery: [
        ],
        link: "https://www.youtube.com/watch?v=LZIJQ6PE_uA",
        buttonText: "Voir la vidéo >"
    },
    12: {
        title: "Affiche lié au réchauffement climatique - 2ème année",
        category: "graphisme",
        cardTitle: "Affiche lié au réchauffement climatique",
        thumb: "images/affiche-noma-bar.jpg",
        thumbAlt: "Affiche",
        shortDesc: "Affiche qui exprime l’absurdité d’un monde qui ne prendrait pas en compte les problématiques liées au réchauffement climatique et à l’extinction de la biodiversité.",
        badges: [{ label: "PS", cls: "ps" }, { label: "AI", cls: "ai" }],
        stack: ["PS", "AI"],
        desc: `
        Affiche qui exprime l’absurdité d’un monde qui ne prendrait pas en compte les problématiques liées au réchauffement climatique et à l’extinction de la biodiversité. Inspiré de Noma Bar pour sa formulation visuele synthéthique.`,
        gallery: [
        ],
        link: "documents/affiche-noma-bar.pdf",
        buttonText: "Voir le PDF >"
    },
    13: {
        title: "Dashboard météorologique - 2ème année",
        category: "web",
        cardTitle: "Dashboard Météorologique",
        thumb: "images/dashboard.jpg",
        thumbAlt: "Dashboard Image",
        shortDesc: "Projet conçu pour une SAE où le but était de concevoir un dashboard météorologique pour un département de la France.",
        badges: [{ label: "HTML", cls: "html" }, { label: "CSS", cls: "css" }, { label: "PHP", cls: "php" }, { label: "JS", cls: "js" }],
        stack: ["HTML", "CSS", "PHP", "JS"],
        desc: `
        Dashboard météorologique contenant les informations choisies en fonction des caractéristiques du département et de ses besoins. L'objectif étant d'avoir un oeil sur la météo pour différentes agricultures.`,
        gallery: [
            "images/dashboard.jpg"
        ],
        link: "https://dashboard.corvolmatheo.fr",
        buttonText: "Voir le Dashboard >"
    },
};

// Ordre d'affichage des cartes dans l'inventaire, indépendant des identifiants
const displayOrder = [8, 2, 3, 4, 9, 10, 7, 13, 1, 5, 6, 11, 12];

let currentGallery = [];
let currentIndex = 0;


/* =========================================
   2. GESTION DE LA MODALE (OUVERTURE/FERMETURE)
   ========================================= */

// Élément qui avait le focus avant l'ouverture, pour le lui rendre à la fermeture
let lastFocusedElement = null;

function toggleModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal.classList.contains('active')) {
        closeModal(modal);
    } else {
        openModal(modal);
    }
}

function openModal(modal) {
    lastFocusedElement = document.activeElement;
    modal.classList.add('active');
    document.body.classList.add('modal-open');

    const closeBtn = modal.querySelector('.close-btn');
    if (closeBtn) closeBtn.focus();
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');

    if (lastFocusedElement) lastFocusedElement.focus();
}

// Les éléments réellement atteignables au clavier dans la modale ouverte
function getFocusableElements(modal) {
    const selector = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';
    return Array.from(modal.querySelectorAll(selector)).filter(el => el.offsetParent !== null);
}

// Fermeture au clic sur le fond, pour toutes les modales
document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', event => {
        if (event.target === modal) closeModal(modal);
    });
});

document.addEventListener('keydown', event => {
    const modal = document.querySelector('.modal-overlay.active');
    if (!modal) return;

    if (event.key === 'Escape') {
        closeModal(modal);
        return;
    }

    // Maintient le focus à l'intérieur de la modale tant qu'elle est ouverte
    if (event.key === 'Tab') {
        const focusables = getFocusableElements(modal);
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }
});


/* =========================================
   3. LOGIQUE VUE DÉTAIL & NAVIGATION
   ========================================= */

// Afficher les détails d'un projet spécifique
function showProjectDetails(id) {
    const project = projectsData[id];
    if (!project) return;

    document.getElementById('detail-title').innerText = project.title;
    document.getElementById('detail-desc').innerText = project.desc;

    const detailLink = document.getElementById('detail-link');
    detailLink.href = project.link;
    detailLink.innerText = project.buttonText || "Voir le site en ligne >";

    const stackContainer = document.getElementById('detail-stack');
    stackContainer.innerHTML = '';

    document.getElementById('nav-back-btn').style.display = 'inline-block';

    const allFilterButtons = document.querySelectorAll('.filter-btn');
    
    allFilterButtons.forEach(btn => {
        // On récupère la catégorie du bouton (ex: "web", "all", "video")
        const btnCategory = btn.getAttribute('data-filter');

        // Si le bouton correspond à la catégorie du projet
        if (btnCategory === project.category) {
            btn.style.display = 'inline-block';
            btn.classList.add('active');
            btn.style.pointerEvents = 'none';   
            
        } else {
            btn.style.display = 'none';
        }
    });

    project.stack.forEach(tech => {
        const card = document.createElement('div');
        const softSkills = ["Team", "Communication", "Organisation", "Gestion", "Photo", "Video"];
        card.className = 'tech-card';

        if(softSkills.includes(tech)) {
            card.classList.add('soft');
        }

        const logoUrl = techLogos[tech];
        if (logoUrl) {
            const img = document.createElement('img');
            img.src = logoUrl;
            img.className = 'tech-icon';
            card.appendChild(img);
        }

        const span = document.createElement('span');
        span.innerText = tech;
        span.className = 'tech-name';
        card.appendChild(span);

        stackContainer.appendChild(card);
    });

    const galleryTitle = document.getElementById('gallery-title');
    const galleryWrapper = document.getElementById('gallery-wrapper');

    if (project.gallery && project.gallery.length > 0) {
        galleryTitle.style.display = 'block';
        galleryWrapper.style.display = 'flex';
        initCarousel(project.gallery);
    } else {
        galleryTitle.style.display = 'none';
        galleryWrapper.style.display = 'none';
        detailLink.style.marginTop = "60px";
    }
    document.getElementById('view-list').style.display = 'none';
    document.getElementById('view-detail').style.display = 'block';
    document.querySelector('.modal-window').scrollTop = 0;
}

function backToList() {
    document.getElementById('view-detail').style.display = 'none';
    document.getElementById('view-list').style.display = 'grid'; 
    document.getElementById('nav-back-btn').style.display = 'none';

    const allFilterButtons = document.querySelectorAll('.filter-btn');
    allFilterButtons.forEach(btn => {
        btn.style.display = 'inline-block';
        btn.style.pointerEvents = 'auto';
        
        if (btn.getAttribute('data-filter') === 'all') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const allProjectCards = document.querySelectorAll('.project-card');
    allProjectCards.forEach(card => {
        card.style.display = 'flex';
    });
}


/* =========================================
   4. LOGIQUE CARROUSEL
   ========================================= */

function initCarousel(galleryImages) {
    currentGallery = galleryImages || [];
    currentIndex = 0; 
    updateCarouselDisplay();
}

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex >= currentGallery.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = currentGallery.length - 1;
    }

    updateCarouselDisplay();
}

function updateCarouselDisplay() {
    const imgElement = document.getElementById('carousel-img');
    const dotsContainer = document.getElementById('carousel-dots');

    if (currentGallery.length === 0) {
        imgElement.src = ""; 
        dotsContainer.innerHTML = "";
        return;
    }

    imgElement.src = currentGallery[currentIndex];

    dotsContainer.innerHTML = "";
    currentGallery.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        
        if (index === currentIndex) {
            dot.classList.add('active');
        }
        
        dot.onclick = () => {
            currentIndex = index;
            updateCarouselDisplay();
        };

        dotsContainer.appendChild(dot);
    });
}

document.querySelector('a[href="#projet"]').addEventListener('click', function (e) {
    e.preventDefault();
    toggleModal('modal-projets');
});

/* =========================================
   5. GÉNÉRATION DES CARTES & SYSTÈME DE FILTRES
   ========================================= */

// Construit l'inventaire à partir de projectsData : les cartes et la vue détail
// partagent ainsi la même source de données.
function renderProjectList() {
    const list = document.getElementById('view-list');

    displayOrder.forEach(id => {
        const project = projectsData[id];
        if (!project) return;

        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.category = project.category;

        const imgContainer = document.createElement('div');
        imgContainer.className = 'project-img-container';

        const img = document.createElement('img');
        img.src = project.thumb;
        img.alt = project.thumbAlt;
        img.className = 'actual-img';
        img.loading = 'lazy';
        imgContainer.appendChild(img);
        card.appendChild(imgContainer);

        const heading = document.createElement('h3');
        heading.innerText = project.cardTitle;
        card.appendChild(heading);

        if (project.badges.length > 0) {
            const stack = document.createElement('div');
            stack.className = 'tech-stack';

            project.badges.forEach(badge => {
                const span = document.createElement('span');
                span.className = 'badge ' + badge.cls;
                span.innerText = badge.label;
                stack.appendChild(span);
            });

            card.appendChild(stack);
        }

        const desc = document.createElement('p');
        desc.innerText = project.shortDesc;
        card.appendChild(desc);

        const button = document.createElement('button');
        button.className = 'project-link';
        button.innerText = 'Voir >';
        button.addEventListener('click', () => showProjectDetails(id));
        card.appendChild(button);

        list.appendChild(card);
    });
}

renderProjectList();

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (filterValue === 'all' || filterValue === cardCategory) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// --- GESTION MODALE COMPÉTENCES ---

document.querySelector('a[href="#competences"]').addEventListener('click', function (e) {
    e.preventDefault();
    toggleModal('modal-competences');

    setTimeout(() => {
        const bars = document.querySelectorAll('.progress-bar-fill');
        bars.forEach(bar => {
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            
            requestAnimationFrame(() => {
                bar.style.width = targetWidth;
            });
        });
    }, 100);
});

// --- GESTION PAGE EXPÉRIENCES ---
document.querySelector('a[href="#experience"]').addEventListener('click', function (e) {
    e.preventDefault();
    toggleModal('modal-experience');
});

// --- GESTION PAGE CONTACT ---
document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
    e.preventDefault();
    toggleModal('modal-contact');
});