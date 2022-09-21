const date1 = new Date('2022-08-31');
const date2 = new Date('2022-09-19');

const dateDiff = date2.getTime() - date1.getTime();//1000 = 1초
const interval = dateDiff / (24 * 60 * 60 * 1000);//일
// const interval = dateDiff / (60 * 60 * 1000);//시
// const interval = dateDiff / (60 * 1000);//분
console.log(interval);



// const date = new Date();
// console.log(date);

// const date1 = new Date(2022, 11, 31);
// console.log(date1);

// const date2 = new Date(2022, 7, 31, 10, 40, 38);//세계협정시간
// console.log(date2);

// console.log(date1.toLocaleDateString());//우리나라기준 날짜
// console.log(date1.toLocaleTimeString());//우리나라기준 시간

// const date3 = new Date('2022-08-31');
// console.log(date3);
// const date4 = new Date('2022-08-31 10:49:15');//세계협정시간
// console.log(date4);

// console.log(date4.getFullYear());
// console.log(date4.getMinutes());
// console.log(date4.getDate());  // 일은 date
// console.log(date4.getDay()); //요일 0부터 일요일
// const random = Math.floor(Math.random() * 6) + 1;//주사위 1~6

// console.log(Math.floor(5.6));  //버림
// console.log(Math.ceil(5.2));   //올림
// console.log(Math.round(5.6));  // 반올림
// console.log(Math.round(5.2));  

