function mostraSorgente(tipo) {
    let fileDaLeggere = '';

    // Determina quale file leggere in base al contesto
    if (tipo === 'index') {
        fileDaLeggere = 'index.html'; // Legge se stesso (o specifica il percorso)
    } else if (tipo === 'arduino_lab1') {
        fileDaLeggere = 'arduino_code.ino'; // Immagina di avere un file .ino
    }

    // Esegue la richiesta per leggere il file
    fetch(fileDaLeggere)
        .then(response => response.text())
        .then(data => {
            // Inserisce il testo nel modale
            document.getElementById('codeDisplay').textContent = data;
            // Mostra il modale (usando Bootstrap)
            var myModal = new bootstrap.Modal(document.getElementById('codeModal'));
            myModal.show();
        })
        .catch(error => console.error('Errore nel caricamento del codice:', error));
}
