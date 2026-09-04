
    const root = document.documentElement;
    const buttons = document.querySelectorAll('[data-set-lang]');
    const localizedLinks = document.querySelectorAll('[data-href-ja][data-href-en]');

    function setLanguage(language) {
      root.lang = language;
      buttons.forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.setLang === language));
      });
      localizedLinks.forEach((link) => {
        link.href = language === 'en' ? link.dataset.hrefEn : link.dataset.hrefJa;
      });
      try { localStorage.setItem('preferred-language', language); } catch (_) {}
    }

    buttons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.setLang)));
    let savedLanguage;
    try { savedLanguage = localStorage.getItem('preferred-language'); } catch (_) {}
    if (savedLanguage === 'en') setLanguage('en');
    document.getElementById('year').textContent = new Date().getFullYear();

// Preserve links to the former homepage sections.
if (location.pathname === '/') {
  const oldSections = {research:'/research/', publications:'/publications/', teaching:'/teaching/', resources:'/resources/', bio:'/bio/', cv:'/bio/'};
  const destination = oldSections[location.hash.slice(1)];
  if (destination) location.replace(destination);
}

// Open the target year or region when following an archive index link.
function revealArchiveTarget() {
  const id = decodeURIComponent(location.hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return;
  for (let node = target; node; node = node.parentElement) {
    if (node.tagName === 'DETAILS') node.open = true;
  }
}
window.addEventListener('hashchange', revealArchiveTarget);
revealArchiveTarget();
