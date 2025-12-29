# Reti-LAN-WAN-PAN:
 

📘 Manuale Tecnico e Didattico
Progetto: Corso di Reti e Telecomunicazioni
Versione: 1.0 | Stato: In Sviluppo | Tecnologia: HTML5 / Bootstrap 5 / JS

1. Introduzione e Filosofia del Progetto
Il presente progetto web costituisce una piattaforma didattica interattiva progettata per supportare l'insegnamento delle Reti di Computer. L'architettura del sito non è meramente informativa, ma esperienziale: simula la progressione cognitiva dello studente, partendo dall'isolamento del singolo calcolatore fino alla complessità delle comunicazioni di rete strutturate.

L'approccio pedagogico adottato è definito "Zero to Hero":

Settimana 1 (Teoria): Acquisizione dei concetti fondamentali (LAN, WAN, ISO/OSI).

Settimana 2 (Pratica): Applicazione dei concetti tramite laboratori fisici simulati (Arduino).

2. Architettura del Sistema (Master Dashboard)
L'organizzazione dei file riflette fedelmente il percorso didattico. La struttura delle directory è visualizzabile nella sezione Mappa del Progetto dell'interfaccia utente.

📂 Struttura della Root (/)
Il "Controller" principale dell'applicazione.

index.html (Home): È il punto di ingresso. Non funge solo da sommario, ma implementa un sistema di navigazione a schede (Tabs) che permette di fruire dei contenuti macroscopici senza ricaricare la pagina, simulando il comportamento di una Single Page Application.

📂 Directory: Settimana_01_Teoria/
Contiene i moduli teorici propedeutici.

lan_approfondimento.html: Focus sulle reti locali (SOHO) e distinzione dagli ambienti Stand-Alone.

wan_approfondimento.html: Analisi delle reti geografiche e dell'infrastruttura Internet.

📂 Directory: Modello_OSI_Details/ (Sotto-modulo)
Questa sezione rappresenta il cuore teorico del progetto. Ogni livello del modello ISO/OSI possiede una vista dedicata per evitare il sovraccarico cognitivo.

descrizione_livelli.html: Panoramica generale (la "Torre" completa).

livello[1-7].html: File verticali di dettaglio. Ogni pagina adotta un color-coding specifico (es. Grigio per il Fisico, Blu per il Collegamento) per rinforzare la memoria visiva.

confronto_tcp.html: Analisi comparativa tra il modello teorico (OSI) e quello implementativo (TCP/IP).

📂 Directory: Settimana_02_Lab_Arduino/
Contiene le guide per l'implementazione fisica.

lab_ping.html (Loopback): Esercizio di verifica della pila protocollare di base.

lab_cs.html (Client/Server): Esercizio avanzato di comunicazione tra nodi distinti.

3. Funzionalità Tecniche Chiave
A. Navigazione a Schede (Tab System)
Il file index.html utilizza un sistema JavaScript nativo per gestire la visibilità del DOM. Questo permette di mantenere l'utente focalizzato:

Tab Teoria: Mostra i concetti astratti.

Tab Mappa Sito: Visualizza l'albero gerarchico (Tree View) del progetto.

Tab Laboratorio: Sblocca l'accesso alle esercitazioni pratiche.

B. Ispezione Didattica del Codice (Source View)
Ogni pagina del progetto è dotata di un pulsante (spesso un Floating Action Button o un link nel footer) denominato "Vedi Sorgente". Questa funzione estrae l'HTML corrente della pagina (document.documentElement.outerHTML) e lo presenta in una finestra modale o popup.

Obiettivo Didattico: Permettere agli studenti di comprendere non solo cosa fa la rete, ma come è costruita la pagina web che la descrive, promuovendo competenze trasversali di Web Development.

C. Drill-Down Navigation
Il sistema utilizza una navigazione gerarchica. Dalla "Torre ISO/OSI" nella Home Page, l'utente può cliccare sul singolo livello per "scendere" nel dettaglio (Drill-down). Il sistema di breadcrumb (pulsanti "Torna alle Matriosche") garantisce che l'utente non perda mai l'orientamento all'interno della struttura.

4. Percorso Utente (User Journey)
Il manuale suggerisce il seguente flusso di fruizione per massimizzare l'apprendimento:

Fase di Isolamento: L'utente accede alla Tab 1 della Home per comprendere il concetto di "Air Gap" e sicurezza fisica.

Fase di Connessione: L'utente esplora la Tab 2 (LAN/WAN) per capire come i dispositivi formano una rete.

Fase di Astrazione: Tramite la Tab 3, l'utente visualizza la Pila ISO/OSI interattiva, esplorando i singoli livelli (da 7 a 1) e studiando l'incapsulamento dei dati.

Fase di Implementazione: L'utente accede infine alla Tab 4, dove applica le conoscenze teoriche configurando fisicamente dei microcontrollori per scambiare pacchetti dati.

5. Manutenzione e Sviluppo Futuro
Per l'aggiornamento del sito, si raccomanda di mantenere la coerenza visiva:

Utilizzare le classi Bootstrap standard per il layout.

Rispettare la palette colori ISO/OSI definita nei file CSS interni.

Aggiornare la Master Dashboard nel file index.html ogni qualvolta viene aggiunto un nuovo modulo didattico
