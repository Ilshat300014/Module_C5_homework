const btnNode = document.querySelector('button');
const resultNode = document.querySelector('.result');
const errorNode = document.querySelector('.error__message');
btnNode.addEventListener('click', () => {
  const inputValue = document.querySelector('input').value;
  if(inputValue < 1 || inputValue > 10) {
    errorNode.innerHTML = 'Число вне диапазона от 1 до 10!';
  } else {
    errorNode.innerHTML = '';
    const url = `https://picsum.photos/v2/list?limit=${inputValue}`
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send()
    const result = JSON.parse(xhr.response);
    displayResult(result);
  }
})

function displayResult(result) {
  let cards = '';
  result.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  resultNode.innerHTML = cards;
}