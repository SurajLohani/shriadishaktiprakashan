document.addEventListener('DOMContentLoaded', function () {
  // Bilingual toggle (Hindi default, English optional) — persisted via localStorage
  var savedLang = 'hi';
  try { savedLang = localStorage.getItem('sap-lang') || 'hi'; } catch (e) {}
  function applyLang(lang) {
    document.body.classList.toggle('lang-en', lang === 'en');
    document.documentElement.lang = lang === 'en' ? 'en' : 'hi';
    var btn = document.querySelector('.lang-toggle');
    if (btn) { btn.textContent = lang === 'en' ? 'हिं' : 'EN'; }
    try { localStorage.setItem('sap-lang', lang); } catch (e) {}
  }
  applyLang(savedLang);
  var langBtn = document.querySelector('.lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      var next = document.body.classList.contains('lang-en') ? 'hi' : 'en';
      applyLang(next);
    });
  }

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Books page filter
  var tabs = document.querySelectorAll('.filter-tab');
  var cards = document.querySelectorAll('[data-category]');
  if (tabs.length && cards.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        var cat = tab.getAttribute('data-filter');
        cards.forEach(function (card) {
          if (cat === 'all' || card.getAttribute('data-category') === cat) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Contact form -> mailto (v1, no backend)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('cf-name').value;
      var email = document.getElementById('cf-email').value;
      var message = document.getElementById('cf-message').value;
      var subject = encodeURIComponent('Website Inquiry from ' + name);
      var body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
      window.location.href = 'mailto:shikha@shriadishaktiprakashan.com?subject=' + subject + '&body=' + body;
    });
  }
});
