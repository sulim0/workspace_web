const personInfo = {
    name:"홍길동",
    age:25,
    phone:"010-1234-5678",
    engName:"John Smith",
    nickname:" 복습마왕 "
}

console.log('변경 전');
console.log(personInfo);

personInfo.engName = personInfo["engName"].toUpperCase();
personInfo.nickname = personInfo["nickname"].trim();
personInfo.phone = {
    phone1:personInfo.phone.split("-")[0],
    phone2:personInfo.phone.split("-")[1],
    phone3:personInfo.phone.split("-")[2]
}


console.log('변경 후');
console.log(personInfo);