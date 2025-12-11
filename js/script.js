/* 
   Student Name: Jess Wilson
   Student #: A01478299
   Assignment: Term Project - Responsive Website Development
*/

// ===================================
// MOBILE NAVIGATION TOGGLE
// ===================================

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");

// Toggle mobile navigation menu
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Prevent body scroll when menu is open
  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

// Close menu when clicking on a navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// ===================================
// SLICK SLIDER INITIALIZATION
// ===================================

$(document).ready(function () {
  // Initialize Slick Slider with 3 responsive breakpoints
  $(".scenes-slider").slick({
    // Mobile settings (default - 320px)
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,

    // Responsive breakpoints
    responsive: [
      {
        // Tablet breakpoint - 768px
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        // Desktop breakpoint - 1280px
        breakpoint: 9999,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        // Mobile breakpoint - 320px to 767px
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  });
});

// ===================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Skip if href is just "#"
    if (href === "#") {
      return;
    }

    e.preventDefault();

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navHeight = document.querySelector(".main-nav").offsetHeight;
      const targetPosition = targetElement.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ===================================
// NEWSLETTER FORM SUBMISSION
// ===================================

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = newsletterForm.querySelector(".email-input");
  const email = emailInput.value;

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    alert("Thank you for subscribing to NOODL updates!");
    emailInput.value = "";
  } else {
    alert("Please enter a valid email address.");
  }
});

// ===================================
// SCROLL ANIMATION FOR ELEMENTS
// ===================================

// Add fade-in animation for bowl cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Apply animation to bowl cards
const bowlCards = document.querySelectorAll(".bowl-card");
bowlCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = `opacity 0.6s ease ${
    index * 0.1
  }s, transform 0.6s ease ${index * 0.1}s`;
  observer.observe(card);
});

// ===================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ===================================

// Highlight active section in navigation
const sections = document.querySelectorAll("section[id]");

function highlightNavigation() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.style.color = "var(--color-pink)";
        navLink.style.borderBottomColor = "var(--color-pink)";
      } else {
        navLink.style.color = "";
        navLink.style.borderBottomColor = "transparent";
      }
    }
  });
}

window.addEventListener("scroll", highlightNavigation);

// ===================================
// WINDOW RESIZE HANDLER
// ===================================

// Reset navigation on window resize
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Close mobile menu if window is resized to desktop
    if (window.innerWidth >= 1280) {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
    }
  }, 250);
});

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================

window.addEventListener("load", () => {
  // Add loaded class to body for animations
  document.body.classList.add("loaded");

  // Run highlight navigation on load
  highlightNavigation();
});
