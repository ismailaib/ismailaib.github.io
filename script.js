
// navbar

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// close navbar menu

const CloseNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block"
}

closeBtn.addEventListener('click', CloseNav) 
  
  
  
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 100)

})
$(document).ready(function(){
    $(window).scroll(function(){
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    $('.card').on('click', function() {
        var value = $(this).attr('name');
        $('#subject').val(value);
    })
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer", "Editor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

const rocketSelector = document.querySelector("[data-rocket]");
const rocketImageSelector = document.querySelector("[data-rocket-image]");

rocketSelector.addEventListener("mousemove", function (event) {
  const x = event.clientX - window.innerWidth / 2;
  const y = event.clientY - window.innerHeight / 2;

  rocketImageSelector.style.transform = `translate3d(${x / 10}px, ${y / 10}px, 0)`;
});

rocketSelector.addEventListener("mouseleave", function () {
  rocketImageSelector.style.transform = "translate3d(0, 0, 0)";
});

function CNT() {
    window.scrollBy(2000, 2000);
    alert("pageXOffset: " + window.scrollX + ", scrollY: " + window.scrollY);
  }

  var myVar;

  function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }



// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.text-2',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.letter',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });