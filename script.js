// Dark/Light Mode Toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Initialize theme on page load
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    body.classList.remove('light');
    toggle.textContent = '🌙';
  } else {
    body.classList.add('light');
    body.classList.remove('dark');
    toggle.textContent = '☀️';
  }
}

// Initialize on page load
initializeTheme();

// Toggle theme on button click
toggle.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem('theme', 'light');
    toggle.textContent = '☀️';
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    toggle.textContent = '🌙';
  }
});

// Keyboard accessibility for toggle
toggle.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggle.click();
  }
});