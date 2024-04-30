let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-image");
const totalSlides = slides.length;
const carouselImages = document.querySelector(".carousel-images");

function showSlides() {
  const slideWidth = slides[0].clientWidth;
  carouselImages.style.transition = "transform 0.5s ease";
  carouselImages.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  showSlides();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }
  showSlides();
}

function autoSlide() {
  nextSlide();
}

setInterval(autoSlide, 2000); // Change slide every 5 seconds

showSlides();

//rest script for btn click
document.getElementById("loginBtn").addEventListener("click", function () {
  window.location.href = "/pages/newLogin.html"; // Replace this URL with your desired external link
});
document.getElementById("signBtn").addEventListener("click", function () {
  window.location.href = "/pages/facultyLogin.html"; // Replace this URL with your desired external link
});

//script for typing effect of aim,vision, mission
var typed = new Typed('.auto-type', {
  strings : ["AIM","VISION", "MISSION"],
  typeSpeed :150 ,
  backSpeed :150 ,
  loop : true
});

// SCRIPT FOR CARD VIEW OF FACULTIES

const showSocial = (toggleCard, socialCard) =>{
    const toggle = document.getElementById(toggleCard),
          social = document.getElementById(socialCard)
    
    toggle.addEventListener('click', ()=>{
        // If the animation class exists, we add the down-animation class
        if(social.classList.contains('animation')){
            social.classList.add('down-animation')
 
            // We remove the down-animation class
            setTimeout(() =>{
                social.classList.remove('down-animation')
            }, 1000)
        }
 
        // We add the animation class to the div tag with the card__social class
        social.classList.toggle('animation')
    })
 }
 showSocial('card-toggle1','card-social1')
 showSocial('card-toggle2','card-social2')
 showSocial('card-toggle3','card-social3')
 showSocial('card-toggle4','card-social4')
 showSocial('card-toggle5','card-social5')
 showSocial('card-toggle6','card-social6')
