 const btnGetData = document.querySelector('button');
 const errorNodeCommon = document.querySelector('.common__error');
 const errorNodeForPageNumber = document.querySelector('.error__message__page__number');
 const errorNodeForLimit = document.querySelector('.error__message__limit');
 const resultNode = document.querySelector('.result');
 btnGetData.addEventListener('click', () => {
   const inputPageNumber = document.querySelector('.form__page__number').value;
   const inputLimit = document.querySelector('.form__limit').value;
   const pageNumber = checkValue(inputPageNumber);
   const limit = checkValue(inputLimit);
   if (!pageNumber && !limit) {
     errorNodeCommon.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
     errorNodeForPageNumber.innerHTML = '';
     errorNodeForLimit.innerHTML = '';
   } else if (!pageNumber) {
     errorNodeForPageNumber.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
     errorNodeCommon.innerHTML = '';
     errorNodeForLimit.innerHTML = '';
   } else if (!limit) {
        errorNodeCommon.innerHTML = '';
        errorNodeForPageNumber.innerHTML = '';
        errorNodeForLimit.innerHTML = 'Лимит вне диапазона от 1 до 10';
   } else {
        errorNodeForPageNumber.innerHTML = '';
        errorNodeForLimit.innerHTML = '';
        errorNodeCommon.innerHTML = '';
        fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
            .then((response) => {return response.json()})
            .then((json_obj) => {displayResult(json_obj)})
        }
   });
 function checkValue(value) {
   const convertNumber = Number(value);
   if (convertNumber < 11 &&
      convertNumber >0){
     return convertNumber;
   } else {
     return false;
   }
 }

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



