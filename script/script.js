// Função para abrir/fechar painel ao clicar no título
function togglePanel(id) {
    var panel = document.querySelector('#' + id + ' .panel');
    var produto = document.getElementById(id);
    if (panel.style.display === "block") {
        panel.style.display = "none";
        produto.classList.remove('active');
    } else {
        panel.style.display = "block";
        produto.classList.add('active');
    }
}

// Função para abrir o painel correto quando vindo da Home
function openPanelFromHome() {
    var hash = window.location.hash.substring(1);  // Remove o '#'
    if (hash) {
        togglePanel(hash);  // Abre o painel do produto
    }
}

// Executa a função quando a página for carregada
window.onload = openPanelFromHome;

// Função para rolar suavemente para as seções quando os links são clicados
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Animação logo
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent
.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
