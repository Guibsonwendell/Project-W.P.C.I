(function(){
'use strict';

/* ---- HEADER SCROLL ---- */
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
}, {passive:true});
header.classList.add('scrolled'); // sempre com fundo (garante leitura)

/* ---- MENU MOBILE ---- */
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  nav.classList.toggle('open');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});
document.addEventListener('click', e => {
  if(!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('open')){
    nav.classList.remove('open');
    toggle.classList.remove('active');
    document.body.style.overflow = '';
  }
});

/* ---- SMOOTH SCROLL ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e){
    const id = this.getAttribute('href');
    if(id === '#') return;
    const el = document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.pageYOffset - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'));
    window.scrollTo({top, behavior:'smooth'});
    if(nav.classList.contains('open')){
      nav.classList.remove('open');
      toggle.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Remoção do código do Hero Slider (não é mais necessário)

/* ---- INTERSECTION OBSERVER (reveal) ---- */
const revealEls = document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold:0.12});
revealEls.forEach(el => observer.observe(el));

/* ---- TESTIMONIAL SLIDER ---- */
const tTrack  = document.querySelector('.testimonial-track');
const tSlides = document.querySelectorAll('.testimonial-slide');
const tDots   = document.querySelectorAll('.t-dot');
let tIdx = 0;
function showT(i){
  tTrack.style.transform = `translateX(-${i*100}%)`;
  tDots.forEach(d => d.classList.remove('active'));
  tDots[i].classList.add('active');
  tIdx = i;
}
tDots.forEach((d,i) => d.addEventListener('click', () => showT(i)));
setInterval(() => showT((tIdx + 1) % tSlides.length), 5500);
// Swipe
let tStartX = 0;
tTrack.addEventListener('touchstart', e => { tStartX = e.changedTouches[0].screenX; }, {passive:true});
tTrack.addEventListener('touchend', e => {
  const diff = tStartX - e.changedTouches[0].screenX;
  if(Math.abs(diff) > 50) showT(diff > 0 ? (tIdx+1)%tSlides.length : (tIdx-1+tSlides.length)%tSlides.length);
}, {passive:true});

/* ---- LIGHTBOX ---- */
const items    = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lb-img');
const lbCap    = document.getElementById('lb-caption');
let lbIdx = 0;
const lbSrcs   = Array.from(items).map(it => ({src:it.querySelector('img').src, cap:it.dataset.caption||''}));
function openLb(i){
  lbIdx = i;
  lbImg.src = lbSrcs[i].src;
  lbImg.alt = lbSrcs[i].cap;
  lbCap.textContent = lbSrcs[i].cap;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLb(){
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
items.forEach((it,i) => it.addEventListener('click', () => openLb(i)));
document.getElementById('lb-close').addEventListener('click', closeLb);
document.getElementById('lb-prev').addEventListener('click', () => openLb((lbIdx-1+lbSrcs.length)%lbSrcs.length));
document.getElementById('lb-next').addEventListener('click', () => openLb((lbIdx+1)%lbSrcs.length));
lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLb(); });
document.addEventListener('keydown', e => {
  if(!lightbox.classList.contains('open')) return;
  if(e.key === 'Escape') closeLb();
  if(e.key === 'ArrowLeft')  openLb((lbIdx-1+lbSrcs.length)%lbSrcs.length);
  if(e.key === 'ArrowRight') openLb((lbIdx+1)%lbSrcs.length);
});

/* ---- FORM VALIDATION ---- */
const form    = document.getElementById('orcamentoForm');
const modal   = document.getElementById('modal-success');
const modalCl = document.getElementById('modal-close');
function validateField(field){
  const val = field.value.trim();
  let ok = val !== '';
  if(field.type === 'email' && ok) ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  field.classList.toggle('valid', ok);
  field.classList.toggle('invalid', !ok);
  return ok;
}
form.querySelectorAll('.form-control[required]').forEach(f => {
  f.addEventListener('blur', () => validateField(f));
  f.addEventListener('input', () => { if(f.classList.contains('invalid')) validateField(f); });
});
form.addEventListener('submit', function(e){
  e.preventDefault();
  const fields = [...this.querySelectorAll('.form-control[required]')];
  const allOk  = fields.map(validateField).every(Boolean);
  if(!allOk){ fields.find(f => f.classList.contains('invalid'))?.focus(); return; }
  // Simula envio
  const btn = this.querySelector('.btn-submit');
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Enviar Solicitação de Orçamento';
    btn.disabled = false;
    form.reset();
    form.querySelectorAll('.form-control').forEach(f => f.classList.remove('valid','invalid'));
    modal.classList.add('open');
  }, 1200);
});
modalCl.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('open'); });

/* ---- BACK TO TOP ---- */
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 500);
}, {passive:true});
backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

/* ---- WHATSAPP TOOLTIP auto-hide ---- */
const tooltip = document.querySelector('.whatsapp-tooltip');
if(tooltip) setTimeout(() => { tooltip.style.display = 'none'; }, 5500);

})();