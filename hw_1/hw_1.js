const btnNode = document.querySelector('.btn-ilg');
const svg2 = document.querySelector('.svg2');
const svg = document.querySelector('.svg');

btnNode.addEventListener('click', () => {
   svg2.classList.toggle('dark-arrow');
   svg.classList.toggle('light-arrow');
});