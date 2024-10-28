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
