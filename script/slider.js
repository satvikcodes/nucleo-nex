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
