/* 微积分 · 一部由问题写成的历史 —— 交互与排版脚本 */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ---------- 公式渲染 ---------- */
  function renderMath() {
    if (typeof window.renderMathInElement !== 'function') return;
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '\\[', right: '\\]', display: true },
        { left: '\\(', right: '\\)', display: false }
      ],
      throwOnError: false,
      strict: false,
      ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option']
    });
  }

  /* ---------- 入场动画 ---------- */
  function setupReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 阅读进度 ---------- */
  function setupProgress() {
    var bar = document.querySelector('.nav-progress');
    if (!bar) return;

    function update() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.width = (ratio * 100).toFixed(2) + '%';
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  /* ---------- 人物索引 ---------- */
  var PEOPLE = null;

  function setupPeopleIndex() {
    var root = document.querySelector('[data-people-index]');
    if (!root) return;

    var buttons = Array.prototype.slice.call(root.querySelectorAll('button[data-person]'));
    var year = root.querySelector('.panel-year');
    var name = root.querySelector('.panel-name');
    var what = root.querySelector('.panel-what');
    var question = root.querySelector('.panel-question');
    var link = root.querySelector('.panel-link');

    function select(btn) {
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      var d = btn.dataset;
      year.textContent = d.year || '';
      name.textContent = d.name || '';
      what.textContent = d.what || '';
      question.textContent = d.question || '';
      if (link && d.href) {
        link.setAttribute('href', d.href);
        link.textContent = d.cta || '进入该章';
      }
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () { select(btn); });
      btn.addEventListener('mouseenter', function () {
        if (window.matchMedia('(hover: hover)').matches) select(btn);
      });
      btn.addEventListener('focus', function () { select(btn); });
    });

    if (buttons.length) select(buttons[0]);
  }

  /* ---------- 启动 ---------- */
  function boot() {
    renderMath();
    setupReveal();
    setupProgress();
    setupPeopleIndex();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
