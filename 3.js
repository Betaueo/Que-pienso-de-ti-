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
    "Amo cada momento contigo",
    "Tu sentido del humor me hace reír más de lo que debería",
    "Tu sentido del humor me hace reír y me encanta",
    "Amo cómo me enseñas a ver el mundo de una manera distinta",
    "Me gusta que pienses de diferente manera como de una forma adulta",
    "Amo tu nariz es una de las caracteristicas que me gusta",
    "Me encanta tus labios suaves y delgaditos",
    "Esto no tiene nada que ver pero tu eres mala conmigo a veces",
    "Me gusta cómo haces que cada error sea una historia divertida para contarr",
    "Me encanta cómo tus abrazos siempre parecen ser el tamaño perfecto"
];

// Obtener la fecha actual en formato YYYY-MM-DD
const today = new Date().toISOString().split('T')[0];
let currentMessageIndex = localStorage.getItem('currentMessageIndex');
let lastShownDate = localStorage.getItem('lastShownDate');

// Inicializar el índice del mensaje si no existe en localStorage o si es un nuevo día
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
    alert("Solo puedes ver un mensaje por día. ¡Vuelve mañana para ver el próximo MI AMOR 😘!");
}

// Actualizar el color del tema y guardar la preferencia
function updateThemeColor() {
    const color = document.getElementById('theme-color').value;
    document.querySelector('h2').style.color = color;
    document.querySelector('button').style.backgroundColor = color;
    localStorage.setItem('themeColor', color);
}

// Actualizar el fondo y guardar la preferencia
function updateBackground() {
    const background = document.getElementById('background-selector').value;
    document.body.className = background;
    localStorage.setItem('background', background);
    adjustBackground(); // Ajusta el fondo después de cambiarlo
}

function adjustBackground() {
    const body = document.body;

    // Ajustar el tamaño del fondo en función del tamaño de la pantalla
    body.style.backgroundSize = 'cover'; // Hace que la imagen de fondo cubra todo el cuerpo
    body.style.backgroundPosition = 'center'; // Centra la imagen de fondo
    body.style.backgroundAttachment = 'fixed'; // Mantiene la imagen fija al hacer scroll
}

// Configurar eventos y restaurar preferencias guardadas
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentMessage();
    document.getElementById('next-message').addEventListener('click', nextMessage);
    document.getElementById('theme-color').addEventListener('input', updateThemeColor);
    document.getElementById('background-selector').addEventListener('change', updateBackground);

    // Restaurar preferencias guardadas
    const savedThemeColor = localStorage.getItem('themeColor');
    if (savedThemeColor) {
        document.getElementById('theme-color').value = savedThemeColor;
        updateThemeColor();
    }

    const savedBackground = localStorage.getItem('background');
    if (savedBackground) {
        document.getElementById('background-selector').value = savedBackground;
        updateBackground();
    }

    adjustBackground(); // Ajusta el fondo al cargar la página

    window.addEventListener('resize', adjustBackground); // Ajustar el fondo al cambiar el tamaño de la ventana
}); enseñas a ver el mundo de una manera distinta",
    "Me gusta que pienses de diferente manera como de una forma adulta",
    "Amo tu nariz es una de las caracteristicas que me gusta",
    "Me encanta tus labios suaves y delgaditos",
    "Esto no tiene nada que ver pero tu eres mala conmigo a veces",
    "Me gusta cómo haces que cada error sea una historia divertida para contarr",
    "Me encanta cómo tus abrazos siempre parecen ser el tamaño perfecto"
];

// Obtener la fecha actual en formato YYYY-MM-DD
const today = new Date().toISOString().split('T')[0];
let currentMessageIndex = localStorage.getItem('currentMessageIndex');
let lastShownDate = localStorage.getItem('lastShownDate');

// Inicializar el índice del mensaje si no existe en localStorage o si es un nuevo día
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
    alert("Solo puedes ver un mensaje por día. ¡Vuelve mañana para ver el próximo MI AMOR 😘!");
}

// Actualizar el color del tema y guardar la preferencia
function updateThemeColor() {
    const color = document.getElementById('theme-color').value;
    document.querySelector('h2').style.color = color;
    document.querySelector('button').style.backgroundColor = color;
    localStorage.setItem('themeColor', color);
}

// Actualizar el fondo y guardar la preferencia
function updateBackground() {
    const background = document.getElementById('background-selector').value;
    document.body.className = background;
    localStorage.setItem('background', background);
    adjustBackground(); // Ajusta el fondo después de cambiarlo
}

function adjustBackground() {
    const body = document.body;

    // Ajustar el tamaño del fondo en función del tamaño de la pantalla
    body.style.backgroundSize = 'cover'; // Hace que la imagen de fondo cubra todo el cuerpo
    body.style.backgroundPosition = 'center'; // Centra la imagen de fondo
    body.style.backgroundAttachment = 'fixed'; // Mantiene la imagen fija al hacer scroll
}

// Configurar eventos y restaurar preferencias guardadas
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentMessage();
    document.getElementById('next-message').addEventListener('click', nextMessage);
    document.getElementById('theme-color').addEventListener('input', updateThemeColor);
    document.getElementById('background-selector').addEventListener('change', updateBackground);

    // Restaurar preferencias guardadas
    const savedThemeColor = localStorage.getItem('themeColor');
    if (savedThemeColor) {
        document.getElementById('theme-color').value = savedThemeColor;
        updateThemeColor();
    }

    const savedBackground = localStorage.getItem('background');
    if (savedBackground) {
        document.getElementById('background-selector').value = savedBackground;
        updateBackground();
    }

    adjustBackground(); // Ajusta el fondo al cargar la página

    window.addEventListener('resize', adjustBackground); // Ajustar el fondo al cambiar el tamaño de la ventana
});rfecto"  


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
    alert("Solo puedes ver un mensaje por día. ¡Vuelve mañana para ver el próximo MI AMOR 😘!");
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
