document.addEventListener('DOMContentLoaded', function () {
  // Bilingual toggle (Hindi default, English optional) — persisted via localStorage
  var savedLang = 'hi';
  try { savedLang = localStorage.getItem('sap-lang') || 'hi'; } catch (e) {}
  function applyLang(lang) {
    document.body.classList.toggle('lang-en', lang === 'en');
    document.documentElement.lang = lang === 'en' ? 'en' : 'hi';
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('.float-inquiry[data-wa-hi]').forEach(function (a) {
      var url = lang === 'en' ? a.getAttribute('data-wa-en') : a.getAttribute('data-wa-hi');
      if (url) a.setAttribute('href', url);
    });
    try { localStorage.setItem('sap-lang', lang); } catch (e) {}
  }
  applyLang(savedLang);
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

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

/* ============================================================
   PREMIUM v2 — reveal, sticky bar, accordions, blog experience
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {

  // ---------- Scroll reveal (A3) ----------
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealTargets = document.querySelectorAll(
      '.section-head, .card, .feature, .cta-band, .spotlight, .author-strip, ' +
      '.samarpan-block, .aabhar-block, .guide-block, .spec-table, .path-item, ' +
      '.faq-item, .trust-row, .gallery-item, .format-acc'
    );
    revealTargets.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(function (el) { io.observe(el); });
    // Safety: anything still hidden after 2.5s becomes visible
    setTimeout(function () {
      revealTargets.forEach(function (el) { el.classList.add('revealed'); });
    }, 2500);
  }

  // ---------- Format accordion (C4/I3) ----------
  document.querySelectorAll('.format-head').forEach(function (head) {
    head.addEventListener('click', function () {
      var item = head.closest('.format-item');
      var acc = head.closest('.format-acc');
      var wasOpen = item.classList.contains('open');
      if (acc) acc.querySelectorAll('.format-item').forEach(function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  // ---------- FAQ accordion (D1) ----------
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      q.closest('.faq-item').classList.toggle('open');
    });
  });

  // ---------- Sticky order bar on book pages (C3) ----------
  var bookData = document.body.getAttribute('data-book');
  if (bookData) {
    var parts = bookData.split('|'); // name|price|paperbackURL|ebookURL|waURL
    var bar = document.createElement('div');
    bar.className = 'sticky-order';
    bar.innerHTML =
      '<div class="sticky-order-inner">' +
        '<div class="so-name">' + parts[0] + '<small>' + (parts[1] || '') + '</small></div>' +
        '<div class="so-actions">' +
          (parts[2] ? '<a class="btn btn-gold" target="_blank" rel="noopener" href="' + parts[2] + '">Paperback ख़रीदें</a>' : '') +
          (parts[3] ? '<a class="btn btn-outline" target="_blank" rel="noopener" href="' + parts[3] + '">Ebook</a>' : '') +
          (parts[4] ? '<a class="btn btn-outline" target="_blank" rel="noopener" href="' + parts[4] + '">WhatsApp</a>' : '') +
        '</div>' +
      '</div>';
    document.body.appendChild(bar);
    document.body.classList.add('has-sticky-order');
    var lastShown = false;
    window.addEventListener('scroll', function () {
      var show = window.scrollY > 640 && (window.innerHeight + window.scrollY) < document.body.scrollHeight - 420;
      if (show !== lastShown) {
        bar.classList.toggle('show', show);
        lastShown = show;
      }
    }, { passive: true });
  }

  // ---------- Blog article experience (E1/E2/E3) ----------
  var isBlogArticle = /\/blog\/[^\/]+\.html/.test(window.location.pathname);
  if (isBlogArticle) {
    // Reading progress bar
    var prog = document.createElement('div');
    prog.className = 'read-progress';
    document.body.appendChild(prog);
    window.addEventListener('scroll', function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      prog.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    }, { passive: true });

    var container = document.querySelector('section .container');
    var pageUrl = window.location.href.split('#')[0];
    var pageTitle = document.title.split('—')[0].trim();

    // Share row (WhatsApp / Facebook / X / Copy)
    if (container) {
      var share = document.createElement('div');
      share.className = 'share-row no-print';
      share.innerHTML =
        '<a target="_blank" rel="noopener" href="https://wa.me/?text=' + encodeURIComponent(pageTitle + ' — ' + pageUrl) + '">📲 WhatsApp पर भेजें</a>' +
        '<a target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(pageUrl) + '">Facebook</a>' +
        '<a target="_blank" rel="noopener" href="https://twitter.com/intent/tweet?url=' + encodeURIComponent(pageUrl) + '&text=' + encodeURIComponent(pageTitle) + '">X</a>' +
        '<a href="#" class="copy-link">🔗 Link कॉपी करें</a>';
      container.appendChild(share);
      share.querySelector('.copy-link').addEventListener('click', function (e) {
        e.preventDefault();
        try {
          navigator.clipboard.writeText(pageUrl);
          e.target.textContent = '✓ कॉपी हो गया';
        } catch (err) {}
      });
    }

    // Related articles from search index (E2)
    fetch('../assets/data/search-index.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var current = window.location.pathname.split('/').pop();
        var blogs = data.filter(function (it) {
          return it.type === 'blog' && it.url && it.url.indexOf(current) === -1;
        });
        if (!blogs.length || !container) return;
        // simple shuffle by title-length seed for variety, then pick 3
        blogs.sort(function (a, b) { return (a.title_hi || '').localeCompare(b.title_hi || ''); });
        var start = Math.abs(current.length * 7) % Math.max(1, blogs.length - 3);
        var picks = blogs.slice(start, start + 3);
        if (picks.length < 3) picks = blogs.slice(0, 3);
        var wrap = document.createElement('div');
        wrap.className = 'related-wrap';
        wrap.innerHTML = '<h3>आगे पढ़ें</h3>' + picks.map(function (p) {
          var href = p.url.replace(/^blog\//, '');
          return '<a class="rel-item" href="' + href + '">' + (p.title_hi || '') +
                 '<small>' + ((p.excerpt_hi || '').slice(0, 90)) + '…</small></a>';
        }).join('');
        container.appendChild(wrap);
      })
      .catch(function () {});
  }
});
