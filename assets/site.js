
(function(){
  const body=document.body;
  const buttons=[...document.querySelectorAll('[data-set-lang]')];
  const saved=localStorage.getItem('inquiryflow-lang');
  const initial=saved || (((navigator.language||'').toLowerCase().startsWith('zh')) ? 'zh' : 'en');
  function setLang(lang){
    body.dataset.lang=lang;
    document.documentElement.lang=lang==='zh'?'zh-CN':'en';
    buttons.forEach(b=>b.classList.toggle('active',b.dataset.setLang===lang));
    localStorage.setItem('inquiryflow-lang',lang);
  }
  buttons.forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.setLang)));
  setLang(initial);
})();
