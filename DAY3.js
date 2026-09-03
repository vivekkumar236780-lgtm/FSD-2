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

//functions
function display(a,b){
    return a+b;
}
console.log(display(10,20));
console.log(display());
console.log(display(10,'a'));
console.log(display(10,null));

function loggedInUser(user){
    // if(user===undefined)
    //     {
    //     console.log("please provide arguments");
    // }
    // return '${user} loggedIn';

      return user === undefined
        ? "please provide arguments" 
        : `${user} loggedIn`;
}
console.log(loggedInUser());
console.log(loggedInUser("Vivek"));


function dis(x=test()){
   return(x);
}
function test(){
    return (new Date().toLocaleDateString('en-US'));
}
console.log(dis());