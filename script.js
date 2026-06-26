/**
 * Apri il dettaglio della cella
 * @param {String} materia 
 * @param {String} docente 
 * @param {String} aula 
 */
function apriDettagli(materia, docente, aula) {
    document.getElementById('modal-materia').textContent = materia;
    document.getElementById('modal-docente').textContent = docente;
    document.getElementById('modal-aula').textContent = aula;
    document.getElementById('modal').classList.add('aperto');
    document.getElementById('modal-sfondo').style.display = 'block';
}

function chiudiModal() {
    document.getElementById('modal').classList.remove('aperto');
    document.getElementById('modal-sfondo').style.display = 'none';
}