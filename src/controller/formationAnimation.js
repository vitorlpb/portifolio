function formationAnimation(){
    const track = document.querySelector('.carousel-track');
    const indicators = document.querySelectorAll('.carousel-indicators span');
    const cardWidth = 382; // card + gap, ajuste se necessário
    let current = 0;

    indicators.forEach((dot, idx) => {
    dot.addEventListener('mouseenter', () => {
        current = idx;
        track.style.transform = `translateX(-${current * cardWidth}px)`;
        indicators.forEach(i => i.classList.remove('active'));
        dot.classList.add('active');
    });
});
}

formationAnimation();