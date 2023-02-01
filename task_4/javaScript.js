// const btnGetData = document.querySelector('button');
// btnGetData.addEventListener('click', () => {
//   const inputWidth = document.querySelector('.input__width').value;
//   const inputHigh = document.querySelector('.input__high').value;
//   const width = checkValue(inputWidth);
//   const high = checkValue(inputHigh);
//   if (width && high){
//     fetch(`https://picsum.photos/${width}/${high}`)
//       .then((response) => { console.log(response.json()); })
//   } else {
//     console.log('Oдно из чисел вне диапазона от 100 до 300')
//   };
// });
// function checkValue(value) {
//   const convertNumber = Number(value);
//   if (convertNumber < 301 &&
//      convertNumber >99){
//     return convertNumber;
//   } else {
//     return false;
//   }
// }

fetch('https://picsum.photos/200/300')
      .then((response) => { return response.json(); })
      .then((data) => { console.log(data); })
      .catch((error) => { console.log(error.message); })
