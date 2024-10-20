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

function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightboxImage.src = imageSrc; // Define a imagem a ser exibida
    lightbox.classList.add('show'); // Adiciona classe para mostrar

    // Usando setTimeout para garantir que a animação de transformação ocorra
    setTimeout(() => {
        const lightboxContent = document.querySelector('.lightbox-content');
        lightboxContent.style.transform = 'scale(1)'; // Aumenta para escala normal
    }, 10); // Um pequeno atraso para garantir que a classe show seja aplicada
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');

    lightboxContent.style.transform = 'scale(0)'; // Reduz a escala antes de ocultar

    // Usando setTimeout para garantir que a animação de transformação ocorra antes de remover a classe
    setTimeout(() => {
        lightbox.classList.remove('show'); // Remove classe para ocultar
    }, 500); // Tempo deve ser igual ao tempo de transição definido no CSS
}


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.animate-on-scroll'); // Seleciona os elementos a serem animados

    function animateOnScroll() {
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            // Verifica se o elemento está na viewport
            if (elementTop < windowHeight) {
                element.classList.add('animate'); // Adiciona a classe para iniciar a animação
            }
        });
    }

    // Escuta o evento de rolagem
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Chama a função uma vez para animar os elementos que estão visíveis ao carregar a página
});

elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    // Verifica se o elemento está na viewport
    if (elementTop < windowHeight) {
        element.classList.add('animate');
    } else {
        element.classList.remove('animate'); // Remove a animação quando sair da viewport
    }
});
