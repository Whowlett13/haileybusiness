document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const submitButton = document.getElementById('submitButton');
  const buttonText = document.getElementById('buttonText');
  const loadingSpinner = document.getElementById('loadingSpinner');

  form.addEventListener('submit', (e) => {
    submitButton.disabled = true;
    buttonText.textContent = 'Sending...';
    loadingSpinner.classList.remove('hidden');
  });
}); 