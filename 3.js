const loveMessages = [
    "Tu sonrisa ilumina mi día",
    "Amo tu forma de ver el mundo",
    "Tu risa es mi sonido favorito",
    "Me encanta cómo me haces sentir",
    "Amo tu determinación y fuerza",
    "Tu bondad me inspira cada día",
    "Amo cómo me apoyas en todo",
    "Tu inteligencia me asombra",
    "Me encanta cómo me haces reír",
    "Amo cada momento contigo"
];

const today = new Date().toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD
let currentMessageIndex = localStorage.getItem('currentMessageIndex');
let lastShownDate = localStorage.getItem('lastShownDate');

// Inicializar el índice del mensaje si no existe en localStorage
if (!currentMessageIndex || lastShownDate !== today) {
    currentMessageIndex = Math.floor(Math.random() * loveMessages.length);
    localStorage.setItem('currentMessageIndex', currentMessageIndex);
    localStorage.setItem('lastShownDate', today);
}

function displayCurrentMessage() {
    const messageElement = document.getElementById('love-message');
    messageElement.textContent = loveMessages[currentMessageIndex];
}

function nextMessage() {
    // No se permite avanzar a mensajes futuros; solo se muestra el mensaje del día.
    alert("Solo puedes ver un mensaje por día. ¡Vuelve mañana para ver el próximo!");
}

function updateThemeColor() {
    const color = document.getElementById('theme-color').value;
    document.querySelector('h2').style.color = color;
    document.querySelector('button').style.backgroundColor = color;
}

document.addEventListener('DOMContentLoaded', () => {
    displayCurrentMessage();
    document.getElementById('next-message').addEventListener('click', nextMessage);
    document.getElementById('theme-color').addEventListener('input', updateThemeColor);
    updateThemeColor();
});
