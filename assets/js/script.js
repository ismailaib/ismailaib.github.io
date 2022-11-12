let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
};

window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active')
}

  // typing text animation script
  var typed = new Typed(".typing", {
        strings: ["Travel App ?", "Dashboard ?", "comercial Website ?", "Portfolio ?", "Just Say Hello !"],
        typeSpeed: 20,
        backSpeed: 20,
        loop: true
    });

const sr = ScrollReveal ({
        distance: '60px',
        duration: 2500,
        reset:true,
})
sr.reveal('.home-text',{delay:200, origin:'top'})
sr.reveal('.home-img',{delay:200, origin:'right'})
sr.reveal('.about-text',{delay:200, origin:'right'})
sr.reveal('.about-text .count',{delay:200, origin:'bottom'})
sr.reveal('.about-img img',{delay:200, origin:'left'})
sr.reveal('.center',{delay:200, origin:'right'})
sr.reveal('.service-content .row',{delay:200, origin:'bottom'})
sr.reveal('.resume-content .box',{delay:200, origin:'bottom'})
sr.reveal('.contact-form',{delay:200, origin:'bottom'})