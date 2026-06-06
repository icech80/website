/* ============================================
   Language Store — Alpine.js
   Persists language selection in localStorage
   ============================================ */
document.addEventListener('alpine:init', () => {
  Alpine.store('lang', {
    current: localStorage.getItem('lang') || 'es',
    set(lang) {
      this.current = lang;
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;
    }
  });
  // Set initial lang attribute on <html>
  document.documentElement.lang = localStorage.getItem('lang') || 'es';
});
