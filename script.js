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

// Contact form submit
  const contactInput = document.querySelector('.input input');
  const submitBtn = document.querySelector('.contact .btn');
  if (contactInput && submitBtn) {
    submitBtn.addEventListener('click', () => {
      const email = contactInput.value.trim();
      if (email) {
        window.open(`mailto:clintfernandez@example.com?subject=Contact from portfolio&body=Email: ${email}`);
        contactInput.value = '';
        alert('Message sent! Check your email client.');
      } else {
        alert('Please enter your email.');
      }
    });
  }

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
