const area = document.getElementById('target');
const allEl = document.querySelectorAll('p');

/*document.querySelector('#p1').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('application/my-app', e.target?.id);
    e.dataTransfer.dropEffect = "move";
});*/

allEl.forEach(e => e.addEventListener('dragstart', e => {
    // On ajoute l'identifiant de l'élément cible à l'objet de transfert
    e.dataTransfer.setData('text/plain', e.target?.id);
    e.dataTransfer.dropEffect = "move";
}));



area.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move"
    area.style.background = "#ffd1a9"
})

area.addEventListener('dragleave', (e) => {
    e.preventDefault();
        area.style.background = "#ffd4b3"
})

area.addEventListener('drop', (e) => {
    e.preventDefault();
    // On obtient l'identifiant de la cible et on ajoute l'élément déplacé
    // au DOM de la cible
    const data = e.dataTransfer.getData('text/plain');
    e.target?.appendChild(document.getElementById(data))
})
