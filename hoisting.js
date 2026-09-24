//tdz start
let name1='vivek'
//tdz end here

//closures
function outer(){
    let counter=0;
    function inner(){
        counter++;
        console.log(counter);
    }
    return inner;
}
let i=outer();
i();
i();
i();
i();


//higher order function
function calculate(a,b,operation){
    return operation(a,b);
}
function add(x,y){
    return x+y;
}
function mul(p,q){
    return p*q;
}
console.log(calculate(10,20,add));
console.log(calculate(4,6,mul));

//method calls
const person={
    name:"Vivek",
    age:21,
    greet:function(){
        return this.name;
    }
};
let p1=person.greet.bind(person);
console.log(p1());

const Person={
    name:"Amit",
    greet(){
        console.log(this.name);
    }
};
setTimeout(Person.greet.bind(Person), 1000);

function multiply(a,b){
    return a*b;

}
const double=multiply.bind(null,2);
console.log(double(5));

//constructor call
function PERSON(name){
    this.name=name;

}
PERSON.prototype.getName=function(){
    return this.name;
}
let P1=new PERSON("Aman");
console.log(P1.name);
console.log(P1.getName());

