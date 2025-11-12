document.addEventListener('DOMContentLoaded', () => {
    const icone = document.getElementById('dossier-icone');
    const description = document.getElementById('description-cachee');

    icone.addEventListener('click', () => {
        description.classList.toggle('visible');
    });
});
