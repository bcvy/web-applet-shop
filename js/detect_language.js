(function () {
  const savedLang = localStorage.getItem('preferredLang');

  // Jeśli użytkownik wybrał język wcześniej – szanujemy jego wybór
  if (savedLang === 'en') {
    redirectToEnglish();
    return;
  } else if (savedLang === 'pl') {
    // Jeśli preferencja to polski, nie przekierowuj
    return;
  }

  // Wykrywamy język przeglądarki tylko jeśli nie zapisano preferencji
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  
  // Jeśli język to angielski – przekieruj na index-en.html

  if (browserLang.startsWith('en')&&savedLang !== 'pl') {
    redirectToEnglish();
  }

  function redirectToEnglish() {
    if (!window.location.pathname.includes('index-en.html')) {
      window.location.replace('index-en.html');
    }
  }
})();

function setLang(lang) {
  localStorage.setItem('preferredLang', lang);

  if (lang === 'pl') {
    window.location.href = 'index.html';
  } else if (lang === 'en') {
    window.location.href = 'index-en.html';
  }
}


