let myCarousel = document.querySelectorAll('#carrosselContainer .carousel .carousel-item');

myCarousel.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;

  for (let i = 1; i < minPerSlide; i++) {
    if (!next) {
      // Volta ao primeiro item se não houver mais próximos
      next = myCarousel[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

$(document).ready(function () {
  $('a[href^="#"]').not('[data-bs-slide]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 100 // Ajuste para que o título não fique coberto
      }, 1000); // Tempo em milissegundos para a animação
    }
  });
});



function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active'); // Alterna entre abrir e fechar o menu
}

// Fecha o menu se uma opção for selecionada
function hideMenu() {
  const menu = document.getElementById('menu');
  menu.classList.remove('active');
}

$(document).ready(function () {
  // Fecha o menu ao clicar em uma das opções
  $('#menu a').on('click', function () {
    hideMenu();
  });

  // Fecha o menu ao clicar fora dele
  $(document).on('click', function (event) {
    const menu = $('#menu');
    const menuIcon = $('.menu-icon');
    // Verifica se o clique foi fora do menu e do ícone do menu
    if (!menu.is(event.target) && menu.has(event.target).length === 0 &&
        !menuIcon.is(event.target) && menuIcon.has(event.target).length === 0) {
      hideMenu();
    }
  });
});
