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

    chatBox.style.display = 'flex'; // Show chat box
    chatIcon.style.display = 'none'; // Hide chat icon
});
//close chatbox
document.getElementById('close-chat').addEventListener('click', function() {
    const chatBox = document.querySelector('.chat-box');
    const chatIcon = document.querySelector('.chat-icon');

    chatBox.style.display = 'none'; // Hide chat box
    chatIcon.style.display = 'block'; // Show chat icon
});
// Get the button
let scrollTopBtn = document.getElementById("scrollTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        scrollTopBtn.classList.add("show");
        scrollTopBtn.classList.remove("hide");
    } else {
        scrollTopBtn.classList.add("hide");
        scrollTopBtn.classList.remove("show");
    }
}

// Smoothly scroll to the top when the button is clicked
scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    
    });

    // Optional: close the menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
        }
    });
});
//close menu
document.getElementById('close-mobile').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active');
});
