/* Created by Tivotal */

// Menu toggle functionality
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// Theme toggler functionality
let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
  themeToggler.classList.toggle("active");
};

// Close menu and theme toggler on scroll
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
};

// Theme button click functionality to change theme color
document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--theme-color", color);
  };
});

// Initialize Swiper for home-slider
var homeSwiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// Initialize Swiper for review-slider
var reviewSwiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// Animated scroll to sections on menu click
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let targetId = link.getAttribute("href").substring(1);
    let targetSection = document.getElementById(targetId);
    if (targetSection) {
      scrollToTarget(targetSection);
    }
  });
});

// Function to scroll smoothly to target element
function scrollToTarget(element) {
  window.scrollTo({
    top: element.offsetTop - 50,
    behavior: "smooth",
  });
}

// Animated counters
document.querySelectorAll(".counter").forEach((counter) => {
  counter.innerHTML = 0;
  let targetCount = +counter.getAttribute("data-target");
  let countSpeed = 200; // Adjust speed as needed

  let updateCount = () => {
    let currentCount = +counter.innerText;
    let increment = targetCount / countSpeed;

    if (currentCount < targetCount) {
      counter.innerText = Math.ceil(currentCount + increment);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = targetCount;
    }
  };

  updateCount();
});

// Parallax effect on scroll
window.addEventListener("scroll", () => {
  let scrollPosition = window.pageYOffset;
  document.querySelectorAll(".parallax").forEach((parallax) => {
    let speed = +parallax.getAttribute("data-speed");
    parallax.style.transform = `translateY(${scrollPosition * speed}px)`;
  });
});

// Form validation
let contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
    } else {
      // Perform AJAX request or other actions with form data
      console.log("Form submitted:", { name, email, message });
      contactForm.reset();
    }
  });
}
