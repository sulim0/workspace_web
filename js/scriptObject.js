const names = ['김동하', '빙예은', '정혜연'];
        //index  0        1        2
// names[0]
// names[1]
// names[2]

const student = {
    name:"홍준표",
    phone:"01012345678",
    id:2023
}

const person = {
    name:{
        firstName:"Gildong",
        lastName:"Hong"
    },
    likes:["apple", "samsung"],
    printHello:function(){
        return "hello";
    }
};
console.log(person.name['firstName']);
console.log(person.name['lastName']);
console.log(person["likes"][1]);
console.log(person.name.firstName);
console.log(person.name.lastName);


