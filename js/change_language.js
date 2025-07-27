function setLang(lang) {
    localStorage.setItem('preferredLang', lang);

    if (lang === 'pl') {
      window.location.href = 'index.html';
    } else if (lang === 'en') {
      window.location.href = 'index-en.html';
    }
  }
