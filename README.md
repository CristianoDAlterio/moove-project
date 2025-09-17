<p align="center">
  <img src="src/frontend/logo.svg" alt="Moove Logo" width="120"/>
</p>

# 🚲 Moove – Sistema di Micromobilità (TypeScript)

Questo progetto modella la struttura organizzativa di **Moove**, un servizio innovativo di micromobilità condivisa.  
Mostra le interazioni tra **utenti**, **mezzi** (bici, scooter, monopattini) e **città** (Milano, Napoli, Roma), con un frontend interattivo in **HTML + CSS**.

---

## 🌐 Demo
Puoi provare il progetto direttamente su CodePen:

👉 [Apri la demo su CodePen (Editor View)](https://codepen.io/CristianoDAlterio/pen/xbZKqOO)

⚠️ Nota: usa **Editor View** (`/pen/`) e non **Full Page View** (`/full/`),  
perché in Full Page alcuni browser bloccano gli eventi JavaScript.

---

## ✨ Funzionalità
- Definizione di interfacce TypeScript: `IMezzo`, `IUtente`, `ICitta`
- Implementazione delle classi: `Mezzo`, `Utente`, `Citta`
- 3 città (Milano, Napoli, Roma), ognuna con **10 mezzi disponibili**
- Registrazione nuovi utenti (salvati in memoria durante la sessione)
- Ogni utente può prenotare **un solo mezzo alla volta**
- Rilascio mezzi via pulsante ❌ nel registro operazioni
- Logo (`logo.svg`) e favicon (`favicon.svg`) personalizzati
- Header fisso con logo + hamburger menu, footer con social icons

---

## 🧱 Tecnologie usate
- **TypeScript**
- **HTML5**
- **CSS3**
- **Lucide Icons** (per icone social e hamburger)

---

## 📂 Struttura del progetto

moove-project/
├─ src/
│ ├─ interfaces/
│ │ ├─ IMezzo.ts
│ │ ├─ IUtente.ts
│ │ └─ ICitta.ts
│ ├─ classes/
│ │ ├─ Mezzo.ts
│ │ ├─ Utente.ts
│ │ └─ Citta.ts
│ └─ frontend/
│ ├─ index.html
│ ├─ style.css
│ ├─ app.ts
│ ├─ logo.svg
│ └─ favicon.svg
├─ dist/ ← generata da TypeScript (ignorata da git)
├─ package.json
├─ tsconfig.json
└─ README.md


> ℹ️ La cartella `dist/` è ignorata tramite `.gitignore`.

---

## ▶️ Avvio locale
1. Clona il repository:
   ```bash
   git clone https://github.com/<tuo-username>/moove-project.git
   cd moove-project
# moove-project
# moove-project
