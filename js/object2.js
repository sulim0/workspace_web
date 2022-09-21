let arr = [10, 20, 30];

arr.push(50);
//arr.unshift(5);
console.log(arr);
arr.splice(3, 0, 40);//중간에 요소 추가하기
console.log(arr);

let arrEx = [10, 40, 60, 70];
let num1 = 30;
let num2 = 50;
arrEx.splice(1, 0, num1);
arrEx.splice(3, 0, num2);
console.log(arrEx);

// let strArr = ['back', 'car', 'apple'];
// console.log(strArr);
// strArr.sort();//내림차순배열정리
// console.log(strArr);
// strArr.reverse();//오름차순 배열정리
// console.log(strArr);

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//동적으로 값 넣고 빼기
// console.log(arr);
// arr.push(40); //배열 마지막에 요소 추가
// console.log(arr);
// arr.push(50);
// console.log(arr);
// arr.pop();//배열 마지막에 요소 삭제
// console.log(arr);

// arr.unshift(9);
// console.log(arr);//배열 앞부분에 요소 추가
// arr.unshift(8);
// arr.unshift(7);
// console.log(arr);
// arr.shift();//배열 앞부분에 요소 삭제
// console.log(arr);

