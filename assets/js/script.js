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
sr.reveal('.home-text',{delay:100, origin:'top'})
sr.reveal('.home-img',{delay:100, origin:'right'})
sr.reveal('.about-text',{delay:100, origin:'right'})
sr.reveal('.about-text .count',{delay:100, origin:'bottom'})
sr.reveal('.about-img img',{delay:100, origin:'left'})
sr.reveal('.center',{delay:100, origin:'right'})
sr.reveal('.service-content .row',{delay:100, origin:'bottom'})
sr.reveal('.resume-content .box',{delay:100, origin:'bottom'})
sr.reveal('.contact-form',{delay:100, origin:'bottom'})
sr.reveal('.social',{delay:100, origin:'bottom'})


//let nums = document.querySelectorAll(".count .num");
//let section = document.querySelector(".social");
//let started = false; // Function Started ? No
//window.onscroll = function () {
//        if (window.scrollY >= section.offsetTop) {
//          if (!started) {
//            nums.forEach((num) => startCount(num));
//          }
//          started = true;
//        }
//};
//
//function startCount(el) {
//  let goal = el.dataset.goal;
//  let count = setInterval(() => {
//    el.textContent++;
//    if (el.textContent == goal) {
//        clearInterval(count);
//    }
//  }, 100)
//}
