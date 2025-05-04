// script.js
// Controla o hover do ícone do WhatsApp

document.addEventListener('DOMContentLoaded', () => {
    const waItem = document.querySelector('.social-item.whatsapp');
    const waNum  = waItem.querySelector('.whatsapp-number');
  
    waItem.addEventListener('mouseenter', () => waNum.style.display = 'block');
    waItem.addEventListener('mouseleave', () => waNum.style.display = 'none');
  
    // Animação das barras de progresso
    document.querySelectorAll('.progress-fill').forEach(fill => {
      const pct = fill.getAttribute('data-percentage');
      fill.style.width = `${pct}%`;
    });
  });