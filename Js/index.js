// Function to convert English digits to Persian digits
function convertToPersianNumbers(text) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return text.replace(/\d/g, (digit) => persianDigits[digit]);
}

// Function to recursively convert all text nodes in a given element
function convertNumbersInElement(element) {
    if (element.nodeType === Node.TEXT_NODE) {
        element.textContent = convertToPersianNumbers(element.textContent);
    } else if (element.nodeType === Node.ELEMENT_NODE) {
        element.childNodes.forEach(convertNumbersInElement);
    }
}

// Convert numbers in the entire document
document.addEventListener('DOMContentLoaded', () => {
    convertNumbersInElement(document.body);
});
//chat support
document.getElementById('chat-icon').addEventListener('click', function() {
    const chatBox = document.querySelector('.chat-box');
    const chatIcon = document.querySelector('.chat-icon');

    chatBox.style.display = 'block'; // Show chat box
    chatIcon.style.display = 'none'; // Hide chat icon
});
//close chatbox
document.getElementById('close-chat').addEventListener('click', function() {
    const chatBox = document.querySelector('.chat-box');
    const chatIcon = document.querySelector('.chat-icon');

    chatBox.style.display = 'none'; // Hide chat box
    chatIcon.style.display = 'block'; // Show chat icon
});