const hamburger = document.querySelector(".hamburguer");
const header = document.querySelector(".menu");
hamburger.addEventListener("click", () => header.classList.toggle("active"));

const items = document.querySelector('.list-items')

items.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
        header.classList.remove('active')
    }
})