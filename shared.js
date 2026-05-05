// =============================================
// Anadolu Fırını Rehberi — Shared Components
// Nav injection + interactivity + animations
// =============================================

// 1. Immediately inject nav where this script is placed
(function injectNav() {
  var s = document.currentScript;
  var nav = document.createElement('nav');
  nav.id = 'navbar';
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Ana navigasyon');
  nav.innerHTML =
    '<div class="nav-inner">' +
      '<a href="index.html" class="nav-logo">&#x1f525; Anadolu F\u0131r\u0131n\u0131 Rehberi</a>' +
      '<button class="nav-toggle" id="menuToggle" aria-expanded="false" aria-controls="navMenu">&#9776; B\u00f6l\u00fcmler</button>' +
    '</div>' +
    '<div class="nav-menu" id="navMenu" role="menu">' +
      '<a href="index.html#giris" role="menuitem">F\u0131r\u0131n Anatomisi</a>' +
      '<a href="index.html#tipler" role="menuitem">F\u0131r\u0131n Tipleri</a>' +
      '<a href="index.html#olculer" role="menuitem">\u00d6l\u00e7\u00fcler</a>' +
      '<a href="yalitim.html#katmanlar" role="menuitem">Yal\u0131t\u0131m Katmanlar\u0131</a>' +
      '<a href="yalitim.html#malz" role="menuitem">Malzemeler</a>' +
      '<a href="yapim.html#asamalar" role="menuitem">Yap\u0131m A\u015famalar\u0131</a>' +
      '<a href="yapim.html#harc" role="menuitem">Har\u00e7 Tarifleri</a>' +
      '<a href="yapim.html#kubbe" role="menuitem">Kubbe Teknikleri</a>' +
      '<a href="pisirme.html#rodaj" role="menuitem">Rodaj Program\u0131</a>' +
      '<a href="pisirme.html#pisirme" role="menuitem">Pi\u015firme Rehberi</a>' +
      '<a href="pisirme.html#hatalar" role="menuitem">S\u0131k Hatalar</a>' +
      '<a href="bilim.html#bilim" role="menuitem">Bilimsel Veriler</a>' +
      '<a href="bilim.html#kaynaklar" role="menuitem">Kaynaklar</a>' +
    '</div>';
  s.parentNode.insertBefore(nav, s);
})();

// 2. Defer interactivity until DOM ready
document.addEventListener('DOMContentLoaded', function() {
  var page = document.body.dataset.page || '';
  var nav = document.getElementById('navbar');
  var toggle = document.getElementById('menuToggle');
  var menu = document.getElementById('navMenu');
  var sections = document.querySelectorAll('main > section');
  var menuLinks = menu.querySelectorAll('a');

  // Toggle menu
  toggle.addEventListener('click', function() {
    var open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.textContent = open ? '\u2715 Kapat' : '\u2630 B\u00f6l\u00fcmler';
  });

  // Close menu on link click
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '\u2630 B\u00f6l\u00fcmler';
    });
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '\u2630 B\u00f6l\u00fcmler';
      toggle.focus();
    }
  });

  // Scroll: nav style + active section
  window.addEventListener('scroll', function() {
    nav.classList.toggle('scrolled', window.scrollY > 80);

    var activeId = '';
    sections.forEach(function(s) {
      if (s.getBoundingClientRect().top <= 200) activeId = s.id;
    });
    menuLinks.forEach(function(a) {
      var href = a.getAttribute('href');
      var pagePart = href.split('#')[0].replace('.html', '') || 'index';
      var targetId = href.split('#')[1] || '';
      var isLocal = (pagePart === page) || (page === 'index' && pagePart === 'index');
      a.classList.toggle('active', isLocal && targetId === activeId);
    });
  });

  // IntersectionObserver for section fade-in
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.08 });
    sections.forEach(function(s) { observer.observe(s); });
  } else {
    // Fallback: show all sections immediately
    sections.forEach(function(s) { s.classList.add('visible'); });
  }
});
