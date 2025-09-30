document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Seleciona todas as seções de conteúdo
    const contentSections = document.querySelectorAll('.content-section');
    
    // Função para ocultar todas as seções
    function hideAllSections() {
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
    }
    
    // Função para mostrar uma seção específica
    function showSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }
    
    // Função para remover classe ativa de todos os links
    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }
    
    // Adiciona evento de clique para cada link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link
            
            // Remove classe ativa de todos os links
            removeActiveClass();
            
            // Adiciona classe ativa ao link clicado
            this.classList.add('active');
            
            // Obtém o ID da seção a partir do href (remove o #)
            const sectionId = this.getAttribute('href').substring(1);
            
            // Oculta todas as seções
            hideAllSections();
            
            // Mostra a seção correspondente
            showSection(sectionId);
        });
    });
    
    // Inicialização: mostra apenas a seção home por padrão
    hideAllSections();
    showSection('home');
    
    // Adiciona classe ativa ao primeiro link (Home)
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});

// No seu arquivo script.js
function showSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        // Use 'flex' para ativar o layout que definimos no CSS
        targetSection.style.display = 'flex'; 
    }
}
