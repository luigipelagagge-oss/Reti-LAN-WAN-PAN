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
