// for mobile menu
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const openBtn = document.getElementById('openProduct');
  const productList = document.getElementById('productList');
  const backMain = document.getElementById('backMain');
  const closeMobile = document.getElementById('close-mobile');
  
  // Toggle the menu
  menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');

      // When opening the menu, ensure all submenus are hidden
      if (menu.classList.contains('active')) {
          productList.style.display = 'none';
      }
  });

  // Show the product list submenu when clicking openBtn
  openBtn.addEventListener('click', (event) => {
  if (window.innerWidth < 992) {
    productList.style.display = 'block';
    event.stopPropagation(); // Prevent the event from bubbling up
  }
});

  // Go back to the main menu when clicking the back button
  backMain.addEventListener('click', () => {
      productList.style.display = 'none';
  });

// Function to handle click event
function handleClickOutsideMenu(event) {
    if (window.innerWidth < 992) { // Check if the screen width is smaller than 992px
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
            productList.style.display = 'none'; // Hide submenu when closing the menu
        }
    }
}

// Add event listener for clicks outside the menu
document.addEventListener('click', handleClickOutsideMenu);


  // Close the menu when clicking the close button
  closeMobile.addEventListener('click', function() {
      menu.classList.remove('active');
      productList.style.display = 'none'; // Hide submenu when closing the menu
  });
});
// end mobile menu
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
// end 
// scroll 
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
//sticky navbar
$(document).ready(function() {
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('.menu-nav').addClass('sticky');
    } else {
      $('.menu-nav').removeClass('sticky');
    }
  });
});


let swiper;

function initSwiper() {
    if (window.innerWidth <= 768) {
        if (!swiper) {
            // Initialize swiper only if it's not already initialized
            swiper = new Swiper('.swiper-container', {
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
    } else {
        // Destroy swiper if it exists and the window is resized to greater than 768px
        if (swiper) {
            swiper.destroy(true, true);
            swiper = undefined; // Reset swiper variable after destroying
        }
    }
}

// Initialize Swiper on page load if screen width is <= 768px
initSwiper();

// Re-initialize Swiper when the window is resized
window.addEventListener('resize', function () {
    initSwiper(); // Re-initialize based on the new window size
});