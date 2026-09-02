//strings
//template literal

let name='Hello';
console.log(`${name}, "what's up there"`);
console.log(name + "what's up there");

const res=function(a,b){
    return a+b;
}
console.log(res());
console.log(one(2));
function one(n){
    return (n+1);
}

const two =function(n){
    return (n+2);
}
setTimeout(function() {
    console.log("Hello ABES ");
}, 3000);

//IIFE
(function one() {
    console.log('Hello'); //name IIFE

})();

(function () {
    console.log('Database'); //normal IIFE
})();

const person={
    name:'vivek',
    age:'20',
    greet:function(){
        console.log(this);
    }
};
person.greet();
person.name='Aman';
person.age=25;
person.greet();
function show(){
    console.log(this);
}
show();
