/* GNEX Tech website behaviour: navigation, reveal, gallery filter/lightbox, contact form. No tracking, no cookies. */
(function () {
  'use strict';
  var burger = document.querySelector('.burger'), menu = document.getElementById('menu');
  if (burger && menu) burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  // reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .12 });
    els.forEach(function (el) { io.observe(el); });
  } else els.forEach(function (el) { el.classList.add('in'); });

  // gallery filters
  var fbtns = document.querySelectorAll('.filters button');
  fbtns.forEach(function (b) {
    b.addEventListener('click', function () {
      fbtns.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      var f = b.getAttribute('data-filter');
      document.querySelectorAll('.gallery figure').forEach(function (fig) {
        fig.style.display = (f === 'all' || fig.getAttribute('data-cat') === f) ? '' : 'none';
      });
    });
  });
  // lightbox
  var lb = document.querySelector('.lightbox');
  if (lb) {
    var lbImg = lb.querySelector('img');
    document.querySelectorAll('.gallery figure').forEach(function (fig) {
      fig.tabIndex = 0;
      function open() { var i = fig.querySelector('img'); lbImg.src = i.src; lbImg.alt = i.alt; lb.classList.add('open'); lb.querySelector('button').focus(); }
      fig.addEventListener('click', open);
      fig.addEventListener('keydown', function (e) { if (e.key === 'Enter') open(); });
    });
    function close() { lb.classList.remove('open'); }
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.tagName === 'BUTTON') close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  // contact form: validates, then prepares an e-mail in the visitor's own mail app (no data is sent to any server)
  var form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true;
    function need(id, test, msg) {
      var el = document.getElementById(id), er = document.getElementById(id + '-err');
      var good = test(el.value.trim ? el.value.trim() : el.checked);
      er.textContent = good ? '' : msg; el.setAttribute('aria-invalid', good ? 'false' : 'true');
      if (!good) ok = false;
    }
    need('name', function (v) { return v.length >= 2 && v.length <= 80; }, 'Please enter your name.');
    need('email', function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }, 'Please enter a valid e-mail address.');
    need('interest', function (v) { return v !== ''; }, 'Please choose a topic.');
    need('message', function (v) { return v.length >= 10 && v.length <= 2000; }, 'Please write at least 10 characters.');
    var c = document.getElementById('consent'), ce = document.getElementById('consent-err');
    ce.textContent = c.checked ? '' : 'Please confirm you have read the privacy notice.'; if (!c.checked) ok = false;
    if (!ok) { var first = form.querySelector('[aria-invalid=true]'); if (first) first.focus(); return; }
    var v = function (id) { return document.getElementById(id).value.trim(); };
    var body = 'Name: ' + v('name') + '\nOrganisation: ' + (v('org') || '-') + '\nE-mail: ' + v('email') + '\nTopic: ' + v('interest') + '\n\n' + v('message');
    var href = 'mailto:' + form.getAttribute('data-to') + '?subject=' + encodeURIComponent('GNEX Tech enquiry: ' + v('interest')) + '&body=' + encodeURIComponent(body);
    var n = document.getElementById('form-notice');
    n.classList.add('show');
    n.innerHTML = 'Thank you, ' + v('name').replace(/[<>&"]/g, '') + '. Your e-mail app should open with the message ready to send. If it does not, e-mail us at <a href="mailto:' + form.getAttribute('data-to').split(',')[0] + '">' + form.getAttribute('data-to').split(',')[0] + '</a>.';
    window.location.href = href;
  });
})();
