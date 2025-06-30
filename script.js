document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded successfully!");
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add hover effects for cards
  const cards = document.querySelectorAll('.skill-card, .project-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
    });
  });
});