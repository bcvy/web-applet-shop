// Stan
let fontSizes = [100, 120, 140];
let currentFontSizeIndex = 0;

// PRZYWRACANIE USTAWIEŃ Z localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedFontSize = localStorage.getItem('fontSize');
  if (savedFontSize) {
    document.body.setAttribute('data-font-size', savedFontSize);
    currentFontSizeIndex = fontSizes.indexOf(parseInt(savedFontSize)) || 0;
  }

  if (localStorage.getItem('highContrast') === 'true') {
    document.body.classList.add('high-contrast');
  }

  if (localStorage.getItem('underlineLinks') === 'true') {
    document.body.classList.add('underline-links');
  }

  if (localStorage.getItem('dyslexicFont') === 'true') {
    document.body.classList.add('dyslexic-font');
  }
});

// Toggle widżetu
document.getElementById('toggle-widget').addEventListener('click', () => {
  const widget = document.getElementById('accessibility-widget');
  widget.classList.toggle('hidden');
});

// Skokowa zmiana czcionki
function cycleFontSize() {
  currentFontSizeIndex = (currentFontSizeIndex + 1) % fontSizes.length;
  const size = fontSizes[currentFontSizeIndex];
  document.body.setAttribute('data-font-size', size);
  localStorage.setItem('fontSize', size);
}

// Kontrast
function toggleContrast() {
  document.body.classList.toggle('high-contrast');
  const active = document.body.classList.contains('high-contrast');
  localStorage.setItem('highContrast', active);
}

// Podkreślanie linków
function toggleUnderlineLinks() {
  document.body.classList.toggle('underline-links');
  const active = document.body.classList.contains('underline-links');
  localStorage.setItem('underlineLinks', active);
}

// Czcionka dyslektyczna
function toggleDyslexicFont() {
  document.body.classList.toggle('dyslexic-font');
  const active = document.body.classList.contains('dyslexic-font');
  localStorage.setItem('dyslexicFont', active);
}

// Reset
function resetAccessibility() {
  document.body.removeAttribute('data-font-size');
  document.body.classList.remove(
    'high-contrast',
    'underline-links',
    'dyslexic-font'
  );
  localStorage.removeItem('fontSize');
  localStorage.removeItem('highContrast');
  localStorage.removeItem('underlineLinks');
  localStorage.removeItem('dyslexicFont');
  currentFontSizeIndex = 0;
}