// Typing effect for hero heading

const texts = [
  "Hello — I'm Nitin Rana",
  "Java Backend Developer",
  "Spring Boot Enthusiast",
  "Looking for Internships"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');

function type() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 1000; // pause at end of full text
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typeSpeed = 300; // pause before typing next text
  }

  setTimeout(type, typeSpeed);
}

window.addEventListener('load', () => {
  setTimeout(type, 300);
});

// ---------- EmailJS Contact Form Integration ----------
// ---------- EmailJS Contact Form Integration ----------
(function () {
  emailjs.init({
    publicKey: "ut4nTkYoOL9NFf5ti", // EmailJS dashboard ka PUBLIC KEY
  });
})();

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const status = document.getElementById('status');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    emailjs.send('service_5hwhaxf', 'template_qw6tihc', templateParams)
      .then(function(response) {
        status.textContent = "✓ Message sent successfully!";
        status.style.color = "green";
        document.getElementById('contactForm').reset();
        setTimeout(() => { status.textContent = ''; }, 4000);
      }, function(error) {
        status.textContent = "✗ Failed to send message. Try again.";
        status.style.color = "red";
      });

  } else {
    status.textContent = "✗ Please fill all fields";
    status.style.color = "red";
  }
});

// ---------- Smooth scroll for navigation links ----------
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
