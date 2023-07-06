const newYear = document.querySelector('.date');
console.log(newYear);
let date = new Date();
let date_year = date.getFullYear();
console.log(date_year);

newYear.innerText = date_year;

// new는 : 생성자함수이다!!!-->중요
// newYear.innerHTML =`<span>${date_year}</span>`;

// 이너html과 이너텍스트의 차이
// -> 이너html은 의도하는 대로의 태그, 정보의 삽입이고,
// -> 이너텍스트는 스크립트의 로직이다!!
// -> 개발자환경에서 씀~


// const footer = document.querySelector('footer');
// footer.innerHTML = `
// <div class="box">
// <p>Hello Site!!</p>
// </div>`
// ;


