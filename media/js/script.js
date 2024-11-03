function navButton() {
  let x = document.getElementById("navBar0");
  if (x.className === "navBar") {
    x.className = "navBarNot";
  } else {
    x.className = "navBar";
  }
}


window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  if (window.scrollY > 0) {
      header.classList.add('header-scrolled');
  } else {
      header.classList.remove('header-scrolled');
  }
});