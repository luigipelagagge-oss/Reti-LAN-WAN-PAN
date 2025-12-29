# 📘 Corso di Reti e Telecomunicazioni
> **Un percorso guidato: dalla teoria di base alla simulazione pratica.**

![Version](https://img.shields.io/badge/versione-1.0-blue) ![Status](https://img.shields.io/badge/stato-in_sviluppo-orange) ![Tech](https://img.shields.io/badge/stack-HTML5%20|%20Bootstrap5-green)

---

## 1. Introduzione e Filosofia
Questo progetto è una piattaforma didattica interattiva progettata per supportare l'insegnamento delle Reti di Computer. L'architettura del sito non è meramente informativa, ma **esperienziale**: simula la progressione cognitiva dello studente.

L'approccio pedagogico adottato è **"Zero to Hero"**:
1.  **Settimana 1 (Teoria):** Dallo *Stand-Alone* alla complessità *ISO/OSI*.
2.  **Settimana 2 (Pratica):** Applicazione dei concetti tramite laboratori fisici simulati (Arduino).

---

## 2. Architettura del Sistema (Master Dashboard)
L'organizzazione dei file riflette il percorso didattico. Di seguito la struttura logica del progetto:

```text
📁 Corso_Reti_Tlc/
│
├── 🏠 index.html                 # (Controller Principale con Navigazione a Tab)
│
├── 📂 Settimana_01_Teoria/       # (Moduli Concettuali)
│   ├── 📄 lan_approfondimento.html
│   └── 📄 wan_approfondimento.html
│
├── 📂 Modello_OSI_Details/       # (La "Torre" ISO/OSI)
│   ├── 📄 descrizione_livelli.html
│   ├── 📄 livello7.html          # (Applicazione - Rosso)
│   ├── 📄 livello6.html          # (Presentazione - Rosa)
│   ├── 📄 livello5.html          # (Sessione - Arancio)
│   ├── 📄 livello4.html          # (Trasporto - Giallo)
│   ├── 📄 livello3.html          # (Rete - Verde)
│   ├── 📄 livello2.html          # (Collegamento - Blu)
│   ├── 📄 livello1.html          # (Fisico - Grigio)
│   └── 📄 confronto_tcp.html     # (Confronto ISO vs TCP/IP)
│
└── 📂 Settimana_02_Lab_Arduino/  # (Laboratorio Pratico)
    ├── ⚡ lab_ping.html          # (Esercizio 1: Loopback)
    └── ⚡ lab_cs.html            # (Esercizio 2: Client/Server)
 
## 3. Funzionalità Tecniche Chiave

> Il motore del sito è progettato per massimizzare l'esperienza utente senza appesantire il browser.

### 🔹 Navigazione a Schede (Tab System)
Il file `index.html` agisce come una **Single Page Application (SPA)** simulata.
* **Comportamento:** `DOM Manipulation` via JavaScript nativo.
* **Vantaggio:** L'utente cambia contesto (Teoria ↔ Laboratorio) senza ricaricare la pagina.
* **Struttura:**
    * `Tab Teoria` → Concetti astratti e lezioni.
    * `Tab Mappa` → Visualizzazione gerarchica.
    * `Tab Lab` → Ambiente di simulazione.

### 🔹 Ispezione Didattica (Source View)
Ogni pagina include una "Meta-Funzionalità" accessibile via Floating Action Button.
* **Funzione:** `document.documentElement.outerHTML`
* **Output:** Una finestra modale che mostra il codice *vivo* della pagina.
* **Scopo:** Trasformare ogni pagina in una lezione di HTML5.

### 🔹 Drill-Down Navigation
Navigazione verticale profonda per il modello ISO/OSI.
* **Flusso:** `Torre Generale` ➡ `Livello Specifico`
* **Orientamento:** Sistema di *Breadcrumbs* ("Torna alle Matriosche") per non perdere mai il contesto.

---

## 4. Guida all'Uso (User Journey)

> Percorso ottimizzato per trasformare la teoria in competenza pratica.

1.  🔒 **Fase di Isolamento (Tab 1)**
    * *Obiettivo:* Comprendere il concetto di "Air Gap" e sicurezza fisica.
    * *Azione:* Analisi dei rischi di un computer non connesso.

2.  🌍 **Fase di Connessione (Tab 2)**
    * *Obiettivo:* Distinguere l'ambiente **SOHO** (LAN) dall'infrastruttura globale (**WAN**).
    * *Azione:* Studio delle topologie di rete.

3.  📚 **Fase di Astrazione (Tab 3)**
    * *Obiettivo:* Padroneggiare l'incapsulamento dei dati.
    * *Azione:* Esplorazione interattiva della **Torre ISO/OSI** (dal Livello 7 al Livello 1).

4.  ⚡ **Fase di Implementazione (Tab 4)**
    * *Obiettivo:* "Sporcarsi le mani" con il codice.
    * *Azione:* Configurazione dei microcontrollori per la comunicazione seriale (`Ping` e `Client/Server`).

---

## 5. Manutenzione e Sviluppo

> Linee guida per mantenere l'integrità del progetto nel tempo.

### 🛠 Stack Tecnologico
![HTML5](https://img.shields.io/badge/Code-HTML5-orange) ![CSS3](https://img.shields.io/badge/Style-Bootstrap5-purple) ![JS](https://img.shields.io/badge/Logic-VanillaJS-yellow)

### 📋 Checklist per l'aggiornamento
Per aggiungere nuovi moduli, rispettare rigorosamente:
* [ ] **Coerenza Visiva:** Utilizzare le classi standard di Bootstrap 5.
* [ ] **Color Coding:** Rispettare la palette ISO/OSI nei file CSS.
* [ ] **Dashboard:** Aggiornare l'albero in `index.html` ad ogni nuovo file creato.

### 🚀 Installazione (Plug & Play)
Non è richiesto alcun server backend (Node.js, PHP, Python).

```bash
1. Scarica la repository (Clone o Download ZIP).
2. Estrai la cartella.
3. Doppio click su 'index.html'.
4. Ready to learn!
