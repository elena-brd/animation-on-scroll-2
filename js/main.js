const cards = document.querySelectorAll('.card');

function showCards() {
    const cardHeight = window.innerHeight / 5 * 4;

    cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < cardHeight) {
            card.classList.add('show')
        } else {
            card.classList.remove('show')
        }
    })

}

showCards();

window.addEventListener('scroll', showCards);