 const btnGetData = document.querySelector('button');
 const errorNodeForWidth = document.querySelector('.error__message__width');
 const errorNodeForHigh = document.querySelector('.error__message__high');
 const resultNode = document.querySelector('.result');
 btnGetData.addEventListener('click', () => {
   const inputWidth = document.querySelector('.form__input__width').value;
   const inputHigh = document.querySelector('.form__high__high').value;
   const width = checkValue(inputWidth);
   const high = checkValue(inputHigh);
   if (!width) {
     errorNodeForWidth.innerHTML = 'Oдно из чисел вне диапазона от 100 до 300';
   } else if (!high) {
        errorNodeForWidth.innerHTML = '';
        errorNodeForHigh.innerHTML = 'Oдно из чисел вне диапазона от 100 до 300';
   } else {
        errorNodeForWidth.innerHTML = '';
        errorNodeForHigh.innerHTML = '';
        fetch(`https://picsum.photos/${width}/${high}`)
            .then((response) => {return response.blob()})
            .then((blob) => {
                const objectURL  = URL.createObjectURL(blob);
                return objectURL })
            .then((objectURL) => {displayResult(objectURL)})
        }
   });
 function checkValue(value) {
   const convertNumber = Number(value);
   if (convertNumber < 301 &&
      convertNumber >99){
     return convertNumber;
   } else {
     return false;
   }
 }

function displayResult(url) {
  let card = `
      <div class="card">
        <img
          src="${url}"
          class="card-image"
        />
      </div>
    `;
  resultNode.innerHTML = card;
}



