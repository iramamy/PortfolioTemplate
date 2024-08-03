// Typing effect

function runTypingEffect() {
    const text = "I am Maminiaina Rakotovao";
    const typingElement = document.getElementById('typing-text');
    const timeDelay = 30;

    typeText(text, typingElement, timeDelay);
}

function typeText(text, element, delay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            element.textContent += text.charAt(i);
        }, delay * i);
    }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);