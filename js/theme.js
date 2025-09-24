// Dark Mode Toggle Logic
(function(){
  const STORAGE_KEY = 'theme-preference';
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');

  function getStoredPreference(){
    return localStorage.getItem(STORAGE_KEY);
  }
  function systemPrefersDark(){
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function currentPreference(){
    return getStoredPreference() || (systemPrefersDark() ? 'dark' : 'light');
  }
  function applyTheme(mode){
    if(!btn) return;
    const iconSpan = btn.querySelector('.theme-icon');
    if(mode === 'dark') {
      root.setAttribute('data-theme','dark');
      btn.setAttribute('aria-pressed','true');
      if(iconSpan) iconSpan.textContent = '☀️';
      btn.setAttribute('aria-label','Switch to light mode');
    } else {
      root.setAttribute('data-theme','light');
      btn.setAttribute('aria-pressed','false');
      if(iconSpan) iconSpan.textContent = '🌙';
      btn.setAttribute('aria-label','Switch to dark mode');
    }
  }
  function toggleTheme(){
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }
  // Init
  document.addEventListener('DOMContentLoaded', function(){
    applyTheme(currentPreference());
    btn?.addEventListener('click', toggleTheme);
  });
  // React to system changes if user never chose manually
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if(!getStoredPreference()) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
