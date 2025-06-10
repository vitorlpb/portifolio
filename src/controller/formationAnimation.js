// function formationAnimation(){
//     const track = document.querySelector('.carousel-track');
//     const indicators = document.querySelectorAll('.carousel-indicators span');
//     const cardWidth = 382; // card + gap, ajuste se necessário
//     let current = 0;

//     indicators.forEach((dot, idx) => {
//     dot.addEventListener('mouseenter', () => {
//         current = idx;
//         track.style.transform = `translateX(-${current * cardWidth}px)`;
//         indicators.forEach(i => i.classList.remove('active'));
//         dot.classList.add('active');
//     });
// });

// fetch('./src/view/formationCards.html')
//   .then(response => response.text())
//   .then(html => {
//     document.getElementById('cards-formacao').innerHTML = html;
//   });

// }

formationAnimation();

function formationAnimation() {
  const track = document.querySelector('.carousel-track');
  const indicators = document.querySelectorAll('.carousel-indicators span');

  fetch('./src/view/formationCards.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('cards-formacao').innerHTML = html;
      setupScrollSync();
    });

  function setupScrollSync() {
    const cards = track.children;
    const cardWidth = cards[0]?.offsetWidth + 32 || 382; // 32px gap

    track.addEventListener('scroll', () => {
      const scrollLeft = track.scrollLeft;
      const idx = Math.round(scrollLeft / cardWidth);
      indicators.forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
      });
    });
  }
}

formationAnimation();