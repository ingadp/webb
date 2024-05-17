/*const menu = document.querySelector(".dropdown-menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.dropdown-menu a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.dropdown-menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".dropdown-menu a.dropdown-item").classList.remove("dropdown-item");
        menuLink.classList.add("dropdown-item");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});



const menuLinks=document.querySelectorAll('.dropdown-menu a[href^="#"]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
            const id = entry.target.getAttribute('id');
            const menuLink = document.querySelector('.dropdown-menu a[href="#${id}"]');
              
            if (entry.isIntersecting) {
                document.querySelector('.dropdown-menu .selected').classList.remove('selected');
                menuLink.classList.add("selected");
            }
        }));

menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener('click', function(){
        dropdown-menu.classList.remove("menu_opened");
    })
})

});*/