let slideIndex = 1;
let artSlideIndex = 1;

// Research Slideshow
showSlides(slideIndex);

function plusDivs(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Art Slideshow
showArtSlides(artSlideIndex);

function plusArtDivs(n) {
    showArtSlides(artSlideIndex += n);
}

function showArtSlides(n) {
    console.log("hi");
    let artSlides = document.getElementsByClassName("myArtSlides");
    if (n > artSlides.length) { artSlideIndex = 1 }
    if (n < 1) { artSlideIndex = artSlides.length }
    for (let i = 0; i < artSlides.length; i++) {
        artSlides[i].style.display = "none";
    }
    artSlides[artSlideIndex - 1].style.display = "block";
}