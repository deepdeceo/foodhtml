// tiny interactivity: search filter and favorite toggle
document.addEventListener('DOMContentLoaded', function(){
  const searchInput = document.getElementById('searchInput');
  const productCards = Array.from(document.querySelectorAll('.product-card'));
  const favButtons = Array.from(document.querySelectorAll('.fav-btn'));

  searchInput.addEventListener('input', function(e){
    const q = e.target.value.trim().toLowerCase();
    productCards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      card.parentElement.style.display = title.includes(q) ? '' : 'none';
    });
  });

  favButtons.forEach(btn => {
    // initialize if contains 'active' (use solid heart)
    const icon = document.createElement('i');
    icon.className = btn.classList.contains('active') ? 'fas fa-heart' : 'far fa-heart';
    btn.textContent = '';
    btn.appendChild(icon);

    btn.addEventListener('click', function(){
      btn.classList.toggle('active');
      const i = btn.querySelector('i');
      if(btn.classList.contains('active')){
        i.className = 'fas fa-heart';
      } else {
        i.className = 'far fa-heart';
      }
    });
  });

  // categories are now a static grid; autoplay removed
});
