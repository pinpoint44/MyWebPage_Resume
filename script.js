document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('#menu-icon');
  const navLinks = document.querySelector('.nav-links');

  if (menuIcon && navLinks) {
    console.log('Menu elements found');
    menuIcon.addEventListener('click', () => {
      console.log('Menu clicked');
      navLinks.classList.toggle('active');
      if (navLinks.classList.contains('active')) {
        menuIcon.classList.add('fa-xmark');
        menuIcon.classList.remove('fa-bars');
      } else {
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');
      }
    });

    // Close menu when clicking nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      });
    });
  } else {
    console.log('Menu elements not found');
  }

// Search filter functionality
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      const skillCards = document.querySelectorAll('.skills .skill-card');
      const projectCards = document.querySelectorAll('.projects .project-card');

      skillCards.forEach(card => {
        const text = card.querySelector('h3').textContent + card.querySelector('p').textContent;
        card.classList.toggle('hidden', query && !text.toLowerCase().includes(query));
      });

      projectCards.forEach(card => {
        const text = card.querySelector('h3').textContent + card.querySelector('p').textContent;
        card.classList.toggle('hidden', query && !text.toLowerCase().includes(query));
      });
    });
  }

  // Enhanced contact form validation
  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');
      const nameError = document.getElementById('name-error');
      const emailError = document.getElementById('email-error');
      const subjectError = document.getElementById('subject-error');
      const messageError = document.getElementById('message-error');

      let isValid = true;

      // Reset errors
      [nameError, emailError, subjectError, messageError].forEach(err => {
        err.textContent = '';
        err.parentElement.classList.remove('error');
      });

      // Name validation (required)
      if (!name.value.trim()) {
        nameError.textContent = 'Name is required';
        nameError.parentElement.classList.add('error');
        isValid = false;
      }

      // Email validation (required, valid format)
      const emailValue = email.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValue) {
        emailError.textContent = 'Email is required';
        emailError.parentElement.classList.add('error');
        isValid = false;
      } else if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email';
        emailError.parentElement.classList.add('error');
        isValid = false;
      }

      // Subject validation (optional)
      if (!subject.value.trim()) {
        subjectError.textContent = 'Subject is required';
        subjectError.parentElement.classList.add('error');
        isValid = false;
      }

      // Message validation (required)
      if (!message.value.trim()) {
        messageError.textContent = 'Message is required';
        messageError.parentElement.classList.add('error');
        isValid = false;
      }

      if (isValid) {
        const body = `Name: ${name.value.trim()}\\nEmail: ${emailValue}\\nSubject: ${subject.value.trim()}\\nMessage: ${message.value.trim()}`;
        window.open(`mailto:clintfernandez@example.com?subject=${encodeURIComponent(subject.value.trim())}&body=${encodeURIComponent(body)}`);
        // Clear form
        name.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
        alert('Thank you! Check your email client to send the message.');
      }
    });
  }

// Visitor name personalization (resets on reload)
  function setVisitorName() {
    // Clear any existing stored name
    localStorage.removeItem('visitorName');
    
    const visitorNameEl = document.getElementById('visitorName');
    const name = prompt("What's your name? (Optional)");
    
    if (name && name.trim() && visitorNameEl) {
      const trimmedName = name.trim();
      visitorNameEl.textContent = trimmedName;
      visitorNameEl.style.background = 'linear-gradient(to right, rgb(255, 0, 0), rgb(0, 157, 255))';
      visitorNameEl.style.backgroundClip = 'text';
      visitorNameEl.style.color = 'transparent';
    }
  }
  setVisitorName();

  // About buttons
  const downloadCVBtn = document.querySelector('.about .btn-group .btn:nth-child(1)');
  const contactBtn = document.querySelector('.about .btn-group .btn:nth-child(2)');
  if (downloadCVBtn) {
    downloadCVBtn.addEventListener('click', () => {
      window.open('assets/Example_CV.pdf', '_blank');
    });
  }
  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  }
});
