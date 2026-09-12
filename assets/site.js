"use strict";
(() => {
  function setLanguage(lang) {
    const selected = lang === "en" ? "en" : "zh";
    document.body.dataset.language = selected;
    document.documentElement.lang = selected === "en" ? "en" : "zh-CN";
    document.querySelectorAll("button[data-lang]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === selected));
    });
    document.querySelectorAll('a[href$=".html"],a[data-page]').forEach(link => {
      const path = link.dataset.page || link.getAttribute("href");
      link.dataset.page = path;
      link.setAttribute("href", path + (selected === "en" ? "?lang=en" : ""));
    });
  }
  const requested = new URLSearchParams(location.search).get("lang");
  setLanguage(requested);
  document.querySelectorAll("button[data-lang]").forEach(button => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
})();
