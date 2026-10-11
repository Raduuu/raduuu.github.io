(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-toggle');
  function current() {
    return root.dataset.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function sync() { if (btn) btn.setAttribute('aria-pressed', current() === 'dark' ? 'true' : 'false'); }
  if (btn) btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  });
  sync();
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
