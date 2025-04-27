$(document).ready(function () {
    // Função para adicionar ou remover a classe "sticky" na barra de navegação
    function toggleStickyNavbar() {
        $('.navbar').toggleClass("sticky", $(window).scrollTop() > 20);
    }

    // Função para mostrar ou ocultar o botão de rolagem para o topo
    function toggleScrollUpButton() {
        $('.scroll-up-btn').toggleClass("show", $(window).scrollTop() > 500);
    }

    // Função para manipular o clique no botão de rolagem para o topo
    $('.scroll-up-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    // Função para manipular o clique nos itens do menu
    $('.navbar .menu a').click(function (e) {
        e.preventDefault(); // Evitar o comportamento padrão do link
        const target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 300, function () {
            // Após a rolagem, esconder o menu se estiver aberto
            if ($('.navbar .menu').hasClass('active')) {
                $('.navbar .menu').removeClass('active');
                $('.menu-btn i').removeClass('active');
            }
        });
    });

    // Função para inicializar a animação de digitação
    function initTypingAnimation(selector) {
        new Typed(selector, {
            strings: ["Developer", "Freelancer", "Designer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // Inicializar a animação de digitação em elementos com as classes "typing" e "typing-2"
    initTypingAnimation(".typing");
    initTypingAnimation(".typing-2");

    // Manipular o clique no botão do menu
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Monitorar o evento de rolagem da janela para atualizar a barra de navegação e o botão de rolagem para o topo
    $(window).scroll(function () {
        toggleStickyNavbar();
        toggleScrollUpButton();
    });

    // Chame as funções para definir o estado inicial da barra de navegação e do botão de rolagem para o topo
    toggleStickyNavbar();
    toggleScrollUpButton();
});
