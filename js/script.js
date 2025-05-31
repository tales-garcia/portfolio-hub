// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    const contatoBtn = document.getElementById('contatoBtn');
    const infoContato = document.getElementById('infoContato');

    if (contatoBtn && infoContato) {
        contatoBtn.addEventListener('click', function() {
            if (infoContato.style.display === 'none') {
                infoContato.style.display = 'block'; // Mostra o parágrafo
                contatoBtn.textContent = 'Ocultar Contato';
            } else {
                infoContato.style.display = 'none'; // Oculta o parágrafo
                contatoBtn.textContent = 'Mostrar Contato';
            }
        });
    }
});