var browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
var savedLang = localStorage.getItem('preferredLang');
console.log('Detected browser language:', browserLang);
console.log('savedLang: ', savedLang);
console.log("Czy przeglądarka inna niż polska?", !browserLang.startsWith('pl'));
console.log("Czy preferowany język jest pusty?", !savedLang);
//jeżeli użytkownik nie wybrał języka, a wykryto język przeglądarki inny niż polski
if(!savedLang && !browserLang.startsWith('pl')) {
    console.log("Przekierowanie na index-en.html");
    window.location.href = 'index-en.html';
}

function setLang(lang) {
  localStorage.setItem('preferredLang', lang);

  if (lang === 'pl') {
    window.location.href = 'index.html';
  } else if (lang === 'en') {
    window.location.href = 'index-en.html';
  }
}


