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