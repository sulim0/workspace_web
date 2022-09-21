let num = 1;
while(true){
    console.log(num);
    if(num>5){
        break;
    }
    num++;
}



//7
// let obj = {name: "철수", age: "20", phone: "01012345678"};

// for(const item in obj){
//     console.log(obj[item]);
// }

// let arr = ["banana", "apple", "orange"];
// let arr2 = [10, 20, 30, 40, 50];

// for(const item of arr)//특정 범위는 지정하지 않았지만 알아서 그 갯수만큼 돌아가면서 반복됨
// for(const item in arr)//
// for(const item in arr)
//     console.log(arr);

// for(const item in arr){
//     console.log(arr);
//}

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for(let i=0; i<arr2.length; i++){
//     console.log(arr2[i])
// }




// for(let num = 20; num >= 0; num--){
//     if(num % 2 == 1){
//         console.log(num)
//     }
// }

//5
// let num = 10;
// //양수 음수 0
// if(num > 0){
//     console.log('양수');
// }else if(num < 0){
//     console.log('음수');
// } else {
//     console.log('0')
// };

// //짝수 홀수
// if(num % 2 === 0){
//     console.log('짝수');
// } else {
//     console.log('홀수');
// }



//3
// let num = -10;
// num = -num;
// console.log(num);

// let incre = 10;
// console.log(incre++);
// console.log(++incre);
// console.log(incre--);
// console.log(--incre);



//4
// let nNum = 10; //숫자형
// let strNum = '10'; //문자형
// if(nNum === strNum){ 
//     console.log('같습니다.');
// } else{
//     console.log('다릅니다.');
// }

// let score = 90;
// let grade = score >= 90 ? 'A' : 'B';
// console.log(grade);

// let sum = 10 + 10;
// console.log(sum);

// let sum2 = 10 + "10"; //암시적
// console.log(sum2);

// let sum3 = 10 + Number("10"); //명시적(형변환)
// console.log(sum3);

// let sum4 = 10 + String(10);
// console.log(sum4);

//2
// let bool1 = true;
// let bool2 = false;
// let bool3 = 10 > 5;

// console.log(bool1);
// console.log(bool2);
// console.log(bool3);

// let empty1 = null;
// let empty2;

// console.log(empty1);
// console.log(empty2);

// let arrScores = [10, 20, 50, 80];
// console.log( arrScores[0] );
// console.log( arrScores[1] );
// console.log( arrScores[2] );
// console.log( arrScores[3] );

// let studentScore = {
//     koreanScore:80,
//     englishScore:70,
//     mathScore:90,
//     sicenceScore:60
// };

// console.log(studentScore.englishScore);
// console.log(studentScore.koreanScore);
// console.log(studentScore['sicenceScore']); 



//1
// var a = 10;//old

// let b = 20;//new
// const c = 30;//new

// console.log(a);
// console.log(b);
// console.log(c);
// let num = 10;
// let str1 = "큰따움표'작은따옴표' 문자열";
// let str2 = '작은따옴표"큰따옴표" 문자열';
// let str3 = `백틱 "큰따옴표" '작은따옴표' 문자열`;
// let str4 = num+ "더하기" + num + "은" + (num+num)+"이다";
// let str5 = `${num} 더하기 ${num} 은 ${num+num} 이다`;

// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);
// console.log(str5);

// let num1 = 10;
// let num2 = 0.5;
// console.log(num1);
// console.log(num2);

// console.log('codeRunner test');