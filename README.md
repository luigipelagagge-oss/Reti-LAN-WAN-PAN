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
######################
## 3. Funzionalità Tecniche Chiave

### 🔹 Navigazione a Schede (Tab System)
Il file `index.html` utilizza un sistema JavaScript nativo per gestire la visibilità del DOM senza ricaricare la pagina (SPA-like behavior).
* **Tab Teoria:** Concetti astratti.
* **Tab Mappa Sito:** Albero gerarchico del progetto.
* **Tab Laboratorio:** Accesso alle esercitazioni.

### 🔹 Ispezione Didattica (Source View)
Ogni pagina include una funzionalità **"Vedi Sorgente"** (spesso tramite un *Floating Action Button*).
* **Funzionamento:** Estrae `document.documentElement.outerHTML` e lo mostra in una modale.
* **Obiettivo:** Permettere agli studenti di imparare l'HTML analizzando la pagina stessa che stanno studiando.

### 🔹 Drill-Down Navigation
Navigazione verticale gerarchica: dalla "Torre ISO/OSI" generale ai singoli livelli specifici, con sistema di breadcrumb ("Torna alle Matriosche") per l'orientamento.

---

## 4. Guida all'Uso (User Journey)

Il manuale suggerisce il seguente flusso di fruizione per massimizzare l'apprendimento:

1.  **Fase di Isolamento (Tab 1):** Comprendere il concetto di "Air Gap" e sicurezza fisica.
2.  **Fase di Connessione (Tab 2):** Capire la differenza tra LAN (SOHO) e WAN.
3.  **Fase di Astrazione (Tab 3):** Visualizzare la Pila ISO/OSI interattiva ed esplorare l'incapsulamento (da Livello 7 a 1).
4.  **Fase di Implementazione (Tab 4):** Sbloccare il laboratorio per configurare fisicamente la comunicazione seriale.

---

## 5. Manutenzione e Sviluppo Futuro

Per l'aggiornamento del sito, si raccomanda di mantenere la coerenza visiva:
* Utilizzare le classi **Bootstrap 5** standard per il layout.
* Rispettare la **palette colori ISO/OSI** definita nei file CSS interni.
* Aggiornare la *Master Dashboard* nel file `index.html` ogni qualvolta viene aggiunto un nuovo modulo didattico.

### ⚙️ Installazione
Essendo un sito statico, non richiede server backend (Node.js, PHP, ecc.).
1.  Scaricare l'intera cartella del progetto.
2.  Aprire il file **`index.html`** con un qualsiasi browser moderno (Chrome, Edge, Firefox).

---

> *Documentazione generata automaticamente il: 29/12/2025*
