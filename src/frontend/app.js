import { Mezzo } from "../classes/Mezzo.js";
import { Utente } from "../classes/Utente.js";
import { Citta } from "../classes/Citta.js";
// === DATI INIZIALI ===
const utenti = [
    new Utente("Luca", "Rossi", "luca@example.com", "carta"),
    new Utente("Anna", "Bianchi", "anna@example.com", "paypal"),
    new Utente("Marco", "Verdi", "marco@example.com", "abbonamento"),
];
const citta = [
    new Citta("Milano"),
    new Citta("Napoli"),
    new Citta("Roma"),
];
function generaMezzi(c, prefisso) {
    const tipi = ["bici", "scooter", "monopattino"];
    for (let i = 1; i <= 10; i++) {
        const tipo = tipi[i % 3];
        c.aggiungiMezzo(new Mezzo(`${prefisso}${i}`, tipo));
    }
}
generaMezzi(citta[0], "MI");
generaMezzi(citta[1], "NA");
generaMezzi(citta[2], "RM");
// === ELEMENTI DOM ===
const utenteSelect = document.getElementById("utenteSelect");
const cittaSelect = document.getElementById("cittaSelect");
const mezziContainer = document.getElementById("mezziContainer");
const logDiv = document.getElementById("log");
const form = document.getElementById("userForm");
// === RENDER UTENTI ===
function renderUtenti() {
    utenteSelect.innerHTML = "";
    utenti.forEach((u, i) => {
        const opt = document.createElement("option");
        opt.value = i.toString();
        opt.textContent = `${u.nome} ${u.cognome}`;
        utenteSelect.appendChild(opt);
    });
}
// === RENDER CITTÀ ===
function renderCitta() {
    cittaSelect.innerHTML = "";
    citta.forEach((c, i) => {
        const opt = document.createElement("option");
        opt.value = i.toString();
        opt.textContent = c.nome;
        cittaSelect.appendChild(opt);
    });
}
// === RENDER MEZZI ===
function renderMezzi() {
    const c = citta[parseInt(cittaSelect.value)];
    if (!c)
        return;
    mezziContainer.innerHTML = "";
    c.mezziDisponibili.forEach((mezzo) => {
        const card = document.createElement("div");
        card.className = `card ${mezzo.stato === "in uso" ? "in-uso" : "disponibile"}`;
        card.innerHTML = `
      <h4>${mezzo.tipo.toUpperCase()} (${mezzo.id})</h4>
      <p>Stato: ${mezzo.stato}</p>
      <p>Utente: ${mezzo.utenteAssegnato ? mezzo.utenteAssegnato.nome : "-"}</p>
    `;
        // Prenota
        const btnPrenota = document.createElement("button");
        btnPrenota.textContent = "Prenota";
        btnPrenota.disabled = mezzo.stato === "in uso";
        btnPrenota.onclick = () => {
            const utente = utenti[parseInt(utenteSelect.value)];
            if (utente) {
                if (utente.mezzoCorrente) {
                    logEvento(`⚠️ ${utente.nome} ha già prenotato un altro mezzo.`);
                    return;
                }
                utente.prenotaMezzo(mezzo);
                renderMezzi();
                logEvento(`🔔 ${utente.nome} ha prenotato ${mezzo.tipo} (${mezzo.id})`, mezzo);
            }
        };
        // Rilascia
        const btnRilascia = document.createElement("button");
        btnRilascia.textContent = "Rilascia";
        btnRilascia.disabled = mezzo.stato === "disponibile";
        btnRilascia.onclick = () => {
            mezzo.rilascia();
            const utente = utenti.find((u) => u.mezzoCorrente === mezzo);
            if (utente)
                utente.mezzoCorrente = undefined;
            renderMezzi();
            logEvento(`♻️ ${mezzo.tipo} (${mezzo.id}) è stato rilasciato`);
        };
        card.appendChild(btnPrenota);
        card.appendChild(btnRilascia);
        mezziContainer.appendChild(card);
    });
}
// === LOG EVENTI ===
function logEvento(msg, mezzo) {
    const div = document.createElement("div");
    div.textContent = msg + " ";
    if (mezzo) {
        const btnX = document.createElement("button");
        btnX.textContent = "❌";
        btnX.onclick = () => {
            mezzo.rilascia();
            const utente = utenti.find((u) => u.mezzoCorrente === mezzo);
            if (utente)
                utente.mezzoCorrente = undefined;
            renderMezzi();
            div.remove();
        };
        div.appendChild(btnX);
    }
    logDiv.appendChild(div);
    logDiv.scrollTop = logDiv.scrollHeight;
}
// === FORM REGISTRAZIONE ===
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const email = document.getElementById("email").value;
    const pagamento = document.getElementById("pagamento").value;
    const nuovo = new Utente(nome, cognome, email, pagamento);
    utenti.push(nuovo);
    renderUtenti();
    utenteSelect.value = (utenti.length - 1).toString();
    logEvento(`👤 Registrato nuovo utente: ${nome} ${cognome}`);
    form.reset();
});
// === INIT ===
renderUtenti();
renderCitta();
cittaSelect.value = "0";
renderMezzi();
cittaSelect.addEventListener("change", renderMezzi);
