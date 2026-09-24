
let num=[16,8,9,2,7];
for(let i=0;i<num.size();i++){
    num[i]=num[i]*num[i];
    console.log(num[i]);
}
//using map
let numbers=[1,2,3,4,5];
let square =numbers.map(function(number){
    return number*number;
});
console.log(square);
//using arrow function
let nums=[1,2,3,4,5];
let sqr =numbers.map(number=>number*number);
console.log(sqr);

//this keyword
const person={
    name:"Vivek",
    age:21,
    greet:function(){
        console.log(this);
    }
};
person.greet();
person.name="Yuvaan";
person.age=5;
person.greet();