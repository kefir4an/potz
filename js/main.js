$(document).ready(function () {
    $(".slider").slick({
        arrows: true,
        dots: false,
        autoplay: 100,
        speed: 500,
    });
});

document.addEventListener('mousemove', moveF);
function moveF(e) {
    this.querySelectorAll('.layer').forEach((layer) => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}
