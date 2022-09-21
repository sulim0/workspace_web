// 비동기
// call back
// function fun1(num, callbackFunc){
//     let val=num * 2;

//     setTimeout(()=>{
//         val = num * 10;
        
//         let isError = true;
//         callbackFunc(isError, val);
//     }, 1000);

//     return val;
// }
// console.log(1);
// console.log(fun1(2, 
//     (isError, val)=>{
//         if(isError==true){
//             console.log('오류가 났습니다.')
//         }else{
//             fun2(3, (isError, val)=>{
//                 if(isError==true){

//                 }else{
//                     fun3(4, (isError, val)=>{
//                         if(isError==true){

//                         }else{

//                         }
//                     })
//                 }
//             })
//             console.log('전달한 콜백함수 수행' + val)
//         } 
//     }));
// console.log(3);

//콜백함수 나중에 너할거하고 수행할 때 이거를 수행해달라 함수를 전달

//Preomise 방식
//비동기로 돌다가 수행이 끝나서 성공하면 다음거 수행
// const pro1 = new Promise( (resolve, reject)=>{
//     // resolve('promise 성공'); //성공
//     reject(); //실패
// });
// pro1.then(
//     //resolve 성공하면 수핼할 부분
//     (value) => {
//         console.log('성공'+ value);
//     }
// )
// .catch(
//     //reject 실패하면 수행할 부분
//     (value) => {
//         console.log('실패'+ value);
//     }    
// )
// .finally(
//     //무조건
//     () => {
//         console.log('finally');
//     }
// )

//async await
async function func2(){
    let result = 0;

    await setTimeout(()=>{
        result = 2;
    }, 1000);

    // await new Promise( (resolve, reject)=>{
    //     return resolve(2); //성공
    //     // reject(); //실패
    // }).then(
    //     ()=>{result = 2;}
    // );
    return result;
}

function testFunc(){
    console.log(1);
    console.log(func2());
    // pro2.then((value)=>{console.log(value);})
    console.log(3);
}

testFunc();

//예외처리
// try{
//     //혹시나 오류가 날지 모르는 부분
// } catch{
//     //캐치안으로 오류가 났을때 대처 방안
// } finally{
//     //무조건 수행 마지막으로 수행
// }
//다음

