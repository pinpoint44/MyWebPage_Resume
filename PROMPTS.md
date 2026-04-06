Appendix B: AI Prompt Log (Template)
Create a file named PROMPTS.md (or equivalent) and include entries like the format below:
Entry #1
Tool Used: Claude, ChatGPT, BlackBoxAI
Prompt (copy-paste exactly):how do i make the github button work?
AI Output (summary or screenshot reference):<button class="visit-btn">Visit Github</button>
                                            <button class="visit-btn" onclick="window.open('https://github.com/pinpoint44', '_blank')">Visit Github</button>
Entry #2
Tool Used: Claude, ChatGPT, BlackBoxAI
Prompt (copy-paste exactly):make the linked in icon work using this: https://www.linkedin.com/feed/
AI Output (summary or screenshot reference):<div class="socials">
                    <i class="fa-brands fa-github" onclick="window.open('https://github.com/pinpoint44', '_blank')" style="cursor: pointer;"></i>
                    <i class="fa-brands fa-linkedin" onclick="window.open('https://linkedin.com/in/yourprofile', '_blank')" style="cursor: pointer;"></i>
                    <i class="fa-brands fa-linkedin" onclick="window.open('https://www.linkedin.com/feed/', '_blank')" style="cursor: pointer;"></i>
</xai:function_call >

<xai:function_call name="attempt_completion">
<parameter name="result">LinkedIn icon now works: clicks open https://www.linkedin.com/feed/ in new tab.

All interactive:
- Menu icon dropdown ✓
- Visit Github button ✓
- Github icon ✓
- Dream Home Github Repo ✓
- LinkedIn icon ✓
  
Entry #3
Tool Used: Claude, ChatGPT, BlackBoxAI
Prompt (copy-paste exactly):make the submit button work i nthe contact
AI Output (summary or screenshot reference):// Contact form submit
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

Entry #4
Tool Used: Claude, ChatGPT, BlackBoxAI
Prompt (copy-paste exactly):make the download cv work and contact
AI Output (summary or screenshot reference):// Contact form submit
  const contactInput = document.querySelector('.input input');
  const submitBtn = document.querySelector('.contact .btn');
  if (contactInput && submitBtn) {
    submitBtn.addEventListener('click', () => {
        alert('Please enter your email.');
      }
    });
  }

  // About buttons
  const downloadCVBtn = document.querySelector('.about .btn-group .btn:nth-child(1)');
  const contactBtn = document.querySelector('.about .btn-group .btn:nth-child(2)');
  if (downloadCVBtn) {
    downloadCVBtn.addEventListener('click', () => {
      window.open('https://example.com/clint-fernandez-cv.pdf', '_blank');
    });
  }
  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  }

Entry #5
Tool Used: Claude, ChatGPT, BlackBoxAI
Prompt (copy-paste exactly):at the header Clint Fernandez can you make it a clickable link in a fb acc
AI Output (summary or screenshot reference):<a href="https://web.facebook.com/clint.fernandez.3956" class="logo" target="_blank"><span>Clint Fernandez</span></a> 
          
Entry #6
Tool Used: Claude, ChatGPT, BlackBoxAI
Prompt (copy-paste exactly):can you make the download cv a downloadable pdf file?
AI Output (summary or screenshot reference): window.open('assets/Example_CV.pdf', '_blank');







How I used/modified it in my project:
--------------------------------------------

