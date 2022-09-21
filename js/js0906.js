
// let arr1 = ['num1', 'num2'];
// // console.log(arr1);

// let arr2 = arr1;
// let arr3 = [...arr1];

// // console.log(arr1 === arr2);
// // console.log(arr1 === arr3);

// let numArr1 = [1,2,3];
// let numArr2 = [4,5,6];

// let numArr3 = [...numArr1, ...numArr2];

// console.log(numArr3);

// // let num1 = numArr1[0];
// // let num2 = numArr1[1];
// // let num3 = numArr1[2];
// let [num1, num2, , ,num3] = numArr3;//배열은 

// console.log(num1, num2, num3 );

// let person1 = {
//     name: '이름1',
//     age: 30,
//     phone: '번호1'
// };
// let person2 = {
//     name: '이름2',
//     age: 32,
//     phone: '번호2'
// };
// // let person3 = [{}].push(person1, person2);
// console.log(person3);

// console.log(person);
// // let name = person.name;
// // let age = person.age;
// // let phone = person.phone;
// let {name, age, phone} = person;
// console.log(name, age, phone);//키값과 동일해야 받아올수있다


let arr = [1, 2, 3, 4, 5];

//반복하는 용도
arr.forEach( (data, i) => {
    console.log(data + 'i: ' + i) ;
})

//반복 + 배열을 조작. (값을 조정 return하여 재구성)
let arr2 = arr.map( (data, i) => {
    return data*2;
    // console.log(data + 'i: ' + i);
})
console.log(arr2);
