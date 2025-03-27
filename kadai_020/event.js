const text = document.getElementById('text');
const btnclick = document.getElementById('btn');

btnclick.addEventListener('click', () => {
text.textContent = 'ボタンをクリックしました ';
});