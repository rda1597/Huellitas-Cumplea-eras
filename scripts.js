let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".carousel-inner img");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
}

function prevSlide() {
    slideIndex -= 2;
    if (slideIndex < 0) {slideIndex = document.querySelectorAll(".carousel-inner img").length - 1;}
    showSlides();
}

function nextSlide() {
    showSlides();
}

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    alert("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.");
});
