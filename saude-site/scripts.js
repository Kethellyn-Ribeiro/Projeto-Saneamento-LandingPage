// Rolagem suave para os links da navegação
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  