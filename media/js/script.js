window.addEventListener('scroll', () => {
    const header = document.getElementById('scroll-header');
    const logo = document.getElementById('logo');
    if (window.scrollY < 5) { // Adjust scroll distance as needed
      header.classList.add('header-scrolled');
      logo.classList.add('logo-scrolled');
    } else {
      header.classList.remove('header-scrolled');
      logo.classList.remove('logo-scrolled');
    }
  });
  