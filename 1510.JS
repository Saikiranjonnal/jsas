document.addEventListener('DOMContentLoaded', function() {
    var seeMoreBtn = document.getElementById('see-more-btn');
    var cards = document.querySelectorAll('.card');
    seeMoreBtn.addEventListener('click', function() { 
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.display = 'block'; 
            }, 2000 * (index + 1)); 
        });
    });
});
