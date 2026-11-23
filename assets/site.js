/* LeanSustain · Seitenlogik (DE/EN) · Stand 11/2026 */
(function () {
  /* Buchungslink: hier den Link der Google-Kalender-Buchungsseite eintragen,
     z. B. 'https://calendar.app.google/XXXX'. Leer = Buttons öffnen eine E-Mail. */
  var BOOKING_URL = 'https://calendar.app.google/GSX7KYtsyRinggnXA';

  var en = document.documentElement.lang === 'en';
  if (BOOKING_URL) {
    [].slice.call(document.querySelectorAll('[data-book]')).forEach(function (a) {
      a.href = BOOKING_URL; a.target = '_blank'; a.rel = 'noopener';
    });
  }

  var T = en ? {
    names: { audit: 'Pitch Audit', kurs: 'Crash Course', training: 'Pitch Training', sparring: 'Sparring', onboarding: 'Onboarding Modules' },
    packs: {
      partner: { d: '<b>Partnership · 12 months:</b> everything in Rebuild, plus 6 months of sparring on call and onboarding modules for new sales staff.', n: 'In the call we clarify whether Partnership fits your team. Then you receive a proposal for your company.' },
      umbau:   { d: '<b>Rebuild:</b> rework your materials completely, build understanding across the team, practise the conversations.', n: 'In the call we clarify whether Rebuild fits your team. Then you receive a proposal for your company.' },
      start:   { d: '<b>Starter:</b> Pitch Audit (compact) and Crash Course. You quickly see where it stalls, and your team understands why.', n: 'In the call we clarify whether Starter fits your team. Then you receive a proposal for your company.' },
      all:     { d: 'Every building block can also be booked on its own.', n: 'In the call we clarify which building blocks fit your team. Then you receive a proposal for your company.' }
    },
    extra: 'Not included, can be added: '
  } : {
    names: { audit: 'Pitch-Audit', kurs: 'Crashkurs', training: 'Pitch-Training', sparring: 'Sparring', onboarding: 'Onboarding-Module' },
    packs: {
      partner: { d: '<b>Partnerschaft · 12 Monate:</b> alles aus dem Umbau, dazu 6 Monate Sparring auf Abruf und Onboarding-Module für neue Vertriebsleute.', n: 'Im Gespräch klären wir, ob die Partnerschaft zu euch passt. Danach bekommst du ein Angebot für dein Unternehmen.' },
      umbau:   { d: '<b>Umbau:</b> Unterlagen komplett umbauen, Verständnis im Team aufbauen, Gespräche üben.', n: 'Im Gespräch klären wir, ob der Umbau zu euch passt. Danach bekommst du ein Angebot für dein Unternehmen.' },
      start:   { d: '<b>Einstieg:</b> Pitch-Audit kompakt und Crashkurs. Du siehst schnell, wo es hakt, und dein Team versteht, warum.', n: 'Im Gespräch klären wir, ob der Einstieg zu euch passt. Danach bekommst du ein Angebot für dein Unternehmen.' },
      all:     { d: 'Alle Bausteine sind auch einzeln buchbar.', n: 'Im Gespräch klären wir, welche Bausteine zu euch passen. Danach bekommst du ein Angebot für dein Unternehmen.' }
    },
    extra: 'Nicht enthalten, einzeln dazubuchbar: '
  };
  var CONTENT = {
    partner: ['audit', 'kurs', 'training', 'sparring', 'onboarding'],
    umbau: ['audit', 'kurs', 'training'],
    start: ['audit', 'kurs'],
    all: null
  };

  // Lösung wählen
  var tabs = [].slice.call(document.querySelectorAll('.picker button'));
  var boards = [].slice.call(document.querySelectorAll('.board'));
  function show(k) {
    tabs.forEach(function (t) { t.setAttribute('aria-selected', t.dataset.k === k); });
    boards.forEach(function (b) { b.hidden = b.dataset.k !== k; });
  }
  tabs.forEach(function (t) { t.addEventListener('click', function () { show(t.dataset.k); }); });
  if (tabs.length) show(tabs[0].dataset.k);

  // Pakete
  var cards = document.getElementById('cards'), desc = document.getElementById('pkdesc');
  var note = document.getElementById('pkctanote'), extra = document.getElementById('pkextra');
  var btns = [].slice.call(document.querySelectorAll('.pk-switch button'));
  function pick(key) {
    var inc = CONTENT[key], t = T.packs[key];
    btns.forEach(function (x) { x.setAttribute('aria-pressed', x.dataset.pk === key); });
    desc.innerHTML = t.d;
    if (note) note.textContent = t.n;
    cards.classList.toggle('filtered', !!inc);
    var missing = [];
    [].slice.call(cards.children).forEach(function (c) {
      var isIn = !!inc && inc.indexOf(c.dataset.b) > -1;
      c.classList.toggle('in', isIn);
      if (inc && !isIn) missing.push(T.names[c.dataset.b]);
      [].slice.call(c.querySelectorAll('.note')).forEach(function (n) { n.classList.toggle('show', n.dataset.for === key); });
    });
    if (extra) extra.innerHTML = missing.length ? '<b>' + T.extra + '</b>' + missing.join(', ') : '';
  }
  btns.forEach(function (btn) { btn.addEventListener('click', function () { pick(btn.dataset.pk); }); });
  if (btns.length) pick('umbau');

  // Mobile Kontaktleiste: nach dem Hero einblenden, im Kontaktbereich ausblenden
  var bar = document.getElementById('mbar');
  var hero = document.querySelector('.hero'), contact = document.getElementById('kontakt');
  if (bar && hero && contact && 'IntersectionObserver' in window) {
    var heroVisible = true, contactVisible = false;
    var update = function () { var on = !heroVisible && !contactVisible; bar.classList.toggle('show', on); bar.setAttribute('aria-hidden', !on); };
    new IntersectionObserver(function (e) { heroVisible = e[0].isIntersecting; update(); }).observe(hero);
    new IntersectionObserver(function (e) { contactVisible = e[0].isIntersecting; update(); }, { threshold: 0.15 }).observe(contact);
  }
})();
