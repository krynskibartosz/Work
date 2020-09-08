const targetEl = document.getElementById('target-el');

targetEl.addEventListener('dragstart', (e) => {
    // Définir une image personnalisée lors du déplacement de la souris
    const img = new Image();
    img.src = 'utopix.jpeg';
    e.dataTransfer.setDragImage(img, 10, 10);
    // Définir l'effet de déplacement
    e.dataTransfer.dropEffect = "copy";
})


