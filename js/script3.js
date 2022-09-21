let arr1 = [10, '20', 30];
let arr2 = [10, '20', 30];
let arr3 = [10, 20, 30];
let arr4 = ['10', '20', '30'];

const compareArr = (arr1, arr2) => {
    for(let i=0; i<arr1.length; i++){
        console.log( arr1[i] == arr2[i]);//true
        console.log( arr1[i] === arr2[i]);//true
        console.log( arr1[i] + '==' + arr2[i]);//true
    }
}

console.log('비교 1');
compareArr(arr1, arr2);
console.log('비교 2');
compareArr(arr3, arr4);
console.log('비교 3');
compareArr(arr2, arr4);

