// Attend que tout le HTML soit chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {

    // Sélectionne les deux éléments par leur ID
    const icone = document.getElementById('dossier-icone');
    const description = document.getElementById('description-cachee');

    // Ajoute un "écouteur d'événement" pour le clic sur l'icône
    icone.addEventListener('click', () => {
        
        // Alterne la classe 'visible' sur le paragraphe
        // Si le paragraphe l'a, il l'enlève.
        // S'il ne l'a pas, il l'ajoute.
        description.classList.toggle('visible');
    });

});