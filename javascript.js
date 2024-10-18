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

$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
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
    const menu = document.getElementById("menu");
    menu.classList.toggle("active"); // Ativa ou desativa o menu
}

function hideMenu() {
    const menu = document.getElementById("menu");
    menu.classList.remove("active"); // Remove a classe que mostra o menu
}



