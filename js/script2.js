// function sum(num1, num2){
//     let result = num1 + num2;
//     console.log("sum = " + result);
// }
// let n1 = 10;
// let n2 = 20;
// sum(n1, n2);


// let //대부분의 변수
// const //상수형(바뀔일이 없는 경우)

function gugudan3(dan){
    for(let i=1; i<=9; i++){
        console.log(`3 * ${i} = ${dan * i}`);
    }
};
gugudan3(3);

const funcGugudan4 = function gugudan4(dan){
    for(let i=1; i<=9; i++){
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
};
funcGugudan4(4);

const funcGugudan5 = function(dan){
    for(let i=1; i<=9; i++){
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
};
funcGugudan5(5);

const funcGugudan6 = (dan)=>{
    for(let i=1; i<=9; i++){
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
};
funcGugudan6(6);

