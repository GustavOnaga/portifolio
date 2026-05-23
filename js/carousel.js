function scrollCarousel(direction) {
    const carousel = document.getElementById("cert-carousel");
    carousel.scrollBy({
        left: direction * 300,
        behavior: "smooth"
    });
}