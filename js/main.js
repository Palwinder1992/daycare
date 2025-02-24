var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 600,
    slideToClickedSlide: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Enable clicking on dots
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // When the window width is less than or equal to 768px (Mobile)
      768: {
        slidesPerView: 2,  // Show 2 slides at a time on mobile
        spaceBetween: 16,    // Adjust space between slides on mobile for better fit
        centeredSlides: true, // Center the slides for better visibility of the second slide
      },
      // When the window width is greater than 768px (Desktop)
      1024: {
        slidesPerView: 3,  // Show three slides on desktop
        spaceBetween: 21,   // Maintain the space between slides
      },
    },
  });

// FAQs

// Select all three accordion elements by their IDs
const accordions = ['accordion', 'mobileAccordion', 'desktopAccordion'];

// Loop through each accordion and add event listeners
accordions.forEach(id => {
    const accordion = document.getElementById(id);

    accordion.addEventListener('shown.bs.collapse', function (event) {
        const card = event.target.closest('.card');

        // Immediately add the 'open' class
        card.classList.add('open');

        // Force the browser to repaint before applying transition (trick)
        // This step forces the browser to recognize the class change immediately
        requestAnimationFrame(() => {
            // Optional: apply transition styles or trigger any additional actions
        });
    });

    accordion.addEventListener('hidden.bs.collapse', function (event) {
        const card = event.target.closest('.card');

        // Immediately remove the 'open' class
        card.classList.remove('open');

        // Same trick to ensure the transition occurs after removal
        requestAnimationFrame(() => {
            // Optional: trigger styles or actions after transition
        });
    });
});
