window.scrollCarousel = function(direction) {
    const carousel = document.getElementById("cert-carousel");

    if (!carousel) {
        console.error("Carrossel não encontrado");
        return;
    }

    carousel.scrollBy({
        left: direction * 320,
        behavior: "smooth"
    });
};