(function() {
  var browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  var savedLang = localStorage.getItem('preferredLang');
  console.log('Detected browser language:', browserLang);
  console.log('savedLang: ', savedLang);

  // Automatyczne przekierowanie tylko jeśli język NIE jest zapisany
  if (!savedLang) {
    if (!browserLang.startsWith('pl')) {
      console.log("Brak preferencji, przekierowanie na index-en.html");
      localStorage.setItem('preferredLang', 'en');
      window.location.href = 'index-en.html';
    } else {
      // Jeśli domyślny to polski – zapisz preferencję
      localStorage.setItem('preferredLang', 'pl');
    }
  }

  // Funkcja do ręcznego ustawiania języka
  window.setLang = function(lang) {
    localStorage.setItem('preferredLang', lang);

    if (lang === 'pl') {
      window.location.href = 'index.html';
    } else if (lang === 'en') {
      window.location.href = 'index-en.html';
    }
  };
})();