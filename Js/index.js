let openBtn=document.getElementById('openProduct');
let productList=document.getElementById('productList');
openBtn.addEventListener('click',()=>{
  productList.style.display='block';
})
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

function initSwiper() {
    if (window.innerWidth <= 768) {
      const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1.6, // Adjust the value to control how much of the next/previous card is visible
        spaceBetween: 0, // Space between the cards
        centeredSlides: true, // Center the active slide
        autoplay: {
          delay: 3000, // 3 seconds delay for each card
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
  
      // Stop autoplay on interaction and restart after a short delay
      swiper.on('touchStart', function () {
        swiper.autoplay.stop();
      });
  
      swiper.on('touchEnd', function () {
        setTimeout(() => {
          swiper.autoplay.start();
        }, 3000); // Restart autoplay after 3 seconds of inactivity
      });
    }
  }
  
  // Initialize Swiper on page load if screen width is <= 768px
  initSwiper();
  
  // Re-initialize Swiper when the window is resized
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      if (typeof swiper !== 'undefined') {
        swiper.destroy(true, true);
      }
    } else {
      initSwiper();
    }
  });

