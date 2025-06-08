
function initNavAnimation() {
    const imageNames = [
        "linkd.png",
        "profile.png",
        "git.png",
        "gb.png",
        "ham.png",
        "rose.png"
    ];

    const circles = document.querySelectorAll('.circle');
    let imageIndex = 0;

    circles.forEach((circle, i) => {
    // Inicializa a imagem
    updateCircleImage(circle);

    // Evento para trocar a imagem no final da animação
    circle.addEventListener('animationiteration', () => {
        updateCircleImage(circle);
    });
    });

    function updateCircleImage(circle) {
    const img = document.createElement('img');
    img.src = `../../icons/${imageNames[imageIndex]}`;
    img.style.width = "100%";
    img.style.height = "100%";

    // Limpa conteúdo anterior
    circle.innerHTML = '';
    circle.appendChild(img);

    // Atualiza índice para próxima imagem
    imageIndex = (imageIndex + 1) % imageNames.length;
    }
}

initNavAnimation();