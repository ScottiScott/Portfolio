const description = document.querySelector('.description');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      description.classList.add('visible');
    }
  });
}, {
  threshold: 0.5
});

observer.observe(description);

// Modal logique
document.querySelectorAll('.view-more').forEach((button, index) => {
  const modal = document.getElementById(`modal${index + 1}`);
  const closeBtn = modal.querySelector('.close');

  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Animation d'apparition pour le titre 

const sectionTitle = document.querySelector('.section-title');

const titleObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.remove('hidden');
    }
  });
}, {
  threshold: 0.5
});

if (sectionTitle) {
  titleObserver.observe(sectionTitle);
}

// Animation d'apparition pour les projets

const cards = document.querySelectorAll('.project-card');

const cardsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
        entry.target.classList.remove('hidden');
      }, i * 200); // Décalage de 200ms par carte
    }
  });

}, {
  threshold: 0.3
});


cards.forEach(card => {
  cardsObserver.observe(card);
});

// Compétences 

const skillCards = document.querySelectorAll('.skill-card');

const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.remove('hidden');
    }
  });
}, {
  threshold: 0.3
});

skillCards.forEach(card => {
  skillsObserver.observe(card);
});

// Défilement horizontal

const skillsGrid = document.querySelector('.skills-grid');

if (skillsGrid) {
  skillsGrid.addEventListener('wheel', (event) => {
    // Empêche le défilement vertical par défaut de la page
    event.preventDefault(); 
    
    // Défile horizontalement en fonction de la direction de la molette
    skillsGrid.scrollLeft += event.deltaY * 4;
  });
}

// Animation d'apparition pour la section Contact
const contactSection = document.querySelectorAll('.contact-item');

const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
        entry.target.classList.remove('hidden');
      }, i * 200); // Décalage de 200ms par carte
    }
  });

}, {
  threshold: 0.3
});


contactSection.forEach(card => {
  contactObserver.observe(card);
});

// Logique du menu Hamburger
const hamburgerBtn = document.querySelector('.hamburger-menu');
const sidebarMenu = document.querySelector('.sidebar-menu');
const closeBtn = document.querySelector('.close-btn');
const sidebarLinks = document.querySelectorAll('.sidebar-menu ul li a'); // Tous les liens du menu

// Ouvrir le menu
if (hamburgerBtn && sidebarMenu && closeBtn) {
    hamburgerBtn.addEventListener('click', () => {
        sidebarMenu.classList.add('open');
        hamburgerBtn.classList.add('open'); // Pour l'animation de la croix sur le bouton hamburger
        document.body.classList.add('menu-open'); // Empêche le scroll du body
    });

    // Fermer le menu avec la croix
    closeBtn.addEventListener('click', () => {
        sidebarMenu.classList.remove('open');
        hamburgerBtn.classList.remove('open'); // Retire l'animation de la croix
        document.body.classList.remove('menu-open'); // Réactive le scroll du body
    });

    // Fermer le menu quand on clique sur un lien de navigation
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebarMenu.classList.remove('open');
            hamburgerBtn.classList.remove('open');
            document.body.classList.remove('menu-open');
        });
    });

    // Fermer le menu si on clique en dehors (facultatif mais bonne UX)
    window.addEventListener('click', (e) => {
        if (!sidebarMenu.contains(e.target) && !hamburgerBtn.contains(e.target) && sidebarMenu.classList.contains('open')) {
            sidebarMenu.classList.remove('open');
            hamburgerBtn.classList.remove('open');
            document.body.classList.remove('menu-open');
        }
    });
}