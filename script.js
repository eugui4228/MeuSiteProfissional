document.addEventListener('DOMContentLoaded', function() {
    
    
    const navLinks = document.querySelectorAll('.nav-link');
    
    const contentSections = document.querySelectorAll('.content-section');
    
    function hideAllSections() {
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
    }
    
    function showSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }
    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            // não posso esquecer de remover então a classe ativa de todos links
            removeActiveClass();
            
            // uma nova classe ativa ao link clicado
            this.classList.add('active');
            
            // consigo obter o ID da seção a partir do href
            const sectionId = this.getAttribute('href').substring(1);
            
            // devo ocultar as seções
            hideAllSections();
            
            // Mostra a seção correspondente
            showSection(sectionId);
        });
    });
    
    // Inicialização: mostrando o home padrão
    hideAllSections();
    showSection('home');
    
    // devo colocar uma classe ativa ao primeiro link (Home)
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});

// 
function showSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        
        targetSection.style.display = 'flex'; 
    }
}

