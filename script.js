/* --- script.js --- */

/**
 * Funzione per recuperare e mostrare il codice sorgente.
 * @param {string} tipo - Un identificatore per capire quale file leggere.
 */
function mostraSorgente(tipo) {
    let fileDaLeggere = '';

    // LOGICA DI SELEZIONE DEL FILE
    // Se siamo nella root (index), legge index.html
    // Se siamo nella sottocartella, dobbiamo gestire i percorsi diversamente
    
    // Nota didattica: window.location.pathname ci dice dove siamo
    const siamoInRoot = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

    if (tipo === 'index') {
        fileDaLeggere = siamoInRoot ? 'index.html' : '../index.html';
    } 
    else if (tipo === 'hub_arduino') {
        fileDaLeggere = 'hub_arduino.html'; // Siamo già nella cartella arduino
    }
    // Qui puoi aggiungere altri casi per le future simulazioni

    // API FETCH: È il metodo moderno per fare richieste HTTP
    fetch(fileDaLeggere)
        .then(response => {
            // Controlliamo se il file esiste (Status 200 OK)
            if (!response.ok) {
                throw new Error("Impossibile trovare il file: " + fileDaLeggere);
            }
            return response.text(); // Convertiamo la risposta in testo semplice
        })
        .then(testoCodice => {
            // 1. Inseriamo il testo nel tag <pre> del modale
            // Usiamo .textContent per evitare che il browser interpreti l'HTML
            document.getElementById('codeDisplay').textContent = testoCodice;
            
            // 2. Mostriamo il modale usando le funzioni di Bootstrap
            var myModal = new bootstrap.Modal(document.getElementById('codeModal'));
            myModal.show();
        })
        .catch(errore => {
            console.error('Errore:', errore);
            alert("Errore nel caricamento del codice. Verifica di essere su un server locale o HTTPS.");
        });
}
