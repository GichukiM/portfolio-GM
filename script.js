// Menu Icon Navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
 menuIcon.classList.toggle('bx-x')
 navbar.classList.toggle('active')
}



// scroll sections active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); 


window.onscroll = () => {

 sections.forEach (sec => {
  let top = window.scrollY;
  let offset = sec.offsetTop - 150;
  let height = sec.offsetHeight;
  let id = sec.getAttribute('id');

  if (top >= offset && top < offset + height) {
   navLinks.forEach (links => {
    links.classList.remove('active');
    document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
   })
  }
 })

 // sticky navbar
let header = document.querySelector(".header");

header.classList.toggle("sticky", window.scrollY > 100);

// remove menu icon navbar when click navbar link(scroll)

 menuIcon.classList.remove('bx-x')
 navbar.classList.remove('active')

}

const text = document.querySelector(".circle-text p");
text.innerHTML = text.innerText.split("").map (
 (char, i) => 
 `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
).join("");

// skill Progress Bar

const spans = document.querySelectorAll('.progress-bar span');

spans.forEach ((span) => {
 span.style.width = span.dataset.width;
 span.innerHTML = span.dataset.width;
})

// Swipper Js


    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    // Dark Light Mode

    let darkModeIcon = document.querySelector('#darkMode-icon');

    darkModeIcon.onclick = () => {
     darkModeIcon.classList.toggle('bx-sun');
     document.body.classList.toggle('dark-mode')
    };

    // Scroll Reveal

    ScrollReveal({ 
     // reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
     });

     ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
     ScrollReveal().reveal('.services-conatiner, .portfolio-box, .testimonial-wrapper, .contact form, .connect', { origin: 'bottom' });
     ScrollReveal().reveal('.home-content h1, .about', { origin: 'left' });
     ScrollReveal().reveal('.home-content h3, .home-content p', { origin: 'right' });